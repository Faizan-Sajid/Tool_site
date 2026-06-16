import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts, type BlogFrontmatter } from "@/lib/blog";
import BlogCategoryFilter from "@/components/blog/BlogCategoryFilter";
import AdSlot from "@/components/ads/AdSlot";
import { CalendarDays, Clock, ArrowUpRight, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Guides & Updates — Financial Calculator Tips for UAE, KSA & Malaysia",
  description:
    "Read expert guides on UAE gratuity, Saudi GOSI, Zakat, EPF, Pakistan freelancer tax, and more. QuickCalcs blog helps you understand financial calculations across the Gulf and Asia.",
  openGraph: {
    title: "Guides & Updates | QuickCalcs",
    description:
      "Read expert guides on UAE gratuity, Saudi GOSI, Zakat, EPF, Pakistan freelancer tax, and more.",
    url: "https://www.quickcalcs.app/blog",
    siteName: "QuickCalcs",
    type: "website",
    images: [
      {
        url: "https://www.quickcalcs.app/opengraph-image",
        width: 1200,
        height: 630,
        alt: "QuickCalcs Guides & Updates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guides & Updates | QuickCalcs",
    description:
      "Read expert guides on UAE gratuity, Saudi GOSI, Zakat, EPF, Pakistan freelancer tax, and more.",
    images: ["https://www.quickcalcs.app/opengraph-image"],
  },
  alternates: {
    canonical: "https://www.quickcalcs.app/blog",
  },
};

// ── Category colour map (consistent with existing site palette) ──
const categoryColorMap: Record<string, { bg: string; text: string }> = {
  Guides: { bg: "rgba(201,168,76,0.11)", text: "#c9a84c" },
  UAE: { bg: "rgba(45,212,160,0.1)", text: "#2dd4a0" },
  "Saudi Arabia": { bg: "rgba(96,165,250,0.1)", text: "#60a5fa" },
  Zakat: { bg: "rgba(251,191,36,0.1)", text: "#fbbf24" },
  Pakistan: { bg: "rgba(251,146,60,0.1)", text: "#fb923c" },
  Malaysia: { bg: "rgba(232,121,249,0.1)", text: "#e879f9" },
  Finance: { bg: "rgba(52,211,153,0.1)", text: "#34d399" },
};

const defaultCategoryColor = { bg: "rgba(201,168,76,0.11)", text: "#c9a84c" };

function getCategoryColor(category: string) {
  return categoryColorMap[category] ?? defaultCategoryColor;
}

// ── Helpers ──
function extractCategories(posts: BlogFrontmatter[]): string[] {
  const cats = new Set(posts.map((p) => p.category));
  return ["all", ...Array.from(cats)];
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

// ── Featured Post Card ──
function FeaturedCard({ post }: { post: BlogFrontmatter }) {
  const cc = getCategoryColor(post.category);
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-[18px] border border-[rgba(255,255,255,0.07)] bg-[#131620] p-7 sm:p-10 transition-all duration-[0.18s] hover:-translate-y-[2px] hover:border-[rgba(201,168,76,0.18)] hover:bg-[#1a1e2e] hover:shadow-[0_14px_40px_rgba(0,0,0,0.35)]"
    >
      {/* Top gold gradient bar */}
      <span className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-[#c9a84c] to-transparent opacity-100" />

      {/* Badges row */}
      <div className="mb-5 flex flex-wrap items-center gap-2.5">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgba(45,212,160,0.12)] px-3 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[#2dd4a0]">
          <Star className="h-2.5 w-2.5 fill-[#2dd4a0]" />
          Featured
        </span>
        <span
          className="rounded-full px-3 py-1 text-[9px] font-bold uppercase tracking-[0.14em]"
          style={{ backgroundColor: cc.bg, color: cc.text }}
        >
          {post.category}
        </span>
      </div>

      {/* Title */}
      <h2 className="mb-4 font-[family-name:var(--font-serif)] text-2xl italic leading-tight text-[#e6e3db] sm:text-3xl md:text-4xl group-hover:text-[#c9a84c] transition-colors">
        {post.title}
      </h2>

      {/* Description */}
      <p className="mb-6 max-w-2xl text-[14px] leading-relaxed text-[#87847d]">
        {post.description}
      </p>

      {/* Meta + CTA */}
      <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-[rgba(255,255,255,0.05)] pt-5">
        <div className="flex items-center gap-4 text-[11px] text-[#8b8a87]">
          <span className="flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {post.readingTime}
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#c9a84c] transition-all group-hover:gap-2.5">
          Read guide <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}

// ── Grid Post Card ──
function GridCard({ post }: { post: BlogFrontmatter }) {
  const cc = getCategoryColor(post.category);
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative flex flex-col rounded-[14px] border border-[rgba(255,255,255,0.07)] bg-[#131620] p-6 transition-all duration-[0.18s] hover:-translate-y-[2px] hover:border-[rgba(255,255,255,0.13)] hover:bg-[#1a1e2e] hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
    >
      {/* Top accent line */}
      <span className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-[#c9a84c] to-transparent opacity-0 transition-opacity duration-[0.18s] group-hover:opacity-100" />

      {/* Category badge */}
      <div className="mb-4">
        <span
          className="rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.14em]"
          style={{ backgroundColor: cc.bg, color: cc.text }}
        >
          {post.category}
        </span>
      </div>

      {/* Title (serif italic) */}
      <h3 className="mb-3 font-[family-name:var(--font-serif)] text-[17px] italic leading-snug text-[#e6e3db] group-hover:text-[#c9a84c] transition-colors">
        {post.title}
      </h3>

      {/* Description */}
      <p className="mb-5 flex-1 text-[13px] leading-relaxed text-[#87847d] line-clamp-2">
        {post.description}
      </p>

      {/* Meta row */}
      <div className="mt-auto flex items-center justify-between border-t border-[rgba(255,255,255,0.05)] pt-4">
        <div className="flex items-center gap-3 text-[10px] text-[#8b8a87]">
          <span className="flex items-center gap-1">
            <CalendarDays className="h-3 w-3" />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {post.readingTime}
          </span>
        </div>
        <span className="flex items-center gap-0.5 text-[10px] font-bold text-[#c9a84c] opacity-0 transition-all group-hover:opacity-100 group-hover:gap-1.5">
          Read <ArrowUpRight className="h-3 w-3" />
        </span>
      </div>
    </Link>
  );
}

// ── Page ──
export default async function BlogPage({
  searchParams,
}: {
  searchParams?: Promise<{ category?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const activeCategory = resolvedSearchParams?.category ?? "all";

  const allPosts = getAllPosts();
  const categories = extractCategories(allPosts);

  // Split: first post = featured, rest go in grid
  const [featuredPost, ...remainingPosts] = allPosts;

  // Filter remaining posts by category
  const filteredPosts =
    activeCategory === "all"
      ? remainingPosts
      : remainingPosts.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#0c0e16]">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8 py-12 sm:py-16 lg:py-20">
        {/* ── Header ── */}
        <header className="mb-6">
          {/* Eyebrow */}
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.24em] text-[#c9a84c]">
            Guides &amp; Insights
          </p>

          {/* H1 — serif italic */}
          <h1 className="mb-4 font-[family-name:var(--font-serif)] text-4xl italic leading-tight text-[#e6e3db] sm:text-5xl lg:text-6xl">
            Guides &amp; Updates
          </h1>

          {/* Tagline */}
          <p className="max-w-2xl text-[15px] leading-relaxed text-[#87847d]">
            Expert guides on UAE gratuity, Saudi GOSI, Zakat, Malaysia EPF,
            Pakistan freelancer tax, and more. Learn how the numbers work so
            you can plan with confidence.
          </p>
        </header>

        {/* ── Category Filter ── */}
        {categories.length > 1 && (
          <BlogCategoryFilter
            categories={categories}
            activeCategory={activeCategory}
          />
        )}

        {/* ── Featured Post ── */}
        {featuredPost && activeCategory === "all" && (
          <section className="mb-10">
            <FeaturedCard post={featuredPost} />
          </section>
        )}

        {/* ── Ad Slot ── */}
        <div className="mb-10">
          <AdSlot />
        </div>

        {/* ── Remaining Posts Grid ── */}
        {filteredPosts.length > 0 ? (
          <section>
            {/* Section label when showing non-featured */}
            {featuredPost && activeCategory === "all" && (
              <div className="mb-6 flex items-center gap-[10px] text-[11px] font-bold uppercase tracking-[1.3px] text-[#8b8a87]">
                <span>More Guides</span>
                <span className="h-px flex-1 bg-[rgba(255,255,255,0.07)]" />
              </div>
            )}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <GridCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        ) : (
          /* ── Empty State ── */
          <div className="flex flex-col items-center justify-center rounded-[14px] border border-dashed border-[rgba(255,255,255,0.07)] bg-[#131620] py-20 text-center">
            <p className="text-sm text-[#8b8a87]">
              {allPosts.length === 0
                ? "No guides published yet. Check back soon."
                : "No guides in this category yet."}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
