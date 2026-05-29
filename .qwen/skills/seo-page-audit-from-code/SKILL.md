---
name: seo-page-audit-from-code
description: Perform a deep SEO/GEO audit of a Next.js tool page by verifying current code, schema, indexing files, and ranking-drop context before giving scored recommendations.
source: auto-skill
extracted_at: '2026-05-29T10:58:54.535Z'
---

# SEO Page Audit From Code

Use this skill when the user asks for a complete SEO/GEO audit of a specific Next.js page or tool and expects evidence from the current codebase rather than assumptions or old memory.

## Procedure

1. **Inventory the target route first**
   - List the target folder.
   - Read every file in the route folder, especially `page.tsx`, route-specific client components, content components, metadata, and FAQ/schema definitions.
   - Search the repository for route IDs, component names, tool registry entries, internal links, dynamic OG image routes, sitemap entries, and robots rules.

2. **Verify indexing and metadata from code**
   - Inspect `metadata` exports for title, description, keywords, OpenGraph, Twitter, canonical, and robots directives.
   - Inspect `app/robots.ts` and `app/sitemap.ts` to confirm the page is not blocked and appears in the sitemap.
   - Check whether sitemap `lastModified` is stable or generated with `new Date()` for every page; flag noisy freshness if it changes without content changes.

3. **Audit structured data**
   - Read all JSON-LD in the page.
   - Identify schema types present, such as `WebPage`, `SoftwareApplication`, `HowTo`, `FAQPage`, `BreadcrumbList`, or `Article`.
   - Check whether claims with legal/financial implications include visible citations and schema citation/source fields.
   - Do not recommend fake ratings or unsupported review markup.

4. **Audit content and headings**
   - Confirm there is exactly one visible H1 and that the primary keyword appears naturally.
   - List H2/H3 coverage and identify hierarchy issues.
   - Assess whether the content satisfies calculator intent, informational intent, expat/national variants, examples, FAQs, methodology, and E-E-A-T needs.
   - Look for contradiction between formula code, comments, visible content, FAQ, and schema. Treat contradictions as high priority even if the visible output currently works.

5. **Audit performance risks from architecture**
   - Identify whether static SEO/explanatory content lives inside a `"use client"` component and recommend moving it to a server component where practical.
   - Flag unnecessary third-party scripts, heavy images, missing image dimensions, and mobile table risks.
   - If no Lighthouse/browser data is available, say the assessment is code-review based rather than measured Core Web Vitals.

6. **Keyword and intent analysis**
   - Extract current primary, secondary, and supporting entity keywords from metadata, H1, first paragraph, headings, body, FAQ, and schema.
   - Distinguish good keyword placement from over-expanded/repetitive metadata keywords.
   - Recommend semantic/LSI and long-tail opportunities only when they fit naturally.

7. **Ranking-drop analysis**
   - If impressions/rankings recently dropped, separate verified facts from hypotheses.
   - Check public Google Search Central ranking-update information and Search Status Dashboard when web access is available.
   - State whether a ranking/core update is plausible and whether crawling/indexing/serving incidents are indicated.
   - Recommend Search Console checks: query-level loss, average position vs CTR, indexing/canonical status, rich result loss, recrawl date, and comparison windows.

8. **Competitor comparison without pretending live SERP access**
   - If search results are blocked or unavailable, explicitly say exact live top-3 results could not be verified.
   - Compare against competitor page types instead: official/government pages, HR/payroll software pages, and expat/finance blogs.
   - Identify what those types usually have that the page lacks, such as official citations, bilingual support, old/new rate handling, payroll examples, and author/reviewer signals.

9. **Return a scored, actionable audit**
   - Provide a clear verdict: `ready`, `ready_with_concerns`, `blocked`, or `needs_input`.
   - Include an overall score and area scores.
   - Organize findings by Technical SEO, Content, Keyword, Ranking Drop, Competitors, and Action Plan.
   - For every major issue, cite the file and exact code evidence when possible.
   - Provide priority levels: High, Medium, Low; include quick wins and long-term improvements.
   - Include before/after code snippets for important fixes.

## Output Pattern

- Start with files inspected and verdict.
- Use tables for score summaries and keyword/intent mapping.
- Be explicit about limitations, especially when no Lighthouse run or live SERP data was possible.
- Avoid speculation phrased as fact. Use language like "plausible", "likely", and "verify in Search Console" for ranking-drop causes.
