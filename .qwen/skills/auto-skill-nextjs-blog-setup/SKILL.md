---
name: nextjs-blog-setup
description: Set up a complete blog feature for a Next.js App Router project using file-based markdown (gray-matter + react-markdown), with listing page, slug-based post pages, ad slot placeholders, and sitemap integration.
source: auto-skill
extracted_at: '2026-06-15T11:25:21.220Z'
---

# Next.js Blog Setup (Markdown + App Router)

Add a fully functional blog to an existing Next.js App Router project using markdown files — no CMS, no database, no comments system.

## When to use

- The user asks to add a blog, guides section, articles, or content hub to an existing Next.js project
- They want file-based markdown content (no Strapi/Sanity/WordPress)
- They want static generation (SSG) for blog pages
- The project uses Next.js App Router

## Prerequisites

- A Next.js App Router project with `@/*` path alias
- Existing design system (colors, fonts, spacing) — inspect `app/globals.css` and an existing page to extract design tokens

## Key packages

```bash
npm install gray-matter react-markdown remark-gfm
```

## File structure to create

```
content/blog/                    # Markdown source files
  example-post.md                # Placeholder for testing
lib/
  blog.ts                        # Types + getAllPosts() + getPostBySlug()
components/
  ads/
    AdSlot.tsx                   # Reusable ad placeholder
  blog/
    BlogCategoryFilter.tsx       # Client component for pill-style category filter
app/
  blog/
    page.tsx                     # Listing page (uses searchParams for category filtering, + featured card)
    [slug]/
      page.tsx                   # Single post page (SSG + generateStaticParams)
```

## Step-by-step procedure

### 1. Create the blog content folder

Create `content/blog/` and add a placeholder `.md` post with this frontmatter:

```yaml
---
title: "Post Title"
description: "SEO description"
date: "2026-06-15"
slug: "post-slug"
category: "Guides"
relatedTool: "/tools/some-calculator"   # optional — path to related tool page
readingTime: "5 min"
---
```

The body is standard markdown. Only the placeholder post for testing — real content added later.

### 2. Create `lib/blog.ts`

Types:

- `BlogFrontmatter` — all frontmatter fields
- `BlogPost` — frontmatter + markdown `content`

Functions:

- `getAllPosts(): BlogFrontmatter[]` — reads all `.md` files from `content/blog/`, parses frontmatter with `gray-matter`, returns sorted newest-first
- `getPostBySlug(slug: string): BlogPost | null` — finds one post by slug, returns frontmatter + raw markdown content

Use `process.cwd()` to resolve the absolute path, `fs.readFileSync` and `fs.existsSync` for file I/O. This runs only server-side/build-time so synchronous I/O is fine.

### 2b. Category color map (shared constant)

Define a category-to-color map to give each post category a distinct badge color. Reuse the site's existing palette. Fallback to gold for unknown categories.

```ts
const categoryColorMap: Record<string, { bg: string; text: string }> = {
  Guides:        { bg: "rgba(201,168,76,0.11)",  text: "#c9a84c" },  // gold
  UAE:           { bg: "rgba(45,212,160,0.1)",   text: "#2dd4a0" },  // teal
  "Saudi Arabia":{ bg: "rgba(96,165,250,0.1)",   text: "#60a5fa" },  // blue
  Zakat:         { bg: "rgba(251,191,36,0.1)",   text: "#fbbf24" },  // amber
  Pakistan:      { bg: "rgba(251,146,60,0.1)",   text: "#fb923c" },  // orange
  Malaysia:      { bg: "rgba(232,121,249,0.1)",   text: "#e879f9" },  // fuchsia
  Finance:       { bg: "rgba(52,211,153,0.1)",    text: "#34d399" }, // emerald
};

const defaultCategoryColor = { bg: "rgba(201,168,76,0.11)", text: "#c9a84c" };
function getCategoryColor(category: string) {
  return categoryColorMap[category] ?? defaultCategoryColor;
}
```

Place this map wherever badge colors are rendered — both the listing page and the single post page. Duplicate it in each file (it's small) rather than extracting it to a shared file, to keep things simple.

### 3. Create `components/ads/AdSlot.tsx`

A styled placeholder div for future ad network integration:

- `role="region"` with `aria-label` for accessibility
- Dashed border, dark semi-transparent background, "Ad Placeholder" text
- Configurable `className` for positioning
- Max width `728px` (standard leaderboard banner), min height `90px`
- Use the project's existing border-radius (`14px`) and color tokens

### 4. Create `components/blog/BlogCategoryFilter.tsx` (client component)

A client component for pill-style category buttons. Receives the list of categories and the currently active one. Uses `useRouter` + `useSearchParams` to update the URL.

```tsx
"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function BlogCategoryFilter({
  categories,       // string[] — extracted from posts
  activeCategory,   // string — currently selected
}) {
  // onClick: update URL searchParams with the selected category
  // Active pill: gold fill (#c9a84c) + dark text (#0c0e16)
  // Inactive pill: surface background (#131620) + muted text (#8b8a87)
}
```

### 5. Create the listing page `app/blog/page.tsx` (premium editorial design)

This is a server component that accepts `searchParams` to support category filtering. Structure the page as:

**Header zone:**
- Eyebrow label: uppercase gold (`#c9a84c`) text, small font, generous letter-spacing (~0.24em), e.g. "GUIDES & INSIGHTS"
- H1: serif italic (Lora), large (`text-4xl` → `text-6xl` on lg screens), white text
- Tagline: muted paragraph in body font (Jakarta)

**Category filter:**
- Extract all unique categories from `getAllPosts()` using `Set`, prepend `"all"`
- Render `<BlogCategoryFilter categories={categories} activeCategory={activeCategory} />`
- Only show if there are 2+ categories

**Featured post section** (only when viewing "all"):
- Take the first (newest) post from `getAllPosts()`
- Render a large hero card with:
  - Gold gradient top bar (3px)
  - Teal "Featured" badge with a `Star` icon
  - Category badge using `getCategoryColor()`
  - Serif italic title (`text-2xl` → `text-4xl`)
  - Description
  - Meta row (date + reading time) + "Read guide" CTA with arrow
  - Hover: slight lift (`-translate-y-[2px]`), gold border glow

**Ad slot:** `<AdSlot />` between featured section and grid

**Remaining posts grid:**
- If only viewing filtered category (not "all"), show all matching posts
- If viewing "all", show all posts except the featured one with a "More Guides" section label
- 3-column responsive grid (1 col mobile → 2 col tablet → 3 col desktop)
- Each grid card:
  - Category badge (color-coded via `getCategoryColor`)
  - Serif italic title (`text-[17px]`)
  - Description with `line-clamp-2`
  - Meta bar at bottom with date + reading time
  - Hover-revealed "Read" link with arrow
  - Hover effects matching the site's existing card pattern

**Empty state:**
- Centered dashed-border card
- Differentiate "no posts at all" vs "no posts in this category"

### 6. Create the single post page `app/blog/[slug]/page.tsx`

Key patterns for Next.js 16.2+:

- `params` type: `params: Promise<{ slug: string }>` — **must be awaited**
- Use `notFound()` if `getPostBySlug` returns null
- `generateStaticParams()` — calls `getAllPosts()` and returns `{ slug }` objects
- `generateMetadata()` with `await params` — reads post frontmatter, returns title/description/OG

Layout:

1. Breadcrumb: Home > Blog > Post Title
2. Category tag badge (color-coded via `getCategoryColor`)
3. Post title in serif italic (Lora), large display heading
4. Date + reading time meta bar (calendar + clock icons)
5. **Ad slot #1** (after intro, before content)
6. Divider
7. Rendered markdown content (use `ReactMarkdown` with `remarkGfm` for table support)

8. **Related Calculator CTA box** — only if `relatedTool` is set in frontmatter:
   - Import `TOOLS` from `constants/tools.ts` and look up the tool name via `getToolNameByHref(href)`
   - Solid surface card (`bg-[#131620]`) with gold border (`rgba(201,168,76,0.25)`) and `rounded-[18px]`
   - Horizontal layout: calculator icon (lucide `Calculator`) in dark gold-tinted square → text block with gold eyebrow ("Try the calculator") + serif italic tool name + muted description → gold "Open tool" button
   - On mobile: stack vertically, button becomes full width
   - Add `mb-10` below for clear separation from the next section

9. **Ad slot #2** (between CTA and Related Guides)

10. **Related Guides section** — show 2-3 other posts (same category if available, or simply exclude current):
    - Thin top border separator (`border-t border-[rgba(255,255,255,0.06)] pt-10`)
    - Muted uppercase "Related guides" label (no gold accent line — it's cleaner)
    - Grid of compact cards (1 col mobile → 2-3 col desktop), each with:
      - Color-coded category badge
      - Serif italic title
      - Reading time
    - Section spaced with `mb-14` for consistent bottom gap

### 7. Update Navbar

Add a "Guides" (or "Blog") link in the navigation. Follow the existing link styling pattern (same padding, colors, hover states).

### 8. Update Footer

Add a "Guides" (or "Blog") link in the appropriate footer column (typically "Platform" or "Company").

### 8. Update sitemap

Import `getAllPosts()` and append blog URLs to the sitemap array:

```ts
const posts = getAllPosts();
const blogUrls = posts.map((post) => ({
  url: `${baseUrl}/blog/${post.slug}`,
  lastModified: new Date(post.date),
  changeFrequency: 'weekly' as const,
  priority: 0.7,
}));
```

Also add the blog index page URL itself.

### 9. Verify with a build

Run `npm run build` (not dev) to confirm:
- No TypeScript errors
- `/blog` appears as static (`○`)
- `/blog/[slug]` appears as SSG (`●`) with generated routes from the placeholder post

## Design consistency checklist

- Use the same background color (`#0c0e16` or project equivalent)
- Use the same card component styling (rounded corners, borders, hover lift)
- Use the same typography (Jakarta for UI, serif for display headings)
- Use the same gold accent color for CTAs, tags, and highlights
- Use the same text hierarchy (section dividers with underscores, tag pills)

## Adding real content later

No code changes needed. Just create new `.md` files in `content/blog/` with the standard frontmatter fields. On the next build, they'll be automatically included in the listing page, generateStaticParams for dynamic routes, and sitemap.
