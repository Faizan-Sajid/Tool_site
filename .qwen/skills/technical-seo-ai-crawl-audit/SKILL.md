---
name: technical-seo-ai-crawl-audit
description: Audit and fix technical SEO issues affecting both Google rankings and AI crawler access in 2026. Covers Core Web Vitals signals, JavaScript rendering for AI bots, robots.txt AI agent configuration, llms.txt discovery, Cloudflare bot management, sitemap freshness, ISR/SSR architecture verification, and INP (Interaction to Next Paint) — a confirmed 2026 ranking factor. Use after a core update ranking drop or when AI crawler access is suspected to be blocked.
source: auto-skill
created_at: '2026-06-01T00:00:00.000Z'
---

# Technical SEO & AI Crawl Audit

Use this skill after a core update ranking drop, when AI crawler access is suspected to be blocked, or as part of a full technical health review.

## Procedure

### 1. Two Audiences, One Technical Audit

In 2026, every technical SEO audit must serve two audiences: Googlebot (traditional SEO) and AI crawlers (GEO). These crawlers have different behaviors:

| Property | Googlebot | GPTBot / ClaudeBot / PerplexityBot |
|---|---|---|
| JavaScript execution | Yes (full rendering) | No — raw HTML only |
| robots.txt respect | Yes | Yes (but must be explicitly allowed) |
| Sitemap consumption | Yes | Partial (llms.txt preferred) |
| Crawl frequency | Regular | Irregular — verify via server logs |
| Blocking mechanism | Googlebot directives | Cloudflare Bot Fight Mode also blocks |

This distinction means a page that is technically healthy for Google may be completely invisible to AI crawlers.

### 2. robots.txt Audit

Read `app/robots.ts`. Check and fix:

**A — Wildcard rule conflict:** A `userAgent: '*'` with `disallow: ['/api']` rule is fine. But if any wildcard rule disallows paths that contain indexable content, verify it does not catch tool routes or main pages.

**B — AI crawler entries:** Add explicit allow entries for all 8 AI crawler user-agents listed in the GEO audit skill (GPTBot, ClaudeBot, PerplexityBot, anthropic-ai, Google-Extended, OAI-SearchBot, Applebot-Extended, CCBot).

**C — llms.txt Sitemap entry:** Must appear as a second `Sitemap:` entry alongside sitemap.xml.

**D — Query parameter blocking:** Check for patterns like `disallow: ['/*?*']` — these block URLs with query strings and may affect breadcrumb navigation or filter pages that have legitimate content. Flag any blocked query patterns affecting visible content pages.

### 3. JavaScript Rendering Check for AI Crawlers

This is the most commonly missed technical issue in 2026.

**Step 3a — Identify client-only content:**
Search the codebase for `"use client"` components that are imported directly into tool page `page.tsx` files and contain significant text content (explanatory paragraphs, FAQ sections, pricing tables). These sections are invisible to AI crawlers.

**Step 3b — Verify with curl simulation:**
```bash
curl -A "GPTBot/1.2" "https://yourdomain.com/tools/your-tool" -s | grep -c "<p"
curl -s "https://yourdomain.com/tools/your-tool" | grep -c "<p"
```
If the GPTBot curl returns significantly fewer `<p>` tags than the standard curl, content is being rendered client-side and is invisible to AI crawlers.

**Step 3c — Fix strategy:**
Move static SEO content (explanatory paragraphs, FAQ sections, methodology boxes) out of `"use client"` components and into server components in `page.tsx`. The interactive calculator logic stays client-side; the surrounding content becomes server-rendered. This is the correct Next.js architecture pattern.

**Step 3d — ISR for dynamic data:**
For pages that need fresh data (live rates, current prices), use Next.js ISR (`revalidate: 3600`) on server components instead of client-side `useEffect` data fetching. ISR serves static HTML to AI crawlers while keeping data fresh.

### 4. Core Web Vitals — 2026 Status

Core Web Vitals are page experience ranking signals. In 2026 the measured metrics are:
- **LCP (Largest Contentful Paint):** Target < 2.5s. For tool pages: the calculator UI or hero image is often the LCP element. Optimize: preload hero images, use `next/image` with `priority` prop, avoid render-blocking third-party scripts.
- **INP (Interaction to Next Paint):** Replaced FID in March 2024. Target < 200ms. Confirmed 2026 ranking factor. For React/Next.js apps: avoid long JavaScript tasks on the main thread, use Partial Hydration / Island Architecture. Measure with `web-vitals` npm package.
- **CLS (Cumulative Layout Shift):** Target < 0.1. For tool pages: define explicit dimensions for calculator containers, use skeleton loaders with matching dimensions.

From code review (no Lighthouse access): flag these common issues:
- `<img>` tags without `width` and `height` attributes → CLS risk
- `<Suspense>` fallbacks with `h-40` fixed height but actual content is much taller → CLS risk
- Heavy `framer-motion` animations on initial load → INP risk
- `next/font` not used (external font requests block LCP)
- `loading="lazy"` on above-the-fold images → LCP delay

### 5. Sitemap Freshness Audit

Read `app/sitemap.ts`. Flag:

**A — `new Date()` as lastModified:** Using `new Date()` for every URL means every URL shows today's date on every crawl, even if content has not changed. This is "noisy freshness" — it degrades Google's ability to prioritize which pages to recrawl and adds no real freshness signal.

**Fix:** Use a stable per-tool last-modified date map:
```typescript
const TOOL_LAST_MODIFIED: Record<string, string> = {
  '/tools/gosi-calculator': '2026-03-15',
  '/tools/epf-calculator': '2026-01-20',
};

lastModified: TOOL_LAST_MODIFIED[tool.href] ?? '2025-12-01',
```

**B — Missing tools from sitemap:** Cross-reference TOOLS registry against sitemap tool URLs. Any tool in TOOLS that does not appear in the sitemap will not be discovered by Google via sitemap submission.

**C — Legal/static page freshness:** Pages like `/privacy`, `/terms`, `/about` should use their actual creation date as `lastModified`, not `new Date()`. Use `git log --follow -1 --format="%ci" app/path/to/page.tsx` to find the last actual file modification date.

### 6. Internal Linking Audit for Topical Authority

In 2026, topical authority is a key core update ranking signal. Google evaluates whether a site demonstrates expertise in its domain by analyzing how comprehensively it covers related topics through internal linking.

Check:
- Does the homepage link to all major tool categories?
- Does each tool page link to at least 3–5 related tools using descriptive anchor text?
- Is there a footer that links to all major tools (not just the homepage)?
- Are there "hub" pages that group tools by category and link to each one?

The `cross-tool-internal-link-update` skill handles implementation — this audit step identifies the gaps and estimates their impact.

### 7. Verification Checklist

Output a copy-pasteable developer checklist:

```
TECHNICAL SEO / AI CRAWL AUDIT — ACTION ITEMS

CRITICAL (fix within 48 hours):
[ ] Cloudflare Bot Fight Mode: verify Off in dashboard
[ ] robots.txt AI crawler entries: GPTBot, ClaudeBot, PerplexityBot added and allowed
[ ] JavaScript rendering: primary content server-rendered (not client-only useEffect)

HIGH (fix within 1 week):
[ ] llms.txt: dynamic route live at /llms.txt
[ ] llms.txt: referenced as second Sitemap: entry in robots.txt
[ ] Sitemap lastModified: replaced new Date() with stable per-tool dates
[ ] All TOOLS registry items present in sitemap.xml

MEDIUM (fix within 1 month):
[ ] INP: measure with web-vitals package; target < 200ms
[ ] LCP: next/image priority prop on above-the-fold images
[ ] CLS: explicit dimensions on calculator containers and Suspense fallbacks
[ ] Internal linking: hub pages or category pages with links to all tools

MONITORING:
[ ] GA4: AI referral channel group set up (chatgpt.com, perplexity.ai, gemini.google.com)
[ ] Search Console: date range marked May 21, 2026 (core update start)
[ ] Monthly: run 15-20 target queries through ChatGPT + Perplexity, track citations
```

## Output Pattern

- Start with the dual-audience audit framing (Googlebot + AI crawlers).
- Provide findings organized by severity (CRITICAL, HIGH, MEDIUM, MONITORING).
- For each finding: file path, exact code or configuration issue, and fix recommendation with code.
- Include the curl comparative `<p>` tag count as evidence of JS rendering gaps.
- Include the copy-pasteable developer checklist as a summary.
- End with estimated time-to-impact for each fix category.
