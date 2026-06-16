import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { TOOLS } from "@/constants/tools";
import { ChevronRight, Home, CalendarDays, Clock, ArrowUpRight, Calculator } from "lucide-react";
import AdSlot from "@/components/ads/AdSlot";

type Props = {
  params: Promise<{ slug: string }>;
};

// ── Category colour map (sync with listing page) ──
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

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getToolNameByHref(href: string): string | null {
  const tool = TOOLS.find((t) => t.href === href);
  return tool?.title ?? null;
}

// ── Static Generation ──
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// ── Per-Post SEO ──
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Guide Not Found" };
  }

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
    alternates: {
      canonical,
    },
  };
}

// ── Related Posts ──
function getRelatedPosts(currentSlug: string, category: string, count = 3) {
  const all = getAllPosts();
  return all
    .filter((p) => p.slug !== currentSlug && p.category === category)
    .slice(0, count);
}

// ── Page Component ──
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, post.category);
  const cc = getCategoryColor(post.category);

  return (
    <main className="min-h-screen bg-[#0c0e16]">
      {/* ── JSON-LD Schema ── */}
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
                  name: "QuickCalcs",
                  url: "https://www.quickcalcs.app",
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
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.quickcalcs.app",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Guides",
                    item: "https://www.quickcalcs.app/blog",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: post.title,
                    item: `https://www.quickcalcs.app/blog/${post.slug}`,
                  },
                ],
              },
            ],
          }),
        }}
      />
      {/* ── FAQPage JSON-LD (dynamic from frontmatter faqItems) ── */}
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
      <article className="mx-auto max-w-[860px] px-4 sm:px-6 md:px-8 py-12 sm:py-16">
        {/* ── Breadcrumbs ── */}
        <nav className="mb-8 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#8b8a87]">
          <Link href="/" className="flex items-center gap-1.5 transition-colors hover:text-[#c9a84c]">
            <Home className="h-3 w-3" /> Home
          </Link>
          <ChevronRight className="h-3 w-3 text-[#1a1c24]" />
          <Link href="/blog" className="transition-colors hover:text-[#c9a84c]">
            Guides
          </Link>
          <ChevronRight className="h-3 w-3 text-[#1a1c24]" />
          <span className="max-w-[240px] truncate text-[#c9a84c]">{post.title}</span>
        </nav>

        {/* ── Eyebrow + Category badge ── */}
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <span
            className="rounded-full px-3 py-1 text-[9px] font-bold uppercase tracking-[0.14em]"
            style={{ backgroundColor: cc.bg, color: cc.text }}
          >
            {post.category}
          </span>
        </div>

        {/* ── H1 (serif italic) ── */}
        <h1 className="mb-5 font-[family-name:var(--font-serif)] text-3xl italic leading-tight text-[#e6e3db] sm:text-4xl md:text-5xl">
          {post.title}
        </h1>

        {/* ── Meta bar ── */}
        <div className="mb-10 flex items-center gap-5 text-[12px] text-[#8b8a87]">
          <span className="flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {post.readingTime}
          </span>
        </div>

        {/* ── Ad Slot: after intro / before content ── */}
        <div className="mb-10">
          <AdSlot />
        </div>

        {/* ── Divider ── */}
        <div className="mb-10 h-px bg-[rgba(255,255,255,0.07)]" />

        {/* ── Post Content (ReactMarkdown) ── */}
        <div className="prose-custom">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children, ...props }) => (
                <h1 className="mb-6 mt-10 font-[family-name:var(--font-serif)] text-2xl italic text-[#e6e3db] sm:text-3xl" {...props}>
                  {children}
                </h1>
              ),
              h2: ({ children, ...props }) => (
                <h2 className="mb-4 mt-10 font-[family-name:var(--font-serif)] text-xl italic text-[#e6e3db] sm:text-2xl" {...props}>
                  {children}
                </h2>
              ),
              h3: ({ children, ...props }) => (
                <h3 className="mb-3 mt-8 text-lg font-bold text-[#e6e3db]" {...props}>
                  {children}
                </h3>
              ),
              p: ({ children, ...props }) => (
                <p className="mb-5 text-[15px] leading-[1.8] text-[#d0cdc4]" {...props}>
                  {children}
                </p>
              ),
              a: ({ href, children, ...props }) => (
                <a
                  href={href}
                  className="text-[#c9a84c] underline decoration-[rgba(201,168,76,0.3)] underline-offset-2 transition-colors hover:decoration-[#c9a84c]"
                  target={href?.startsWith("http") ? "_blank" : undefined}
                  rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  {...props}
                >
                  {children}
                </a>
              ),
              ul: ({ children, ...props }) => (
                <ul className="mb-5 space-y-2 pl-5 text-[15px] leading-relaxed text-[#d0cdc4]" {...props}>
                  {children}
                </ul>
              ),
              ol: ({ children, ...props }) => (
                <ol className="mb-5 space-y-2 pl-5 text-[15px] leading-relaxed text-[#d0cdc4]" {...props}>
                  {children}
                </ol>
              ),
              li: ({ children, ...props }) => (
                <li className="marker:text-[#c9a84c]" {...props}>
                  {children}
                </li>
              ),
              strong: ({ children, ...props }) => (
                <strong className="font-bold text-[#e6e3db]" {...props}>
                  {children}
                </strong>
              ),
              em: ({ children, ...props }) => (
                <em className="italic text-[#e6e3db]" {...props}>
                  {children}
                </em>
              ),
              blockquote: ({ children, ...props }) => (
                <blockquote
                  className="mb-6 border-l-4 border-[#c9a84c] bg-[rgba(201,168,76,0.05)] py-3 pl-5 pr-4 text-[14px] italic leading-relaxed text-[#b0ada5]"
                  {...props}
                >
                  {children}
                </blockquote>
              ),
              hr: ({ ...props }) => (
                <hr className="mb-8 mt-8 border-[rgba(255,255,255,0.07)]" {...props} />
              ),
              code: ({ children, ...props }) => (
                <code
                  className="rounded bg-[#1a1e2e] px-1.5 py-0.5 text-[13px] text-[#c9a84c]"
                  {...props}
                >
                  {children}
                </code>
              ),
              table: ({ children, ...props }) => (
                <div className="mb-6 overflow-x-auto rounded-[12px] border border-[rgba(255,255,255,0.07)]">
                  <table className="w-full min-w-[400px] border-collapse text-[14px]" {...props}>
                    {children}
                  </table>
                </div>
              ),
              thead: ({ children, ...props }) => (
                <thead className="bg-[#1a1e2e]" {...props}>
                  {children}
                </thead>
              ),
              th: ({ children, ...props }) => (
                <th className="px-4 py-3 text-left text-[12px] font-bold uppercase tracking-[0.1em] text-[#8b8a87]" {...props}>
                  {children}
                </th>
              ),
              td: ({ children, ...props }) => (
                <td className="border-t border-[rgba(255,255,255,0.05)] px-4 py-3 text-[#d0cdc4]" {...props}>
                  {children}
                </td>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* ── Related Calculator CTA ── */}
        {post.relatedTool && (() => {
          const toolName = getToolNameByHref(post.relatedTool!);
          return (
            <div className="mb-10 mt-14 rounded-[18px] border border-[rgba(201,168,76,0.25)] bg-[#131620] p-6 sm:p-8 transition-all hover:border-[rgba(201,168,76,0.35)] hover:shadow-[0_0_30px_rgba(201,168,76,0.06)]">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                {/* Icon box */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[rgba(201,168,76,0.11)]">
                  <Calculator className="h-6 w-6 text-[#c9a84c]" />
                </div>

                {/* Text block */}
                <div className="min-w-0 flex-1">
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#c9a84c]">
                    Try the calculator
                  </p>
                  {toolName && (
                    <h3 className="mb-1 font-[family-name:var(--font-serif)] text-[17px] italic leading-snug text-[#e6e3db] sm:text-[19px]">
                      {toolName}
                    </h3>
                  )}
                  <p className="text-[14px] leading-relaxed text-[#87847d]">
                    Put this guide into practice — use our interactive calculator to get
                    instant estimates personalised to your situation.
                  </p>
                </div>

                {/* Button */}
                <Link
                  href={post.relatedTool}
                  className="inline-flex h-11 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-[#c9a84c] px-6 text-[13px] font-bold text-[#0c0e16] transition-all hover:bg-[#e2bd56] hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] active:scale-[0.98] sm:w-auto"
                >
                  Open tool <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          );
        })()}

        {/* ── Ad Slot: before Related Guides ── */}
        <div className="mt-14">
          <AdSlot label="Advertisement (bottom)" />
        </div>

        {/* ── Related Guides ── */}
        {relatedPosts.length > 0 && (
          <section className="mb-14 border-t border-[rgba(255,255,255,0.06)] pt-10">
            <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-[#8b8a87]">
              Related guides
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((rp) => {
                const relCc = getCategoryColor(rp.category);
                return (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="group rounded-[14px] border border-[rgba(255,255,255,0.07)] bg-[#131620] p-5 transition-all hover:-translate-y-[2px] hover:border-[rgba(255,255,255,0.13)] hover:bg-[#1a1e2e] hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                  >
                    <span
                      className="mb-2.5 inline-block rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.14em]"
                      style={{ backgroundColor: relCc.bg, color: relCc.text }}
                    >
                      {rp.category}
                    </span>
                    <h4 className="mb-1.5 font-[family-name:var(--font-serif)] text-[14px] italic leading-snug text-[#e6e3db] group-hover:text-[#c9a84c] transition-colors">
                      {rp.title}
                    </h4>
                    <p className="text-[11px] text-[#8b8a87]">{rp.readingTime}</p>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </article>
    </main>
  );
}
