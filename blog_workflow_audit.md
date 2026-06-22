# Blog Workflow Audit — Structural SEO Diagnostics Report

**Audit Date:** June 22, 2026
**Audit Scope:** Full data-flow trace: Markdown → gray-matter parser → lib/blog.ts → page components → JSON-LD output
**Files Examined:** `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`, `lib/blog.ts`, `lib/blog-slugs.json`, `scripts/generate-blog-slugs.mjs`, `content/blog/*.md` (2 files)

---

## 1. Current Architecture Overview — Data Flow

```
┌──────────────────────────────────────────────────────────────────────┐
│                     DATA FLOW DIAGRAM                                │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  content/blog/*.md                                                    │
│    ├── frontmatter (gray-matter)                                     │
│    │   ├── title, description, date, slug, category                  │
│    │   ├── relatedTool, readingTime, hasFAQ, lastModified            │
│    │   ├── author, authorTitle, authorLinkedIn                       │
│    │   ├── metaDescription, canonicalUrl, ogImage                    │
│    │   ├── tags[], primaryKeyword, secondaryKeywords[]               │
│    │   └── faqItems[] (Q&A pairs)                                    │
│    └── body (raw markdown content)                                   │
│         ↓                                                            │
│  lib/blog.ts                                                         │
│    ├── getAllPosts() → BlogFrontmatter[] (sorted newest-first)       │
│    └── getPostBySlug(slug) → BlogPost | null                         │
│         ↓                  ↓                                          │
│  app/blog/page.tsx       app/blog/[slug]/page.tsx                    │
│    ├── getAllPosts()      ├── getPostBySlug()                        │
│    ├── FeaturedCard       ├── generateMetadata() → OG/Canonical      │
│    ├── GridCard           ├── JSON-LD @graph (Article+Breadcrumb)    │
│    └── BlogCategoryFilter └── FAQPage schema (conditionally injected)│
│                              ↓                                       │
│                         <script type="application/ld+json">          │
│                              output                                  │
└──────────────────────────────────────────────────────────────────────┘
```

### Current Render Paths

| Page | Schema Types Injected | Frontmatter Fields Used | Frontmatter Fields Dropped |
|------|----------------------|------------------------|---------------------------|
| `app/blog/page.tsx` | **NONE** | title, description, date, slug, category, readingTime | author, authorTitle, authorLinkedIn, tags, primaryKeyword, secondaryKeywords, hasFAQ, faqItems, metaDescription, canonicalUrl, ogImage, relatedTool |
| `app/blog/[slug]/page.tsx` | Article + BreadcrumbList + FAQPage (conditional) | All parsed fields | tags, primaryKeyword, secondaryKeywords (dead fields) |

---

## 2. High-Risk Technical Flaws

### FLAG-01: FAQPage Schema Injected After Deprecation (CRITICAL — VETO LEVEL)

**Location:** `app/blog/[slug]/page.tsx`, lines 106-124

```typescript
// LINES 106-124 — CURRENT IMPLEMENTATION
{post.hasFAQ === true && post.faqItems && post.faqItems.length > 0 && (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",                           // ← DEPRECATED May 7, 2026
        mainEntity: post.faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }),
    }}
  />
)}
```

**Evidence — Both existing posts trigger this:**
- `content/blog/malaysia-epf-calculator-2026.md`: `hasFAQ: true` + 9 `faqItems`
- `content/blog/how-much-does-umrah-cost-2026.md`: `hasFAQ: true` + 8 `faqItems`

**Why this is veto-level:** FAQPage schema was deprecated by Google on **May 7, 2026**. The May/June 2026 Core Update's Content Manipulation flag specifically targets deprecated structured data. Every blog post with `hasFAQ: true` injects a deprecated schema block into the DOM. This is the same pattern that caused the GOSI tool's impression collapse.

**Contradiction with site-wide strategy:** The GOSI tool page explicitly removed FAQPage schema with the comment `"FAQPage removed (deprecated May 7, 2026)"`, but the blog system is still actively generating it. The site sends **contradictory signals** — tool pages are clean, blog pages are not.

---

### FLAG-02: Blog Listing Page Has Zero Structured Data (HIGH)

**Location:** `app/blog/page.tsx` — entire file

The blog listing page (`/blog`) has **no JSON-LD schema whatsoever**. It has strong metadata (title, description, OG, Twitter, canonical) but zero structured data.

**Missing schemas:**
- `CollectionPage` or `Blog` — tells Google this is a content collection
- `ItemList` — structure for the post grid (supports rich results)
- `BreadcrumbList` — navigation context

This means Google cannot understand the listing page as a content hub. It appears as an orphan entity with no semantic relationship to its child posts.

---

### FLAG-03: Person Entity Inconsistency Across Site (MEDIUM)

**Location comparison:**

Blog Article schema (`app/blog/[slug]/page.tsx`):
```json
{
  "@type": "Person",
  "name": "Faizan Sajid",
  "jobTitle": "Full Stack Web Developer & Financial Tools Researcher",  // ← jobTitle
  "url": "https://www.linkedin.com/in/faizan-sajid-4bb976300"
}
```

GOSI Tool page schema (`app/tools/ksa-gosi-calculator/page.tsx`):
```json
{
  "@type": "Person",
  "name": "Faizan Sajid",
  "knowsAbout": "Saudi Social Insurance, KSA Payroll Compliance, GCC Expat Taxation",  // ← knowsAbout
  "url": "https://www.quickcalcs.app/about"
}
```

**The problem:** The same person (`Faizan Sajid`) is represented with different entity properties across the site:
- Blog uses `jobTitle` + `url` (LinkedIn)
- Tools use `knowsAbout` + `url` (site About page)

Google's Knowledge Graph merges entities by name + url. The different property sets and different `url` values mean Google may treat these as two separate entities or fail to reconcile them as the same person, diluting E-E-A-T signal strength.

---

### FLAG-04: Dead Frontmatter Fields Carrying Dead Weight (LOW-MEDIUM)

**Interface definition** (`lib/blog.ts`):
```typescript
export interface BlogFrontmatter {
  // ... other fields
  tags?: string[];          // ← PARSED but NEVER rendered
  primaryKeyword?: string;  // ← PARSED but NEVER rendered
  // NOTE: secondaryKeywords is NOT in the interface but IS in markdown files
  faqItems?: FaqItem[];
}
```

**Evidence — content/blog/malaysia-epf-calculator-2026.md** has 15+ `tags` and `primaryKeyword` that are:
1. Parsed by `getAllPosts()` and `getPostBySlug()`
2. Stored in the `BlogFrontmatter` object
3. **Never referenced** in any component or JSON-LD

**Evidence — both existing files have `secondaryKeywords`** which is NOT even in the `BlogFrontmatter` interface → silently dropped by the parser.

**Impact:** Authors spend time filling in SEO fields that do nothing. The `tags` field could be mapped to `about` or `keywords` in the Article schema but isn't. The `primaryKeyword` could populate `headline` variants but doesn't.

---

### FLAG-05: No `speakable` Specification on Blog Posts (MEDIUM)

**Location:** `app/blog/[slug]/page.tsx`

The GOSI tool page has:
```json
"speakable": {
  "@type": "SpeakableSpecification",
  "cssSelector": ["h1", "h2", ".gosi-quick-answer", ".faq-answer"]
}
```

Blog posts have **no speakable specification**. This means AI Overviews and voice assistants have no guidance on which parts of the blog content to extract for citations. In the current GEO landscape (60% of searches trigger AI Overviews), this is a missed citation opportunity.

---

### FLAG-06: Blog Listing Page Has No Hreflang or Alternate Signals (LOW)

The listing page uses `alternates: { canonical: "https://www.quickcalcs.app/blog" }` but no `hreflang`. While this may be intentional (English-only blog), it's worth noting for future multilingual expansion.

---

### FLAG-07: WebPage Entity Not Fully Declared in Blog Post Schema (LOW-MEDIUM)

**Location:** `app/blog/[slug]/page.tsx`, lines ~88-91

The `@graph` array includes:
- `Article` — complete
- `BreadcrumbList` — complete
- `FAQPage` — present (but deprecated)

But there is no standalone `WebPage` entry. The Article references `mainEntityOfPage: {"@type": "WebPage", "@id": "..."}` but this is a reference-only — no `WebPage` node with `dateModified`, `inLanguage`, `speakable`, `author`, etc. exists in the graph.

Compare with the GOSI tool page which has a full `WebPage` entry with:
- `dateModified`, `datePublished`
- `inLanguage`, `about`, `citation`
- `speakable`, `potentialAction`
- `reviewedBy`

---

### FLAG-08: Programmatic Keyword Pattern — `tags` Duplication (LOW)

The `tags` field in frontmatter contains 10-15 entries per post (both markdown files). These are:
1. Never rendered in UI
2. Never injected into schema
3. Only consumed by the parser

While not directly harmful, this creates dead-weight data in the processing pipeline. If these were mapped to `keywords` in the Article schema, they would provide SEO value. Currently they don't.

---

## 3. Schema Mapping Diagnostics — Pass/Fail Matrix

### Blog Listing Page (`/blog`)

| Schema Type | Status | Notes |
|-------------|--------|-------|
| Metadata (title, OG, Twitter) | ✅ PASS | Strong, includes keywords |
| Canonical URL | ✅ PASS | Correct `https://www.quickcalcs.app/blog` |
| `CollectionPage` | ❌ FAIL | Not present |
| `ItemList` | ❌ FAIL | Not present — grid cards have no structured relationship |
| `BreadcrumbList` | ❌ FAIL | Not present |
| `WebSite` reference | ❌ FAIL | No `isPartOf` link to root WebSite schema |
| AI crawler (speakable) | ❌ FAIL | No guidance for AI extraction |

### Blog Post Page (`/blog/[slug]`)

| Schema Type | Status | Notes |
|-------------|--------|-------|
| `Article` | ✅ PASS | Present with publisher, dates, author entity |
| `BreadcrumbList` | ✅ PASS | 3-item breadcrumb in `@graph` |
| `WebPage` (full node) | ❌ FAIL | Only referenced via `mainEntityOfPage` — no declaration |
| `FAQPage` | ❌ **VETO** | **Deprecated May 7, 2026** — both posts inject this |
| `SpeakableSpecification` | ❌ FAIL | Not present on any blog post |
| Author entity | ⚠️ WARN | Uses `jobTitle` instead of `knowsAbout` (inconsistent with tool pages) |
| Author `url` | ⚠️ WARN | Points to LinkedIn vs site About page (inconsistent) |
| `dateModified` | ✅ PASS | Uses `lastModified` from frontmatter or falls back to `date` |
| `publisher` | ✅ PASS | Organization with name, url, logo |
| `keywords` field | ❌ FAIL | `tags[]` parsed but not mapped to `keywords` in Article schema |
| `about` field | ❌ FAIL | No `about` array in Article schema (would use `tags`) |
| OG image | ✅ PASS | Per-post images from `ogImage` frontmatter |
| `mainEntityOfPage` | ✅ PASS | Correct WebPage reference |

---

## 4. Impact Assessment

### How This Affects Indexation and Ranking

| Risk | Source | Impact |
|------|--------|--------|
| **Schema penalty cascade** | FLAG-01 (deprecated FAQPage) | If Google flags blog FAQPage as content manipulation, the penalty may cascade to linked tool pages through PageRank-based helpfulness vectors. The GOSI tool impression collapse demonstrated this mechanism. |
| **Missing entity hub** | FLAG-02 (no listing schema) | Google cannot understand `/blog` as a content collection. Individual posts appear as standalone entities without a parent hub, reducing topical authority for the blog section. |
| **Diluted E-E-A-T** | FLAG-03 (entity inconsistency) | Faizan Sajid appears as two different Person entities (one with `jobTitle` + LinkedIn, one with `knowsAbout` + About page). Google may not merge these, weakening the overall authority signal. |
| **Missed GEO citations** | FLAG-05 (no speakable) | AI crawlers (GPTBot, ClaudeBot) have no CSS selector guidance for which content to extract as answers. Blog content is less likely to appear in AI Overviews. |
| **User-facing dead fields** | FLAG-04 (inert keywords) | Authors populate `primaryKeyword` and `tags` expecting SEO impact. The effort is wasted — no schema mapping exists. |
| **Partial entity graph** | FLAG-07 (no WebPage node) | The `@graph` is missing a WebPage declaration with `dateModified`, `inLanguage`, and other properties that Google uses for freshness and language signals. |

### Scoring Impact

| Category | Score | Trend |
|----------|-------|-------|
| Blog listing schema coverage | **0/10** | No structured data at all |
| Blog post schema coverage | **5/10** | Article + Breadcrumb good; FAQPage is an active liability |
| Entity consistency (site-wide) | **3/10** | Contradictory Person representations |
| GEO/AI readiness | **2/10** | No speakable, no AI guidance |
| Frontmatter data utilization | **4/10** | 3 parsed fields are dead; 1 field type not in interface |
| **Overall Blog Workflow Health** | **3.5/10** | Multiple structural issues requiring re-engineering |

---

## 5. Proposed System Re-engineering Plan

### Phase 1: Emergency Schema Surgery (24 hours)

| # | Action | Target File | Priority |
|---|--------|-------------|----------|
| 1a | **Remove FAQPage schema injection** from blog post component — replace with inert hidden `<div>` FAQ rendering or remove entirely | `app/blog/[slug]/page.tsx` (lines 106-124) | 🔴 CRITICAL |
| 1b | Add `WebPage` node to the `@graph` with `dateModified`, `inLanguage`, `speakable` (mapped to `h1, h2, .prose-custom p`) | `app/blog/[slug]/page.tsx` | 🟠 HIGH |
| 1c | Add `keywords` field to Article schema from frontmatter `primaryKeyword` (or `tags[0]`) | `app/blog/[slug]/page.tsx` | 🟠 HIGH |

### Phase 2: Listing Page Schema Layer (Within 1 week)

| # | Action | Target File | Priority |
|---|--------|-------------|----------|
| 2a | Add `CollectionPage` + `ItemList` JSON-LD to the blog listing page with all post entries | `app/blog/page.tsx` | 🟠 HIGH |
| 2b | Add `BreadcrumbList` schema to listing page | `app/blog/page.tsx` | 🟡 MEDIUM |

### Phase 3: Entity & Data Integrity (Within 2 weeks)

| # | Action | Priority |
|---|--------|----------|
| 3a | **Standardize Person entity across site:** Align blog's Article `author` to use `knowsAbout` (not `jobTitle`) and point `url` to the site's About page instead of LinkedIn | 🟠 HIGH |
| 3b | Add `secondaryKeywords` to the `BlogFrontmatter` interface (currently missing) | 🟡 MEDIUM |
| 3c | Map `tags[]` → `about: Thing[]` array in Article schema; map `primaryKeyword` → `keywords` string | 🟡 MEDIUM |
| 3d | Remove/archive the `generate-blog-slugs.mjs` script if `getAllPosts()` is the primary slug source (verify build-time usage) | 🟢 LOW |

### Phase 4: AI/GEO Optimization (Within 1 month)

| # | Action | Priority |
|---|--------|----------|
| 4a | Add `SpeakableSpecification` to blog post WebPage schema (CSS selectors: `h1`, `h2`, `.prose-custom p:first-of-type`, `.faq-question`) | 🟡 MEDIUM |
| 4b | Add per-post `llms.txt` entries for blog content (consider dynamic generation) | 🟢 LOW |
| 4c | Add `primaryImageOfPage` to Article schema when `ogImage` is available | 🟢 LOW |

### Architecture Decision — FAQ Retention vs Removal

```
Option A: Remove FAQPage entirely (recommended for 2026 compliance)
├── Safe from deprecation penalties
├── No Knowledge Graph entity for FAQ content
├── Simple implementation: delete the conditional block
└── Risk: lose FAQ rich result eligibility

Option B: Replace FAQPage with native HTML Q&A sections + QAPage schema
├── QAPage is NOT deprecated (different from FAQPage)
├── More complex implementation
├── Requires rethinking how FAQs are rendered
└── Risk: QAPage may also face deprecation in 2026

Option C: Keep FAQPage but only for high-value posts (NOT recommended)
├── FAQPage IS deprecated — Google will eventually ignore it
└── Ongoing penalty risk
```

**Recommended: Option A** — Remove FAQPage schema entirely from the blog workflow. The content already exists as inline FAQ sections within the markdown body and the standalone "Frequently Asked Questions" section at the end. Google can still understand these as natural content even without explicit FAQPage markup.

---

## Summary of Findings

| Severity | Count | Issues |
|----------|-------|--------|
| 🔴 CRITICAL | 2 | FAQPage deprecation (FLAG-01), Zero listing schema (FLAG-02) |
| 🟠 HIGH | 2 | Entity inconsistency (FLAG-03), No speakable (FLAG-05) |
| 🟡 MEDIUM | 2 | Dead frontmatter fields (FLAG-04), Missing WebPage node (FLAG-07) |
| 🟢 LOW | 2 | Missing hreflang (FLAG-06), Keyword duplication (FLAG-08) |

**Recovery Priority:** Fix FLAG-01 (FAQPage removal) and FLAG-02 (listing schema) before any other work. These are the most impactful changes for both penalty recovery and indexation quality.
