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
          <span>GOSI deductions, UAE end-of-service gratuity, Zakat, live gold rates, and Pakistan freelancer tax — all free, no login, updated for 2026.</span>
        </div>

        {/* H1 Heading */}
        <h1
          id="hero-heading"
          className="animate-fadeInUp delay-100 mb-[18px] font-[family-name:var(--font-serif)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic leading-tight tracking-tight text-[#e6e3db] max-w-prose"
        >
          Free Financial Calculators for UAE, Saudi Arabia & Pakistan — 2026
        </h1>

        {/* Paragraph */}
        <p className="animate-fadeInUp delay-200 mb-8 max-w-prose text-base sm:text-lg leading-relaxed text-[#87847d]">
          Working in the Gulf — or managing money from anywhere in the world — means dealing with rules that change every year. GOSI rates in Saudi Arabia have a scheduled increase through 2028. UAE Labour Law changed the contract system in 2022 and HR teams are still adjusting. Zakat Nisab shifts every time gold prices move. And Pakistan's FBR tax structure for freelancers has its own layers that most online tools get wrong.
          <br /><br />
          QuickCalcs was built because we got tired of opening government PDFs, running manual spreadsheet formulas, and second-guessing outdated calculators. Every tool here is built on the official legal source — MOHRE for UAE gratuity, Royal Decree M/33 for GOSI, and FBR circulars for Pakistan tax. We update them every quarter. And we never ask you to sign up, log in, or pay anything.
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

      <div className="mt-16 sm:mt-24">
        {/* Top label */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-7 h-0.5 bg-[#c9a84c] rounded-full" />
          <span className="text-[10px] font-bold tracking-[0.12em]
            uppercase text-[#c9a84c]">
            2026 quick reference — UAE · KSA · Pakistan
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#e6e3db]
          leading-snug mb-2">
          How these calculators work
        </h2>
        <p className="text-base sm:text-lg text-[#87847d] leading-relaxed
          mb-10 max-w-prose">
          Key rules, rates, and thresholds — so you understand
          exactly what goes into each result before you calculate.
        </p>

        {/* Rows */}
        <div className="flex flex-col divide-y divide-[#1c1e2e]
          border-t border-[#1c1e2e]">

          {/* Row 1 — UAE Gratuity */}
          <div className="grid grid-cols-1 sm:grid-cols-[172px_1fr]
            gap-6 sm:gap-10 py-6">
            <div>
              <p className="text-[10px] font-bold tracking-[0.1em]
                uppercase text-[#c9a84c] mb-1">UAE Labour Law</p>
              <p className="text-sm font-semibold text-[#e6e3db]
                leading-snug">End-of-Service Gratuity</p>
            </div>
            <p className="text-sm text-[#87847d] leading-[1.8]">
              Calculated on{" "}
              <span className="text-[#c9a84c] font-medium
                bg-[#131525] border border-[#222440] rounded
                px-1.5 py-px text-xs">basic salary only</span>
              {" "}— housing and transport are excluded. First 5 years
              earn{" "}
              <span className="text-[#c9a84c] font-medium
                bg-[#131525] border border-[#222440] rounded
                px-1.5 py-px text-xs">21 days/year</span>
              , from year 6 it rises to{" "}
              <span className="text-[#c9a84c] font-medium
                bg-[#131525] border border-[#222440] rounded
                px-1.5 py-px text-xs">30 days/year</span>
              . Total is capped at{" "}
              <span className="text-[#c9a84c] font-medium
                bg-[#131525] border border-[#222440] rounded
                px-1.5 py-px text-xs">2 years basic salary</span>
              {" "}no matter how long you have worked. Resigning before
              1 year means zero payout. Rules follow Federal
              Decree-Law No. 33 of 2021, updated for MOHRE 2026.
            </p>
          </div>

          {/* Row 2 — GOSI */}
          <div className="grid grid-cols-1 sm:grid-cols-[172px_1fr]
            gap-6 sm:gap-10 py-6">
            <div>
              <p className="text-[10px] font-bold tracking-[0.1em]
                uppercase text-[#c9a84c] mb-1">Saudi GOSI 2026</p>
              <p className="text-sm font-semibold text-[#e6e3db]
                leading-snug">Social Insurance Contributions</p>
            </div>
            <p className="text-sm text-[#87847d] leading-[1.8]">
              Saudi nationals pay{" "}
              <span className="text-[#c9a84c] font-medium
                bg-[#131525] border border-[#222440] rounded
                px-1.5 py-px text-xs">10.75% employee</span>
              {" "}— employer adds{" "}
              <span className="text-[#c9a84c] font-medium
                bg-[#131525] border border-[#222440] rounded
                px-1.5 py-px text-xs">12.75%</span>
              {" "}covering Annuities, OAHI, and SANED unemployment
              insurance. Non-Saudi expats pay nothing from salary;
              only the employer contributes{" "}
              <span className="text-[#c9a84c] font-medium
                bg-[#131525] border border-[#222440] rounded
                px-1.5 py-px text-xs">2% OAHI</span>
              . Everything calculated on basic + housing allowance,
              hard-capped at{" "}
              <span className="text-[#c9a84c] font-medium
                bg-[#131525] border border-[#222440] rounded
                px-1.5 py-px text-xs">SAR 45,000/month</span>
              . Salary above the cap is excluded from GOSI entirely.
            </p>
          </div>

          {/* Row 3 — Zakat */}
          <div className="grid grid-cols-1 sm:grid-cols-[172px_1fr]
            gap-6 sm:gap-10 py-6">
            <div>
              <p className="text-[10px] font-bold tracking-[0.1em]
                uppercase text-[#c9a84c] mb-1">Islamic Finance</p>
              <p className="text-sm font-semibold text-[#e6e3db]
                leading-snug">Zakat on Gold, Cash & Savings</p>
            </div>
            <p className="text-sm text-[#87847d] leading-[1.8]">
              Zakat is{" "}
              <span className="text-[#c9a84c] font-medium
                bg-[#131525] border border-[#222440] rounded
                px-1.5 py-px text-xs">2.5%</span>
              {" "}of wealth held above Nisab for one full lunar year.
              Nisab threshold is{" "}
              <span className="text-[#c9a84c] font-medium
                bg-[#131525] border border-[#222440] rounded
                px-1.5 py-px text-xs">87.48g of gold</span>
              {" "}or its cash equivalent. Pakistani expats in UAE must
              calculate PKR and AED assets separately. State Bank of
              Pakistan auto-deducts from savings on{" "}
              <span className="text-[#c9a84c] font-medium
                bg-[#131525] border border-[#222440] rounded
                px-1.5 py-px text-xs">1st Ramadan</span>
              {" "}— enter that amount so you do not count it twice.
            </p>
          </div>

          {/* Row 4 — Umrah + Gold */}
          <div className="grid grid-cols-1 sm:grid-cols-[172px_1fr]
            gap-6 sm:gap-10 py-6">
            <div>
              <p className="text-[10px] font-bold tracking-[0.1em]
                uppercase text-[#c9a84c] mb-1">Pakistan & Gulf</p>
              <p className="text-sm font-semibold text-[#e6e3db]
                leading-snug">Umrah Cost & Gold per Tola</p>
            </div>
            <p className="text-sm text-[#87847d] leading-[1.8]">
              Standard 10–15 day Umrah from Pakistan costs{" "}
              <span className="text-[#c9a84c] font-medium
                bg-[#131525] border border-[#222440] rounded
                px-1.5 py-px text-xs">PKR 250,000–400,000/person</span>
              {" "}in 2026 — covering visa, return flights, and hotel.
              Ramadan packages run{" "}
              <span className="text-[#c9a84c] font-medium
                bg-[#131525] border border-[#222440] rounded
                px-1.5 py-px text-xs">30–50% higher</span>
              . For gold, Pakistan uses the tola unit —{" "}
              <span className="text-[#c9a84c] font-medium
                bg-[#131525] border border-[#222440] rounded
                px-1.5 py-px text-xs">1 tola = 11.664g</span>
              . Current 24K gold is around{" "}
              <span className="text-[#c9a84c] font-medium
                bg-[#131525] border border-[#222440] rounded
                px-1.5 py-px text-xs">PKR 450k–510k/tola</span>
              {" "}based on Karachi Sarafa Market and live
              international spot price.
            </p>
          </div>

        </div>

        {/* Footer note */}
        <div className="mt-7 border border-[#1c1e2e] rounded-xl
          p-4 bg-[#0f1020] flex gap-3 items-start">
          <span className="text-[#c9a84c] text-sm mt-0.5
            flex-shrink-0">✦</span>
          <p className="text-xs text-[#4a4845] leading-relaxed">
            {/* SEO UPDATE 2026: Visible date freshness signal for Google */}
            Last updated: May 2026 — All calculators reviewed against official 2026 government sources.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
