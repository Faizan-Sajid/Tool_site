---
name: impressions-collapse-penalty-diagnosis
description: Diagnose a Next.js tool page that suffered a sudden impressions collapse (e.g. 200+ to 10-15 daily) by correlating multiple code-level signals into a failure-chain hypothesis, then produce a phased recovery plan with exact code fixes. Combines SEO audit + E-E-A-T freshness monitor insights. Use when a page was performing well and suddenly dropped after a core update.
source: auto-skill
extracted_at: '2026-06-22T10:59:45.747Z'
---

# Impressions Collapse — Penalty Chain Diagnosis & Recovery

Use this skill when a Next.js tool/calculator page experienced a sudden, dramatic drop in daily impressions (e.g. 200+ → 10-15) following a Google core update. This is not a CTR problem (high impressions, low clicks) — it is a visibility collapse. The approach correlates multiple code-level signals into a "failure chain" hypothesis, identifies the most likely algorithmic trigger, and produces a phased recovery plan with exact code fixes.

## When to Use

- The user reports: "my page had 200+ impressions/day, now it has 10-15"
- The drop coincides with a recent core update (e.g. March 2026, May 2026, May 21 2026)
- The page is YMYL (financial calculator, tax tool, health tool, legal calculator)
- The page content was recently updated before the collapse
- FIRST rule out technical issues: check robots.ts for noindex, canonical mismatch, or server errors

## Core Files to Read

For the target tool page at `app/tools/<tool-slug>/`:

| File | What to Check |
|------|---------------|
| `page.tsx` | Metadata, JSON-LD schema, H1, breadcrumb, FAQ items, visible author/reviewer |
| `<ToolName>Content.tsx` | Outbound link rel attributes, last-updated dates, methodology boxes, author bios, worked examples |
| `<ToolName>Calculator.tsx` | Client-side rendering architecture, `"use client"` usage, hydration boundaries |
| `layout.tsx` (route-level) | If exists, check for metadata overrides, canonical, robots overrides |
| `app/page.tsx` (homepage) | FAQPage schema status, commented-out content blocks, internal links to tool |
| `app/robots.ts` | AI crawler allowances, llms.txt references, disallow patterns |
| `app/sitemap.ts` | lastModified dates per tool, priority, missing entries |
| `public/llms.txt` | Existence, content quality, tool listings |
| `constants/tools.ts` | Tool registry entry: id, href, title, description, country, category |

## Procedure

### Step 1 — Gather Evidence: Read All Core Files

1. Read every file in the target route folder
2. Read homepage `page.tsx` for schema and internal linking
3. Read `robots.ts`, `sitemap.ts`, `llms.txt` (or confirm it's missing)
4. Read tool registry from `constants/tools.ts`

### Step 2 — Build the Failure Chain Hypothesis

Connect discrete code-level signals into a causal hypothesis explaining WHY the impressions collapsed. The failure chain identifies the algorithmic trigger, not just individual issues.

**Common failure chain archetypes for YMYL tool pages:**

| Archetype | Signal 1 | Signal 2 | Signal 3 | Algorithmic Trigger |
|-----------|----------|----------|----------|---------------------|
| **Trust dilution** | `rel="nofollow"` on government/authority outbound links | `reviewedBy` = generic Organization (no named person) | No author bio/credentials on page | YMYL trust vector → helpfulness system flags page as untrustworthy |
| **Staleness penalty** | `dateModified` > 14 days stale | "Last updated: [Month Year]" with no specific day | No content changelog or "what's new" indicator | Content freshness vector demotes page |
| **Deprecated schema cascade** | Homepage FAQPage schema still active (deprecated May 7, 2026) | Tool page correctly removed FAQPage | FAQ content still rendered in visible UI | Content Manipulation flag triggers on homepage, cascades to linked tool pages via PageRank |
| **Broken AI guidance** | `robots.ts` references `llms.txt` in sitemap array | `llms.txt` file does not exist (404) | AI crawlers get no guidance | AI crawler impression re-allocation away from page |
| **Dual-trigger collapse** | Any 2+ of the above present simultaneously | Multiple weak signals compound | — | Combined trigger: YMYL + Content Manipulation flags fire together |

### Step 3 — Score Signals

For each signal found, score:

- **Veto-level (FAIL):** Directly triggers algorithmic penalty. Examples: nofollow on government links, FAQPage schema post-deprecation, mismatched schema vs visible content.
- **High (WARN):** Strong contributory factor. Examples: stale dateModified >14 days, no named author on YMYL page.
- **Medium (PASS/WARN):** Amplifier. Examples: missing llms.txt, generic Organization reviewer, commented-out blocks in homepage JSX.
- **Low (PASS):** Minor. Examples: H1/title keyword placement mismatch.

A page needs **1 veto** or **2+ high signals** in the same failure chain to explain a 200→10 collapse.

### Step 4 — Produce the Audit Report

Output a structured report with these sections:

**1. Executive Summary**
   - The collapse chain diagram (root cause visualization)
   - Single sentence: "Here is exactly why impressions dropped from N to M"

**2. Deep-Dive Audit Findings (by file and skill criteria)**
   - For each issue: file path, line number, current code (quoted), severity

**3. Pass/Fail E-E-A-T Signal Report**
   - Table with Signal name, Weight (VETO/HIGH/MEDIUM/LOW), Score (PASS/FAIL/WARN), Notes

**4. Critical Content & Metadata Fixes**
   - Exact code replacements (A/B/C implementation format where relevant)
   - For nofollow fixes: show the BEFORE and AFTER with context lines
   - For schema fixes: show the exact block to remove or replace

**5. Architecture & Indexing Verdict**
   - robots.ts, sitemap.ts, llms.txt review
   - Comment on whether the issue is indexing (technical) or trust (E-E-A-T)

**6. Step-by-Step Recovery Action Plan**

| Phase | Timeline | Actions | Expected Impact |
|-------|----------|---------|-----------------|
| Phase 1: Emergency | 24-48 hours | Fix veto-level issues (nofollow removal, schema removal, dateModified bump) | Stop further erosion |
| Phase 2: E-E-A-T Reinforcement | 1 week | Add named author/reviewer with credentials, add author bio section, add clean followed outbound links | Begin recovery |
| Phase 3: Freshness & Content | 2 weeks | Add specific day-level last-updated dates, create llms.txt, clean up commented-out code | Accelerate recovery |
| Phase 4: Verification | Ongoing | Search Console resubmit, monitor daily, verify llms.txt crawlability | Full recovery tracking |

**7. Summary Score Card**
   - Category scores out of 10
   - Overall SEO Health score
   - Recovery Probability (High/Medium/Low)
   - TL;DR: the 1-3 things that must be fixed

### Step 5 — Recovery Timeline Estimation

Provide a realistic recovery estimate:

| Milestone | Timeframe | Signal |
|-----------|-----------|--------|
| Phase 1 fixes deployed | Within 24 hrs | Stop further rank erosion |
| Google recrawls updated page | 24-72 hrs | Reindex with new signals |
| Gradual impression recovery | 7-14 days | 40-60% of original impressions |
| Full recovery (if no other penalties) | 14-28 days | 80-100% of original impressions |

If there are multiple veto-level issues, note that full recovery may require manual reconsideration via Search Console.

## Key Cross-File Verifications

Always check these cross-file relationships:

- **robots.ts ↔ llms.txt:** If robots.ts references `llms.txt` in its sitemap array, verify the file actually exists at `public/llms.txt` or via a route handler at `app/llms.txt/route.ts`. A missing file referenced in robots.ts is a broken crawl signal.
- **homepage schema ↔ tool page penalty:** If the homepage uses FAQPage schema (deprecated May 7, 2026), the penalty can cascade to linked tool pages. Always check homepage schema even when diagnosing a tool page.
- **JSON-LD dateModified ↔ visible last-updated date:** Both must align. If schema says `"2026-06-22"` but the visible text says "Updated: June 2022", this is a HARD TRUST FAILURE. If both are stale (e.g. both say "June 1" when it's "June 22"), it's a medium freshness issue.
- **Nofollow on authority links:** Search for every `<a href=` pointing to government/central bank/official portal URLs. If `rel="nofollow"` is present on any of them, it's a veto-level E-E-A-T trust failure for YMYL pages. The algorithm infers: "Page cites an authority source but withholds link equity → page doesn't trust its own source."
- **TOOLS registry ↔ sitemap ↔ pages:** Verify the tool slug exists in all three: `constants/tools.ts`, `app/sitemap.ts`, and the route folder. Missing entries create orphan pages or crawl inconsistencies.

## Example Output Pattern

```
# Tool Audit Report — [Tool Name]

**Audit Date:** June 22, 2026
**Audit Target:** `/tools/[slug]`
**Skill Sources:** impressions-collapse-penalty-diagnosis (failure chain) + seo-page-audit-from-code (technical) + content-freshness-eeat-monitor (E-E-A-T)

## Executive Summary — Why Impressions Collapsed

[Collapse chain diagram]

## Deep-Dive Audit Findings

### File 1: [file path]
- Finding | Status | Code evidence | Severity

### File 2: [file path]
...

## Pass/Fail E-E-A-T Signal Report

## Critical Content & Metadata Fixes

### Fix A: [description]
```tsx
// BEFORE:
[broken code]
// AFTER:
[fixed code]
```

## Architecture & Indexing Verdict

## Step-by-Step Recovery Action Plan

| Phase | Timeline | Actions | Expected Impact |
...

## Recovery Timeline Estimate

## Summary Score Card
```
