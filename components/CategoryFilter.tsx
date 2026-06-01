"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface CategoryFilterProps {
  activeCategory: string;
}

const categories = [
  { id: "all", label: "All Tools" },
  { id: "finance", label: "Finance" },
  { id: "hr", label: "HR & Salary" },
  { id: "visa", label: "Visa & Docs" },
  { id: "legal", label: "Legal Docs" },
  { id: "business", label: "Business Tools" },
];

export default function CategoryFilter({ activeCategory }: CategoryFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategoryChange = (categoryId: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (categoryId === "all") {
      params.delete("category");
    } else {
      params.set("category", categoryId);
    }

    const queryString = params.toString();
    router.push(queryString ? `/?${queryString}#all-tools` : "/#all-tools");
  };

  return (
    <div className="mb-6 flex flex-wrap gap-2" aria-label="Filter tools by category">
      {categories.map((category) => {
        const isActive = activeCategory === category.id;

        return (
          <button
            key={category.id}
            type="button"
            onClick={() => handleCategoryChange(category.id)}
            className={`min-h-[44px] rounded-full border px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] transition-colors ${
              isActive
                ? "border-[rgba(201,168,76,0.35)] bg-[rgba(201,168,76,0.14)] text-[#c9a84c]"
                : "border-[rgba(255,255,255,0.07)] bg-[#131620] text-[#87847d] hover:border-[rgba(201,168,76,0.24)] hover:text-[#e6e3db]"
            }`}
            aria-pressed={isActive}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
}
