import React from "react";
import type { Metadata } from "next";
import ZakatCalculator from "./ZakatCalculator";
import ZakatContent from "./ZakatContent";
import FAQ from "@/components/FAQ";
import { ChevronRight, Home, Info } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Zakat Calculator 2026 - Calculate Your Zakat Online | QuickCalcs",
  description: "Accurate Zakat calculator based on current Nisab. Calculate Zakat on cash, gold, silver, and investments easily for 2026. Purify your wealth with precision.",
  keywords: "Zakat calculator 2026, calculate zakat online, gold nisab 2026, zakat on investments, islamic finance tools gulf",
  alternates: {
    canonical: "https://www.quickcalcs.app/tools/zakat-calculator",
  },
};

const zakatFaqs = [
  {
    question: "How is Zakat calculated?",
    answer: "Zakat is calculated as 2.5% of your total qualifying wealth (cash, gold, shares, business assets) that has been held for one lunar year, provided it exceeds the Nisab threshold.",
  },
  {
    question: "What is Nisab?",
    answer: "Nisab is the minimum amount of wealth a Muslim must own before Zakat becomes mandatory. It is usually equivalent to the value of 87.48g of gold or 612.36g of silver.",
  },
  {
    question: "Do I pay Zakat on my primary home or car?",
    answer: "No, Zakat is not due on your primary residence, personal vehicle, or tools used for your trade. It is only due on productive wealth and savings.",
  },
  {
    question: "Can I subtract my debts from Zakat?",
    answer: "Yes, you can subtract immediate liabilities and short-term debts from your total assets before calculating the zakatable amount.",
  },
];

export default function ZakatPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zakat Calculator 2026",
    "operatingSystem": "Web",
    "applicationCategory": "FinanceApplication",
    "description": "Calculate your mandatory Zakat dues based on the latest Nisab thresholds for 2026.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <main className="min-h-screen bg-[#0c0e16]">
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-[860px] mx-auto pt-8 pb-16">
        
        {/* BREADCRUMBS */}
        <nav className="px-[20px] sm:px-[36px] flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#8b8a87] mb-8">
          <Link href="/" className="hover:text-[#c9a84c] flex items-center gap-1.5 transition-colors">
            <Home className="w-3 h-3" /> Home
          </Link>
          <ChevronRight className="w-3 h-3 text-[#1a1c24]" />
          <Link href="/?category=finance" className="hover:text-[#c9a84c] transition-colors">Finance</Link>
          <ChevronRight className="w-3 h-3 text-[#1a1c24]" />
          <span className="text-[#c9a84c]">Zakat Calculator</span>
        </nav>

        {/* HEADER SECTION */}
        <header className="px-[20px] sm:px-[36px] mb-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(201,168,76,0.05)] border border-[rgba(201,168,76,0.1)] text-[#c9a84c] text-[10px] font-bold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
            Islamic Finance 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#e6e3db] leading-[1.1] mb-6">
            Zakat <span className="italic-font text-[#c9a84c] font-serif">Calculator</span>
          </h1>
          <p className="text-[#87847d] text-sm max-w-2xl leading-relaxed">
            Accurately calculate your annual Zakat obligation on savings, gold, investments, and business assets. 
            Stay compliant with Sharia requirements for 2026.
          </p>
        </header>

        {/* CALCULATOR COMPONENT */}
        <ZakatCalculator />

        {/* SEO CONTENT SECTION */}
        <ZakatContent />

        {/* FAQ SECTION */}
        <section className="px-[20px] sm:px-[36px] mt-12 border-t border-[rgba(255,255,255,0.07)] pt-16">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-[rgba(201,168,76,0.1)] flex items-center justify-center border border-[rgba(201,168,76,0.1)]">
              <Info className="w-5 h-5 text-[#c9a84c]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#e6e3db]">Frequently Asked Questions</h2>
              <p className="text-xs text-[#8b8a87] mt-1">Common queries regarding Zakat and Nisab</p>
            </div>
          </div>
          <FAQ items={zakatFaqs} />
        </section>
      </div>
    </main>
  );
}
