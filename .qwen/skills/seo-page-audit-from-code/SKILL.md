---
name: seo-page-audit-from-code
description: Perform a deep SEO/GEO/AEO audit of a Next.js tool page by verifying current code, schema alignment, indexing files, AI crawlability, llms.txt context, answer-block structure, and ranking-drop context before giving scored recommendations. Covers June 2026 core update signals, Search Console Generative AI metrics, GEO citation readiness, and AEO formatting.
source: auto-skill
updated_at: '2026-06-22T00:00:00.000Z'
---

# SEO Page Audit From Code

Use this skill when the user asks for a complete SEO/GEO/AEO audit of a specific Next.js page or tool and expects evidence from the current codebase rather than assumptions or old memory.

## Procedure

### Section 1 — Inventory & File Reading

1. **Inventory the target route first**
   - List the target folder.
   - Read every file in the route folder, especially `page.tsx`, route-specific client components, content components, metadata, and FAQ/schema definitions.
   - Search the repository for route IDs, component names, tool registry entries, internal links, dynamic OG image routes, sitemap entries, and robots rules.

### Section 2 — AI Crawlability & GEO Access Audit (June 2026 Standards)

2. **Audit AI crawler access**
   - Check `app/robots.ts` for AI crawler user-agents. Verify that `GPTBot`, `ClaudeBot`, `PerplexityBot`, `anthropic-ai`, `Google-Extended`, `OAI-SearchBot`, and `Applebot-Extended` are either explicitly allowed or not blocked. Quote exact lines. If the file uses `disallow: ['/']` for `*` without whitelisting these agents, flag as **CRITICAL — AI crawlers blocked**.
   - Check whether `llms.txt` exists at the project root or is generated via a route handler at `/llms.txt`. If absent, flag as **LOW/MEDIUM — llms.txt missing**. (Note: Per official June 2026 Google guidance, `llms.txt` is useful for third-party LLM context but is not a direct Google ranking factor).
   - Warn the developer to verify in server logs or Cloudflare Analytics whether `GPTBot`, `ClaudeBot`, or `PerplexityBot` user-agents are being blocked by Cloudflare Bot Fight Mode. Provide the exact Cloudflare dashboard path: Security → Bots → Bot Fight Mode → confirm "Off" or whitelist AI agents.
   - For any Next.js page that renders primary content inside a `"use client"` component using `useEffect`, `useState`, or `useSearchParams` without a server-rendered fallback: flag as **HIGH — AI crawlers see empty page**. Quote the specific hook and component file.

### Section 3 — Indexing & Metadata (Google Search Console Update)

3. **Verify indexing and metadata from code**
   - When the user reports a page is not indexed, do an indexing-emergency diagnosis before the general SEO audit. Check `app/robots.ts`/`robots.txt`, route metadata robots/noindex, canonical, sitemap inclusion, route location, dynamic route config, middleware, redirects/headers, internal links, and whether crawlable text is server-rendered.
   - Inspect `metadata` exports for title, description, keywords, OpenGraph, Twitter, canonical, and robots directives. Quote exact `robots` and canonical values when diagnosing indexing.
   - Check whether sitemap `lastModified` is stable or generated with `new Date()` for every page; flag noisy freshness if it changes without content changes. For new unindexed pages, also flag stale fallback dates that predate publication or updates.
   - Ask the developer to check both the traditional URL Inspection status AND the new **Search Generative AI performance reports** rolled out in Google Search Console (June 2026) to cross-verify visibility inside Google's AI Mode and AI Overviews.

### Section 4 — Structured Data Audit (June 2026 Alignment)

4. **Audit structured data**
   - Read all JSON-LD in the page.
   - Identify schema types present, such as `WebPage`, `SoftwareApplication`, `HowTo`, `FAQPage`, `BreadcrumbList`, or `Article`.
   - **FAQPage JSON-LD Rule (June 2026):** Google officially removed FAQ rich results from SERPs. However, **DO NOT flag FAQ schema for removal** if the content is high quality. Google and LLMs still use it to extract data for AI Overviews. Instead, check for alignment: If FAQ JSON-LD exists but the Q&A text is hidden from the actual visible user interface, flag as **CRITICAL — Hidden Content / Schema Mismatch**.
   - **Anti-Spam Check (June 2026 Policy):** Check for fake reviews, fake ratings, or aggressive schema stacking that lacks supporting visible text. If found, flag as **HIGH — Potential AI Citation Manipulation Spam** (violating Google's updated generative search spam policies).
   - Preferred replacement schema for tool pages: `SoftwareApplication` or `WebApplication` for calculators/tools; enhanced `WebPage` with `datePublished`, `dateModified`, `author`, `reviewedBy`, `about`, and `citation` fields where supported by visible content.

### Section 5 — AEO (Answer Engine Optimization) Audit

5. **Audit answer-engine readiness**
   - For each major H2 on the page, check: does the first paragraph directly answer the question implied by the heading, in 120–180 words, before expanding with supporting detail? If not, flag as "answer-first structure missing" with the specific heading.
   - Check whether the page has a direct-answer paragraph in the first visible screen (above the fold on desktop, within the first 300 words) for its primary query. AI systems extract the first clear answer they find — burying the answer behind navigation, hero images, or tool UI is an AEO failure.
   - Check for comparison tables, numbered lists, and step-by-step guides in the content. These formats make AI extraction straightforward.
   - Check `metadata.description` — does it contain a concise direct answer (not just a marketing blurb) to the primary query? A 120-character answer-first description improves both CTR and AEO.
   - Check outbound links: does the page cite official/authoritative sources (government sites, academic papers, official documentation) where claims are made? AI tools prefer content that cites credible primary sources.

### Section 6 — CTR-First SERP Audit

6. **CTR-first SERP audit when impressions are high but clicks are low**
   - Count the exact characters of the current title and meta description before judging them.
   - Evaluate whether the title immediately answers "what will I get?", includes the year/number/power word where appropriate, and differentiates against likely competitor titles.
   - Check whether the description puts a clear benefit in the first ~120 characters, uses a CTA verb, names concrete features/components, and resonates with the searcher's anxiety or planning intent.
   - Surface high-value facts already present in body content (price ranges, countries, included components, calculators/toggles) that are missing from title/description and could improve CTR.
   - Provide 2–3 alternative titles/descriptions with exact character counts and a specific recommended choice.

### Section 7 — Content, Headings & E-E-A-T (May/June 2026 Core Update)

7. **Audit content and headings with 2026 E-E-A-T requirements**
   - Confirm there is exactly one visible H1 and that the primary keyword appears naturally.
   - List H2/H3 coverage and identify hierarchy issues.
   - **May 2026 Core Update & AI Search Guidance Signals:** Pages that dropped in recent core updates shared these characteristics: content that repeated existing top-ranking results without original insight ("Information Gain" deficiency), answers buried behind UI, mass-produced text with no human review layer, and missing author/reviewer signals. 
   - Verify the 5 Core Trust Pillars for YMYL/Tool Pages:
     - (a) Visible "Last Updated" date near the top,
     - (b) Named author/expert with verifiable credentials,
     - (c) "How we calculated this" or methodology box for calculators,
     - (d) First-person or first-hand experience signals ("We tested...", "Based on our analysis of X data points..."),
     - (e) Outbound links to official primary sources — not just other blogs.
   - For financial price/rate calculators, reconcile every freshness claim (`live`, `real-time`, `updated just now`, `today`, `daily`) against the actual data source and caching code. If the source is mocked, hardcoded, stale, or only simulated, treat the mismatch as a critical trust issue and recommend either a real API/revalidation path or copy that says `estimate` instead of `live`.
   - Check for accidentally visible content-quality defects in JSX, including mojibake characters (`â‰ˆ`, `â€”`), markdown markers rendered as literal text (`**bold**`), stale placeholder copy, and buttons/links whose labels promise unavailable functionality.

### Section 8 — GEO (Generative Engine Optimization) Citation Readiness

8. **Audit GEO citation readiness**
   - **Entity consistency check:** Does the brand/tool name appear consistently across: page title, H1, OG title, schema `name` field, and any internal registry? Inconsistent naming degrades the AI's entity model of the site.
   - **Content extractability:** Can a 120–180 word passage be extracted from this page that directly answers the primary query, stands alone without context, and includes verifiable facts or figures? If not, the page will not be cited by AI engines regardless of its Google ranking.
   - **Organization schema:** Is `Organization` schema present at the site level (in `app/layout.tsx` or a global schema component) with consistent `name`, `url`, `description`, `logo`, and `sameAs` links to LinkedIn, GitHub, or social profiles? If absent, flag as HIGH.
   - **Freshness signal:** Does the page show a visible last-updated date? AI citation pools favor content updated within the last 3–12 months.

### Section 9 — Performance Risks & AI Crawlability

9. **Audit performance risks from architecture and AI access**
   - Identify whether static SEO/explanatory content lives inside a `"use client"` component and recommend moving it to a server component where practical.
   - For homepage or landing-page audits, trace every imported section from `app/page.tsx` and `app/layout.tsx`, especially client components wrapped in `Suspense`. If a primary content section uses `useSearchParams()`, `useRouter()`, `useState()`, or `useEffect()`, quote the exact hook and Suspense fallback because this can hide crawl-critical HTML behind hydration.
   - When auditing a reported loading text such as `Loading tools...`, inspect both the page-level Suspense boundary and any nested Suspense inside the client component. Compare fallback reserved height/classes (for example `h-40`) against the final section height to assess likely CLS; flag plain text fallbacks that should be skeleton-sized or server-rendered.
   - Check whether static navigational elements such as footers, tool registries, and card grids are unnecessarily marked `"use client"`; this is both a bundle-size and crawlability risk when links are important for discovery.
   - Count registry items from source arrays such as `TOOLS` and compare them with homepage claims (`24+ tools`, stats bars, category counts) and footer coverage. Flag missing footer links for existing tools and any visible claim that overstates the actual registry.

### Section 10 — Competitor Comparison

10. **Competitor comparison without pretending live SERP access**
    - If search results are blocked or unavailable, explicitly say exact live top-3 results could not be verified.
    - Compare against competitor page types instead: official/government pages, niche software utilities, or industry blogs.
    - Identify what those types usually have that the page lacks, such as official citations, country-specific tables, methodology, author/reviewer signals, or visual breakdowns.

### Section 11 — Scored Audit Output

11. **Return a scored, actionable audit**
    - Provide a clear verdict: `ready`, `ready_with_concerns`, `geo_blocked` (AI crawlers blocked — critical state), `blocked`, or `needs_input`.
    - Include an overall score and area scores covering: SEO, GEO (0–100 covering AI crawlability, answer blocks, entity signals, freshness, and citation readiness), AEO (0–100 covering answer-first structure, direct-answer description, comparison tables, and outbound citations), Technical, Content, and Keywords.
    - Organize findings by CTR, Technical SEO, Schema, Content, Keyword/Intent, E-E-A-T, Competitors, GEO, AEO, and Action Plan when CTR is the primary user concern.
    - For every major issue, cite the file and exact code evidence when possible.
    - Provide priority levels: High, Medium, Low; include quick wins and long-term improvements.
    - Include before/after code snippets for important fixes when the user wants implementable recommendations.

## Output Pattern

- Start with files inspected, components found, and verdict.
- If the user says the main problem is high impressions but low clicks, lead with exact current title/description character counts, CTR diagnosis, SERP-preview issues, and title/description alternatives before broader technical findings.
- **Do not flag valid FAQ schema for removal.** Instead, flag critical errors if the JSON-LD schema data does not match visible HTML text or triggers spam policy alerts due to fake user reviews.
- Use tables for score summaries, GEO/AEO scores, keyword/intent mapping, helpfulness coverage, and priority action plans.
- Be explicit about limitations, especially when no Lighthouse run, HTTP status check, or live SERP data was possible.
- End with a one-paragraph verdict explaining why impressions/clicks/rankings are behaving as observed, the single most important fix, and a realistic impact estimate without promising rankings.
- Avoid speculation phrased as fact. Use language like "plausible", "likely", and "verify in Search Console" for ranking-drop causes.