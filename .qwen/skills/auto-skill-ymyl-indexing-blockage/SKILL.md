---
name: ymyl-indexing-blockage
description: Diagnose why a specific YMYL (Your Money Your Life) Next.js tool page is refused entry into Google's index when all sibling pages on the same domain index normally. Uses comparative sibling analysis, blog/cluster pipeline audit, and E-E-A-T hard threshold verification to identify the most likely failure-chain cause. NOT for pages that ranked and lost rankings — use impressions-collapse-penalty-diagnosis for that.
source: auto-skill
extracted_at: '2026-06-23T06:51:43.329Z'
---

# YMYL Indexing Blockage Diagnosis

Use this skill when a user reports that **one specific YMYL tool page (financial/legal/health/tax calculator) is refused by Google's index** — URL Inspection shows "Crawled — currently not indexed", "Discovered — currently not indexed", or similar — while 5–15+ other tool pages on the same domain index normally (often within minutes of URL Inspection submission).

**This is not a ranking-drop skill.** If the page was previously indexed and lost impressions, use `impressions-collapse-penalty-diagnosis`. This skill is for pages that cannot enter the index at all.

## Assumption / Starting Check

Before starting the diagnostic, rule out the most obvious technical blockers. If any of these are true, the fix is technical, not structural:

- Page has `noindex` in metadata, `X-Robots-Tag` header, or robots.txt disallow
- Canonical URL points to a different page or is self-referencing incorrectly
- Server returns HTTP 4xx or 5xx for the page
- Page is behind authentication or geo-block
- Page is a soft 404 (returns 200 but has "page not found" text)

If none of the above apply and the page is genuinely crawlable, proceed with the YMYL structural diagnostic.

## Core Files to Read

| File | Why |
|---|---|
| `app/tools/<slug>/page.tsx` | Metadata, schema, server-rendered content, component imports |
| `app/tools/<slug>/<Content>.tsx` | Content depth, author signals, methodology box, citations |
| `app/layout.tsx` | Root metadata merges, global robots, Organization schema |
| `app/robots.ts` / `app/robots.txt` | AI crawler access |
| `app/sitemap.ts` | lastModified, inclusion, priority |
| `constants/tools.ts` | Tool registry entry |
| `content/blog/*.md` | Blog frontmatter for `relatedTool` fields |
| `lib/blog.ts` | Blog pipeline function signatures |
| `components/blog/RelatedGuides.tsx` (or similar) | Blog interlinking component |
| All sibling `app/tools/<other-slug>/page.tsx` files | Comparative analysis — what do they do that this page doesn't? |

## Procedure

### Step 1 — Inventory Target Page & Identify Positive Controls

1. List the target route folder and read all its files.
2. Read 2–3 sibling tool pages that DO index (ask the user to confirm which pages index fine, or use the sitemap + GSC hints). These are your **positive controls**.
3. Build a comparison matrix across these dimensions:

| Dimension | Target Page | Sibling A (indexed) | Sibling B (indexed) |
|---|---|---|---|
| Server-rendered H1? | ✅/❌ | | |
| Named author in content? | ✅/❌ | | |
| Dedicated methodology box? | ✅/❌ | | |
| Content blog post exists? | ✅/❌ | | |
| `RelatedGuides` imported in page.tsx? | ✅/❌ | | |
| Outbound citations to official sources? | ✅/❌ | | |
| Schema author as `Person` (not just `Organization`)? | ✅/❌ | | |
| Visible "last updated" date? | ✅/❌ | | |
| YMYL-sensitive topic? | 🔴/❌ | | |

**Key insight:** The dimension(s) where the target page is ❌ but BOTH siblings are ✅ are the most likely failure causes.

### Step 2 — Content Cluster Audit (Blog Pipeline Check)

Google's 2026 core updates enforce **topical authority clusters** for YMYL pages. A standalone calculator page without supporting editorial content is treated as an orphan.

1. **List all blog posts in `content/blog/`.** Read their frontmatter, specifically the `relatedTool` field.
2. **Count how many blog posts link TO the target tool** via `relatedTool`.
3. **Check the target page's `page.tsx`** for `import RelatedGuides` and the `<RelatedGuides>` JSX component.
4. **Compare against positive controls:** How many blog posts do indexed sibling tools have?

**Diagnosis rule:**
- If 0 blog posts link to the target tool BUT sibling tools have 1+ posts each → **HIGH probability this is the primary blockage cause**
- If the target page does NOT import `<RelatedGuides>` but sibling pages do → **contributing cause**
- If the target page imports `<RelatedGuides>` but renders null (no matching posts exist) → **contributing cause — need to create blog post**

### Step 3 — E-E-A-T Hard Threshold Verification (YMYL-Specific)

Using the 5 mandatory signals from the Content Freshness & E-E-A-T Monitor framework:

| Signal | Pass/Fail | Why It Matters for Indexing |
|---|---|---|
| **Signal 1:** Visible last-updated date | Must be prominently near H1, not buried in a footer disclaimer | Google checks this before granting YMYL index entry |
| **Signal 2:** Named author/reviewer with credentials | A named individual (not just "QuickCalcs Team") with verifiable credentials | **Most common YMYL indexing blocker.** If absent, page is treated as anonymous financial content |
| **Signal 3:** Dedicated methodology box | Explicit formula, assumptions, data sources, rounding behavior in a visible callout box | Demonstrates verifiability — a core 2026 trust signal |
| **Signal 4:** Outbound citations to official sources (clean followed links) | Links to government portals, central banks, legal databases — no `rel="nofollow"` | Endorsing authority sources via followed links builds trust |
| **Signal 5:** No stale/mismatched claims | No "live rates" for hardcoded data, no 2023-era data on a 2026 page | Prevents Trust Mismatch spam flag |

**YMYL Indexing Rule (derived from May 2026 core update):**
If Signal 2 + Signal 3 are BOTH absent on a financial/tax calculator page, Google's quality assessment categorizes the page as "anonymous financial advice without methodology" and **may refuse index entry entirely** regardless of metadata or canonical correctness.

### Step 4 — Build the Failure-Chain Hypothesis

Combine findings from Steps 1–3 into a causal chain. A typical YMYL indexing refusal chain looks like:

```
[YMYL Topic: Pakistani Tax Law] 
  → No named author (Signal 2 FAIL)
  → No methodology box (Signal 3 FAIL)
  → 0 blog posts link to this page (Content Cluster FAIL)
  → Sibling pages have all three signals and index fine
  → Conclusion: Google's YMYL quality threshold not met for this page
  → Index refused: "Crawled — currently not indexed"
```

Alternative chains can include:
- "Schema validation warning + missing E-E-A-T + no blog content"
- "No RelatedGuides + no blog posts + stale lastModified date"
- "isBasedOn unconventional usage on WebPage type + missing author"

### Step 5 — Produce the Recovery Plan

For each failed dimension, produce an exact code-level fix with concrete implementation patterns.

**Pattern A — E-E-A-T Trust & Methodology Box (covers Signals 1, 2, 3 in one component)**

Replace an existing thin disclaimer/metadata block with a structured three-part E-E-A-T box. This single component covers "last updated" (Signal 1), "named reviewer" (Signal 2), and "methodology box" (Signal 3):

```tsx
<section className="mb-8 rounded-2xl border border-[rgba(201,168,76,0.18)] bg-[rgba(201,168,76,0.05)] p-5">
  <p className="text-xs text-[#87847d] mb-1">
    <strong>Last reviewed:</strong> June 23, 2026
  </p>
  <p className="text-xs text-[#87847d] mb-3">
    <strong>Reviewed by:</strong> [Team Name] — verified against [Official Source 1],
    [Official Source 2], and [Official Source 3] guidelines.
  </p>
  <div className="border-t border-[rgba(255,255,255,0.07)] pt-3 mt-3">
    <p className="text-xs font-semibold text-[#e6e3db] mb-1">Calculation Methodology</p>
    <ul className="text-xs text-[#87847d] space-y-1 list-disc list-inside">
      <li>Tax = Income × Applicable Rate (X% / Y% / Z%)</li>
      <li>Applies to [specific condition/scenario]</li>
      <li>Based on [legal basis] — [additional context]</li>
    </ul>
  </div>
</section>
```

**Implementation rules:**
- Place this IMMEDIATELY after the `<article>` wrapper, before any content H2 sections
- Use `text-xs` to keep the box compact and non-distracting from primary content
- The `strong` inner elements create visible keywords for skimmers without over-bolding
- The methodology list should contain 2–4 items minimum: formula, scope, legal basis, data source

**Pattern B — Schema Author & isBasedOn Structured Data Edge Cases**

If the page uses `@graph` with multiple schemas, fix BOTH the `WebPage` AND `SoftwareApplication` nodes:

```tsx
// In WebPage node — use CreativeWork objects instead of raw URL strings:
isBasedOn: [
  { "@type": "CreativeWork", name: "Source Name — Description", url: "https://..." },
  { "@type": "CreativeWork", name: "Another Source", url: "https://..." },
]

// In SoftwareApplication node — use author array with Person:
author: [
  { "@type": "Organization", name: "QuickCalcs" },
  { "@type": "Person", name: "QuickCalcs Financial Content Team" }
]

// Always update dateModified to current date:
dateModified: "2026-06-23"
```

**Why `CreativeWork` instead of plain strings:** Google's structured data validator issues warnings when `isBasedOn` contains URL strings on a `WebPage` type. Wrapping URLs in `{ "@type": "CreativeWork", name, url }` satisfies schema validation and improves AI crawler comprehension of the page's data provenance.

**Pattern C — RelatedGuides Integration for Blog Interlinking**

In the target `page.tsx`, add at the correct position (after the content component, inside the main wrapper):

```tsx
// Import at top
import RelatedGuides from "@/components/blog/RelatedGuides";

// JSX — place after the content component, before the closing </div>
<FreelancerTaxContent />
<RelatedGuides relatedTool="/tools/pakistan-freelancer-tax-calculator" />
```

The blog post itself must have frontmatter with the matching `relatedTool` value:
```yaml
---
title: "Tool Guide 2026: Complete Guide for [Topic]"
description: "Complete guide to [topic] in 2026. Learn [key concepts]..."
date: "2026-06-23"
lastModified: "2026-06-23"
slug: "<tool-slug>-guide"
category: "Financial Tools"
readingTime: "12 min read"
relatedTool: "/tools/<tool-slug>"
author: "[Team Name]"
---
```

**Pattern D — AEO H2 Conversion for YMYL Tool Pages**

Convert statement-form H2 headings into conversational questions matching real user search queries:

| Before (Statement) | After (Question / AEO) |
|---|---|
| How Does [Topic] Tax Work in 2026? | **How Does the FBR [Topic] Tax Regime Work in Pakistan for 2026?** |
| What Are the [Topic] Tax Rates in 2026? | **What Are the Official FBR [Topic] Tax Rates in Pakistan for 2026?** |
| How Do You Calculate Tax on [Platform]? | **How Do I Calculate Tax on [Platform] Income?** |
| Annual Return Deadline and Records to Keep | **What is the FBR Tax Return Deadline for Pakistani Freelancers in 2026?** |
| Tax on [Platform 1, Platform 2] Income — 2026 | **Does the Reduced Tax Rate Apply to [Platform 1], [Platform 2], and Direct Foreign Clients?** |

**Rules:**
- Use first-person ("How Do I") over second-person ("How Do You") for CTR lift
- Include the government body name (FBR, IRS, etc.) in the query for authority
- Add "Official" when describing rates/rules to signal trustworthiness
- Convert passive "Record Keeping" sections into "What is the deadline?" queries
- Convert year-in-title statements into direct questions

**Pattern E — Strategic Bold Formatting for Skim-Reading**

Add `<strong className="text-[#e6e3db]">` to these elements in YMYL financial content:

| What to bold | Example | Why |
|---|---|---|
| Legal section references | **Section 154A of the Income Tax Ordinance** | Signals authoritative basis |
| Exact tax rates + percentages | **PSEB-registered freelancers (0.25%)** | Key numbers users scan for |
| Hard deadlines | **September 30** | Urgency driver |
| Official body names | **FBR Active Taxpayer List** | Trust marker |
| Acronym definitions on first use | **Proceeds Realization Certificate (PRC)** | Knowledge-building |
| Binary qualifiers | **100% tax credit / 0% exemption** | Clarity in edge cases |
| Specific monetary amounts | **PKR 150,000 per month** | Concrete anchor for examples |

**Anti-pattern:** Do NOT bold entire sentences, paragraphs, or more than 2 phrases per content section. Over-bolding dilutes the skim-reading value and creates visual noise.

### Step 6 — Post-Fix Indexing Request Protocol

After deploying fixes:

1. Run `npm run build` and confirm 0 errors
2. Verify the page renders correctly via `curl` or browser
3. Submit URL via Google Search Console URL Inspection → "Request Indexing"
4. If still refused after 48 hours:
   - Submit a **reconsideration request** explicitly listing the E-E-A-T improvements: named reviewer, methodology box, supporting blog content, updated dates
   - Check the **Search Generative AI performance reports** in GSC (June 2026) for any AI-level quality flags
   - Verify the new blog post is itself indexed (it may help carry the tool page into the index via the cluster relationship)

## Output Format

Produce a structured report with:

```
## Verdict
[blocked | blocked_with_possible_technical_cause | needs_input]

## File Inventory
[List all files read]

## Comparison Matrix
[Table: target vs 2+ sibling pages across key dimensions]

## E-E-A-T Signals Check
| Signal | Status | Code Evidence |
|---|---|---|
| Last Updated | ✅/❌ | file.tsx:N |
| Named Author | ✅/❌ | file.tsx:N |
| Methodology Box | ✅/❌ | file.tsx:N |
| Official Citations | ✅/❌ | file.tsx:N |
| Stale Claims | ✅/❌ | file.tsx:N |

## Content Cluster Status
- Blog posts linking to this tool: N
- RelatedGuides imported in page.tsx: ✅/❌
- Sibling comparison: [details]

## Failure-Chain Hypothesis
[The most likely causal chain]

## Required Code Fixes
[Exact diff or code snippets for each fix, ordered by impact]

## Post-Fix Protocol
[Steps for GSC re-submission]
```

## Limitations

- This diagnostic cannot read Google Search Console data, server logs, or live HTTP response headers. Verify actual server status via browser DevTools → Network tab → response headers.
- If the page returns a 4xx/5xx or shows a blank server response, diagnose server/rendering issues first.
- Blog content cluster issues can only be diagnosed if the project has a blog pipeline (`content/blog/` directory, `getAllPosts()` function, `RelatedGuides` component). Adjust for projects without blogs.
