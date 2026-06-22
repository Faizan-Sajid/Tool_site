---
name: blog-workflow-recovery
description: Execute a 4-step system re-engineering of an automated Next.js markdown blog to fix deprecated schema footprints, add hub indexation, inject GEO/AI optimization, and establish tool-to-blog interlinking. Use AFTER blog-workflow-diagnostic completes.
source: auto-skill
extracted_at: '2026-06-22T12:07:32.956Z'
---

# Blog Workflow Recovery — 4-Step System Re-engineering

Execute a full system re-engineering of an automated Next.js App Router markdown blog (`gray-matter` + `react-markdown`). This is the **implementation counterpart** to `blog-workflow-diagnostic` — it takes the findings from that audit and applies surgical code-level fixes across 4 phases.

## When to Use

- AFTER running `blog-workflow-diagnostic` and receiving the audit report
- The audit found: deprecated FAQPage schema, missing listing page schema, dead frontmatter fields, entity inconsistencies, no speakable/AI optimization, missing tool→blog links
- The user explicitly asks to implement the fixes (not just diagnose)
- You need to inject JSON-LD, create shared components, and update the parser interface

## Prerequisites

- Existing Next.js App Router blog with `lib/blog.ts`, `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`
- At least one `content/blog/*.md` file with populated frontmatter
- `BlogFrontmatter` interface in `lib/blog.ts`
- A `constants/tools.ts` registry (for the interlinking step)
- Blog posts already use `relatedTool` frontmatter (to link to tool pages)

## Procedure

---

### Step 1 — Emergency Schema Surgery & Frontmatter Activation

**Target files:** `lib/blog.ts`, `app/blog/[slug]/page.tsx`

#### 1A — Activate dead frontmatter fields in the interface

Add any missing fields like `secondaryKeywords` to the `BlogFrontmatter` interface:

```typescript
export interface BlogFrontmatter {
  // ... existing fields
  tags?: string[];
  primaryKeyword?: string;
  secondaryKeywords?: string[];     // ← ADD if missing
  faqItems?: FaqItem[];
}
```

Then update **both** `getAllPosts()` and `getPostBySlug()` parsers to extract it:

```typescript
secondaryKeywords: data.secondaryKeywords as string[] | undefined,
```

#### 1B — Remove deprecated FAQPage schema, inject WebPage node, map fields

Replace the entire JSON-LD `<script>` block in `app/blog/[slug]/page.tsx`.

**DELETE:** The standalone `{post.hasFAQ === true && ...}` FAQPage injection block.

**REPLACE the @graph with three nodes:**

```typescript
"@graph": [
  {
    "@type": "WebPage",
    "@id": `https://www.quickcalcs.app/blog/${post.slug}`,
    url: `https://www.quickcalcs.app/blog/${post.slug}`,
    name: post.title,
    description: post.metaDescription || post.description,
    datePublished: post.date,
    dateModified: post.lastModified || post.date,
    inLanguage: "en-US",
    isPartOf: {
      "@type": "Blog",
      "@id": "https://www.quickcalcs.app/blog",
      name: "QuickCalcs Guides & Updates",
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".prose-custom p:first-of-type"],
    },
  },
  {
    "@type": "Article",
    "@id": `https://www.quickcalcs.app/blog/${post.slug}#article`,
    headline: post.title,
    description: post.metaDescription || post.description,
    datePublished: post.date,
    dateModified: post.lastModified || post.date,
    author: post.author
      ? {                              // ← Person entity, NOT Organization
          "@type": "Person",
          name: post.author,
          ...(post.authorTitle ? { knowsAbout: post.authorTitle } : {}),  // ← knowsAbout not jobTitle
          url: "https://www.quickcalcs.app/about",                        // ← About page not LinkedIn
        }
      : undefined,
    publisher: { "@type": "Organization", name: "QuickCalcs", url: "https://www.quickcalcs.app", logo: { ... } },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://www.quickcalcs.app/blog/${post.slug}` },
    ...(post.ogImage ? { image: `https://www.quickcalcs.app${post.ogImage}` } : {}),
    keywords: [post.primaryKeyword, ...(post.secondaryKeywords || [])].filter(Boolean).join(", "),
    ...(post.tags && post.tags.length > 0
      ? { about: post.tags.map((tag) => ({ "@type": "Thing", name: tag })) }
      : {}),
  },
  {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.quickcalcs.app" },
      { "@type": "ListItem", position: 2, name: "Guides", item: "https://www.quickcalcs.app/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://www.quickcalcs.app/blog/${post.slug}` },
    ],
  },
]
```

**Key changes from unoptimized blog:**
| Before | After |
|--------|-------|
| FAQPage (deprecated) injected | No FAQPage — fully removed |
| No `WebPage` node | Full `WebPage` with `speakable`, `isPartOf: Blog`, `inLanguage`, dates |
| `jobTitle` + LinkedIn `url` on Person | `knowsAbout` + site About page `url` |
| `keywords` and `about` omitted | `keywords` from primaryKeyword + secondaryKeywords; `about: Thing[]` from `tags[]` |
| `author` uses `post.authorLinkedIn` | `author.url` hardcoded to `/about` |

---

### Step 2 — Hub Indexation: Listing Page Schema

**Target file:** `app/blog/page.tsx`

Inject a `<script type="application/ld+json">` block right after `<main>` opens with `CollectionPage` + `ItemList` + `BreadcrumbList` in a `@graph`:

```typescript
"@graph": [
  {
    "@type": "CollectionPage",
    "@id": "https://www.quickcalcs.app/blog",
    url: "https://www.quickcalcs.app/blog",
    name: "Guides & Updates — [Site Tagline]",
    description: "[Meta description]",
    inLanguage: "en-US",
    isPartOf: { "@type": "WebSite", "@id": "https://www.quickcalcs.app/", name: "QuickCalcs" },
    dateModified: new Date().toISOString().split("T")[0],
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.quickcalcs.app/" },
        { "@type": "ListItem", position: 2, name: "Guides & Updates", item: "https://www.quickcalcs.app/blog" },
      ],
    },
  },
  {
    "@type": "ItemList",
    url: "https://www.quickcalcs.app/blog",
    name: "QuickCalcs Guides & Updates",
    itemListElement: allPosts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://www.quickcalcs.app/blog/${post.slug}`,
      name: post.title,
      description: post.description,
    })),
    numberOfItems: allPosts.length,
  },
]
```

The `ItemList` must dynamically map **every post rendered in the grid** with its correct `position`, `url`, and `name`.

---

### Step 3 — GEO / AI Overview Optimization

**Target file:** `app/blog/[slug]/page.tsx`

Already included in Step 1 inside the WebPage node:

```typescript
speakable: {
  "@type": "SpeakableSpecification",
  cssSelector: ["h1", "h2", ".prose-custom p:first-of-type"],
}
```

This tells AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) which content to extract for AI Overviews and answer engine citations.

**CSS selector strategy:**
- `"h1"` — the main title / direct answer
- `"h2"` — section headings containing query-shaped text
- `".prose-custom p:first-of-type"` — the first paragraph of content body (usually the direct answer)
- Optionally add `".faq-answer"` if your FAQ answers use that class

---

### Step 4 — Structural Interlinking (Tool ⇄ Blog)

#### 4A — Blog→Tool links (verify existing)

In `app/blog/[slug]/page.tsx`, verify there is a `{post.relatedTool && ...}` block that renders a CTA card linking to the corresponding tool page:

```tsx
{post.relatedTool && (() => {
  const toolName = getToolNameByHref(post.relatedTool!);
  return (
    <div className="rounded-[18px] border border-[rgba(201,168,76,0.25)] bg-[#131620] p-6 sm:p-8 ...">
      {/* Icon + "Try the calculator" label + tool name + link button */}
    </div>
  );
})()}
```

The `getToolNameByHref()` function queries `constants/tools.ts`:

```typescript
function getToolNameByHref(href: string): string | null {
  const tool = TOOLS.find((t) => t.href === href);
  return tool?.title ?? null;
}
```

#### 4B — Tool→Blog backlinks (create shared component)

Create `components/blog/RelatedGuides.tsx` — a server component that queries blog posts by `relatedTool`:

```tsx
import React from "react";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { ArrowUpRight } from "lucide-react";

interface RelatedGuidesProps {
  relatedTool: string;
  maxGuides?: number;
}

export default function RelatedGuides({ relatedTool, maxGuides = 3 }: RelatedGuidesProps) {
  const allPosts = getAllPosts();
  const related = allPosts
    .filter((p) => p.relatedTool === relatedTool)
    .slice(0, maxGuides);

  if (related.length === 0) return null;

  return (
    <section>
      <h2>Related Guides &amp; Insights</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="...">
            <span>{post.category}</span>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <span>Read guide <ArrowUpRight /></span>
          </Link>
        ))}
      </div>
    </section>
  );
}
```

**Inject into each tool's `page.tsx`:**

```tsx
import RelatedGuides from "@/components/blog/RelatedGuides";

// Inside the return, after the FAQ section:
<RelatedGuides relatedTool="/tools/ksa-gosi-calculator" />
```

This creates the bidirectional PageRank loop: blog posts link TO tools, and tool pages link BACK to related blog posts.

---

## Verification Checklist

After all steps are applied, verify:

| Check | Command / Method |
|-------|-----------------|
| No `FAQPage` in `/app/blog/**` | `grep -r "FAQPage" app/blog/` → 0 matches |
| `WebPage` node present | `grep -c "WebPage" app/blog/\[slug\]/page.tsx` → ≥2 (comment + declaration) |
| `speakable` present | `grep -c "speakable" app/blog/\[slug\]/page.tsx` → ≥1 |
| `knowsAbout` not `jobTitle` | `grep "knowsAbout" app/blog/\[slug\]/page.tsx` → ≥1; `grep "jobTitle"` → 0 |
| `primaryKeyword`, `secondaryKeywords`, `tags[]` all used in Article schema | Check the JSON-LD `keywords` and `about` nodes |
| `secondaryKeywords` in `lib/blog.ts` | `grep -c "secondaryKeywords" lib/blog.ts` → ≥3 (interface + 2 parsers) |
| `CollectionPage` in listing | `grep -c "CollectionPage" app/blog/page.tsx` → ≥1 |
| `RelatedGuides` imported on tool pages | `grep -c "RelatedGuides" app/tools/*/page.tsx` → ≥1 per tool |
| Bidirectional link exists | Blog post links to tool via `relatedTool`; tool links to blog via `RelatedGuides` |

---

## Handoff

After recovery is applied, recommend:

- `nextjs-seo-page-overhaul` — if individual tool pages still need deeper schema/SEO fixes
- `schema-advanced-2026` — for implementing more granular 2026-compliant schema
- `geo-ai-visibility-audit` — to verify AI crawlers can now consume the optimized blog content
- `blog-post-publish-seo` — for publishing new posts with the corrected schema pipeline
