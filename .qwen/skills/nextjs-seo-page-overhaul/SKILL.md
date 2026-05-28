---
name: nextjs-seo-page-overhaul
description: Procedure for targeted SEO/content/schema overhauls on Next.js App Router tool pages without breaking existing functionality
source: auto-skill
extracted_at: '2026-05-28T12:57:13.524Z'
---

# Next.js App Router SEO Page Overhaul

Use this approach when a tool page needs a broad SEO, E-E-A-T, schema, accessibility, and content update while preserving calculator/business logic and the existing design system.

## Procedure

1. **Inspect before editing**
   - Read the relevant page, content component, calculator component, and layout files.
   - Check whether a tool-level `layout.tsx` exists before editing the root layout.
   - Read `package.json` to know the validation commands.
   - If the repo has Next.js version-specific guidance, consult it first; this project may use newer Next.js APIs than training data.

2. **Use page metadata defensively**
   - If the root layout defines `title.template`, use `title: { absolute: "..." }` in the page metadata when the requested title must remain under a strict character limit.
   - Keep good existing metadata fields unchanged unless the task specifically asks otherwise.
   - Update `dateModified` in schema when content is reverified.

3. **Avoid duplicate rendered content and duplicate sources of truth**
   - If FAQ items already exist in `page.tsx`, pass them down as props instead of duplicating arrays in a content component.
   - Remove duplicate FAQ render blocks so only one visible FAQ section remains.
   - Keep JSON-LD FAQ generation tied to the canonical FAQ array.

4. **Apply large content additions as targeted block edits**
   - Prefer focused `edit` operations around headings, paragraphs, and insertion points instead of full-file rewrites.
   - Preserve the design system: existing colors, spacing style, dark background, and accent colors.
   - Add new content sections at semantically appropriate positions, not just at the end.

5. **Calculator changes: accessibility only unless explicitly requested**
   - For calculator components, do not alter calculation constants, formulas, state management, or result logic.
   - Safe additions include `id`, `role="region"`, descriptive `aria-label`s, `htmlFor`/`id` label-input associations, `inputMode` for numeric fields, `type="button"` for non-submit buttons, and `aria-pressed` for selectable button groups.
   - When content or schema claims exact official bracket/table logic but the calculator actually uses statutory rates or simplified formulas, correct the wording instead of changing the math unless the user explicitly requests formula work.

6. **Regional SEO and global-platform checks**
   - If no tool-level layout exists, inspect root `app/layout.tsx` before changing global alternates or language settings.
   - Do not hardcode global `hreflang`, `html lang`, or homepage alternates to one country/region when the site is positioned as a global tools platform; keep regional targeting route-isolated in the relevant page metadata.
   - For country-specific tool pages, set page-level `alternates.languages` to the route URL for the appropriate locale (for example `en-MY`) plus `x-default` when appropriate, rather than changing app-wide metadata.
   - Breadcrumb schema should point to a real useful category/collection URL if `/tools` is not an actual route; avoid schema links to non-existent pages.
   - Do not duplicate page metadata in a layout; prefer page-level metadata for page-specific titles/descriptions.

7. **Homepage and taxonomy follow-through**
   - When adding or overhauling a new country-specific tool, check the homepage metadata, Open Graph text, visible FAQ data, FAQ schema, and WebSite schema description so the homepage reflects the new global coverage without becoming region-locked.
   - If the tools registry has a country/type union, add the new country code and assign the tool to that code instead of leaving it as `all` when the tool is country-specific.
   - Keep visible FAQs and JSON-LD FAQ schema in sync by adding matching question/answer entries to both sources when they are maintained separately.

8. **Validation strategy when project-wide lint is noisy**
   - Run the normal validation commands (`npm run lint`, `npm run build`) when possible.
   - If full lint fails due to pre-existing unrelated files, run ESLint on only the modified files and report the distinction clearly.
   - Run `npm run build` separately if `npm run lint && npm run build` stops after lint failure.
   - Fix lint issues introduced or exposed in modified files, including `react/no-unescaped-entities` and `no-explicit-any`, as long as fixes do not change behavior.

## Useful implementation details

- For Next metadata title templates, `title.absolute` prevents root `template: "%s | Brand"` from lengthening a carefully optimized title.
- For JSX prose, escape literal apostrophes/quotes in text nodes with `&apos;`, `&ldquo;`, and `&rdquo;` if ESLint enforces `react/no-unescaped-entities`.
- For mapped button configs in TypeScript, use `as const` arrays to avoid `as any` when setting union-typed state.
- When adding JSON-LD arrays, preserve existing schema objects and append new objects unless the task requires replacement.
