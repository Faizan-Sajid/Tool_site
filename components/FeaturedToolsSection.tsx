"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { TOOLS, Tool } from "@/constants/tools";

interface ToolCardProps {
  tool: Tool;
}

const ToolCard = ({ tool }: ToolCardProps) => {
  const { href, ariaLabel, category, country, icon, title, description, tags, isTeal } = tool;
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      data-category={category}
      data-country={country}
      className="group relative flex flex-col gap-[10px] overflow-hidden rounded-[14px] border border-[rgba(255,255,255,0.07)] bg-[#131620] p-6 transition-all duration-[0.18s] hover:-translate-y-[2px] hover:border-[rgba(255,255,255,0.13)] hover:bg-[#1a1e2e] hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
    >
      {/* Top Gold Line */}
      <span className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-[#c9a84c] to-transparent opacity-0 transition-opacity duration-[0.18s] group-hover:opacity-100" />

      {/* Icon Box */}
      <div
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
      <h2 className="text-[15px] font-bold tracking-[-0.2px] text-[#e6e3db]">
        {title}
      </h2>

      {/* Description */}
      <p className="flex-1 text-[12.5px] leading-[1.6] text-[#87847d]">
        {description}
      </p>

      {/* Tags Row */}
      <div className="flex flex-wrap gap-[6px]">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className={`rounded-[5px] px-2 py-[3px] text-[10px] font-semibold tracking-[0.3px]
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

const FeaturedToolsSection = () => {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  // Determine what to show based on the category param
  const showFinance = !categoryParam || categoryParam === "finance";
  const showHR = !categoryParam || categoryParam === "hr";
  const showDigitalGrowth = !categoryParam || categoryParam === "seo" || categoryParam === "digital-growth";
  
  // Filter tools based on the param
  const filterTools = (tools: Tool[]) => {
    if (!categoryParam) return tools;
    return tools.filter(t => t.category === categoryParam);
  };

  const financeTools = filterTools(TOOLS.filter(t => t.category === "finance" && t.country === "all"));
  // Include regional tools if we are showing all tools, or if the regional tool matches the current category
  const regionalTools = TOOLS.filter(t => t.country !== "all" || (t.category !== "finance" && t.category !== "visa"));
  const filteredRegionalTools = filterTools(regionalTools);
  const showRegional = !categoryParam || filteredRegionalTools.length > 0;

  return (
    <section id="all-tools" className="px-5 py-8 sm:px-9 sm:py-8 lg:px-9 lg:py-8 scroll-mt-20">
      {/* Category: Finance */}
      {showFinance && financeTools.length > 0 && (
        <>
          <div className="mb-4 mt-0 flex items-center gap-[10px] text-[11px] font-bold uppercase tracking-[1.3px] text-[#8b8a87]">
            <span>💰 Finance</span>
            <span className="h-[1px] flex-1 bg-[rgba(255,255,255,0.07)]" />
          </div>
          <div className="mb-10 grid grid-cols-1 gap-[14px] min-[480px]:grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
            {financeTools.map(tool => (
              <ToolCard key={tool.id || tool.title} tool={tool} />
            ))}
          </div>
        </>
      )}

      {/* Category: Regional Specialties */}
      {showRegional && filteredRegionalTools.length > 0 && (
        <>
          <div className="mb-4 mt-0 flex items-center gap-[10px] text-[11px] font-bold uppercase tracking-[1.3px] text-[#8b8a87]">
            <span>🌍 Regional Specialties</span>
            <span className="h-[1px] flex-1 bg-[rgba(255,255,255,0.07)]" />
          </div>
          <div className="mb-10 grid grid-cols-1 gap-[14px] min-[480px]:grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
            {filteredRegionalTools.map(tool => (
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
          <div className="mb-2 grid grid-cols-1 gap-[14px] min-[480px]:grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
            <div className="group relative flex flex-col gap-[10px] overflow-hidden rounded-[14px] border border-dashed border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)] p-6 transition-all duration-[0.18s]">
              <div className="flex h-12 w-12 items-center justify-center rounded-[12px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] text-[22px] grayscale opacity-50">
                🔍
              </div>
              <h2 className="text-[15px] font-bold tracking-[-0.2px] text-[#87847d]">
                Keyword Research Tool
              </h2>
              <p className="flex-1 text-[12.5px] leading-[1.6] text-[#555]">
                Upcoming global utility for SEO specialists and content creators. Stay tuned!
              </p>
              <div className="flex flex-wrap gap-[6px]">
                <span className="rounded-[5px] px-2 py-[3px] text-[10px] font-semibold tracking-[0.3px] bg-[#1f2438] text-[#555]">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default FeaturedToolsSection;
