import React from "react";
import Link from "next/link";
import { TOOLS, Tool } from "@/constants/tools";
import CategoryFilter from "@/components/CategoryFilter";

interface ToolCardProps {
  tool: Tool;
}

interface FeaturedToolsSectionProps {
  searchParams?: { category?: string };
}

const ToolCard = ({ tool }: ToolCardProps) => {
  const { href, ariaLabel, category, country, icon, title, description, tags, isTeal } = tool;
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      data-category={category}
      data-country={country}
      className="group relative flex flex-col gap-[10px] min-h-[auto] overflow-hidden rounded-[14px] border border-[rgba(255,255,255,0.07)] bg-[#131620] p-6 transition-all duration-[0.18s] hover:-translate-y-[2px] hover:border-[rgba(255,255,255,0.13)] hover:bg-[#1a1e2e] hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
    >
      {/* Top Gold Line */}
      <span className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-[#c9a84c] to-transparent opacity-0 transition-opacity duration-[0.18s] group-hover:opacity-100" />

      {/* Icon Box */}
      <div
        role="img"
        aria-label={`${title} Icon`}
        className={`flex h-12 w-12 items-center justify-center rounded-[12px] border text-[22px]
          ${
            isTeal
              ? "border-[rgba(45,212,160,0.2)] bg-[rgba(45,212,160,0.1)]"
              : "border-[rgba(201,168,76,0.2)] bg-[rgba(201,168,76,0.11)]"
          }
        `}
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-[16px] font-bold tracking-[-0.2px] text-[#e6e3db]">
        {title}
      </h3>

      {/* Description */}
      <p className="flex-1 text-[13px] sm:text-[14px] leading-relaxed text-[#87847d]">
        {description}
      </p>

      {/* Tags Row */}
      <div className="flex flex-wrap gap-[6px] mt-auto">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className={`rounded-[5px] px-2 py-[3px] text-[10px] font-semibold tracking-[0.3px] min-h-[24px] flex items-center
              ${
                tag.variant === "gold"
                  ? "bg-[rgba(201,168,76,0.11)] text-[#c9a84c]"
                  : tag.variant === "teal"
                  ? "bg-[rgba(45,212,160,0.1)] text-[#2dd4a0]"
                  : "bg-[#1f2438] text-[#87847d]"
              }
            `}
          >
            {tag.text}
          </span>
        ))}
      </div>
    </Link>
  );
};

const filterToolsByCategory = (tools: Tool[], category: string) => {
  if (category === "all") return tools;
  return tools.filter((tool) => tool.category === category);
};

const FeaturedToolsSection = ({ searchParams }: FeaturedToolsSectionProps) => {
  const category = searchParams?.category ?? "all";

  const financeTools = filterToolsByCategory(
    TOOLS.filter((tool) => tool.category === "finance" && tool.country === "all"),
    category
  );
  const regionalTools = TOOLS.filter(
    (tool) => tool.country !== "all" || (tool.category !== "finance" && tool.category !== "visa")
  );
  const filteredRegionalTools = filterToolsByCategory(regionalTools, category);
  const digitalGrowthTools = filterToolsByCategory(TOOLS.filter((tool) => tool.category === "business"), category);

  const showFinance = financeTools.length > 0;
  const showRegional = filteredRegionalTools.length > 0;
  const showDigitalGrowth = digitalGrowthTools.length > 0;

  return (
    /* Main Section: Added max-w-[1280px] and mx-auto to perfectly contain and center the content on large screens */
    <section id="all-tools" className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 py-8 lg:py-12 scroll-mt-20 overflow-x-hidden">
      <CategoryFilter activeCategory={category} />

      {/* Category: Finance */}
      {showFinance && (
        <>
          <div className="mb-4 mt-0 flex items-center gap-[10px] text-[11px] font-bold uppercase tracking-[1.3px] text-[#8b8a87]">
            <span>💰 Finance</span>
            <span className="h-[1px] flex-1 bg-[rgba(255,255,255,0.07)]" />
          </div>
          {/* Changed xl:grid-cols-4 to xl:grid-cols-3 for a solid 3-card structure */}
          <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
            {financeTools.map((tool) => (
              <ToolCard key={tool.id || tool.title} tool={tool} />
            ))}
          </div>
        </>
      )}

      {/* Category: Regional Specialties */}
      {showRegional && (
        <>
          <div className="mb-4 mt-0 flex items-center gap-[10px] text-[11px] font-bold uppercase tracking-[1.3px] text-[#8b8a87]">
            <span>🌍 Regional Specialties</span>
            <span className="h-[1px] flex-1 bg-[rgba(255,255,255,0.07)]" />
          </div>
          {/* Changed xl:grid-cols-4 to xl:grid-cols-3 */}
          <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
            {filteredRegionalTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </>
      )}

      {/* Category: Digital Growth */}
      {showDigitalGrowth && (
        <>
          <div className="mb-4 mt-0 flex items-center gap-[10px] text-[11px] font-bold uppercase tracking-[1.3px] text-[#8b8a87]">
            <span>🚀 Digital Growth</span>
            <span className="h-[1px] flex-1 bg-[rgba(255,255,255,0.07)]" />
          </div>
          <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
            {digitalGrowthTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default FeaturedToolsSection;
