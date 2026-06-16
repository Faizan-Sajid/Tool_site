---
name: blog-post-publish-seo
description: Publish an SEO/GEO-optimized blog post into an existing Next.js App Router markdown blog. Covers frontmatter enrichment, JSON-LD schema (Article + FAQPage + BreadcrumbList), metadata enhancement, and sitemap integration.
source: auto-skill
extracted_at: '2026-06-16T10:05:09.308Z'
---

# Blog Post Publication with SEO/GEO Optimization

Publish one complete, SEO-optimised blog post into an existing Next.js App Router blog powered by `gray-matter` + `react-markdown`. No CMS, no database.

## When to use

- The user asks to publish, create, or add a new blog post to an existing markdown blog
- The user wants the post to have structured data, proper metadata, and sitemap inclusion
- The blog is already set up with `lib/blog.ts`, `getAllPosts()`, `getPostBySlug()`
- The blog uses `app/blog/[slug]/page.tsx` (SSG with `generateStaticParams`)

## Prerequisites

- An existing Next.js App Router project with blog infrastructure already in place (listing page, slug page, `lib/blog.ts`, `content/blog/` directory)
- `gray-matter`, `react-markdown`, `remark-gfm` already installed

## Step-by-step procedure

### 1. Read existing files first (never skip)

Read these files in full before writing anything:

```
content/blog/example-post.md          ← copy exact frontmatter field names
lib/blog.ts                            ← understand what fields the parser returns
app/blog/[slug]/page.tsx               ← understand how posts are rendered (generateMetadata, component structure)
app/blog/page.tsx                      ← understand listing page (category filter, featured post logic)
app/sitemap.ts                         ← understand sitemap structure
```

**Why:** The frontmatter field names, file naming convention, and markdown formatting must exactly match what `lib/blog.ts` expects and what the slug page renders. Any mismatch breaks the route.

### 2. Create the blog post markdown file

Create `content/blog/<slug>.md` with frontmatter that matches existing post's field names exactly:

```yaml
---
title: "SEO-Optimized Title with Primary Keyword — Complete Guide"
description: "SEO meta description. Keep under 160 chars."
date: "2026-06-16"
slug: "keyword-rich-slug"
category: "Guides"                     # Must exist in the listing page's categoryColorMap
relatedTool: "/tools/some-calculator"  # Optional — shows a CTA card at bottom of post
readingTime: "8 min"
# --- Optional E-E-A-T / GEO fields (add if lib/blog.ts supports them) ---
lastModified: "2026-06-16"
author: "Author Name"
authorTitle: "Job Title & Credential"
authorLinkedIn: "https://linkedin.com/in/..."
metaDescription: "Extended meta description for Google AI Overviews — up to 200 chars"
canonicalUrl: "https://example.com/blog/post-slug"
ogImage: "/images/blog/post-image.png"
tags: ["keyword1", "keyword2", "keyword3"]
primaryKeyword: "primary keyword phrase"
---
```

**Rules:**
- Use exact field names from `example-post.md` — do NOT rename existing fields (e.g. use `description` not `excerpt` if that's what `example-post.md` uses)
- Optional fields are safe to add if they don't break existing parsing; add them to `BlogFrontmatter` interface first (see Step 3)
- The `category` value must exist in the listing page's `categoryColorMap`, or a default color will be used

### 3. Update `lib/blog.ts` if adding new frontmatter fields

If the post frontmatter includes fields not yet in the `BlogFrontmatter` interface:

3a. **Add optional fields to the interface:**

```typescript
export interface BlogFrontmatter {
  // ...existing fields...
  // Optional SEO / E-E-A-T / GEO fields
  hasFAQ?: boolean;
  lastModified?: string;
  author?: string;
  authorTitle?: string;
  authorLinkedIn?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  ogImage?: string;
  tags?: string[];
  primaryKeyword?: string;
  faqItems?: FaqItem[];
}

/** A Q&A pair for dynamic FAQPage JSON-LD. */
export interface FaqItem {
  question: string;
  answer: string;
}
```

3b. **Update `getAllPosts()` and `getPostBySlug()`** to extract each new field:

```typescript
lastModified: data.lastModified as string | undefined,
author: data.author as string | undefined,
// ... etc.
faqItems: Array.isArray(data.faqItems) ? data.faqItems as FaqItem[] : undefined,
```

3c. **Run `npm run build`** to verify no TypeScript errors.

### 4. Add JSON-LD schema to `app/blog/[slug]/page.tsx`

Inject structured data inside the page component's JSX (before the `<article>` tag):

**Article + BreadcrumbList (always inject):**

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": `https://www.quickcalcs.app/blog/${post.slug}#article`,
          headline: post.title,
          description: post.metaDescription || post.description,
          datePublished: post.date,
          dateModified: post.lastModified || post.date,
          author: post.author
            ? {
                "@type": "Person",
                name: post.author,
                ...(post.authorTitle ? { jobTitle: post.authorTitle } : {}),
                ...(post.authorLinkedIn ? { url: post.authorLinkedIn } : {}),
              }
            : undefined,
          publisher: {
            "@type": "Organization",
            name: "QuickCalcs",                    // Replace with site name
            url: "https://www.quickcalcs.app",      // Replace with site URL
            logo: {
              "@type": "ImageObject",
              url: "https://www.quickcalcs.app/android-chrome-512x512.png",
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://www.quickcalcs.app/blog/${post.slug}`,
          },
          ...(post.ogImage
            ? { image: `https://www.quickcalcs.app${post.ogImage}` }
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
      ],
    }),
  }}
/>
```

**FAQPage (dynamic via frontmatter `faqItems` — recommended):**

Driving FAQPage JSON-LD from a frontmatter array is better than hardcoded Q&A pairs because:
- It scales to any number of posts without modifying the page component
- Each post can have its own unique, relevant Q&A
- The schema is always correct per-post and never stale

**Step 1 — Add types to `lib/blog.ts`:**

```typescript
export interface FaqItem {
  question: string;
  answer: string;
}

export interface BlogFrontmatter {
  // ...existing fields...
  hasFAQ?: boolean;        // required — enables/disables FAQPage schema
  faqItems?: FaqItem[];    // required — the actual Q&A pairs
  // ...other optional fields...
}
```

**Step 2 — Parse `faqItems` in both parsers (`getAllPosts()` and `getPostBySlug()`):**

```typescript
faqItems: Array.isArray(data.faqItems) ? data.faqItems as FaqItem[] : undefined,
```

The `Array.isArray()` guard prevents crashes if the frontmatter omits `faqItems` or has a malformed value.

**Step 3 — Add to post frontmatter:**

```yaml
hasFAQ: true
faqItems:
  - question: "Your first question?"
    answer: "Your first answer."
  - question: "Your second question?"
    answer: "Your second answer."
```

**Step 4 — Render dynamically in `app/blog/[slug]/page.tsx`:**

```tsx
{post.hasFAQ === true && post.faqItems && post.faqItems.length > 0 && (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
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

The triple guard (`hasFAQ === true` **AND** `faqItems` is truthy **AND** `faqItems.length > 0`) ensures:
- ✅ Hajj post with both `hasFAQ` and `faqItems` → full FAQPage schema renders
- ✅ Any post with `hasFAQ: true` set accidentally but no `faqItems` array → no broken schema
- ✅ Any post without `hasFAQ` → no FAQ schema at all

This replaces the old pattern of hardcoding Q&A pairs in JSX. Never hardcode FAQ questions in the page component — always read from frontmatter.
```

The `hasFAQ: true` approach is preferred over hardcoded slug matching (`post.slug === "..."`) because:
- It scales to any number of posts without code changes
- A post's slug can change without breaking the schema
- Other frontmatter-driven features can follow the same pattern

### 5. Update `generateMetadata()` to use new frontmatter fields

Enhance the per-post metadata to read optional frontmatter fields with fallbacks:

```typescript
const desc = post.metaDescription || post.description;
const canonical = post.canonicalUrl || `https://www.quickcalcs.app/blog/${post.slug}`;
const ogImages = post.ogImage
  ? [{ url: `https://www.quickcalcs.app${post.ogImage}`, width: 1200, height: 630 }]
  : [];

return {
  title: `${post.title} | QuickCalcs Guides`,
  description: desc,
  openGraph: {
    title: post.title,
    description: desc,
    url: canonical,
    siteName: "QuickCalcs",
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.lastModified || post.date,
    images: ogImages,
  },
  twitter: {
    card: "summary_large_image",
    title: post.title,
    description: desc,
    images: ogImages,
  },
  alternates: { canonical },
};
```

### 6. Update sitemap

In `app/sitemap.ts`, ensure blog posts use:

```typescript
const posts = getAllPosts();
const blogUrls = posts.map((post) => ({
  url: `${baseUrl}/blog/${post.slug}`,
  lastModified: new Date(post.lastModified || post.date),
  changeFrequency: 'monthly' as const,
  priority: 0.8,
}));
```

Also add the blog index page itself:

```typescript
{
  url: `${baseUrl}/blog`,
  lastModified: new Date(),
  changeFrequency: 'weekly' as const,
  priority: 0.6,
},
```

### 7. Verify with a build

```bash
# 1. Frontmatter parse check
node -e "const fs=require('fs'); const matter=require('gray-matter'); \
  const c=fs.readFileSync('content/blog/new-post-slug.md','utf8'); \
  const {data}=matter(c); console.log(JSON.stringify(data,null,2));"

# 2. Full build (not dev — catches all errors)
npm run build

# 3. Confirm in build output:
#    - /blog/[slug] shows SSG (●) with the new slug
#    - No TypeScript errors
#    - /sitemap.xml is generated

# 4. Validate JSON-LD
#    - Serve locally (npm run dev) or use build output
#    - Copy page source, paste into schema.org validator
```

## Rules — Do Not Do These

- ❌ Do NOT edit calculator tool files (unless the task explicitly involves them)
- ❌ Do NOT change `layout.tsx`, `globals.css`, `next.config.ts` (unless the task requires it)
- ❌ Do NOT hardcode JSON-LD — read values from post frontmatter dynamically
- ❌ Do NOT invent frontmatter fields that `lib/blog.ts` does not read — always update the parser first
- ❌ Do NOT add `"use client"` to `app/blog/[slug]/page.tsx` — it must remain a Server Component for SEO
- ❌ Do NOT skip reading existing files — always verify the current structure before writing

## Post-publication lifecycle: 410 Gone for deleted posts

When a blog markdown file is deleted, the SSG route no longer generates that page at build time. For the dynamic fallback (post-build request), Google must receive **410 Gone** — not 404 — to immediately drop the URL from its index.

### Why 410, not 404

- **404** keeps the URL in Google's crawl queue — wasted crawl budget
- **410** tells Google the page is *permanently gone* — removed from index immediately
- No redirect needed — 410 is the cleanest SEO solution for deleted content

### Implementation (Next.js 16)

In Next.js 16, `middleware.ts` is deprecated in favour of `proxy.ts`. Create `proxy.ts` at the project root:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import slugs from '@/lib/blog-slugs.json';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only handle /blog/[slug] routes
  const blogMatch = pathname.match(/^\/blog\/([^/]+)$/);
  if (!blogMatch) return NextResponse.next();

  const slug = blogMatch[1];
  const exists = slugs.includes(slug);

  if (!exists) {
    return new Response(null, { status: 410 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/blog/:slug*'],
};
```

**Important:** Edge Runtime does NOT support `fs`, `path`, or `process.cwd()`. Do not import `lib/blog.ts` or any module that uses Node.js APIs. Instead, maintain a static JSON slug list:

### Maintaining the slug list

Create `lib/blog-slugs.json` with valid slugs. Keep it in sync by adding a prebuild script.

**`scripts/generate-blog-slugs.mjs`:**

```javascript
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const blogDir = path.join(root, 'content', 'blog');
const outputFile = path.join(root, 'lib', 'blog-slugs.json');

if (!fs.existsSync(blogDir)) {
  fs.writeFileSync(outputFile, '[]');
  process.exit(0);
}

const files = fs.readdirSync(blogDir).filter((f) => f.endsWith('.md'));
const slugs = files.map((file) => {
  const raw = fs.readFileSync(path.join(blogDir, file), 'utf-8');
  const { data } = matter(raw);
  return data.slug;
});

fs.writeFileSync(outputFile, JSON.stringify(slugs, null, 2) + '\n');
```

**`package.json` build hook:**

```json
"scripts": {
  "build": "node scripts/generate-blog-slugs.mjs && next build",
  // ...
}
```

Now, any time a `.md` file is deleted:
1. The prebuild script regenerates `blog-slugs.json` without that slug
2. The proxy intercepts requests to that slug at runtime
3. Google receives `410 Gone` instead of 404

### Verification

```bash
# Build passes cleanly with proxy
npm run build
# Confirm in output: "ƒ Proxy (Middleware)" appears at bottom

# Create a test .md file, build, delete it, rebuild
# The deleted slug should now return 410
```

## Related skills

- `nextjs-blog-setup` — initial blog infrastructure setup (components, lib, pages)
- `nextjs-seo-page-overhaul` — full SEO/GEO/AEO overhaul for tool pages
- `schema-advanced-2026` — 2026-compliant structured data implementation
