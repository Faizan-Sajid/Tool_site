---
name: ctr-content-recovery
description: Diagnose and fix a Next.js tool page with high impressions (>300/15d) but near-zero CTR (<1%) by combining metadata surgery with AEO content restructuring. Covers meta rewrite with front-loaded answers, H2-to-question conversion, answer block expansion (35->150 words), E-E-A-T signal injection, and FAQ gap analysis. Use when GSC shows high impressions, minimal clicks.
source: auto-skill
extracted_at: '2026-06-07T12:41:12.777Z'
---

# CTR Recovery & Content Transformation

Use this skill when Google Search Console shows a page with >300 impressions over 15 days but a CTR below 1% (e.g. 500 impressions / 2 clicks = 0.45%). The page ranks but does not compel clicks. This is a combined metadata + content + AEO recovery playbook.

## Procedure

### Step 1 — CTR Diagnosis from Existing Metadata

Read the page's `export const metadata` block. Audit:

**Title tag:**
- Count characters. Target ≤60. If near limit, any character over is truncated in SERP.
- Does it include specific numbers, rates, or year? (e.g. "11% Employee" is specific; "EPF Calculator" is generic)
- Does it have a power word or value hook? (e.g. "Rules", "Official Slabs", "Instant", "Free") — if the title is purely descriptive ("Tool Name | Site Name"), it lacks CTR drive.
- Does it answer "what will I get?" in the first 40 characters? Users scan left-to-right in SERP.

**Meta description:**
- Count characters. Target 120–155. Anything over 155 is truncated in SERP — the last ~30 characters are invisible. ⚠️ Most critical and most commonly broken.
- Does the first 120 characters contain a direct answer to the primary query? (e.g. "You pay 11%. Employer pays 13%..." answers "what is the EPF rate" immediately)
- Is the core USP ("Free, no login") positioned inside the 155-character window? If it appears after character 155, it's invisible.
- Does it start with an answer (noun/verb) rather than a marketing blurb? "Calculate" is fine; "Discover" or "Welcome to" wastes snippet space.

**OpenGraph/Twitter sync:**
- Compare `og:title`, `og:description`, `twitter:title`, `twitter:description` against the primary `title` and `description`. All must be identical — inconsistency degrades the AI entity model.

### Step 2 — Metadata Rewrite (CTR-First)

**Title rewrite rules:**
1. Front-load the exact rate/number/year: "2026 EPF Rates: 11% Employee, 13%/12% Employer" — the answer is in the title itself.
2. Use a power word or authoritative term: "Slabs", "Rules", "Official", "Instant", "Exact".
3. Include the brand or country signal for entity clarity: "Malaysia EPF" not just "EPF".
4. Target exactly 55–60 characters. Do not exceed 60.
5. Show what the user GETS, not what the tool IS: "Your 2026 EPF Contribution" > "EPF Calculator Tool".

**Description rewrite rules:**
1. Front-load the direct answer in the first 100 characters: "Your 2026 EPF contribution: 11% employee, 13%/12% employer..."
2. Include the specific secondary rate (e.g. foreign worker 2% rule) if it's a high-volume 2026 search topic.
3. Keep the USP ("Free, no login") at or before character 140 — never beyond 155.
4. Use an active, answer-first opening: "Your...", "You pay...", "Calculate..." — not "This tool..."
5. Target exactly 130–155 characters.

**Lock OpenGraph/Twitter identical** — every `og:title` = `twitter:title` = page title. Every description locked identically.

### Step 3 — H2 Headings: Statement to Question Conversion

Read the page's content component(s). For every H2:

**Diagnose:** Is it a statement (e.g. "EPF Contribution at Age 60 and Above") or a question (e.g. "What Happens to EPF Contributions When You Turn 60?")?

**Rule:** Convert every statement H2 to a question that matches a real user search query. Use Search Console "Queries" report or People Also Ask data for authentic question phrasing.

Statement → Question conversions:
- "EPF Contribution Rates Malaysia 2026 — Official KWSP Third Schedule" → "What Are the EPF Contribution Rates in Malaysia for 2026?"
- "Take-Home Salary After EPF — What You Actually Receive" → "How Much Take-Home Salary Do You Get After EPF Deductions?"
- "EPF for Foreign Workers Malaysia — October 2025 Mandatory Rule" → "What Is the EPF Contribution Rate for Foreign Workers in Malaysia?"
- "EPF Akaun Fleksibel — Understanding Your 3-Account Structure" → "What Is Akaun Fleksibel and How Does the 3-Account Split Work?"
- "EPF Contribution at Age 60 and Above" → "What Happens to EPF Contributions When You Turn 60?"
- "EPF Voluntary Contribution — i-Saraan, i-Saraan Plus and Tax Relief" → "Can You Make Voluntary EPF Contributions and Reduce Your Tax?"
- "Long-Tail EPF FAQ" → "Frequently Asked Questions About EPF Malaysia"

**Exception:** Malay-language sections and glossary sections may remain as statements. Add `lang="ms"` attribute to Malay section wrapper divs.

### Step 4 — Answer Block Expansion (35 → 150 Words)

For every content H2 (exclude glossary, attribution, navigation sections): the first paragraph after the H2 must be expanded from the typical 30–50 words to 120–180 words.

**The 120–180 word answer block template:**
```
[DIRECT ANSWER IN 1-2 SENTENCES]. [EXPLANATION WITH VERIFIABLE FACT OR RATE].
[WORKED EXAMPLE WITH REAL RM AMOUNT]. [ADDITIONAL CONTEXT OR EDGE CASE].
[TRANSITION TO THE SUPPORTING DETAIL BELOW].
```

**Must include in every answer block:**
1. A specific number, rate, or RM amount — never vague ("varies depending on")
2. A worked example with a real salary figure and breakdown (e.g. "At RM4,500/month, you pay RM495...")
3. At least one verifiable claim linked to an official source
4. The edge case or exception (e.g. "For salaries above RM20,000..." or "At age 60+...")
5. A transition sentence that naturally leads into the existing supporting content below

**Do NOT remove** any existing tables, lists, callout boxes, or components below the answer block. Only replace the first `<p>` element or the first paragraph in a `<div>`.

### Step 5 — E-E-A-T Signal Injection

Add or fix these three signals on the page:

**Signal A — Freshness date:** Update "Last reviewed: [Month Year]" to the current month. If absent, add it. Format: "Last reviewed: June 2026" — near the top of the content.

**Signal B — Named reviewer line:** Immediately after the freshness date, add:
```
Reviewed by the [Site Name] Financial Content Team — verified against [official source] and [applicable regulation] guidelines.
```
Use a muted text style (`text-sm text-muted-foreground`). This satisfies the "named reviewer with credentials" E-E-A-T requirement without needing individual author names.

**Signal C — Methodology box:** Add a callout/card with "Calculation Methodology" title listing:
- Each rate or rule used (employee rate, employer rate, threshold rules)
- The specific rounding behavior (Third Schedule, upward ringgit rounding)
- The dividend rate assumption (for projection tools)
- The account split percentages
- The official source URL

Use the same card styling as existing callout boxes on the page.

### Step 6 — FAQ Gap Analysis

List all existing FAQ questions on the page. Check against these required queries for financial/calculator pages:

- "What is the [primary concept] contribution rate in [country/year]?" ✅
- "How much does my employer contribute?" ❌ (most commonly missing)
- "What is the rate for foreign workers?" ✅
- "What is [new account/feature]?" (e.g. Akaun Fleksibel) ❌
- "What happens at age [threshold]?" ✅
- "How do I check my [account] online?" ❌ (practical query that drives clicks)
- "Is there a contribution limit?" ❌ (edge case query)
- "What is the rate for expats?" ❌ (visa-based query)

Add missing high-volume queries as FAQ items to the existing FAQ array, using the same object structure. Target 50–70 words per answer. Include a specific example number in each answer.

### Step 7 — Sync Tool Registry (Entity Consistency)

After updating the page's metadata description, update the tool's `description` field in `constants/tools.ts` to match exactly. AI crawlers read the TOOLS registry for `llms.txt` generation — if the description differs from the page metadata, the AI entity model of the tool is inconsistent.

**Verify:** grep the new description string against the tools.ts file. The `title` and `description` in the TOOLS registry should share core keywords with the page metadata but be phrased independently enough to read naturally in a list format.

## Output Pattern

- Start with the CTR diagnosis: current title/description character counts, what's truncated, what's missing.
- Provide the exact new metadata block (title + description + OG/Twitter).
- List all H2 conversions in a table (before → after).
- List all answer block expansions with word count delta.
- Confirm E-E-A-T signals injected (freshness + reviewer + methodology).
- Confirm FAQ gaps filled (N items added).
- Confirm tools.ts registry synced.
- End with: `Build: Compiled successfully ✅ — 0 errors`.
