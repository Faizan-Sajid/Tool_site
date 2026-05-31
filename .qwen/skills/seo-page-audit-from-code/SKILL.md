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
   - When the user reports a page is not indexed, do an indexing-emergency diagnosis before the general SEO audit. Check `app/robots.ts`/`robots.txt`, route metadata robots/noindex, canonical, sitemap inclusion, route location, dynamic route config, middleware, redirects/headers, internal links, and whether crawlable text is server-rendered.
   - Inspect `metadata` exports for title, description, keywords, OpenGraph, Twitter, canonical, and robots directives. Quote exact `robots` and canonical values when diagnosing indexing.
   - Inspect `app/robots.ts` and `app/sitemap.ts` to confirm the page is not blocked and appears in the sitemap. Also check for blocked query-pattern URLs used by breadcrumbs/internal links, such as `/*?category=*`; those may not block the target URL but can weaken navigation/crawl paths.
   - Confirm sitemap inclusion both directly and indirectly through registries such as `TOOLS.map`. If a tool URL falls through to a generic fallback `lastModified`, flag that as a discovery/freshness weakness for a newly published unindexed page and recommend a specific stable date for that tool.
   - Check whether sitemap `lastModified` is stable or generated with `new Date()` for every page; flag noisy freshness if it changes without content changes. For new unindexed pages, also flag stale fallback dates that predate publication or updates.
   - Verify internal linking from the homepage by reading the components that actually render the grid/cards. If links come from a client component using `useSearchParams`/`Suspense`, note that a plain server-rendered link from homepage/footer can be safer for discovery.
   - Ask the developer to verify the exact Google Search Console URL Inspection status (`Discovered – currently not indexed`, `Crawled – currently not indexed`, `URL unknown`, canonical selected by Google, last crawl, sitemap submitted, request indexing) and map each status to the likely cause.

3. **Audit structured data**
   - Read all JSON-LD in the page.
   - Identify schema types present, such as `WebPage`, `SoftwareApplication`, `HowTo`, `FAQPage`, `BreadcrumbList`, or `Article`.
   - Treat `FAQPage` as deprecated for Google rich results as of May 7, 2026. If present, recommend removing the JSON-LD while keeping useful visible FAQ/Q&A HTML for users and featured-snippet eligibility.
   - Prefer replacement/stronger schema that fits the page: `WebApplication`/`SoftwareApplication` for calculators, enhanced `WebPage` with `datePublished`, `dateModified`, `author`, `reviewedBy`, `about`, and `citation` when supported by visible content, and `HowTo` only when visible steps match.
   - Check whether claims with legal, financial, religious, travel, or YMYL implications include visible official citations and schema citation/source fields.
   - Do not recommend fake ratings or unsupported review markup.

4. **CTR-first SERP audit when impressions are high but clicks are low**
   - Count the exact characters of the current title and meta description before judging them.
   - Evaluate whether the title immediately answers “what will I get?”, includes the year/number/power word where appropriate, and differentiates against likely competitor titles.
   - Check whether the description puts a clear benefit in the first ~120 characters, uses a CTA verb, names concrete features/components, and resonates with the searcher’s anxiety or planning intent.
   - Surface high-value facts already present in body content (price ranges, countries, included components, calculators/toggles) that are missing from title/description and could improve CTR.
   - Provide 2–3 alternative titles/descriptions with exact character counts and a specific recommended choice.
   - For featured snippets, check direct-answer paragraphs and tables for the user’s named queries; recommend query-shaped headings and short answer blocks when missing.

5. **Audit content and headings**
   - Confirm there is exactly one visible H1 and that the primary keyword appears naturally.
   - List H2/H3 coverage and identify hierarchy issues.
   - Assess whether the content satisfies calculator intent, informational intent, expat/national variants, examples, FAQs, methodology, and E-E-A-T needs.
   - For YMYL religious/financial/travel pages, explicitly check visible last-updated date, official source links, reviewer/author signals, methodology, disclaimers, and source-backed assumptions.
   - Look for contradiction between formula code, comments, visible content, FAQ, and schema. Treat contradictions as high priority even if the visible output currently works.

6. **Audit performance risks from architecture**
   - Identify whether static SEO/explanatory content lives inside a `"use client"` component and recommend moving it to a server component where practical.
   - Flag unnecessary third-party scripts, heavy images, missing image dimensions, unused imports/icons, missing button types, malformed Tailwind classes, and mobile table overflow risks.
   - If no Lighthouse/browser data is available, say the assessment is code-review based rather than measured Core Web Vitals.

7. **Keyword and intent analysis**
   - Extract current primary, secondary, and supporting entity keywords from metadata, H1, first paragraph, headings, body, FAQ, and schema.
   - Distinguish good keyword placement from over-expanded/repetitive metadata keywords.
   - Map the user’s named search intents one by one as `YES`, `NO`, or `PARTIAL`, citing the exact content evidence or gap.
   - For multilingual or regional opportunities, check whether Arabic/Urdu/local-language terms are actually present before recommending additions.
   - Recommend semantic/LSI and long-tail opportunities only when they fit naturally.

8. **Ranking-drop or CTR-loss analysis**
   - If impressions are high but clicks are low, focus on SERP mismatch: generic title, missing numbers/prices, missing emotional triggers, page ranking for informational queries while snippet presents only tool intent, and body strengths not reflected in metadata.
   - If impressions/rankings recently dropped, separate verified facts from hypotheses.
   - Check public Google Search Central ranking-update information and Search Status Dashboard when web access is available.
   - State whether a ranking/core update is plausible and whether crawling/indexing/serving incidents are indicated.
   - Recommend Search Console checks: query-level loss, average position vs CTR, indexing/canonical status, rich result loss, recrawl date, and comparison windows.

9. **Competitor comparison without pretending live SERP access**
   - If search results are blocked or unavailable, explicitly say exact live top-3 results could not be verified.
   - Compare against competitor page types instead: official/government pages, HR/payroll software pages, travel/finance blogs, or niche calculators as applicable.
   - Identify what those types usually have that the page lacks, such as official citations, country-specific tables, package comparisons, bilingual support, savings planners, methodology, author/reviewer signals, or visual breakdowns.

10. **Return a scored, actionable audit**
   - Provide a clear verdict: `ready`, `ready_with_concerns`, `blocked`, or `needs_input`.
   - Include an overall score and area scores.
   - Organize findings by CTR, Technical SEO, Schema, Content, Keyword/Intent, E-E-A-T, Competitors, and Action Plan when CTR is the primary user concern.
   - For every major issue, cite the file and exact code evidence when possible.
   - Provide priority levels: High, Medium, Low; include quick wins and long-term improvements.
   - Include before/after code snippets for important fixes when the user wants implementable recommendations.

## Output Pattern

- Start with files inspected, components found, and verdict.
- If the user says the main problem is high impressions but low clicks, lead with exact current title/description character counts, CTR diagnosis, SERP-preview issues, and title/description alternatives before broader technical findings.
- Flag deprecated/obsolete schema immediately when found, especially `FAQPage` after Google’s May 7, 2026 FAQ rich-results deprecation; recommend removing the schema but preserving useful visible Q&A content.
- Use tables for score summaries, keyword/intent mapping, helpfulness coverage, and priority action plans.
- Be explicit about limitations, especially when no Lighthouse run, HTTP status check, or live SERP data was possible.
- End with a one-paragraph verdict explaining why impressions/clicks/rankings are behaving as observed, the single most important fix, and a realistic impact estimate without promising rankings.
- Avoid speculation phrased as fact. Use language like "plausible", "likely", and "verify in Search Console" for ranking-drop causes.
