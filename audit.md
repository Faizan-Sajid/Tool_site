# Blog System Audit — June 16, 2026

**Project:** QuickCalcs (F:\tools_site\gulftools)  
**Status:** Issues to fix before going live  
**Auditor:** Qwen Code



## AREA 1: Markdown Parsing

**Status:** ⚠️ Minor Issue

**Finding:** `lib/blog.ts` correctly parses all frontmatter fields via `gray-matter`. Missing optional fields (`relatedTool`, `hasFAQ`, `lastModified`, `author`, `authorTitle`, `authorLinkedIn`, `metaDescription`, `canonicalUrl`, `ogImage`, `tags`, `primaryKeyword`) all use `as string | undefined` or safe coercion — no crashes when absent. `getAllPosts()` sorts newest-first by date. `getPostBySlug()` returns `null` cleanly for non-existent slugs.

Minor issues:
- `primaryKeyword` and `tags` are parsed from frontmatter and returned in `BlogFrontmatter` / `BlogPost` but **never used** in rendering, metadata, or schema. Dead fields — no harm, no benefit.
- No `excerpt` field in the codebase. The field is called `description` (same purpose, different name). Not a bug.

**Action needed:** None critical. Consider removing unused `primaryKeyword` and `tags` from the interface for clarity, or wire them into schema/metadata if desired.



## AREA 2: Schema (JSON-LD)

**Status:** ❌ Critical Issue

**Finding:**
- **Article schema** injects correctly on every post with real frontmatter values. ✅
- **BreadcrumbList schema** injects correctly on every post. ✅
- **FAQPage schema** is guarded by `{post.hasFAQ === true && (...)}` — correct conditional injection. ✅
- **CRITICAL: The FAQPage `mainEntity` array is HARDCODED with Hajj-specific Q&A** (5 questions about Hajj cost from Pakistan). If any other post sets `hasFAQ: true` in its frontmatter, the page will render Hajj-specific FAQ structured data — completely wrong content. This is invalid/misleading structured data and could trigger Google manual action.
- No hardcoded slug checks anywhere in the schemas. ✅
- `JSON.stringify` safely omits `undefined` fields (e.g., `author: undefined` when no author is set). No empty strings are injected. ✅

**Action needed:** Replace the hardcoded FAQPage JSON-LD with a dynamic implementation. Options:
  a) Parse FAQ sections from markdown content and auto-generate Q&A pairs.
  b) Add a `faq` frontmatter array field that authors populate per-post.
  c) Set the Hajj FAQs as a conditional per-slug override as temporary bridge, then implement (a) or (b).



## AREA 3: HTTP Status Codes & Proxy

**Status:** ⚠️ Minor Issue

**Finding:**
- `proxy.ts` correctly returns **410 Gone** for non-existent blog slugs. ✅
- `proxy.ts` reads from `lib/blog-slugs.json` correctly. ✅
- `proxy.ts` passes through (`NextResponse.next()`) for existing slugs. ✅
- `proxy.ts` ignores non-blog routes via regex guard. ✅
- **Blog index page (`/blog`)** returns **200**. The matcher `['/blog/:slug*']` does catch `/blog`, but the internal regex `/^\/blog\/([^/]+)$/` doesn't match it, so it falls through to `NextResponse.next()` ⇒ 200. ✅
- **notFound() vs proxy 410 conflict:** The middleware (proxy.ts) runs **before** the page component. For non-existent slugs, proxy returns 410 **before** the page's `notFound()` can trigger. This means the `notFound()` in `page.tsx` is effectively unreachable for blog post pages — the 410 always wins. This is correct behavior but means the 404 styling in `not-found.tsx` will never be seen for blog posts.
- **Edge case — stale slugs.json:** If `blog-slugs.json` includes a slug whose `.md` file was deleted (sync error), the proxy returns `NextResponse.next()` (pass-through) but the page component fires `notFound()` → **404**. This creates a scenario where the proxy signals "continue" but the page returns 404. Inversely inconsistent.

**Action needed:** None critical. Document that 410 handles deleted posts before page rendering. The stale-slug edge case is covered by the build hook (see Area 4).



## AREA 4: Slug Generator & Build Hook

**Status:** ⚠️ Minor Issue

**Finding:**
- `scripts/generate-blog-slugs.mjs` correctly reads all `.md` files from `content/blog/`, parses frontmatter, extracts slugs, and writes to `lib/blog-slugs.json`. ✅
- `package.json` build hook: `"build": "node scripts/generate-blog-slugs.mjs && next build"` — runs slug generator before every build. ✅
- If a new `.md` file is added → `generate-blog-slugs.mjs` picks it up → slugs.json updated → `next build` uses correct slugs. ✅
- If a `.md` file is deleted → `generate-blog-slugs.mjs` omits it → slugs.json updated → slug disappears from proxy, sitemap, and static params. ✅
- **Dev mode risk:** `npm run dev` does **not** run the slug generator (`"dev": "next dev"`). If `.md` files are added/deleted during development, `blog-slugs.json` becomes stale until the dev server restarts. The proxy middleware may return incorrect 410s for valid new slugs.
- **Production risk:** None — `vercel build` and `npm run build` both invoke the generator first. slugs.json is always fresh in production builds.

**Action needed:** Consider adding `node scripts/generate-blog-slugs.mjs` as a pre-dev step or running it on dev startup. Alternatively, document the need to restart the dev server after adding/deleting `.md` files.



## AREA 5: SEO & Metadata

**Status:** ✅ Perfect

**Finding:**
- `generateMetadata()` correctly reads `metaDescription`, `canonicalUrl`, `ogImage`, `lastModified` from post frontmatter.
- Fallbacks in place for all optional fields:
  - `metaDescription`: `post.metaDescription || post.description` ✅
  - `canonicalUrl`: `post.canonicalUrl || 'https://www.quickcalcs.app/blog/${slug}'` ✅
  - `ogImage`: only set when present ✅
  - `lastModified`: `post.lastModified || post.date` ✅
- Canonical URL is set via `alternates: { canonical }` for every post. ✅
- OpenGraph complete: title, description, url, siteName, type (article), publishedTime, modifiedTime, images. ✅
- Twitter card complete: summary_large_image with title, description, images. ✅
- No post found case returns `{ title: "Guide Not Found" }` — graceful fallback. ✅

**Action needed:** None.



## AREA 6: Sitemap

**Status:** ✅ Perfect

**Finding:**
- `app/sitemap.ts` includes all blog posts via `getAllPosts()` — fully dynamic. ✅
- `lastModified` uses `post.lastModified || post.date` correctly. ✅
- If a post is deleted → `getAllPosts()` omits it → automatically excluded on next build. ✅
- Priority and changeFrequency:
  - Homepage: priority 1.0, daily ✅
  - Blog index: priority 0.6, daily ✅
  - Blog posts: priority 0.8, monthly ✅
  - Tool pages: priority 0.9, daily ✅
  - Static pages: priority 0.3–0.4, monthly ✅
- All values are reasonable and appropriate. ✅

**Action needed:** None.



## AREA 7: Blog Listing & Related Content

**Status:** ✅ Perfect

**Finding:**
- `app/blog/page.tsx` uses `getAllPosts()` — automatically shows new posts (when `.md` added) and removes deleted posts. ✅
- **No hardcoded post list anywhere.** The featured post is simply the first item from the sorted `getAllPosts()` result. ✅
- `BlogCategoryFilter` builds categories dynamically from actual posts — no hardcoded categories in the filter. ✅
- Related posts logic (`getRelatedPosts()`): correctly filters by same category and excludes the current post. ✅
- `relatedTool` CTA renders when `post.relatedTool` exists and is hidden when absent (guarded by IIFE conditional). ✅
- Empty states handled for zero posts and no-matching-category scenarios. ✅

**Action needed:** None.



## AREA 8: Overall Flow — New Post & Delete Post

**Findings:**

### Adding a new post — step by step:

1. **Author creates** `content/blog/new-post.md` with proper frontmatter (title, slug, date, category, etc.)
2. **Author runs** `npm run build` (or triggers Vercel deploy)
3. **Build hook** runs `node scripts/generate-blog-slugs.mjs`:
   - Reads all `.md` files from `content/blog/` (including new one)
   - Extracts `data.slug` from each
   - Writes updated `lib/blog-slugs.json` with new slug included
4. **`next build`** runs:
   - `getAllPosts()` returns all posts including new one → listing page shows it
   - `generateStaticParams()` returns all slugs including new one → static HTML prerendered
   - `app/sitemap.ts` includes new post URL
   - Middleware (`proxy.ts`) loads updated `blog-slugs.json` → new slug passes through
5. **Deploy** — everything is in sync.

**Manual steps required:** None. Creating the `.md` file is the only step.

### Deleting a post — step by step:

1. **Author deletes** `content/blog/old-post.md`
2. **Author runs** `npm run build` (or triggers Vercel deploy)
3. **Build hook** runs `node scripts/generate-blog-slugs.mjs`:
   - Reads remaining `.md` files — deleted post's slug not present
   - Writes updated `lib/blog-slugs.json` without old slug
4. **`next build`** runs:
   - `getAllPosts()` returns remaining posts — old post gone from listing, sitemap, and static params
   - `generateStaticParams()` excludes old slug → no static page generated
   - Middleware loads updated `blog-slugs.json` → old slug returns **410 Gone**
5. **Deploy** — everything is in sync.

**Manual steps required:** None. Deleting the `.md` file is the only step.

**Hardcoded risks:** None. Everything derives from the filesystem at build time via `getAllPosts()`, `generateStaticParams()`, and the slug generator.

**Dev mode caveat:** If adding/deleting during `npm run dev`, restart the dev server so the middleware picks up the new slugs.json.



---

## OVERALL STATUS: Fix these first

## ISSUES TO FIX BEFORE GOING LIVE:

### CRITICAL

1. **FAQPage JSON-LD is hardcoded with Hajj-specific Q&A** (`app/blog/[slug]/page.tsx`, lines ~107–157).
   - If any post besides the Hajj post sets `hasFAQ: true`, it renders wrong FAQ content.
   - **Fix:** Implement dynamic FAQ generation from markdown content or add a `faqItems` frontmatter array.

### MINOR (should fix before live)

2. **Dev mode doesn't run slug generator** (`package.json` — `"dev": "next dev"`).
   - Adding/deleting `.md` files during dev causes proxy to return incorrect 410s until restart.
   - **Fix:** Add `node scripts/generate-blog-slugs.mjs` to the `dev` script, or document the restart requirement.

3. **Unused frontmatter fields** (`primaryKeyword`, `tags`) are parsed but never used in rendering, metadata, or schema.
   - **Fix:** Either wire them into the page (e.g., keyword in meta keywords tag, tags in JSON-LD `keywords` field) or remove from the interface.

## FUTURE WORKFLOW — Adding a new post:

1. Create `content/blog/your-post-slug.md` with full frontmatter
2. Run `npm run build` (or deploy via CI)
3. Done — built-in sitemap, schema, metadata, listing, and 410/404 handling all pick it up automatically

## FUTURE WORKFLOW — Deleting a post:

1. Delete `content/blog/your-post-slug.md`
2. Run `npm run build` (or deploy via CI)
3. Done — old URL returns 410 Gone, removed from sitemap, removed from listing

---

*Audit completed June 16, 2026. No changes were made to the codebase.*
