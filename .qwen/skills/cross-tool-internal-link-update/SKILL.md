---
name: cross-tool-internal-link-update
description: Add or update a tool link across repeated "Explore Other QuickCalcs Tools" sections by scanning all tool pages, preserving each section pattern, skipping self-links, and verifying changed files.
source: auto-skill
extracted_at: '2026-05-29T12:00:31.759Z'
---

# Cross-Tool Internal Link Update

Use this skill when the user asks to add a new calculator/tool card to the related-tools or "Explore Other QuickCalcs Tools" sections across multiple Next.js tool pages.

## Procedure

1. **Scan first**
   - Search all of `app/tools/` for the exact section heading or marker the user names, e.g. `Explore Other QuickCalcs Tools`.
   - List every matching file before editing.
   - Also search for the target tool route to confirm whether it already appears and to avoid accidental duplicates.

2. **Read each matching section before editing**
   - Read enough lines around each match to see the full grid/nav structure and closing tag.
   - Do not assume every page uses the same implementation. Some sections may use literal `<Link>` blocks; others may map an array of tool objects.
   - Identify whether the grid is a `<nav>` or a `<div>`; preserve the existing wrapper unless the user explicitly asks to refactor.

3. **Skip the target tool’s own page**
   - Do not add a link to a page that links to itself.
   - If the target tool’s own page contains the section, report that it was intentionally skipped.

4. **Add the new tool as the last item**
   - For literal grids, insert the requested `<Link>` block immediately before the closing `</nav>` or `</div>` for that grid.
   - For array-mapped grids, add the new route object as the final array item with equivalent fields (`href`, `icon`, `title`, `desc`) so the existing renderer and styling are preserved.
   - If the user provides an exact block, use it verbatim where the section is literal and compatible. For array-rendered sections, translate the same content into the existing data shape rather than replacing the renderer.
   - Do not change unrelated formatting, descriptions, order of existing links, imports, or styling.

5. **Verify coverage**
   - Re-run the search for the new `href` under `app/tools/`.
   - Confirm matches appear in every intended file and not in the target tool’s own related-tools section.

6. **Validation**
   - Run `npx eslint` on all changed files, exactly as the user requested when possible.
   - If ESLint fails on pre-existing unrelated issues in changed files, do not fix unrelated code unless asked. Report the failures clearly and distinguish them from the new link changes.
   - Run `npm run build` after edits when requested or feasible.

## Output Pattern

- Start with the scan result: every file containing the target section.
- State which files were updated and which, if any, were skipped because they are the target tool’s own page.
- Include verification results:
  - changed-file ESLint command and pass/fail
  - build command and pass/fail
  - any pre-existing lint errors that remain outside the requested change
- Keep the final response concise and avoid claiming lint success if the command failed due existing issues.
