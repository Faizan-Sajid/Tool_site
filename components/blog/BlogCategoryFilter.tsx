"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface BlogCategoryFilterProps {
  categories: string[];
  activeCategory: string;
}

export default function BlogCategoryFilter({
  categories,
  activeCategory,
}: BlogCategoryFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategoryChange = (cat: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (cat === "all") {
      params.delete("category");
    } else {
      params.set("category", cat);
    }

    const query = params.toString();
    router.push(query ? `/blog?${query}` : "/blog");
  };

  return (
    <div
      className="mb-10 flex flex-wrap gap-2"
      aria-label="Filter guides by category"
    >
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            type="button"
            onClick={() => handleCategoryChange(cat)}
            className={`min-h-[44px] rounded-full border px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] transition-colors ${
              isActive
                ? "border-[rgba(201,168,76,0.35)] bg-[#c9a84c] text-[#0c0e16]"
                : "border-[rgba(255,255,255,0.08)] bg-[#131620] text-[#8b8a87] hover:border-[rgba(201,168,76,0.24)] hover:text-[#e6e3db]"
            }`}
            aria-pressed={isActive}
          >
            {cat === "all" ? "All Guides" : cat}
          </button>
        );
      })}
    </div>
  );
}
