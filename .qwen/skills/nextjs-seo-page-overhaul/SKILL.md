---
name: nextjs-seo-page-overhaul
description: Implement a careful SEO/GEO/AEO/content/schema overhaul for a Next.js App Router tool page. Covers 2026 requirements: AI crawler access, llms.txt generation, answer-first content blocks, FAQPage deprecation, E-E-A-T signals, entity clarity, and May/March 2026 core update recovery patterns.
source: auto-skill
updated_at: '2026-06-01T00:00:00.000Z'
---

# Next.js SEO Page Overhaul

Use this skill when the user asks you to implement SEO, content, metadata, schema, FAQ, internal-link, or sitemap fixes for a Next.js App Router tool/page and expects code changes, not just an audit.

## Procedure

1. **Read before editing**
   - Read the target route `page.tsx` completely.
   - Read route-specific calculator/client components, content components, FAQ components, metadata/schema definitions, and any related registry file such as `constants/tools.ts`.
   - If a read is truncated, continue from the next offset before claiming the file was fully read.
   - For homepage/internal-link work, read `app/page.tsx` first, then inspect imported sections that actually render cards or links, such as `FeaturedToolsSection` and tool registries.

2. **AI Crawlability Pre-Check**
   Before any content or schema edits:
   1. Open `app/robots.ts`. Verify AI crawler entries exist. If missing, add:
      ```typescript
      {
        userAgent: ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'anthropic-ai', 'Google-Extended', 'OAI-SearchBot', 'Applebot-Extended'],
        allow: '/',
      },
      ```
   2. Check if `llms.txt` exists (as a file or route handler). If not, note it for Step 13 (llms.txt Generation).
   3. Check the target page component — if primary content renders in a `"use client"` component via `useEffect` or `useSearchParams` without server-rendered fallback HTML, flag this to the developer. The fix (moving content to a server component) may be out of scope for the current task, but it must be documented.

3. **Preserve calculator behavior**
   - Treat calculation logic as higher risk than SEO text.
   - If the request says to fix comments only, change comments only and leave numeric constants/formulas untouched.
   - Check for contradictions between code comments, visible content, FAQs, metadata, and JSON-LD; fix inaccurate text even if the output calculation is correct.

4. **Update metadata precisely**
   - Apply exact user-provided title/description when explicitly requested, even if they exceed general SEO length guidelines; note the tradeoff if needed.
   - Keep OpenGraph/Twitter/canonical/robots consistent with the page's primary positioning.
   - Prefer a clean focused keywords list over bloated keyword stuffing.

5. **Add content and trust signals without removing existing value**
   - Add "Last updated" or methodology boxes near the top when working on financial/YMYL-ish tools.
   - Add official source/citation sections with outbound official links when claims depend on legal, tax, payroll, or regulatory rules.
   - Add semantic/LSI terms naturally in explanatory paragraphs, headings, examples, and FAQ answers rather than dumping terms.
   - For multilingual SEO, use `dir="rtl"` on Arabic text cells or spans, not on the whole English section.

6. **AEO Answer-First Content Pattern**
   When adding or rewriting explanatory content sections:
   1. **Answer-first structure:** Every H2 section must begin with a direct-answer paragraph (120–180 words) that answers the heading's implied question without requiring the reader to read further. Structure: `[Direct answer in 1–2 sentences] + [Supporting explanation] + [Source or evidence]`.
   2. **Above-the-fold answer:** The page must contain a direct-answer block within the first 300 words of body content (excluding navigation and hero UI). For tool pages, this is typically the first explanatory paragraph below the tool interface.
   3. **Comparison tables:** When the page compares options, rates, countries, or methods — use an HTML `<table>` (not a list). AI engines extract tables efficiently. Include clear column headers.
   4. **Outbound citations:** For every factual claim (rates, legal rules, statistics), add a hyperlink to the primary official source. Use anchor text that describes the source, not generic "click here". Example: `<a href="https://official-source.gov/page">Federal minimum wage data (US DOL)</a>`.
   5. **Content length target for GEO:** Informational pages should target 2,500–3,500 words of real content (excluding boilerplate navigation). Pure tool pages without explanatory content will not be cited in AI answers regardless of traditional SEO performance.

7. **Structured data rules**
   - Keep JSON-LD valid with correct keys such as `"@type"`, not malformed variants.
   - Add `Article`, `WebPage.reviewedBy`, `WebPage.about`, and `citation` only when they are supportable by visible content.
   - Do not add fake reviews, fake ratings, or unsupported author credentials.
   - If FAQ schema is generated from an array that is also rendered visibly, understand that adding FAQ objects may also add visible FAQ items.

8. **2026 Schema Compliance**
   - If `FAQPage` JSON-LD exists in the page: **remove the JSON-LD entirely.** Deprecated May 7, 2026. Keep visible Q&A HTML — do not remove it.
   - For calculator/tool pages: add `SoftwareApplication` or `WebApplication` schema with `applicationCategory: "UtilityApplication"`, `operatingSystem: "Web"`, `url`, `name`, `description`.
   - For the enhanced `WebPage` schema: add `datePublished`, `dateModified` (use actual last-modified date, not `new Date()`), `author` (with `@type: "Organization"` or `"Person"` and `name`), `reviewedBy` if a subject-matter expert reviewed the content.
   - Add `citation` array to `WebPage` schema when the page links to official sources.
   - For the site's root layout (`app/layout.tsx`): add `Organization` schema with `name`, `url`, `logo`, `sameAs` (LinkedIn, GitHub, etc.) if not already present. This is a site-level GEO requirement, not a page-level one, but flag it whenever doing page work.
   - Never add `aggregateRating` or `Review` schema without real, verifiable review data.

9. **Avoid duplicate visible FAQs**
   - When the user wants a custom long-tail FAQ section in a content component *and* the same FAQs in FAQPage schema, avoid rendering those same items twice.
   - Use separate arrays when needed:
     - `visibleFaqItems` for the reusable visible `<FAQ />` component.
     - `schemaFaqItems = [...visibleFaqItems, ...longTailFaqItems]` for JSON-LD.
   - Keep every FAQ in JSON-LD represented somewhere visible on the page, either in the content section or the reusable FAQ component.
   - After FAQPage deprecation (May 7, 2026), if you remove FAQPage JSON-LD, move all FAQ items to visible Q&A HTML only. There is no schema replacement — the visible HTML itself is what powers featured-snippet eligibility.

10. **Homepage/internal-link updates**
    - Do not force homepage edits blindly.
    - Read `app/page.tsx`, then inspect imported homepage components and registries to find where cards/descriptions are actually sourced.
    - Update the tool registry/card description when the homepage grid renders from registry data.
    - Add homepage FAQs only if a homepage FAQ section already exists or there is a natural placement.
    - Use descriptive internal-link anchors such as "GOSI calculator", "Saudi GOSI calculator", or "calculate GOSI deduction"; avoid generic anchors.

11. **Homepage SEO/GEO execution prompts with numbered issues**
    - When the user asks to fix a numbered homepage audit plan in order, first read every file they named, including `app/page.tsx`, `app/layout.tsx`, `app/sitemap.ts`, homepage sections, and the tool registry. Briefly record one key finding per file before editing if the prompt asks for read-first proof.
    - Apply issue order strictly for observable edits, but group a coherent `app/page.tsx` rewrite only when multiple consecutive issues change shared metadata, FAQ arrays, JSON-LD, and rendered section order. Otherwise prefer targeted edits.
    - For global homepage language targeting, change country-specific `<html lang>` values such as `en-MY` to neutral `en` when the page targets multiple regions, and remove unsupported regional hreflang links such as `en-sa`; keep `x-default` and `en` if those are the only valid alternates.
    - For homepage metadata and hero copy, include every active major tool/entity shown in the registry, especially newly added tools, and remove stale capability claims like `live`, `real-time`, `today`, broad unsupported country counts, or automatic price-fetch language unless code proves it.
    - If a "How these calculators work" section is too high inside the hero, move it out of the hero component and render it after the featured tools grid or near FAQ. Reintroduce all requested rows in the new location so the section is not accidentally lost.
    - Keep homepage FAQ as a single source of truth: define `homeFaqs`, render it visibly, and generate `FAQPage.mainEntity` from `homeFaqs.map`. Do not maintain a divergent hardcoded FAQ schema. After FAQPage deprecation (May 7, 2026), only render the visible FAQ — no JSON-LD wrapper needed.
    - Add homepage `ItemList` schema from the verified `TOOLS` registry when the page is a tool hub. Remove `SearchAction` unless a real search endpoint exists; never point it at guessed tool paths.
    - For tool-card registry edits, update titles, aria labels, descriptions, and tags together so visible cards, accessibility labels, and schema generated from `TOOLS` stay consistent.
    - For final reporting when the user explicitly requested `OLD code → NEW code → explanation`, preserve old snippets from the pre-edit reads and pair them with the new snippets for each numbered issue, then include verification results and the complete updated files the user requested.
    - Run targeted searches for forbidden stale wording across touched homepage/card files before build, for example `live gold|live gold price|live gold rates|live gold-price|live international gold`. If a FAQ question still contains the forbidden phrase even in a negated question, reword it to avoid the exact stale phrase.

12. **Sitemap freshness**
    - Avoid `new Date()` as `lastModified` for every tool URL if it causes noisy daily freshness without content changes.
    - Use a stable per-tool last-modified map for recently updated tools and a stable fallback date for others.

13. **llms.txt Generation**
    When the user asks to improve GEO/AI visibility, or when `llms.txt` is missing, implement it as a Next.js route handler:
    ```typescript
    // app/llms.txt/route.ts
    import { TOOLS } from '@/constants/tools';

    export const dynamic = 'force-static';
    export const revalidate = 86400;

    export async function GET() {
      const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yoursite.com';
      const siteName = 'YourSiteName';
      const siteDesc = 'A collection of free online calculators and tools for [describe your tools].';

      const toolList = TOOLS.map(
        (tool) => `- [${tool.title}](${siteUrl}${tool.href}): ${tool.description}`
      ).join('\n');

      const content = `# ${siteName}
    > ${siteDesc}

    ## About
    [2–3 sentences describing your site, who it's for, what makes it unique, and what types of queries it answers.]

    ## Tools
    ${toolList}

    ## Usage
    These tools are free to use. Content may be cited with attribution to ${siteUrl}.

    ## Contact
    [Optional: contact email or feedback URL]
    `;

      return new Response(content, {
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'public, max-age=86400',
        },
      });
    }
    ```
    After creating `llms.txt` route: update `app/robots.ts` to add the llms.txt URL as a second `Sitemap:` entry:
    ```typescript
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/llms.txt`,
    ],
    ```

14. **Strict prompt compliance pass for large SEO rewrites**
    - After implementing user-provided step-by-step instructions, re-read every required file and compare current code against each prompt step before finalizing.
    - Use targeted searches for forbidden/required strings in the target route, e.g. `FAQPage`, `jsonLdFAQ`, `<strong>`, blocked query URLs, exact titles, schema types, official source URLs, glossary phrases, and sitemap IDs.
    - When replacing a long content component, do not merely summarize the requested copy if the user supplied specific tables/rows/sections; preserve all material requirements such as country rows, package-comparison columns, official-source blocks, bilingual glossary rows, and regulatory caveats.
    - Scope grep carefully: a repo-wide search may show `FAQPage`, `<strong>`, or blocked breadcrumbs on unrelated pages. Report those as out of scope unless the user asked for site-wide cleanup.
    - If the user forbids `<strong>` only in SEO content prose, remove it from the content component but do not refactor unrelated UI labels unless needed for lint or the specific request.

15. **Incremental edits and status updates**
    - Edit one file or one coherent area at a time.
    - After each file edit, state what changed and why.
    - Prefer targeted edits over full-file rewrites unless the file is small or structurally broken, or the user explicitly requested replacing the entire body content.
    - If the user gives a numbered module sequence, complete modules in order and do not jump ahead to later metadata/schema/button tasks until the current module is done.
    - When the user explicitly asks to quote exact current code and replacement, read the relevant bytes in the current tool session, show the exact block being replaced, and then make the targeted edit. Embedded context from a prior compacted conversation is useful for orientation but may not satisfy edit-tool read requirements.
    - If an edit tool says the file has not been read in the current session, stop editing that file, read the smallest relevant range or full file as required, then retry the exact replacement.
    - After each requested module, use the user's requested completion phrase exactly when provided, e.g. `MODULE X COMPLETE — files edited: [...]`.

16. **E-E-A-T Implementation**
    When adding E-E-A-T signals to tool pages:
    1. Add a "Last Updated" line near the top of the page content (not in the footer): `<p className="text-sm text-muted-foreground">Last updated: [Month Year]</p>`. Use the actual content review date.
    2. Add a methodology box for financial/legal/regulatory calculators: a visually distinct section explaining the formula used, data sources, and assumptions. Include links to official sources.
    3. For YMYL pages: add a disclaimer near the top (not just in the footer) stating this is for informational purposes and recommending professional consultation.
    4. Never use `new Date()` for `dateModified` in schema — this creates noisy freshness signals that change every build without content changes. Use a stable date string that is updated manually or via a per-tool registry when content actually changes.

17. **Verification**
    - Run lint on the changed files first to isolate new errors.
    - If full lint fails due unrelated existing repo issues, say so and distinguish pre-existing errors from touched-file errors.
    - Fix touched-file lint errors, including unused imports/variables introduced or exposed by the touched files, JSX escaped entities, and Next `<Link />` requirements.
    - For YMYL/SEO implementation, run targeted searches for forbidden stale legal/fiscal strings, blocked query breadcrumbs, required sitemap IDs/dates, required entity phrases, and button `type="button"` on edited client components.
    - Scope verification findings carefully: repo-wide searches may surface blocked query URLs or lint errors on unrelated pages. Do not fix them unless the request is site-wide; report them as out of scope.
    - Run `npm run build` when feasible to catch TypeScript and Next integration issues.
    - If a tool/shell rejects an explicit Windows project path even though file tools can access it, rerun commands from the registered project root instead of stopping.
    - For remote OpenGraph image checks, if `curl -I` or `curl.exe -I` returns no visible output in the shell, use PowerShell to print only the status code, e.g. `powershell -NoProfile -Command "try { $r = Invoke-WebRequest -Uri '<url>' -Method Head -UseBasicParsing; Write-Output $r.StatusCode } catch { Write-Output $_.Exception.Response.StatusCode.value__ }"`.

18. **Surgical technical SEO fixes**
    - When the user explicitly limits scope to named files, inspect and edit only those files unless a read-only check is necessary for a requested fact (for example, git history to choose stable sitemap dates).
    - For broken OG image URLs, replace only the stale URL string and verify with a targeted search that the bad extension/path has zero occurrences in the touched file.
    - For canonical host fixes in `next.config.ts`, add `async redirects()` inside the existing config object without changing `trailingSlash`, `headers()`, or other config values. Use a host `has` condition for exact non-www host redirects so canonical www traffic is unaffected.
    - For sitemap crawl-budget fixes, avoid `new Date()` on static legal/about pages. If the user allows actual creation dates, check `git log --follow` one file at a time because `--follow` accepts exactly one pathspec; otherwise use the requested fallback date. Do not alter homepage freshness, tool URL maps, `changeFrequency`, or priorities unless explicitly requested.
    - After surgical edits, use `git diff -- <requested files>` plus targeted searches to verify the checklist. If `git status` shows other modified files from prior work, explicitly state they were pre-existing/out of scope and do not revert or modify them unless asked.

## Output Pattern

- Briefly confirm full read completion before edits when the user explicitly required it.
- If the user explicitly requested one-file-at-a-time execution, complete and report each file before moving to the next; keep progress updates short.
- For each edited file: list concise changes and rationale.
- Final response should include:
  - Files changed.
  - Keywords/semantic topics added.
  - Schema changes.
  - Verification results, including remote OG/image HTTP status when requested.
  - Any remaining repo-wide issues that are outside the task scope.
  - Estimated SEO/GEO/AEO impact in practical terms, without promising rankings.
