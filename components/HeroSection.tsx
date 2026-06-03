import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 py-9 sm:py-14 lg:pb-10 overflow-x-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-[860px]">
        {/* Hero Badge */}
        <div className="animate-fadeInDown mb-6 inline-flex items-center gap-[7px] rounded-full border border-[rgba(201,168,76,0.24)] bg-[rgba(201,168,76,0.11)] px-4 py-[5px] pl-[10px] text-[11px] font-semibold tracking-[0.2px] text-[#c9a84c]">
          <span className="animate-pulse-custom h-[6px] w-[6px] rounded-full bg-[#c9a84c]" />
          <span>EPF/KWSP, GOSI, UAE gratuity, Zakat, gold value, Pakistan freelancer tax, and Hajj or Umrah budgets — free, no login, updated for 2026.</span>
        </div>

        {/* H1 Heading */}
        <h1
          id="hero-heading"
          className="animate-fadeInUp delay-100 mb-[18px] font-[family-name:var(--font-serif)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic leading-tight tracking-tight text-[#e6e3db] max-w-prose"
        >
          Free 2026 Financial Calculators for EPF, GOSI, Gratuity, Zakat & Tax
        </h1>

        {/* Paragraph */}
        <p className="animate-fadeInUp delay-200 mb-8 max-w-prose text-base sm:text-lg leading-relaxed text-[#87847d]">
          QuickCalcs provides free financial calculators for 2026 rules across four regions:
          Malaysia EPF/KWSP contributions, Saudi GOSI deductions, UAE end-of-service gratuity,
          Zakat and Nisab, gold value in AED and PKR, Pakistan freelancer tax under FBR/PSEB rules,
          and Hajj or Umrah travel budgets. No account, no login, instant results.
        </p>

        {/* Trust Pills Row */}
        <div
          role="list"
          aria-label="Trust indicators"
          className="animate-fadeInUp delay-300 flex flex-wrap gap-2 sm:gap-3"
        >
          {[{ icon: "✅", text: "100% Free Forever" },{ icon: "🔒", text: "No Login Required" },{ icon: "⚡", text: "Instant Results" },{ icon: "📅", text: "Updated for 2026 Laws" }].map((pill, idx) => (
            <span
              key={idx}
              role="listitem"
              className="inline-flex items-center gap-[6px] rounded-full border border-[rgba(255,255,255,0.13)] bg-[#131620] px-[13px] py-[5px] text-[12px] font-semibold text-[#87847d] min-h-[32px]"
            >
              <span aria-hidden="true" className="text-[13px]">{pill.icon}</span>
              <span>{pill.text}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
