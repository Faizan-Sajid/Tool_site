---
name: crawl-budget-404-root-cause-tracer
description: Trace specific 404 error paths reported in Google Search Console to their exact source code origin. Covers missing static assets in schema JSON-LD, broken blog OG image frontmatter, orphaned markdown links, unhandled route gaps, and template-literal href bugs. Produces a file-by-file, line-by-line audit with crawl-impact severity.
source: auto-skill
extracted_at: '2026-06-23T07:27:04.086Z'
updated_at: '2026-06-23T07:45:29.111Z'
---

# Crawl Budget 404 Root Cause Tracer

Use this skill when Google Search Console shows **specific 404 error paths** (e.g., `/logo.png`, `/images/blog/xyz.png`, `/blog/dead-slug`, `/&`, `/tools`) and you need to trace each to its exact code origin across a Next.js App Router codebase. This is not a general SEO audit — it is surgical path tracing to fix crawl budget leakage.

## Procedure

### Step 1 — Categorize the 404 Path

Classify each reported path into one of these buckets:

| Bucket | Examples | Primary Search Target |
|---|---|---|
| **Static asset** | `/logo.png`, `/images/blog/*.png` | JSON-LD `logo.url`, frontmatter `ogImage`, `<Image>` src props, `<link rel="icon">` |
| **Blog/Content slug** | `/blog/hajj-cost-from-pakistan-2026` | Markdown internal links, frontmatter `relatedTool`, markdown body `[text](url)`, blog listing components |
| **Unhandled route** | `/tools`, `/finance`, `/hr` | `<Link href="...">` in sidebar, navbar, footer, category pages |
| **Syntax bug** | `/&`, `/$` | Template literal href strings ``href={`...&`}``, unescaped characters in map loops, concatenation errors in dynamic routes |
| **Legacy redirect** | Any known old URL | `next.config.ts` redirects array, middleware redirects, proxy.ts |

### Step 2 — Multi-Pattern Grep Sequence

Run these searches in order. Each targets a specific failure mode.

**Search 1 — Static asset in schema:**
```
grep -r "/logo.png" --include="*.{tsx,ts}" .
grep -r "opengraph-image.png" --include="*.{tsx,ts,md}" .
grep -r "og-image.png" --include="*.{tsx,ts,md}" .
```
Then verify existence: `ls -la public/logo.png`

**Search 2 — Blog OG images in frontmatter:**
```
grep -r "ogImage:" --include="*.md" content/
```
For each result, extract the path (e.g., `/images/blog/xyz.png`) and verify: `ls -la public/images/blog/`

**Search 3 — Orphaned blog slugs:**
```
grep -rn "/blog/<slug>" --include="*.{md,tsx,ts}" .
```
Also check `lib/blog-slugs.json` (or equivalent slug registry) to confirm the slug is registered. If a proxy/middleware does slug validation (e.g., returns 410), note that — it means the 404 is intentional.

**Search 4 — Standalone unhandled route references:**
```
grep -rnE 'href="\/tools"|href="\/finance"|href="\/hr"' --include="*.{tsx,ts}" .
```
Check if these are used as query-parameter based links (e.g., `/?category=hr`) versus hard page paths. Query-parameter links are safe — they resolve to the homepage. Standalone path links like `/hr` will 404 if no `app/hr/page.tsx` exists.

**Search 5 — Template literal & href syntax bugs:**
```
grep -rnE 'href=`[^`]*[&$][^`]*`' --include="*.{tsx,ts}" .
grep -rnE 'href="[^"]*[&$][^"]*"' --include="*.{tsx,ts}" .
```
Look for ampersand or dollar sign inside href template literals that might produce `/&` or `/$` in the rendered HTML.

### Step 3 — Verify File System Existence

For every referenced path found in Step 2, verify the file exists:

| Path Type | Verification Command |
|---|---|
| Static asset (public/) | `ls -la public/<path>` |
| Blog content | `ls content/blog/<slug>.md` |
| Route handler | `ls app/<path>/page.tsx` |
| Dynamic route | `ls app/<path>/[param]/page.tsx` |

### Step 4 — Trace the Full Render Chain

For each confirmed missing file, trace the complete chain from URL to code:

1. **For schema JSON-LD:** Read the file → find the exact line with the path → identify whether it's a hardcoded string or a template literal → trace if it's reusable across pages (layout.tsx) or page-specific
2. **For blog frontmatter:** Read the `.md` file → note the exact `ogImage:` line → check `app/blog/[slug]/page.tsx` for how `post.ogImage` is used (e.g., `\`https://...${post.ogImage}\``) → determine if an ImageResponse alternative exists
3. **For markdown body links:** Read the `.md` file → find the `[text](url)` markdown → determine if the slug was removed, renamed, or never created
4. **For sidebar/nav links:** Read the component → trace the href source (hardcoded array, map from TOOLS constant, dynamic from state)

### Step 5 — Classify Each Finding

| Class | Description | Action |
|---|---|---|
| **Missing asset (schema)** | JSON-LD references a static file that doesn't exist in public/ | Add the file OR remove the `logo`/`image` reference from schema |
| **Missing asset (frontmatter)** | Blog markdown `ogImage` points to nonexistent file | Add the PNG OR switch to dynamic OG generation for blog posts |
| **Orphaned internal link** | Markdown body or component links to a slug with no content file | Create the content, remove the link, or update the slug registry |
| **Unhandled route (no internal link)** | No `<Link>` found, but path is unhandled | Add redirect in next.config.ts or create a minimal page.tsx if backlinks exist |
| **Template literal bug** | Broken `href` with `&` or `$` | Fix the template literal escaping or concatenation |
| **Safe construct** | Pattern like `/?category=x` that uses query params — safe | No action needed |

### Step 6 — Output Format

Return a table summarizing every defect:

| # | Path | Severity | File:Line | Root Cause | Crawl Impact | Action |
|---|---|---|---|---|---|---|
| 1 | `/logo.png` | HIGH | `layout.tsx:162` | Schema `logo.url` hardcoded; no `public/logo.png` | ~3 extra fetches per page per crawl | Add file or remove from schema |

Also note any **investigated-but-clean** items (e.g., "`/&` not found in any href — safe") so the developer knows they were checked.

### Step 7 — Dynamic Route & Special File Convention Diagnosis (Next.js)

When the 404 path is a **non-standard route** like an `opengraph-image` or `sitemap` or dynamic API handler, standard file existence checks are insufficient. Run this additional sequence:

**7a — Confirm route registration in build output:**
```
npx next build 2>&1 | grep -E "Route \(app\)" -A 999
```
Look for the target path in the output. Route markers:
- `○` (Static) — prerendered at build time
- `●` (SSG) — prerendered via `generateStaticParams`
- `ƒ` (Dynamic) — server-rendered on demand (expected for OG image routes)
- `λ` (Lambda) — serverless function (alternative for API routes)

If the route does NOT appear in the build output, the route file is either misnamed, placed in the wrong directory, or has a compile error.

**7b — Check for competing route files at same URL depth:**
```
ls app/**/<target-parent>/**/opengraph-image* 2>/dev/null
```
Search for individual specific files (e.g., `app/tools/uae-gratuity-calculator/opengraph-image.tsx`) that might conflict with or shadow the dynamic version (`app/tools/[toolId]/opengraph-image.tsx`). In Next.js App Router, **specific routes take priority over dynamic routes** — if a specific file exists alongside a `[param]` version, the specific one wins and the dynamic one is never reached.

**7c — Verify `ImageResponse` / `next/og` runtime configuration:**
```bash
grep "runtime" app/tools/\[toolId\]/opengraph-image.tsx
```
Check if `export const runtime = 'edge'` is present. While Next.js 16+ automatically handles this for `opengraph-image.tsx` conventions, older versions or custom setups may require explicit configuration. If missing and the route returns 500 (not 404), this may be the cause.

**7d — Confirm TOOLS/registry lookup for dynamic tool routes:**
When a dynamic tool OG image (e.g., `/tools/uae-gratuity-calculator/opengraph-image`) returns 404:
1. Read `app/tools/[toolId]/opengraph-image.tsx` — check `params.toolId` resolution
2. Read the TOOLS/registry file — verify the tool `id` matches exactly
3. Check for trailing whitespace, hyphens vs underscores, or case mismatches in the tool `id`
4. Verify both `openGraph.images.url` and `twitter.images.url` in the page's `metadata` export match the actual route path (common cause: a relative URL that resolves differently than expected)

**7e — Check metadata-to-route URL alignment:**
Read the tool page's `export const metadata: Metadata` block and verify:
```
openGraph.images[0].url  === "https://<domain>/tools/<toolId>/opengraph-image"
twitter.images[0].url    === "https://<domain>/tools/<toolId>/opengraph-image"
```
If `metadataBase` in `app/layout.tsx` differs from the domain in these URLs, they may resolve to an unexpected absolute URL. Also check `alternates.canonical` doesn't point to a different subdomain or protocol.

**7f — Test the route at runtime:**
```bash
curl -sI https://<your-domain>/tools/<toolId>/opengraph-image | head -20
```
Expected: `HTTP/2 200` + `content-type: image/png`. If `404`: the route function is not deployed (Vercel serverless function missing or failed to deploy). If `500`: a runtime error within the ImageResponse (e.g., Satori rendering failure, font not found, invalid JSX style property). If `200` but the image doesn't render correctly in browsers: check the `alt` export and response `content-type`.

## Limitations

- This skill traces from code, not from server logs. It cannot detect 404s caused by runtime errors, misconfigured CDN rules, or server-side redirect chains.
- It cannot detect 404s caused by dynamic route mismatches where `params` resolve to an empty/undefined slug at runtime.
- For **Next.js `opengraph-image.tsx` routes** specifically: the skill can verify route registration and code correctness, but cannot detect **Vercel edge cache staleness** (a previous deployment's 404 cached at the CDN level, served to Googlebot even after a fix). If code is correct and build succeeds, always test the live URL directly with `curl -I` before assuming the issue is resolved.
- After fixes, recommend re-submitting affected URLs via GSC URL Inspection and monitoring the Crawl Stats > Not Found report for 2 weeks.
