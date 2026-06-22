---
name: blog-workflow-diagnostic
description: Audit an automated Next.js markdown blog workflow for structural SEO bottlenecks, deprecated schema footprints, frontmatter data-flow gaps, and entity consistency issues across the site.
source: auto-skill
extracted_at: '2026-06-22T11:44:41.994Z'
---

# Blog Workflow Diagnostic — Structural SEO Audit

Diagnose how markdown frontmatter maps through the parser layer (`lib/blog.ts`) into page components and JSON-LD schema output, identifying deprecated footprints, dead fields, entity inconsistencies, and missing indexation signals.

## When to use

- The user asks to audit, diagnose, or review their automated blog workflow
- They report blog pages not indexing or performing despite having content
- They want to understand why blog pages get flagged in a core update
- A new blog was set up and needs a structural review before publishing
- A blog suffered a ranking or impressions drop and you need to trace the schema pipeline

## Prerequisites

- An existing Next.js App Router blog using `gray-matter` + `react-markdown`
- `lib/blog.ts` (or equivalent) with `getAllPosts()` and `getPostBySlug()`
- `app/blog/page.tsx` — listing page
- `app/blog/[slug]/page.tsx` — individual post page
- At least one `content/blog/*.md` file with populated frontmatter

## Step-by-step diagnostic procedure

### 1. Map the data flow

Read these files in full and trace the pipeline:

```
lib/blog.ts                              → Understand BlogFrontmatter interface and parsers
content/blog/<example-post>.md           → Copy actual frontmatter field names
app/blog/page.tsx                        → Understand listing page rendering
app/blog/[slug]/page.tsx                 → Understand schema generation + metadata
```

**Draw the data flow in your working notes:**

```
Markdown frontmatter → gray-matter → lib/blog.ts → BlogFrontmatter[] → Page Component → JSON-LD <script>
```

For each field in the frontmatter, trace whether it reaches the render output or dies somewhere in the pipeline.

### 2. Frontmatter-to-Interface inventory

For every field declared in the markdown frontmatter, check:

| Field | Is in BlogFrontmatter interface? | Is consumed by page component? | Appears in JSON-LD? | Appears in UI? |
|-------|--------------------------------|-------------------------------|---------------------|----------------|
| title | ✅ / ❌ | ✅ / ❌ | ✅ / ❌ | ✅ / ❌ |
| tags  | ✅ / ❌ | ✅ / ❌ | ✅ / ❌ | ✅ / ❌ |
| ...   | ... | ... | ... | ... |

**Look specifically for these dead-field patterns:**

- **Field is in frontmatter AND in interface but never rendered** — wastes author effort, may confuse future maintainers
- **Field is in frontmatter but NOT in interface** — data silently dropped, authors may think it affects SEO
- **Field is in interface but NOT in both parsers** — `getPostBySlug()` may have different field coverage than `getAllPosts()`

### 3. Schema deprecation audit

Inspect the JSON-LD blocks in `app/blog/[slug]/page.tsx`. Check for:

```typescript
// CRITICAL — Deprecated schema types to flag:
"@type": "FAQPage"          // Deprecated May 7, 2026 — see schema-advanced-2026 skill
```

**Also check for missing required schema properties in each declared type:**

```typescript
// Article — requires at minimum:
{
  "@type": "Article",
  headline, description, datePublished, dateModified,
  author (Person or Organization),
  publisher (Organization with name + logo),
  mainEntityOfPage (WebPage reference)
}

// BreadcrumbList — requires:
{
  "@type": "BreadcrumbList",
  itemListElement: [{ position, name, item }]
}

// WebPage (if declared separately in @graph):
{
  "@type": "WebPage",
  "@id", url, name, description,
  dateModified, inLanguage
}

// FAQPage — DO NOT USE (deprecated) — flag as a veto-level failure
```

**Flag as CRITICAL (veto-level):** Any use of `FAQPage` schema type — this was deprecated May 7, 2026. The Content Manipulation flag in the May/June 2026 Core Update targets deprecated structured data.

### 4. Listing page schema coverage

The listing page (`/blog`) must be checked for:

```typescript
// REQUIRED for a content hub:
// 1. CollectionPage or Blog schema
// 2. ItemList with itemListElement entries for each post
// 3. BreadcrumbList

// FAIL if:
// - Zero JSON-LD on the listing page (most common gap)
// - No parent-child relationship between listing and posts
```

### 5. Entity consistency cross-site

For any `Person` entity used across the site (blog + tool pages):

```typescript
// Read the blog's Article author schema:
// EXAMPLE blog:
"author": { "@type": "Person", "name": "Faizan Sajid", "jobTitle": "...", "url": "https://linkedin.com/in/..." }

// Read at least one tool page's schema:
// EXAMPLE tools:
"reviewedBy": { "@type": "Person", "name": "Faizan Sajid", "knowsAbout": "...", "url": "https://quickcalcs.app/about" }
```

**Checklist for entity merge risk:**
- Same `name` value? If different → two entities
- Same `url` value? If different → two entities (Google may not merge LinkedIn vs site URLs)
- Same property structure? `jobTitle` vs `knowsAbout` may cause reconciliation failure
- Google's Knowledge Graph merges by `sameAs` + `url` — if these diverge, E-E-A-T signal splits

**Flag as HIGH if:** The same person is represented with different property names or different URLs across the site.

### 6. GEO / AI readiness check

Check the individual post page for:

```typescript
// PRESENT on well-optimized tool pages:
"speakable": {
  "@type": "SpeakableSpecification",
  "cssSelector": ["h1", "h2", ".quick-answer", ".faq-question"]
}
```

**FAIL if:** No `SpeakableSpecification` exists on blog posts. In the 2026 GEO landscape (60%+ of searches trigger AI Overviews), blog content without speakable selectors has lower AI citation probability.

### 7. Breadcrumb consistency check

Compare the breadcrumb rendered in the page component's schema vs the visible UI:

```
Schema BreadcrumbList:    Home → Guides → Post Title
UI Breadcrumb:            Home › Guides › Post Title
```

**FAIL if:** Schema breadcrumb items don't match UI breadcrumb items (different URLs, different names, or different count of items).

### 8. Compile the report

Structure the deliverable with this format:

```markdown
# Blog Workflow Audit Report

**Audit Date:** YYYY-MM-DD

## 1. Data Flow Diagram
[Text-based pipeline showing MD → Parser → Component → Schema output]

## 2. High-Risk Technical Flaws
### FLAG-01: [Title] (SEVERITY)
**Location:** `file.tsx:LINE`
**Evidence:** [Code block showing the issue]
**Why it matters:** [Explanation of SEO impact]
**Fix direction:** [Brief recommendation without writing code]

## 3. Schema Mapping Diagnostics
| Schema Type | Status | Notes |
|-------------|--------|-------|
| Article | ✅/❌ | ... |
| FAQPage | ❌ VETO | Deprecated ... |

## 4. Impact Assessment
[How each issue affects indexation, crawling, AI citation, or entity authority]

## 5. Scoring
| Category | Score |
|----------|-------|
| Schema coverage (listing) | 0-10 |
| Schema compliance (posts) | 0-10 |
| Entity consistency | 0-10 |
| GEO readiness | 0-10 |
| Data utilization | 0-10 |
| **Overall** | Avg/10 |

## 6. Re-engineering Plan
- Phase 1 (24h): Emergency fixes — remove deprecated schema, add listing page schema
- Phase 2 (1wk): Entity alignment, frontmatter mapping
- Phase 3 (2wk): GEO optimization, speakable, about array
```

## Rules — Do Not Do These

- ❌ Do NOT modify any files during diagnosis — this skill is audit-only
- ❌ Do NOT assume `FAQPage` is safe — verify against the current Google deprecation date
- ❌ Do NOT skip the entity consistency cross-site check — blog + tools often diverge
- ❌ Do NOT assume `getAllPosts()` and `getPostBySlug()` return identical fields — verify both parsers
- ❌ Do NOT assume the listing page has schema — read it, most don't

## Post-diagnosis handoff

When the report is complete, recommend one of these next skills if applicable:

- `seo-page-audit-from-code` — for deep single-page schema/SEO audit on the listing or a specific post
- `schema-advanced-2026` — for implementing 2026-compliant structured data (replacing deprecated patterns)
- `blog-post-publish-seo` — for publishing new posts with corrected schema patterns after fixing the pipeline
