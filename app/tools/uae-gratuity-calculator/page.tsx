import React from "react";
import type { Metadata } from "next";
import GratuityCalculator from "./GratuityCalculator";
import GratuityContent from "./GratuityContent";
import FAQ from "@/components/FAQ";
import { ChevronRight, Home, Info } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "UAE Gratuity Calculator 2026 | End of Service Benefits (MOHRE)",
  description: "Calculate your UAE end-of-service gratuity accurately for 2026. Based on the latest UAE Labour Law (MOHRE) for limited contracts and resignation/termination rules.",
  keywords: "UAE gratuity calculator 2026, end of service benefits UAE, Dubai gratuity calculation, UAE labor law gratuity, MOHRE gratuity rules",
  alternates: {
    canonical: "https://www.quickcalcs.app/tools/uae-gratuity-calculator",
  },
};

const gratuityFaqs = [
  {
    question: "How is gratuity calculated in UAE for 2026?",
    answer: "Gratuity is calculated based on your last basic salary. For 1-5 years of service, you receive 21 days' salary per year. For service over 5 years, you receive 30 days' salary per year, capped at 2 years' total salary.",
  },
  {
    question: "Do I get gratuity if I resign before 1 year?",
    answer: "No. According to UAE Labour Law, an employee is not entitled to any end-of-service gratuity if they have not completed at least one year of continuous service.",
  },
  {
    question: "Is gratuity calculated on basic salary or total salary?",
    answer: "Gratuity is calculated strictly on the 'Basic Salary' specified in your employment contract. It does not include allowances such as housing, transportation, or utilities.",
  },
  {
    question: "What is the maximum limit for gratuity in UAE?",
    answer: "The total gratuity amount paid to an employee cannot exceed the equivalent of two years' worth of their salary.",
  },
];

export default function GratuityPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "UAE Gratuity Calculator 2026",
    "operatingSystem": "Web",
    "applicationCategory": "BusinessApplication",
    "description": "Calculate UAE end-of-service gratuity based on the latest 2026 Labour Law rules.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "AED"
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
        <nav className="px-[20px] sm:px-[36px] flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#3e3c38] mb-8">
          <Link href="/" className="hover:text-[#c9a84c] flex items-center gap-1.5 transition-colors">
            <Home className="w-3 h-3" /> Home
          </Link>
          <ChevronRight className="w-3 h-3 text-[#1a1c24]" />
          <Link href="/hr" className="hover:text-[#c9a84c] transition-colors">HR Tools</Link>
          <ChevronRight className="w-3 h-3 text-[#1a1c24]" />
          <span className="text-[#c9a84c]">Gratuity Calculator</span>
        </nav>

        {/* HEADER SECTION */}
        <header className="px-[20px] sm:px-[36px] mb-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(45,212,160,0.05)] border border-[rgba(45,212,160,0.1)] text-[#2dd4a0] text-[10px] font-bold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4a0] animate-pulse" />
            Updated for 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#e6e3db] leading-[1.1] mb-6">
            UAE Gratuity <span className="italic-font text-[#c9a84c] font-serif">Calculator</span>
          </h1>
          <p className="text-[#87847d] text-sm max-w-2xl leading-relaxed">
            Quickly calculate your end-of-service benefits under the latest UAE Labour Law. 
            Accurate calculations for limited contracts, resignation, and termination scenarios.
          </p>
        </header>

        {/* CALCULATOR COMPONENT */}
        <GratuityCalculator />

        {/* SEO CONTENT SECTION */}
        <GratuityContent />

        {/* FAQ SECTION */}
        <section className="px-[20px] sm:px-[36px] mt-12 border-t border-[rgba(255,255,255,0.07)] pt-16">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-[rgba(201,168,76,0.1)] flex items-center justify-center border border-[rgba(201,168,76,0.1)]">
              <Info className="w-5 h-5 text-[#c9a84c]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#e6e3db]">Frequently Asked Questions</h2>
              <p className="text-xs text-[#3e3c38] mt-1">Everything you need to know about UAE End of Service</p>
            </div>
          </div>
          <FAQ items={gratuityFaqs} />
        </section>
      </div>
    </main>
  );
}
