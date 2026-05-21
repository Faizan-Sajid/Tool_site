import React from "react";
import type { Metadata } from "next";
import ZakatCalculator from "./ZakatCalculator";
import ZakatContent from "./ZakatContent";
import FAQ from "@/components/FAQ";
import { ChevronRight, Home, Info } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Zakat Calculator 2026 — Live Gold & Silver Nisab Value [Free]",
  description: "Calculate your Zakat accurately using the 2026 dynamic Gold & Silver Nisab standards. Easily calculate Zakat on gold jewelry, crypto, salary savings, cash, and property.",
  keywords: "Zakat calculator 2026, today gold nisab value 2026, silver nisab in pkr 2026, how to calculate zakat nisab manually, zakat on gold jewelry, hanafi zakat calculator, zakat on crypto",
  alternates: {
    canonical: "https://www.quickcalcs.app/tools/zakat-calculator",
  },
};

const zakatFaqs = [
  {
    question: "Is Zakat applicable on salary savings?",
    answer: "Yes, Zakat is applicable on your salary savings if the total amount of your wealth (including cash, gold, and other assets) meets or exceeds the Nisab threshold and has been in your possession for one lunar year (Hawl).",
  },
  {
    question: "How do I choose between Silver Nisab vs Gold Nisab?",
    answer: "Most scholars and the Hanafi school of thought recommend using the Silver Nisab threshold (612.36g) because it is lower, allowing more people to contribute to charity and helping a larger number of recipients. However, some modern scholars suggest the Gold Nisab (87.48g) is more reflective of wealth in the current economy.",
  },
  {
    question: "Can I use this as a Hanafi Zakat calculator online?",
    answer: "Yes, this tool is fully compliant with Hanafi Zakat rules. It allows you to calculate Zakat at the 2.5% rate and includes fields for gold, silver, and business assets. Note that in the Hanafi school, Zakat is generally due on all gold and silver jewelry, whether worn or stored.",
  },
  {
    question: "How is Zakat calculated?",
    answer: "Zakat is calculated as 2.5% of your total qualifying wealth (cash, gold, shares, business assets) that has been held for one lunar year, provided it exceeds the Nisab threshold.",
  },
  {
    question: "What is Nisab?",
    answer: "Nisab is the minimum amount of wealth a Muslim must own before Zakat becomes mandatory. It is usually equivalent to the value of 87.48g of gold or 612.36g of silver.",
  },
];

export default function ZakatPage() {
  // ── COMBINED JSON-LD SCHEMA ──
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Zakat Calculator 2026 — Nisab Updated",
        "operatingSystem": "Web",
        "applicationCategory": "FinanceApplication",
        "description": "Calculate your mandatory Zakat dues based on the latest Nisab thresholds for 2026. Supports Gold & Silver standards.",
        "featureList": [
          "Gold & Silver Nisab calculation",
          "Sharia-compliant 2.5% wealth purification",
          "Deduction for immediate liabilities",
          "Supports AED, SAR, PKR, and USD"
        ],
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "SAR"
        },
        "brand": {
          "@type": "Brand",
          "name": "QuickCalcs"
        }
      },
      {
        "@type": "HowTo",
        "name": "How to Calculate Zakat 2026",
        "step": [
          {
            "@type": "HowToStep",
            "text": "Identify all zakatable assets including cash at home, bank savings, gold, silver, and business investments."
          },
          {
            "@type": "HowToStep",
            "text": "Determine the current Nisab value (87.48g for gold or 612.36g for silver)."
          },
          {
            "@type": "HowToStep",
            "text": "Subtract your immediate debts and liabilities from your total assets."
          },
          {
            "@type": "HowToStep",
            "text": "If the remaining net wealth is above the Nisab, multiply the amount by 0.025 (2.5%) to find your Zakat due."
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.quickcalcs.app"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Finance Tools",
            "item": "https://www.quickcalcs.app/tools"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Zakat Calculator",
            "item": "https://www.quickcalcs.app/tools/zakat-calculator"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": zakatFaqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <main className="min-h-screen bg-[#0c0e16]">
      {/* Integrated JSON-LD for Software, Breadcrumbs, and FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-[860px] mx-auto pt-8 pb-16">
        
        {/* BREADCRUMBS UI */}
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

        <ZakatCalculator />
        <ZakatContent />

        {/* FAQ SECTION UI */}
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