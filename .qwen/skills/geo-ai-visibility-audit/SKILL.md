---
name: geo-ai-visibility-audit
description: Audit a Next.js site's visibility in AI-powered answer engines (Google AI Overviews, ChatGPT, Perplexity, Gemini, Copilot). Covers AI crawler access, llms.txt, entity consistency, answer-block structure, citation readiness, and GEO KPI measurement. Use when the user asks why their site does not appear in AI answers, or as part of a full SEO/GEO audit.
source: auto-skill
created_at: '2026-06-01T00:00:00.000Z'
---

# GEO / AI Visibility Audit

Use this skill when the user asks why their site does not appear in AI answers (ChatGPT, Perplexity, Google AI Overviews, Gemini, Copilot), or as part of a full SEO/GEO audit.

## Procedure

### 1. Understand the GEO vs SEO Distinction

Begin every GEO audit by explaining (in your audit output) the fundamental difference: Traditional SEO measures rankings and clicks. GEO measures citation frequency, citation position, and AI referral traffic. A site can rank #1 on Google and still have zero AI citations. The two are increasingly decoupled — research shows the overlap between top Google links and AI-cited sources has dropped to below 20% in 2026.

Establish three GEO baseline KPIs before auditing anything:
- **Citation Rate:** What percentage of test queries (on ChatGPT, Perplexity, Google AI Overviews) include a link to the site?
- **Mention Rate:** What percentage include the brand name even without a link?
- **Citation Position:** When cited, does the site appear first, or buried at the end of the AI answer?

Instruct the developer to test 15–20 target queries manually across ChatGPT, Perplexity, and Google AI Overviews, recording results in a spreadsheet. This is the baseline against which all improvements are measured.

### 2. AI Crawler Access Audit

**Step 2a — robots.txt check:**
Open `app/robots.ts`. Verify that the following user-agents are NOT disallowed (they should have explicit `allow: '/'` or simply not be blocked):
- `GPTBot` (OpenAI/ChatGPT)
- `ClaudeBot` (Anthropic/Claude)
- `PerplexityBot` (Perplexity.ai)
- `anthropic-ai` (Anthropic API crawlers)
- `Google-Extended` (Google AI training + Gemini)
- `OAI-SearchBot` (OpenAI Search/SearchGPT)
- `Applebot-Extended` (Apple Intelligence)

Flag as **CRITICAL** if any of these are blocked. A blocked GPTBot means ChatGPT will never cite this site. A blocked Google-Extended means Google's AI may not learn from the content.

**Step 2b — Cloudflare Bot Fight Mode check:**
This cannot be verified from code. Provide the developer with this exact instruction: "Go to Cloudflare Dashboard → your domain → Security → Bots. If 'Bot Fight Mode' is On, either turn it Off or add AI crawler IPs/user-agents to the whitelist. Cloudflare changed its default in 2024 to block automated traffic — this includes all legitimate AI crawlers."

**Step 2c — JavaScript rendering check:**
Run a simulated AI crawler fetch: `curl -A "GPTBot/1.2" https://yourdomain.com/tools/your-tool-slug --max-time 10 -s | grep -o '<main[^>]*>.*</main>' | head -c 500`

If the returned `<main>` content is empty or contains only loading skeletons (e.g. `Loading...`, `<div class="animate-pulse">`), the page content is invisible to all AI crawlers. Root cause: content rendered in `"use client"` component without SSR. This is a CRITICAL GEO blocker.

**Step 2d — llms.txt check:**
Fetch `https://yourdomain.com/llms.txt`. If it returns 404, flag as **HIGH — AI engines cannot discover site structure**. If it returns content, verify: (a) site description is present and accurate, (b) all major tools are listed with their URLs and descriptions, (c) the file is not static (static files go stale — verify it is generated from the TOOLS registry dynamically).

### 3. Content Extractability Audit

**Step 3a — Answer-first block:**
The page must contain a passage of 120–180 words that (a) directly answers the tool's primary query, (b) stands alone without context, (c) includes verifiable facts or figures, (d) appears above the fold. If this passage does not exist, AI engines cannot extract a citation-worthy answer from this page.

**Step 3b — Content length:**
Count words in the page's explanatory content (exclude tool UI, navigation, footer). If under 1,500 words, flag as HIGH for GEO — AI citation studies show preference for content over 2,500–3,500 words for informational queries. Pure tool pages with no explanatory content will not be cited.

**Step 3c — Comparison tables:**
Do comparison tables exist for relevant data (e.g., rates by country, contribution tiers, fee structures)? Tables are one of the highest-extractability content formats for AI engines. If relevant comparisons are presented as prose, recommend converting to `<table>`.

**Step 3d — Outbound citations:**
Count outbound links to official primary sources. Zero outbound citations = low AI trust signal. AI tools prefer content that cites credible sources because it signals the content is reliable enough to build on. Every factual claim (rate, law, percentage) should link to its official source.

**Step 3e — Content freshness:**
Check `dateModified` in schema and visible "Last Updated" date on page. Content not updated since before 2025 is deprioritized in AI citation pools. Flag any page whose last-modified date is over 12 months ago.

### 4. Entity Consistency Audit

**Step 4a — Brand entity check:**
Search the codebase for the site's brand name across: `app/layout.tsx` (title template), `constants/tools.ts`, homepage metadata, `Organization` schema (if present), OG tags, and `llms.txt`. All must use the identical brand name — inconsistency degrades the AI's entity model of the site.

**Step 4b — Organization schema:**
Is `Organization` schema implemented globally (in `app/layout.tsx` or a dedicated `JsonLd` component)? Required fields: `@type: "Organization"`, `name`, `url`, `logo` (with `@type: "ImageObject"`, `url`), `description`, `sameAs` (array of social/directory URLs: LinkedIn, GitHub, etc.). If absent, flag as **HIGH — entity signals weak for GEO**.

**Step 4c — Off-site entity signals (manual check, cannot be verified from code):**
Provide this checklist to the developer:
- Is the site listed on Crunchbase, Product Hunt, or similar directories?
- Does the site have a LinkedIn company page?
- Is there a Wikipedia article about the site or its brand? (Wikipedia alone accounts for ~11% of all AI Overview citations)
- Are there Reddit mentions, forum discussions, or third-party reviews?
- Do the brand name and site description match consistently across all these external sources?

Any inconsistency ("QuickCalcs" on the site vs "Quick Calcs" on Crunchbase) creates an entity resolution failure that causes AI engines to treat them as separate entities.

### 5. Structured Data Extractability

**Step 5a — Schema type review for GEO:**
Preferred 2026 schema types for AI citation:
- `SoftwareApplication` / `WebApplication` for calculators (with `offers`, `applicationCategory`, `operatingSystem`)
- `WebPage` with `dateModified`, `author`, `reviewedBy`, `about`, `citation`
- `Article` for informational content (ChatGPT favors `Article` schema explicitly)
- `Organization` at site level
- `ItemList` for hub pages (list all tool URLs)
- `BreadcrumbList` for navigation signals
- `HowTo` only when visible step content exists

**Step 5b — FAQPage deprecation:**
If `FAQPage` JSON-LD exists anywhere, flag as **HIGH — deprecated May 7, 2026**. Remove JSON-LD, preserve visible HTML.

**Step 5c — Schema validation:**
Recommend running all schemas through schema.org validator and Google's Rich Results Test. Check that `dateModified` is a real date, not `new Date()`.

### 6. GEO Competitor Benchmark

**Step 6a — Prompt testing:**
Instruct the developer to run the site's top 5 primary queries through ChatGPT, Perplexity, and Google AI Overviews. For each query, record: (a) which sources are cited, (b) what those pages have in common (length, structure, schema, outbound links, recency).

**Step 6b — Competitor analysis:**
For each query where the site is NOT cited but competitors are, analyze the competitor pages:
- Are they longer? (Over 2,900 words?)
- Do they cite official sources with outbound links?
- Do they have answer-first paragraphs?
- Do they have author bios with credentials?
- Are they updated more recently?

This gap analysis drives the GEO improvement roadmap.

### 7. GEO Measurement Setup

Provide the developer with this tracking setup:

Define 15–25 target prompts representing the site's core query clusters. Run each monthly across ChatGPT, Perplexity, Google AI Overviews. Track in a spreadsheet:
- Was the site cited? (Y/N)
- Citation position (1st, 2nd, buried)
- Was the brand mentioned without a link? (Y/N)
- Which competitor was cited instead?

In GA4: set up a custom channel group for "AI Referral" by filtering sessions where `source` matches: `chatgpt.com`, `perplexity.ai`, `chat.openai.com`, `gemini.google.com`, `copilot.microsoft.com`. Monitor AI referral traffic monthly alongside organic.

### 8. Scored GEO Audit Output

Return a GEO Readiness Score (0–100) broken into:
- AI Crawler Access: 0–25 (robots.txt entries, Cloudflare check, JS rendering, llms.txt)
- Content Extractability: 0–25 (answer blocks, length, tables, outbound citations, freshness)
- Entity Signals: 0–25 (Organization schema, brand consistency, off-site mentions)
- Structured Data: 0–25 (schema types, FAQPage deprecation, validation)

Verdict states: `geo_ready` (75+), `geo_partial` (50–74), `geo_blocked` (AI crawlers blocked — immediate fix required), `geo_not_started` (below 50).

End with a prioritized 30/60/90-day GEO roadmap:
- **Days 1–30:** Remove all access blockers (robots.txt, Cloudflare, JS rendering, llms.txt)
- **Days 31–60:** Add answer-first blocks, update schema, add Organization entity, improve content length and outbound citations
- **Days 61–90:** Build off-site entity signals (Digital PR, directory listings, Wikipedia), begin monthly citation monitoring

## Output Pattern

- Start with GEO overview: explain the SEO vs GEO distinction and current AI landscape context.
- Provide the GEO Readiness Score with four sub-scores in a table.
- State the verdict clearly.
- For every issue, cite the file and exact code evidence when possible.
- Provide priority levels: CRITICAL, HIGH, MEDIUM, LOW.
- Include manual-check items (Cloudflare, off-site entity signals) as developer action items.
- End with the 30/60/90-day roadmap.
