import React from "react";

const StatsStrip = () => {
  const stats = [
    { num: "24+", label: "Free Tools" },
    { num: "UAE · KSA · UK", label: "Countries Covered" },
    { num: "100%", label: "Free Forever" },
    { num: "No Login", label: "Required" },
  ];

  return (
    <div
      role="region"
      aria-label="Site statistics"
      className="animate-fadeIn delay-400 grid grid-cols-2 bg-[#131620] border-y border-[rgba(255,255,255,0.07)] md:grid-cols-4"
    >
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className={`px-6 py-5 text-center transition-all duration-300 hover:bg-[#1a1e2e]
            ${idx !== stats.length - 1 ? "border-r border-[rgba(255,255,255,0.07)]" : ""}
            ${idx === 1 ? "max-md:border-r-0" : ""}
          `}
        >
          <span className="mb-[5px] block font-[family-name:var(--font-serif)] text-[22px] font-normal italic leading-none text-[#c9a84c]">
            {stat.num}
          </span>
          <span className="text-[10.5px] font-semibold uppercase tracking-[0.9px] text-[#87847d]">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StatsStrip;
