---
name: gsc-query-driven-content-expansion
description: Use Google Search Console query-level data (impressions, position, CTR) to systematically prioritize metadata changes, fill content gaps, add new sections targeting specific queries in striking distance of page 1, and add geo/bilingual signals — all driven by actual search performance data.
source: auto-skill
extracted_at: '2026-06-13T11:42:57.134Z'
---

# GSC Query-Driven Content Expansion

Use this skill when you have GSC data showing a page has high impressions (>500/mo) but low CTR (<1%), and you need to systematically add content sections targeting the specific queries that are already ranking in positions 7-15 (striking distance of page 1) or that are completely untapped (position >20).

## Prerequisites

- GSC query-level data for the target page (impressions, clicks, CTR, avg position per query)
- The page already has basic SEO metadata and a working tool/calculator

## Procedure

### Step 1 — Analyze GSC Query Data into Three Buckets

Read the GSC data and categorize every query with >5 impressions:

**Bucket A — Primary (positions 1-6, high impressions):**
These queries are already performing well. Identify which one appears first in your title tag. If the highest-volume query is NOT the first word of your title, move it there.

**Bucket B — Striking Distance (positions 7-15):**
These queries are close to page 1. Each one needs a dedicated content section that directly targets it. Calculate the exact impression uplift if moved to position 3.

**Bucket C — Untapped Gaps (position 16+ or zero impressions):**
These are queries competitors rank for but your page doesn't. Identify which search intents they represent and add new content sections.

Also identify:
- **Zero-click queries** (high impressions, 0 clicks) — these need the most urgent metadata rewrite
- **Geo-specific queries** (e.g. "GOSI in Saudi Arabia", "التأمينات الاجتماعية") — these need geo signals
- **Long-tail "how much" queries** (e.g. "GOSI deduction SAR 10000 salary") — these need salary/rate range tables

### Step 2 — Title & Metadata Rewrite (CTR-First)

**Title:**
Move the highest-volume Bucket A query to the first word position. Example:
- ❌ `"Saudi GOSI Calculator 2026 | Net Salary After GOSI"` — "Saudi" is first, not "GOSI calculator"
- ✅ `"GOSI Calculator 2026 — KSA Net Salary for Saudis & Expats"` — "GOSI calculator" is first

Rules:
1. Primary keyword first — the highest-impression query from GSC
2. Year in the title (freshness signal)
3. 50-60 characters max
4. Use em dash (—), not pipe (|), per Google UX guidelines
5. Include the country/region for geo entity signal

**Meta description:**
Start with the user's identity or pain point that matches the highest-impression query. Example:
- ❌ `"Calculate exact GOSI deductions..."` — starts with verb, generic
- ✅ `"Saudi national or expat in KSA? See your exact GOSI deduction instantly..."` — starts with user identity question

Rules:
1. Start with a question identifying the user matching the primary query
2. Include specific numbers (10.75%, SAR 45,000, etc.)
3. 150-160 characters
4. End with freshness signal: `"Free, updated June 2026"`

**Keywords array:**
Organize by GSC bucket, not alphabetically:
```typescript
keywords: [
  // Bucket A — Primary queries from GSC
  "highest impression query",
  "second highest impression query",
  // Bucket B — Striking distance queries (pos 7-15)
  "query at position 8",
  "query at position 11",
  // Bucket C — Untapped gaps
  "competitor query with no coverage",
  // Geo signal keywords
  "Arabic term for English search",
  "Arabic term 2026",
]
```

### Step 3 — Create a Content Section for Every Striking Distance Query

For each query in Bucket B (positions 7-15), add a dedicated `<article>` section that:

1. **H2 matches the exact query phrasing** (question format preferred)
2. **First paragraph is a direct answer** (120-180 words, standalone — AI extractable)
3. **Includes a comparison table** (HTML `<table>` with `<thead>`) — highest extractability for AI engines
4. **Includes a worked example** with real numbers — this is what ranks for "how much" queries
5. **Links to official sources** for E-E-A-T

Priority: add sections for queries with highest impression count first.

**Query intent mapping for section types:**
| GSC Query Pattern | Content Section Type |
|---|---|
| "how much does X take from salary" | Salary/rate range table (SAR 5K → SAR 50K+) |
| "X for non-nationals / expats" | Dedicated expat/nationality section with worked examples |
| "X for GCC nationals" | Geo-specific variant section |
| "X pension formula" | Formula with worked example |
| "X gross vs net" | Job offer comparison table with side-by-side Saudi vs Expat columns |
| "X payslip" | Payslip verification checklist |
| "X job offer" | Contract negotiation section with gross-to-net walkthrough |

### Step 4 — Add Geo-Specific Content Signals

For pages targeting a specific country (e.g. Saudi Arabia):

1. **Bilingual content block** — Add 3-5 Q&As in the local language (e.g. Arabic) with `dir="rtl"` on each Q&A pair. Place after English content but before internal links. This signals the page is relevant to local-language searchers.

2. **Arabic name in first content paragraph** — In the first explanatory paragraph of Section 1, include the local-language name of the entity (e.g. `"GOSI (General Organization for Social Insurance) — التأمينات الاجتماعية — is..."`). This single line gives a geo relevance signal to Google without needing a separate Arabic page.

3. **Schema geo signals**:
   - `SoftwareApplication.areaServed`: `{"@type": "Country", "name": "Saudi Arabia", "sameAs": "https://www.wikidata.org/wiki/Q851"}`
   - `SoftwareApplication.audience`: `{"@type": "Audience", "audienceType": "Private sector employees in Saudi Arabia, HR managers, payroll teams..."}`
   - `WebPage.inLanguage`: `"en"`
   - `WebPage.speakable`: `{"@type": "SpeakableSpecification", "cssSelector": ["h1", "h2", ".gosi-quick-answer", ".faq-answer"]}`

4. **Local currency** — Use `priceCurrency: "SAR"` (not generic "USD") in SoftwareApplication schema.

### Step 5 — Add "Quick Answer" Box (AI Overview Optimization)

Add a visually distinct box as the FIRST content block after the disclaimer/methodology box (before any H2). This box should:

1. Be styled with a subtle accent border (e.g. gold for financial tools)
2. Have a label: `"GOSI Quick Answer — Saudi Arabia 2026"`
3. List 5 bullets with the essential facts that answer the page's primary queries
4. Use a CSS class like `gosi-quick-answer` that is referenced in the `speakable` schema
5. Each bullet starts with a bold entity label, then the answer

```tsx
<div className="gosi-quick-answer rounded-[14px] border border-[rgba(201,168,76,0.2)] bg-[rgba(201,168,76,0.04)] p-5 text-sm leading-relaxed">
  <p className="text-[#c9a84c] text-xs font-bold mb-3 uppercase tracking-wider">
    GOSI Quick Answer — Saudi Arabia 2026
  </p>
  <ul className="space-y-2 text-[#e6e3db]">
    <li><strong>Entity A:</strong> Rate / rule</li>
    <li><strong>Entity B:</strong> Rate / rule</li>
    <li><strong>Entity C:</strong> Rate / rule</li>
    <li><strong>Entity D:</strong> Rate / rule</li>
    <li><strong>Entity E:</strong> Rate / rule</li>
  </ul>
</div>
```

This box serves multiple purposes:
- AI Overview extraction target (via `speakable` schema + first-content position)
- Featured Snippet candidate (concise, structured, bulleted)
- Quick reference for users scanning the page

### Step 6 — Schema Modernization (2026 Compliance)

**Remove (deprecated):**
- `FAQPage` JSON-LD — deprecated May 7, 2026
- `HowTo` JSON-LD — deprecated on desktop (keep visible HowTo HTML)

**Enhance existing schemas:**

**WebPage schema** — add:
- `datePublished` + `dateModified` (hardcoded, not `new Date()`)
- `inLanguage`: `"en"`
- `speakable` with cssSelectors targeting answer blocks and H2s
- `potentialAction`: `{"@type": "UseAction", "target": "[page URL]"}`
- Expanded `about` array — include every entity mentioned in content sections

**SoftwareApplication schema** — add:
- `areaServed` with `Country` + Wikidata `sameAs`
- `audience` with description of target users
- Expanded `featureList` — include every capability added in new content sections

**Article schema** — replace HowTo with enhanced Article that includes:
- `about` array (list entities from all content sections)
- `keywords` (comma-separated, derived from GSC queries)
- Author/publisher with `logo`

### Step 7 — Update Internal Links

After adding new content sections, update the internal links section:

1. Heading: `"Other GCC Financial Calculators — Related to [Tool Name]"` (emphasizes geo relevance)
2. Update link descriptions to mention how each tool relates to the current page's topic (e.g. "Relevant for Saudi nationals managing post-GOSI net salary")
3. Keep all existing tool links — don't remove, only enhance

### Step 8 — Synchronize Dates Across All Files

Every date field must be synchronized:
| File | Field | Value |
|---|---|---|
| page.tsx JSON-LD `WebPage.dateModified` | `"2026-06-01"` | Must match sitemap |
| page.tsx JSON-LD `Article.dateModified` | `"2026-06-01"` | Must match sitemap |
| sitemap.ts tool entry `lastModified` | `"2026-06-01"` | Must match JSON-LD |
| Visible content "Last updated" | `"June 2026"` | Should match month of dates above |
| layout.tsx Organization schema | N/A | Static, no date needed |

Inconsistency between these dates is an E-E-A-T trust signal degradation.

### Step 9 — Verification

1. **Build check:** `npm run build` — 0 errors required
2. **Title check:** Primary keyword is the FIRST word, not first after a prefix
3. **Meta description check:** Starts with pain point/persona question, 150-160 chars
4. **Schema check:** No FAQPage, no HowTo in @graph; SoftwareApplication has areaServed
5. **GSC date check:** All dates synchronized (schema + sitemap + visible content)
6. **Content section count:** Every Bucket B query has a corresponding H2 section
7. **Arabic check:** Arabic text present in Section 1 first paragraph + bilingual FAQ section
8. **Internal links check:** Descriptions reference the current tool's topic

## Output Pattern

- Start with GSC data analysis: three buckets table (Bucket A, B, C) with impressions, position, CTR per query
- Present the metadata rewrite decision: why each query was chosen for each field position
- For each new content section: state which GSC query it targets, the exact H2, and whether it includes a table
- List all schema changes: what was removed, what was enhanced, what was added
- Confirm date synchronization across all files
- End with build verification result
