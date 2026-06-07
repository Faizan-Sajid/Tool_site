---
name: seo-page-audit-from-code
description: Perform a deep SEO/GEO/AEO audit of a Next.js tool page by verifying current code, schema, indexing files, AI crawlability, llms.txt presence, answer-block structure, and ranking-drop context before giving scored recommendations. Covers 2026 core update signals, GEO citation readiness, and AEO formatting.
source: auto-skill
updated_at: '2026-06-01T00:00:00.000Z'
---

# SEO Page Audit From Code

Use this skill when the user asks for a complete SEO/GEO/AEO audit of a specific Next.js page or tool and expects evidence from the current codebase rather than assumptions or old memory.

## Procedure

### Section 1 — Inventory & File Reading

1. **Inventory the target route first**
   - List the target folder.
   - Read every file in the route folder, especially `page.tsx`, route-specific client components, content components, metadata, and FAQ/schema definitions.
   - Search the repository for route IDs, component names, tool registry entries, internal links, dynamic OG image routes, sitemap entries, and robots rules.

### Section 2 — AI Crawlability & GEO Access Audit (NEW)

2. **Audit AI crawler access**
   - Check `app/robots.ts` for AI crawler user-agents. Verify that `GPTBot`, `ClaudeBot`, `PerplexityBot`, `anthropic-ai`, `Google-Extended`, `OAI-SearchBot`, and `Applebot-Extended` are either explicitly allowed or not blocked. Quote exact lines. If the file uses `disallow: ['/']` for `*` without whitelisting these agents, flag as **CRITICAL — AI crawlers blocked**.
   - Check whether `llms.txt` exists at the project root or is generated via a route handler at `/llms.txt`. If absent, flag as **HIGH — llms.txt missing, AI engines cannot discover site structure**.
   - Check `app/robots.ts` for a second `Sitemap:` entry pointing to `/llms.txt`. If absent, flag as medium.
   - Warn the developer to verify in server logs or Cloudflare Analytics whether `GPTBot`, `ClaudeBot`, or `PerplexityBot` user-agents are being blocked by Cloudflare Bot Fight Mode. This cannot be detected from code alone — provide the exact Cloudflare dashboard path: Security → Bots → Bot Fight Mode → confirm "Off" or whitelist AI agents.
   - For any Next.js page that renders primary content inside a `"use client"` component using `useEffect`, `useState`, or `useSearchParams` without a server-rendered fallback: flag as **HIGH — AI crawlers see empty page**. Quote the specific hook and component file.

### Section 3 — Indexing & Metadata

3. **Verify indexing and metadata from code**
   - When the user reports a page is not indexed, do an indexing-emergency diagnosis before the general SEO audit. Check `app/robots.ts`/`robots.txt`, route metadata robots/noindex, canonical, sitemap inclusion, route location, dynamic route config, middleware, redirects/headers, internal links, and whether crawlable text is server-rendered.
   - Inspect `metadata` exports for title, description, keywords, OpenGraph, Twitter, canonical, and robots directives. Quote exact `robots` and canonical values when diagnosing indexing.
   - Inspect `app/robots.ts` and `app/sitemap.ts` to confirm the page is not blocked and appears in the sitemap. Also check for blocked query-pattern URLs used by breadcrumbs/internal links, such as `/*?category=*`; those may not block the target URL but can weaken navigation/crawl paths.
   - Confirm sitemap inclusion both directly and indirectly through registries such as `TOOLS.map`. If a tool URL falls through to a generic fallback `lastModified`, flag that as a discovery/freshness weakness for a newly published unindexed page and recommend a specific stable date for that tool.
   - Check whether sitemap `lastModified` is stable or generated with `new Date()` for every page; flag noisy freshness if it changes without content changes. For new unindexed pages, also flag stale fallback dates that predate publication or updates.
   - Verify internal linking from the homepage by reading the components that actually render the grid/cards. If links come from a client component using `useSearchParams`/`Suspense`, note that a plain server-rendered link from homepage/footer can be safer for discovery.
   - Ask the developer to verify the exact Google Search Console URL Inspection status (`Discovered – currently not indexed`, `Crawled – currently not indexed`, `URL unknown`, canonical selected by Google, last crawl, sitemap submitted, request indexing) and map each status to the likely cause.
   - Check whether `llms.txt` URL appears as a second `Sitemap:` entry in `robots.ts`. A missing entry delays AI crawler discovery of the file.

### Section 4 — Structured Data Audit (updated)

4. **Audit structured data**
   - Read all JSON-LD in the page.
   - Identify schema types present, such as `WebPage`, `SoftwareApplication`, `HowTo`, `FAQPage`, `BreadcrumbList`, or `Article`.
   - **FAQPage JSON-LD is deprecated as of May 7, 2026.** Google no longer shows FAQ rich results for this schema type. If present in the page, flag as **HIGH — remove FAQPage JSON-LD**. Recommend keeping visible Q&A HTML (valuable for featured-snippet eligibility and user experience) but removing the JSON-LD wrapper. Do NOT recommend replacing with HowTo unless visible step-by-step content exists on the page.
   - Preferred replacement schema for tool pages in 2026: `SoftwareApplication` or `WebApplication` for calculators/tools; enhanced `WebPage` with `datePublished`, `dateModified`, `author`, `reviewedBy`, `about`, and `citation` fields where supported by visible content; `ItemList` for hub pages listing multiple tools. Never add fake ratings, fake reviews, or unsupported author credentials.
   - Check whether claims with legal, financial, religious, travel, or YMYL implications include visible official citations and schema citation/source fields.
   - Do not recommend fake ratings or unsupported review markup.
   - Check for **triple schema stacking** opportunity: JSON-LD primary schema + OpenGraph meta tags + visible microdata-friendly HTML (explicit `itemscope`/`itemprop` attributes on key facts). This combination improves AI extractability.

### Section 5 — AEO (Answer Engine Optimization) Audit (NEW)

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
   - For featured snippets, check direct-answer paragraphs and tables for the user's named queries; recommend query-shaped headings and short answer blocks when missing.

### Section 7 — Content, Headings & E-E-A-T (updated)

7. **Audit content and headings with 2026 E-E-A-T requirements**
   - Confirm there is exactly one visible H1 and that the primary keyword appears naturally.
   - List H2/H3 coverage and identify hierarchy issues.
   - Assess whether the content satisfies calculator intent, informational intent, expat/national variants, examples, FAQs, methodology, and E-E-A-T needs.
   - **2026 E-E-A-T requirements:** It is no longer enough to demonstrate knowledge (Expertise). The page must also demonstrate lived Experience and original contribution. Check for:
     - (a) visible "Last Updated" date near the top,
     - (b) named author with credentials,
     - (c) "How we calculated this" or methodology box for calculators,
     - (d) first-person or first-hand experience signals ("We tested...", "Based on our analysis of X data points..."),
     - (e) outbound links to official primary sources — not just other blog posts.
     - For YMYL pages (financial calculators, legal info, health tools), all five must be present.
   - **May & March 2026 Core Update signals:** Pages that dropped in March 2026 shared these characteristics: content that repeated existing results without original insight, answers buried behind UI, AI-generated text with no human review layer, stale statistics (pre-2025), and missing author/reviewer signals. Pages that recovered or gained had: named expert contributors, date-stamped methodology, official citations, and answer-first structure.
   - For YMYL religious/financial/travel pages, explicitly check visible last-updated date, official source links, reviewer/author signals, methodology, disclaimers, and source-backed assumptions.
   - For financial price/rate calculators, reconcile every freshness claim (`live`, `real-time`, `updated just now`, `today`, `daily`) against the actual data source and caching code. If the source is mocked, hardcoded, stale, or only simulated, treat the mismatch as a critical trust issue and recommend either a real API/revalidation path or copy that says `estimate` instead of `live`.
   - Look for contradiction between formula code, comments, visible content, FAQ, and schema. Treat contradictions as high priority even if the visible output currently works.
   - Check for accidentally visible content-quality defects in JSX, including mojibake characters (`â‰ˆ`, `â€”`), markdown markers rendered as literal text (`**bold**`), stale placeholder copy, and buttons/links whose labels promise unavailable functionality.

### Section 8 — GEO (Generative Engine Optimization) Citation Readiness (NEW)

8. **Audit GEO citation readiness**
   - **Entity consistency check:** Does the brand/tool name appear consistently across: page title, H1, OG title, schema `name` field, and any internal registry? Inconsistent naming degrades the AI's entity model of the site.
   - **Content extractability:** Can a 120–180 word passage be extracted from this page that directly answers the primary query, stands alone without context, and includes verifiable facts or figures? If not, the page will not be cited by AI engines regardless of its Google ranking.
   - **Organization schema:** Is `Organization` schema present at the site level (in `app/layout.tsx` or a global schema component) with consistent `name`, `url`, `description`, `logo`, and `sameAs` links to LinkedIn, GitHub, Wikipedia (if applicable)? If absent, flag as HIGH.
   - **Freshness signal:** Does the page show a visible last-updated date? AI citation pools favor content updated within the last 3–12 months. Content updated in 2023 or earlier is deprioritized in AI answers even if it still ranks in Google.
   - **Citation potential test:** Instruct the developer to manually test: search the tool's primary query in Perplexity.ai, Google AI Overviews, and ChatGPT. Document whether the site is cited. If it is not cited despite ranking in Google, the GEO gap is likely: missing answer-first blocks, blocked AI crawlers, or insufficient entity signals.
   - **Content length signal:** ChatGPT citation studies show preference for articles over 2,900 words for informational queries. For pure tool pages (calculators with no explanatory content), GEO performance depends on the surrounding content sections, not the tool UI itself.

### Section 9 — Performance Risks & AI Crawlability

9. **Audit performance risks from architecture and AI access**
   - Identify whether static SEO/explanatory content lives inside a `"use client"` component and recommend moving it to a server component where practical.
   - For homepage or landing-page audits, trace every imported section from `app/page.tsx` and `app/layout.tsx`, especially client components wrapped in `Suspense`. If a primary content section uses `useSearchParams()`, `useRouter()`, `useState()`, or `useEffect()`, quote the exact hook and Suspense fallback because this can hide crawl-critical HTML behind hydration.
   - When auditing a reported loading text such as `Loading tools...`, inspect both the page-level Suspense boundary and any nested Suspense inside the client component. Compare fallback reserved height/classes (for example `h-40`) against the final section height to assess likely CLS; flag plain text fallbacks that should be skeleton-sized or server-rendered.
   - Check whether static navigational elements such as footers, tool registries, and card grids are unnecessarily marked `"use client"`; this is both a bundle-size and crawlability risk when links are important for discovery.
   - Count registry items from source arrays such as `TOOLS` and compare them with homepage claims (`24+ tools`, stats bars, category counts) and footer coverage. Flag missing footer links for existing tools and any visible claim that overstates the actual registry.
   - Flag user-facing internal comments accidentally rendered in JSX text (for example `// FIX...` inside a `<p>`), stale/debug comments visible to users, and contradictions between content blocks and FAQ/schema claims.
   - Flag unnecessary third-party scripts, heavy images, missing image dimensions, unused imports/icons, missing button types, malformed Tailwind classes, and mobile table overflow risks.
   - If no Lighthouse/browser data is available, say the assessment is code-review based rather than measured Core Web Vitals.
   - Check whether AI crawlers can access server-rendered HTML for all primary content. Run a fetch simulation: `curl -A 'GPTBot' https://yourdomain.com/tools/your-tool` and compare the returned HTML against what a browser sees. If the curl response shows a loading skeleton or empty `<main>` tag while the browser shows full content, the page is invisible to all AI crawlers.

### Section 10 — Competitor Comparison

10. **Competitor comparison without pretending live SERP access**
    - If search results are blocked or unavailable, explicitly say exact live top-3 results could not be verified.
    - Compare against competitor page types instead: official/government pages, HR/payroll software pages, travel/finance blogs, or niche calculators as applicable.
    - Identify what those types usually have that the page lacks, such as official citations, country-specific tables, package comparisons, bilingual support, savings planners, methodology, author/reviewer signals, or visual breakdowns.

### Section 11 — Scored Audit Output (updated)

11. **Return a scored, actionable audit**
    - Provide a clear verdict: `ready`, `ready_with_concerns`, `geo_blocked` (AI crawlers blocked — new critical state), `blocked`, or `needs_input`.
    - Include an overall score and area scores covering: SEO, GEO (0–100 covering AI crawlability, llms.txt, answer blocks, entity signals, freshness, and citation readiness), AEO (0–100 covering answer-first structure, direct-answer description, comparison tables, and outbound citations), Technical, Content, and Keywords.
    - Organize findings by CTR, Technical SEO, Schema, Content, Keyword/Intent, E-E-A-T, Competitors, GEO, AEO, and Action Plan when CTR is the primary user concern.
    - For every major issue, cite the file and exact code evidence when possible.
    - Provide priority levels: High, Medium, Low; include quick wins and long-term improvements.
    - Include before/after code snippets for important fixes when the user wants implementable recommendations.

## Output Pattern

- Start with files inspected, components found, and verdict.
- If the user says the main problem is high impressions but low clicks, lead with exact current title/description character counts, CTR diagnosis, SERP-preview issues, and title/description alternatives before broader technical findings.
- Flag deprecated/obsolete schema immediately when found, especially `FAQPage` after Google's May 7, 2026 FAQ rich-results deprecation; recommend removing the schema but preserving useful visible Q&A content.
- Use tables for score summaries, GEO/AEO scores, keyword/intent mapping, helpfulness coverage, and priority action plans.
- Be explicit about limitations, especially when no Lighthouse run, HTTP status check, or live SERP data was possible.
- End with a one-paragraph verdict explaining why impressions/clicks/rankings are behaving as observed, the single most important fix, and a realistic impact estimate without promising rankings.
- Avoid speculation phrased as fact. Use language like "plausible", "likely", and "verify in Search Console" for ranking-drop causes.

## Additional Audit Modules (Optional — run when applicable)

### Homepage UX and Accessibility Audit

- For full homepage audits, inspect Navbar, Hero, stats strip, primary grid/cards, FAQ, Footer, sidebar/search/context providers, and any overlay components, not just `app/page.tsx`.
- Map the heading hierarchy from actual JSX. Flag card titles using the same heading level as section titles when it flattens structure, and confirm exactly one H1.
- Check mobile/touch behavior from Tailwind classes: grid columns, wrapping vs horizontal overflow, min touch target sizes, and fixed/sticky navigation behavior.
- Check interactive accessibility: search inputs need labels beyond placeholders, icon-only buttons need `aria-label`, accordions need real buttons plus `aria-expanded`, and mobile toggles should expose `aria-expanded`/`aria-controls`.
- Check no-JS and crawl implications: client-only FAQ, footer, navbar, or primary grids may still work after hydration but should be reported when the content is important static HTML.
- Search for `<img>`, `next/image`, CSS background images, `console.log`, `dynamic(`, animation libraries (`framer-motion`, GSAP, Lottie), and large icon imports. Distinguish homepage imports from dependencies used only on other routes.
- For third-party scripts in `app/layout.tsx`, quote `next/script` strategies; treat `lazyOnload` analytics as a pass unless other evidence shows blocking behavior.

### Homepage Audit from Multiple Tool Pages

- When the user asks for a homepage audit/update plan based on all tools, read every included tool `page.tsx` before producing recommendations, then read global layout, sitemap, homepage, and the homepage components/registries that render visible sections (for example Hero, StatsStrip, FeaturedToolsSection, FAQ data, and `constants/tools.ts`).
- For each tool, extract a source-of-truth row: metadata title/description/keywords, visible H1, target audience, core features, FAQ count/coverage, schema types, canonical route, and primary keyword cluster. Do not infer a feature for the homepage unless it appears in the current tool code or registry.
- Compare homepage metadata, H1, hero copy, trust pills, stats, cards, FAQ, schema, and sitemap against that source-of-truth table. Flag omissions when a major current tool (for example EPF/KWSP) is missing from homepage positioning, and flag stale overclaims such as `live`, `real-time`, or broad country counts when the underlying tool now uses estimates or the registry has fewer/limited tools.
- Inspect card text in the registry, not only visible homepage JSX, because homepage grids often render from `TOOLS`. Recommend registry copy changes when cards contradict the tool page (for example a card still says `Live Gold Price` after the calculator moved to estimated gold value language).
- For homepage structured data, recommend `ItemList` for all current tool URLs and generate it from the verified tool set. Only keep `SearchAction` if a real search route exists; do not point `SearchAction` at guessed dynamic tool paths.
- Check global language/hreflang against the whole site. If `<html lang>` is country-specific but the homepage targets multiple regions, recommend a neutral `en` plus page-specific alternates where applicable.
- Produce a section-by-section update plan with exact replacement copy for metadata, H1, hero badge/paragraph, trust pills, tool cards, FAQ entries, JSON-LD, sitemap dates, and a ranked developer checklist. Keep it audit-only unless the user explicitly asks for implementation.

### Keyword and Intent Analysis

- Extract current primary, secondary, and supporting entity keywords from metadata, H1, first paragraph, headings, body, FAQ, and schema.
- Distinguish good keyword placement from over-expanded/repetitive metadata keywords.
- Map the user's named search intents one by one as `YES`, `NO`, or `PARTIAL`, citing the exact content evidence or gap.
- For multilingual or regional opportunities, check whether Arabic/Urdu/local-language terms are actually present before recommending additions.
- Recommend semantic/LSI and long-tail opportunities only when they fit naturally.

### Ranking-Drop or CTR-Loss Analysis

- If impressions are high but clicks are low, focus on SERP mismatch: generic title, missing numbers/prices, missing emotional triggers, page ranking for informational queries while snippet presents only tool intent, and body strengths not reflected in metadata.
- If impressions/rankings recently dropped, separate verified facts from hypotheses.
- Check public Google Search Central ranking-update information and Search Status Dashboard when web access is available.
- State whether a ranking/core update is plausible and whether crawling/indexing/serving incidents are indicated.
- Recommend Search Console checks: query-level loss, average position vs CTR, indexing/canonical status, rich result loss, recrawl date, and comparison windows.
