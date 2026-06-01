import React from "react";
import { TOOLS } from "@/constants/tools";

const StatsStrip = () => {
  const stats = [
    { num: `${TOOLS.length}+`, label: "Free Tools" },
    { num: "200+", label: "Countries Supported" },
    { num: "100%", label: "Free Forever" },
    { num: "No Login", label: "Required" },
  ];

  return (
    <div
      role="region"
      aria-label="Site statistics"
      className="animate-fadeIn delay-400 grid grid-cols-2 sm:grid-cols-4 bg-[#131620] border-y border-[rgba(255,255,255,0.07)]"
    >
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className={`px-4 sm:px-6 py-6 text-center transition-all duration-300 hover:bg-[#1a1e2e]
            ${idx !== stats.length - 1 ? "sm:border-r border-[rgba(255,255,255,0.07)]" : ""}
            ${idx % 2 === 0 ? "border-r sm:border-r-0 border-[rgba(255,255,255,0.07)]" : ""}
          `}
        >
          <span className="mb-[6px] block font-[family-name:var(--font-serif)] text-xl sm:text-2xl font-normal italic leading-none text-[#c9a84c]">
            {stat.num}
          </span>
          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#87847d]">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StatsStrip;
