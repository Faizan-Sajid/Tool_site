import { Suspense } from "react";
import HeroSection from "@/components/HeroSection";
import StatsStrip from "@/components/StatsStrip";
import FeaturedToolsSection from "@/components/FeaturedToolsSection";
import FAQ from "@/components/FAQ";
import { Metadata } from "next";

// ── SEO METADATA (Added Title/Description for SEO Score) ──
export const metadata: Metadata = {
  title: "Free UAE Gratuity, GOSI, Zakat & Umrah Calculators 2026 — QuickCalcs",
  description: "Free online calculators for UAE gratuity, Saudi GOSI contributions, Zakat 2026, gold price per tola, and Umrah budgeting. Updated quarterly, no login required, instantly in your browser.",
  alternates: {
    canonical: "https://www.quickcalcs.app",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "QuickCalcs",
  "url": "https://www.quickcalcs.app",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.quickcalcs.app/?s={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "QuickCalcs",
  "url": "https://www.quickcalcs.app",
  "logo": "https://www.quickcalcs.app/favicon.ico"
};

// ── HOME FAQ DATA ──
const homeFaqs = [
  {
    question: "How is UAE gratuity calculated for limited vs unlimited contracts in 2026?",
    answer: "UAE gratuity is calculated on basic salary only. For the first 5 years: 21 days basic salary per year. Year 6+: 30 days per year. Maximum cap: 2 years' basic salary. Limited and unlimited contracts use the same formula, but resignation before 1 year forfeits gratuity. Our UAE Gratuity Calculator applies the exact MOHRE 2026 formula instantly."
  },
  {
    question: "How is GOSI calculated for Saudi nationals vs expats in 2026?",
    answer: "Saudi nationals: 21.5% total (employee 10.5%, employer 11.75% + 0.75% SANED). Expats: employer pays 2% for Occupational Hazards only — no salary deduction. Calculated on basic + housing allowance, capped at SAR 45,000/month. Our GOSI Calculator auto‑applies 2026 rates and ceilings."
  },
  {
    question: "How do I calculate Zakat on gold in Pakistan and UAE for 2026?",
    answer: "Zakat is 2.5% of gold's market value if held for one lunar year (hawl) and exceeding Nisab (87.48g gold). Pakistan: Nisab calculated in PKR; UAE: Nisab in AED. Our Zakat Calculator fetches live gold prices and applies correct Nisab thresholds for PKR, AED, SAR."
  },
  {
    question: "What is the average Umrah cost from Pakistan in 2026?",
    answer: "Standard 10‑15 day Umrah packages from Pakistan range PKR 160,000–250,000 per person (visa PKR 30k‑50k, flights, 3‑4‑star hotels, transport). Ramadan packages cost 30‑50% more. Our Umrah Budget Calculator lets you customize duration, hotel tier, and family size for an accurate estimate."
  },
  {
    question: "How is gold price per tola calculated in Pakistan today?",
    answer: "Gold price per tola in Pakistan is based on Karachi Sarafa Market rates plus international spot price. As of 2026, 24K gold ≈ PKR 450,000–510,000 per tola. Enter weight in tolas/grams/ounces in our Gold Price Calculator for instant conversion to PKR, AED, or SAR."
  },
  {
    question: "Are QuickCalcs tools compliant with 2026 UAE Labour Law and Saudi GOSI regulations?",
    answer: "Yes. All calculators are updated quarterly to match official guidelines: UAE gratuity follows Federal Decree‑Law No. 33 of 2021 (MOHRE 2026 update); GOSI follows Saudi General Organization for Social Insurance rates, including SAR 45,000 wage cap and SANED contributions."
  }
];

// ── FAQ SCHEMA FOR GSC ──
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": homeFaqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export default function Home() {
  return (
    <main className="bg-[#0c0e16] overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />
      {/* FAQ Schema Fix for Google Search Console */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="flex flex-col w-full">
        <HeroSection />
        <StatsStrip />
        <Suspense fallback={<div className="h-40 flex items-center justify-center text-[#87847d]">Loading tools...</div>}>
          <FeaturedToolsSection />
        </Suspense>
        <FAQ items={homeFaqs} />
      </div>
    </main>
  );
}