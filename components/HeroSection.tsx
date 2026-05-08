import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative max-w-[860px] px-[20px] py-[36px] sm:px-[36px] sm:py-[56px] lg:pb-[40px]"
      aria-labelledby="hero-heading"
    >
      {/* Hero Badge */}
      <div className="animate-fadeInDown mb-6 inline-flex items-center gap-[7px] rounded-full border border-[rgba(201,168,76,0.24)] bg-[rgba(201,168,76,0.11)] px-4 py-[5px] pl-[10px] text-[11px] font-semibold tracking-[0.2px] text-[#c9a84c]">
        <span className="animate-pulse-custom h-[6px] w-[6px] rounded-full bg-[#c9a84c]" />
        <span>Universal Tools for Finance, SEO & Productivity</span>
      </div>

      {/* H1 Heading */}
      <h1
        id="hero-heading"
        className="animate-fadeInUp delay-100 mb-[18px] font-[family-name:var(--font-serif)] text-[clamp(28px,4.5vw,52px)] italic leading-[1.1] tracking-[-1px] text-[#e6e3db]"
      >
        All-in-One Utility Suite
        <br />
        for <em className="not-italic text-[#c9a84c]">Everyone, Everywhere</em>
      </h1>

      {/* Paragraph */}
      <p className="animate-fadeInUp delay-200 mb-8 max-w-[500px] text-[15px] leading-[1.75] text-[#87847d]">
        From specialized regional calculators to global SEO and financial tools, QuickCalcs empowers your digital workflow. No login, no fees, instant results.
      </p>

      {/* Trust Pills Row */}
      <div
        role="list"
        aria-label="Trust indicators"
        className="animate-fadeInUp delay-300 flex flex-wrap gap-[10px]"
      >
        {[
          { icon: "✅", text: "100% Free Forever" },
          { icon: "🔒", text: "No Login Required" },
          { icon: "⚡", text: "Instant Results" },
          { icon: "📅", text: "2026 Law Updated" },
        ].map((pill, idx) => (
          <span
            key={idx}
            role="listitem"
            className="inline-flex items-center gap-[6px] rounded-full border border-[rgba(255,255,255,0.13)] bg-[#131620] px-[13px] py-[5px] text-[12px] font-semibold text-[#87847d]"
          >
            <span className="text-[13px]">{pill.icon}</span>
            {pill.text}
          </span>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
