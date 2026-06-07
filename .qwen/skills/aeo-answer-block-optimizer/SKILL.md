---
name: aeo-answer-block-optimizer
description: Audit and implement AEO (Answer Engine Optimization) content structure for Next.js tool pages. Ensures pages contain direct-answer paragraphs, query-shaped headings, comparison tables, and outbound citations that qualify them for Google Featured Snippets, People Also Ask, and AI Overview citations (ChatGPT, Perplexity, Gemini). Use when impressions are high but the site is not appearing in AI answers despite Google rankings.
source: auto-skill
created_at: '2026-06-01T00:00:00.000Z'
---

# AEO — Answer Block Optimizer

Use this skill when impressions are high but the site is not appearing in AI answers (Google AI Overviews, ChatGPT, Perplexity, Gemini) despite ranking well in Google search results.

## Procedure

### 1. AEO vs SEO — The Key Distinction

AEO (Answer Engine Optimization) is the practice of structuring content so that AI systems — including Google AI Overviews, ChatGPT, Perplexity, and Gemini — can extract, verify, and cite your content as an authoritative answer. Unlike traditional SEO (which optimizes for rankings and clicks), AEO optimizes for *being the source of the answer*, often in zero-click contexts.

In 2026: 60% of Google searches are zero-click (answered by AI Overviews). 58.5% of US searches end without a click. But AI-referred visitors convert at 4.4x the rate of organic visitors. AEO is not optional for any site that serves informational or decision-making queries.

The three core AEO requirements:
1. **Answer-first structure:** Direct answer within the first 120–180 words of each content section
2. **Machine-readable format:** Tables, numbered lists, and structured headings that AI can extract without ambiguity
3. **Citation-worthy facts:** Verifiable figures and claims with links to official primary sources

### 2. Audit Existing Content Structure

Read the target page's content component(s). For each H2 section:

**Check A — Answer-first paragraph:**
Does the first paragraph in the section (after the H2) provide a complete, standalone answer to the question implied by the heading, in under 180 words?

Mark as PASS, PARTIAL, or FAIL:
- **PASS:** First 120–180 words answer the question completely. A reader could stop there and have their question answered.
- **PARTIAL:** The answer exists but is buried — it appears after 200+ words, after a table, or requires context from earlier sections.
- **FAIL:** No direct answer exists; the section only provides context, history, or supporting detail.

**Check B — Heading query alignment:**
Is the H2 phrased as a question or using question-implying keywords ("what", "how", "why", "when", "which", "is", "are", "does", "can")? Example of PASS: "How Is the GOSI Contribution Calculated?" Example of FAIL: "GOSI Calculation" (statement, not query-aligned).

**Check C — Comparison tables:**
When the content compares multiple options (rates, tiers, countries, methods), is it in an HTML `<table>` with proper `<thead>` and `<th>` columns? Or presented as prose? AI engines extract tables 3x more reliably than equivalent prose.

**Check D — Numbered/step-by-step format:**
For processes ("How to calculate X", "Steps to apply for Y"), is the content in an `<ol>` list or a visually distinct step component? Numbered lists are prioritized in Featured Snippets and AI Overviews.

**Check E — Outbound official citations:**
For every factual claim (percentage, legal rule, government rate), is there an outbound hyperlink to the primary official source? Count: zero links = HIGH RISK for AI trust signals.

**Check F — Content length:**
Count total words in explanatory content (exclude tool UI, navigation, footer, disclaimer). Under 1,500 words: FAIL for GEO. Under 2,500 words: PARTIAL. 2,500–4,000 words: PASS.

### 3. Implement Answer-First Block Pattern

When adding or rewriting content sections, follow this exact structure for every H2:

```jsx
{/* H2: Query-aligned heading */}
<h2>How Is [Topic] Calculated in [Context]?</h2>

{/* Answer block: 120–180 words, standalone, answer-first */}
<p className="answer-block">
  [DIRECT ANSWER IN 1–2 SENTENCES]. [SUPPORTING EXPLANATION, 100–150 words]. 
  [VERIFIABLE FACT with source link]. For example: "The Saudi GOSI contribution 
  rate is 21.5% of monthly salary — 9% paid by the employee and 12.5% paid by 
  the employer, as set by the General Organization for Social Insurance 
  (<a href="https://www.gosi.gov.sa" target="_blank" rel="noopener noreferrer">
  GOSI official site</a>)."
</p>

{/* Supporting detail: expand after the answer block */}
<p>[Additional context, edge cases, examples — only after the direct answer is complete]</p>
```

Key rules for answer blocks:
- Start the block with the query's key phrase: "The [topic] is..." or "[Topic] works by..."
- Keep the answer block as a regular `<p>` tag — not a blockquote, callout box, or aside. AI engines extract `<p>` tags most reliably.
- Include one verifiable fact (number, percentage, date, official name) with an outbound link.
- 120–180 words is the target. Under 80 words: too thin for featured snippets. Over 250 words: AI truncates and may miss the key answer.

### 4. Implement Comparison Tables

For any content that compares options, use this table structure:

```jsx
<div className="overflow-x-auto">
  <table>
    <thead>
      <tr>
        <th scope="col">Category</th>
        <th scope="col">Rate / Value</th>
        <th scope="col">Effective Date</th>
        <th scope="col">Official Source</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Employee Contribution</td>
        <td>9%</td>
        <td>January 2024</td>
        <td><a href="[official URL]">GOSI Circular</a></td>
      </tr>
    </tbody>
  </table>
</div>
```

Tables must have: `<thead>` with `scope="col"` on `<th>` elements, no merged cells (AI engines cannot parse `colspan`/`rowspan`), and a caption or heading above the table indicating what it shows.

### 5. Implement Query-Shaped FAQ Section

The existing visible FAQ section (Q&A HTML) remains valuable for AEO even though FAQPage JSON-LD is deprecated. Structure each FAQ item:

```jsx
<h3>What is the maximum GOSI contribution for an employee?</h3>

<p>
  The maximum monthly GOSI contribution for an employee in Saudi Arabia is capped 
  at a monthly salary ceiling of SAR 45,000. Above this ceiling, contributions are 
  calculated on SAR 45,000 regardless of actual salary. This cap applies to both 
  employee (9%) and employer (12.5%) contributions per 
  <a href="[official URL]">GOSI Circular No. [X]</a>.
</p>
```

FAQ questions should be phrased exactly as users type them — check Google Search Console "Queries" report and People Also Ask boxes for real user query phrasing.

### 6. Above-the-Fold Answer

Every tool page must have a direct-answer paragraph within the first 300 words of body content (excluding tool UI and navigation). This is the "above-the-fold answer" — the passage most likely to be extracted as an AI Overview or Featured Snippet.

Audit: count words from `<main>` tag open to the first meaningful paragraph. If the first 300 words are consumed by: hero image, tool UI, loading states, or navigation elements — the page has no above-the-fold answer. Recommend adding a 1–2 sentence tool description before or immediately after the calculator UI.

### 7. Verification

After implementing:
1. Use Google's Rich Results Test to verify no remaining FAQPage schema.
2. Paste the page URL into Perplexity.ai and search the primary tool query. Does Perplexity now cite this page? (Allow 3–7 days for re-indexing.)
3. Check Google Search Console → Search Results → filter by the tool's primary query. Does the page appear in AI Overview feature? (Track over 30 days.)
4. Confirm all outbound citation links return HTTP 200 (not 404 or redirect loops).
5. Validate all tables have `<thead>` and proper `scope` attributes using browser DevTools.

## Output Pattern

- Start with the AEO audit summary: which checks passed, which failed, for each H2 section.
- Provide the AEO score (0–100) based on Checks A–F.
- For each FAIL or PARTIAL finding, provide exact replacement code following the answer-first block pattern.
- Include an above-the-fold answer assessment with word count from `<main>` to first answer.
- List all outbound citation links and their HTTP status.
- End with verification steps and expected timeline for AI citation appearance.
