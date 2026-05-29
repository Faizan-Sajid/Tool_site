---
name: nextjs-seo-page-overhaul
description: Implement a careful SEO/content/schema overhaul for a Next.js App Router tool page after reading current route files, preserving behavior, avoiding duplicate FAQs, and verifying changed files.
source: auto-skill
extracted_at: '2026-05-29T11:43:23.070Z'
---

# Next.js SEO Page Overhaul

Use this skill when the user asks you to implement SEO, content, metadata, schema, FAQ, internal-link, or sitemap fixes for a Next.js App Router tool/page and expects code changes, not just an audit.

## Procedure

1. **Read before editing**
   - Read the target route `page.tsx` completely.
   - Read route-specific calculator/client components, content components, FAQ components, metadata/schema definitions, and any related registry file such as `constants/tools.ts`.
   - If a read is truncated, continue from the next offset before claiming the file was fully read.
   - For homepage/internal-link work, read `app/page.tsx` first, then inspect imported sections that actually render cards or links, such as `FeaturedToolsSection` and tool registries.

2. **Preserve calculator behavior**
   - Treat calculation logic as higher risk than SEO text.
   - If the request says to fix comments only, change comments only and leave numeric constants/formulas untouched.
   - Check for contradictions between code comments, visible content, FAQs, metadata, and JSON-LD; fix inaccurate text even if the output calculation is correct.

3. **Update metadata precisely**
   - Apply exact user-provided title/description when explicitly requested, even if they exceed general SEO length guidelines; note the tradeoff if needed.
   - Keep OpenGraph/Twitter/canonical/robots consistent with the page’s primary positioning.
   - Prefer a clean focused keywords list over bloated keyword stuffing.

4. **Add content and trust signals without removing existing value**
   - Add “Last updated” or methodology boxes near the top when working on financial/YMYL-ish tools.
   - Add official source/citation sections with outbound official links when claims depend on legal, tax, payroll, or regulatory rules.
   - Add semantic/LSI terms naturally in explanatory paragraphs, headings, examples, and FAQ answers rather than dumping terms.
   - For multilingual SEO, use `dir="rtl"` on Arabic text cells or spans, not on the whole English section.

5. **Structured data rules**
   - Keep JSON-LD valid with correct keys such as `"@type"`, not malformed variants.
   - Add `Article`, `WebPage.reviewedBy`, `WebPage.about`, and `citation` only when they are supportable by visible content.
   - Do not add fake reviews, fake ratings, or unsupported author credentials.
   - If FAQ schema is generated from an array that is also rendered visibly, understand that adding FAQ objects may also add visible FAQ items.

6. **Avoid duplicate visible FAQs**
   - When the user wants a custom long-tail FAQ section in a content component *and* the same FAQs in FAQPage schema, avoid rendering those same items twice.
   - Use separate arrays when needed:
     - `visibleFaqItems` for the reusable visible `<FAQ />` component.
     - `schemaFaqItems = [...visibleFaqItems, ...longTailFaqItems]` for JSON-LD.
   - Keep every FAQ in JSON-LD represented somewhere visible on the page, either in the content section or the reusable FAQ component.

7. **Homepage/internal-link updates**
   - Do not force homepage edits blindly.
   - Read `app/page.tsx`, then inspect imported homepage components and registries to find where cards/descriptions are actually sourced.
   - Update the tool registry/card description when the homepage grid renders from registry data.
   - Add homepage FAQs only if a homepage FAQ section already exists or there is a natural placement.
   - Use descriptive internal-link anchors such as “GOSI calculator”, “Saudi GOSI calculator”, or “calculate GOSI deduction”; avoid generic anchors.

8. **Sitemap freshness**
   - Avoid `new Date()` as `lastModified` for every tool URL if it causes noisy daily freshness without content changes.
   - Use a stable per-tool last-modified map for recently updated tools and a stable fallback date for others.

9. **Incremental edits and status updates**
   - Edit one file or one coherent area at a time.
   - After each file edit, state what changed and why.
   - Prefer targeted edits over full-file rewrites unless the file is small or structurally broken.

10. **Verification**
   - Run lint on the changed files first to isolate new errors.
   - If full lint fails due unrelated existing repo issues, say so and distinguish pre-existing errors from touched-file errors.
   - Fix touched-file lint errors, including JSX escaped entities and Next `<Link />` requirements.
   - Run `npm run build` when feasible to catch TypeScript and Next integration issues.

## Output Pattern

- Briefly confirm full read completion before edits when the user explicitly required it.
- For each edited file: list concise changes and rationale.
- Final response should include:
  - Files changed.
  - Keywords/semantic topics added.
  - Schema changes.
  - Verification results.
  - Any remaining repo-wide issues that are outside the task scope.
  - Estimated SEO impact in practical terms, without promising rankings.
