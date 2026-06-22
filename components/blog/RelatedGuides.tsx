import React from "react";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { ArrowUpRight } from "lucide-react";

interface RelatedGuidesProps {
  /** The tool href path to match (e.g. "/tools/ksa-gosi-calculator") */
  relatedTool: string;
  /** Maximum number of guides to show. Default 3. */
  maxGuides?: number;
}

/**
 * Server component that queries the blog for posts whose `relatedTool`
 * frontmatter matches the given tool path, then renders them as a
 * "Related Guides & Insights" card section with passing PageRank.
 *
 * Usage in a tool page.tsx:
 *   import RelatedGuides from "@/components/blog/RelatedGuides";
 *   ...
 *   <RelatedGuides relatedTool="/tools/ksa-gosi-calculator" />
 */
export default function RelatedGuides({
  relatedTool,
  maxGuides = 3,
}: RelatedGuidesProps) {
  const allPosts = getAllPosts();
  const related = allPosts
    .filter((p) => p.relatedTool === relatedTool)
    .slice(0, maxGuides);

  if (related.length === 0) {
    return null;
  }

  return (
    <section className="mx-auto w-full max-w-[860px] px-[20px] sm:px-[36px] py-[32px]">
      <div className="border-t border-[rgba(255,255,255,0.06)] pt-8">
        <h2 className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#8b8a87]">
          Related Guides &amp; Insights
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-[14px] border border-[rgba(255,255,255,0.07)] bg-[#131620] p-5 transition-all hover:-translate-y-[2px] hover:border-[rgba(255,255,255,0.13)] hover:bg-[#1a1e2e] hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
            >
              <span className="mb-2.5 inline-block rounded-full bg-[rgba(201,168,76,0.11)] px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.14em] text-[#c9a84c]">
                {post.category}
              </span>
              <h3 className="mb-1.5 font-[family-name:var(--font-serif)] text-[14px] italic leading-snug text-[#e6e3db] group-hover:text-[#c9a84c] transition-colors">
                {post.title}
              </h3>
              <p className="mb-3 text-[12px] leading-relaxed text-[#87847d] line-clamp-2">
                {post.description}
              </p>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#c9a84c] transition-all group-hover:gap-1.5">
                Read guide <ArrowUpRight className="h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
