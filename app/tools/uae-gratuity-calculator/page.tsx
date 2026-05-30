// Updated page.tsx with full metadata, openGraph, twitter, HowTo schema, FAQPage schema, perfected BreadcrumbList schema, dateModified, expanded FAQs, updated H1 and subtitle.
import React from "react";
import type { Metadata } from "next";
import GratuityCalculator from "./GratuityCalculator";
import GratuityContent from "./GratuityContent";
import FAQ from "@/components/FAQ";
import { ChevronRight, Home, Info } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free UAE Gratuity Calculator 2026 — Dubai & All Emirates (MOHRE)",
  description:
    "Calculate your exact UAE end-of-service gratuity in seconds. Free MOHRE-compliant tool for limited and unlimited contracts — resignation and termination. Updated for 2026 UAE Labour Law.",
  keywords: [
    "UAE gratuity calculator",
    "UAE gratuity calculator 2026",
    "end of service benefits UAE",
    "Dubai gratuity calculator",
    "MOHRE gratuity calculator",
    "UAE labour law gratuity",
    "gratuity calculation formula UAE",
    "how to calculate gratuity in UAE",
    "end of service calculator UAE",
    "gratuity for limited contract UAE",
    "gratuity for unlimited contract UAE",
    "gratuity if I resign UAE",
    "UAE gratuity calculator Dubai Abu Dhabi",
    "final settlement calculator UAE",
    "EOSB UAE",
    "gratuity resignation vs termination UAE",
    "Federal Decree-Law No. 33 of 2021",
    "Article 51 UAE labour law",
    "DIFC gratuity DEWS",
    "alternative end of service savings scheme UAE",
    "Cabinet Resolution No. 96 of 2023",
    "UAE gratuity Arabic",
  ],
  openGraph: {
    title: "Free UAE Gratuity Calculator 2026 — Dubai & All Emirates (MOHRE)",
    description:
      "Calculate your exact UAE end-of-service gratuity in seconds. Free MOHRE-compliant tool for limited and unlimited contracts — resignation and termination. Updated for 2026 UAE Labour Law.",
    url: "https://www.quickcalcs.app/tools/uae-gratuity-calculator",
    siteName: "QuickCalcs",
    type: "website",
    images: [
      {
        url: "https://www.quickcalcs.app/tools/uae-gratuity-calculator/opengraph-image",
        width: 1200,
        height: 630,
        alt: "UAE Gratuity Calculator | QuickCalcs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free UAE Gratuity Calculator 2026 — Dubai & All Emirates (MOHRE)",
    description:
      "Calculate your exact UAE end-of-service gratuity in seconds. Free MOHRE-compliant tool for limited and unlimited contracts — resignation and termination. Updated for 2026 UAE Labour Law.",
    images: [
      {
        url: "https://www.quickcalcs.app/tools/uae-gratuity-calculator/opengraph-image",
        width: 1200,
        height: 630,
        alt: "UAE Gratuity Calculator | QuickCalcs",
      },
    ],
  },
  alternates: {
    canonical: "https://www.quickcalcs.app/tools/uae-gratuity-calculator",
  },
};

// Expanded FAQ items (10 total)
const faqItems = [
  {
    question: "How is gratuity calculated in UAE for 2026?",
    answer:
      "Gratuity is based on your last basic salary. For the first 5 years you get 21 days per year, beyond 5 years you get 30 days per year. The total cannot exceed 2 years' basic salary.",
  },
  {
    question: "Do I get gratuity if I resign before 1 year?",
    answer:
      "No. UAE Labour Law requires at least one full year of continuous service to be eligible for gratuity, regardless of resignation or termination.",
  },
  {
    question: "Is gratuity calculated on basic salary or total salary?",
    answer:
      "Only the basic salary defined in your contract is used. Housing, transport, bonuses, and other allowances are excluded.",
  },
  {
    question: "What is the maximum limit for gratuity in UAE?",
    answer:
      "The gratuity payment is capped at two years' worth of your basic salary, even if you have many more years of service.",
  },
  {
    question: "How is gratuity calculated if I resign in the UAE?",
    answer:
      "For current limited or fixed-term contracts, resignation and termination use the same gratuity formula after one full year of continuous service: 21 days per year for the first 5 years and 30 days per year after that, subject to the 2-year basic-salary cap.",
  },
  {
    question: "What is the difference between limited and unlimited contract gratuity?",
    answer:
      "Limited or fixed-term contracts use the same gratuity formula for resignation and termination after 1 year. Some legacy unlimited contracts may have transitional conditions, so employees with older contracts should confirm the applicable treatment with HR or MOHRE.",
  },
  {
    question: "Can my employer refuse to pay gratuity?",
    answer:
      "Under the current UAE Labour Law framework, eligible end-of-service gratuity should not be forfeited simply because of resignation, termination, workplace allegations, or leaving without notice. Deductions should be limited to legally documented debts such as salary advances, loans, or unreturned company property.",
  },
  {
    question: "How long does the employer have to pay gratuity?",
    answer:
      "Article 53 requires payment of all end-of-service entitlements within 14 days from the contract termination date.",
  },
  {
    question: "Does gratuity apply in Dubai free zones like DIFC or ADGM?",
    answer:
      "Most free zones follow the mainland formula, but DIFC and ADGM use their own DEWS pension scheme instead of standard gratuity.",
  },
  {
    question: "What is included in the final settlement besides gratuity?",
    answer:
      "Final settlement includes gratuity, unused leave encashment, unpaid salary, and notice pay, minus any lawful deductions.",
  },
];

export default function GratuityPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "UAE Gratuity Calculator 2026",
        "operatingSystem": "Web",
        "applicationCategory": "BusinessApplication",
        "description": "Calculate UAE end-of-service gratuity based on the latest 2026 Labour Law rules.",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "AED" },
      },
      {
        "@type": "WebPage",
        "url": "https://www.quickcalcs.app/tools/uae-gratuity-calculator",
        "dateModified": "2026-05-17",
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqItems.map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer,
          },
        })),
      },
      {
        "@type": "HowTo",
        "name": "How to Calculate UAE Gratuity",
        "description": "Step-by-step guide to calculate your end-of-service gratuity under UAE Labour Law 2026.",
        "totalTime": "PT2M",
        "step": [
          { "@type": "HowToStep", "position": 1, "name": "Enter your basic salary", "text": "Use only your basic salary — not your total package. Housing, transport, and other allowances are excluded." },
          { "@type": "HowToStep", "position": 2, "name": "Select your contract type", "text": "Choose Limited or Unlimited. This affects how your gratuity is calculated if you resign." },
          { "@type": "HowToStep", "position": 3, "name": "Select your reason for leaving", "text": "Choose Resignation, Termination, Contract Completed, or Mutual Agreement. Reason affects the final amount, especially for unlimited contracts." },
          { "@type": "HowToStep", "position": 4, "name": "Enter your joining and end dates", "text": "Add any unpaid leave days so they are subtracted from your service period." },
          { "@type": "HowToStep", "position": 5, "name": "See your result", "text": "The calculator shows your total gratuity, the daily rate used, eligible service days, and a full breakdown — instantly." },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": {
              "@id": "https://www.quickcalcs.app/",
              "name": "Home"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "QuickCalcs Tools",
            "item": {
              "@id": "https://www.quickcalcs.app/",
              "name": "QuickCalcs Tools"
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "UAE Gratuity Calculator",
            "item": {
              "@id": "https://www.quickcalcs.app/tools/uae-gratuity-calculator",
              "name": "UAE Gratuity Calculator"
            }
          }
        ]
      }
    ],
  };

  return (
    <main className="min-h-screen bg-[#0c0e16]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-[860px] mx-auto pt-8 pb-16">
        {/* Breadcrumbs */}
        <nav className="px-[20px] sm:px-[36px] flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#8b8a87] mb-8">
          <Link href="/" className="hover:text-[#c9a84c] flex items-center gap-1.5 transition-colors">
            <Home className="w-3 h-3" /> Home
          </Link>
          <ChevronRight className="w-3 h-3 text-[#1a1c24]" />
          <Link href="/" className="hover:text-[#c9a84c] transition-colors">QuickCalcs Tools</Link>
          <ChevronRight className="w-3 h-3 text-[#1a1c24]" />
          <span className="text-[#c9a84c]">Gratuity Calculator</span>
        </nav>

        {/* Header */}
        <header className="px-[20px] sm:px-[36px] mb-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(45,212,160,0.05)] border border-[rgba(45,212,160,0.1)] text-[#2dd4a0] text-[10px] font-bold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4a0] animate-pulse" />
            Updated for 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#e6e3db] leading-[1.1] mb-6">
            UAE Gratuity Calculator — Your End-of-Service Amount in Seconds
          </h1>
          <p className="text-[#87847d] text-sm max-w-2xl leading-relaxed">
            Enter your basic salary and employment dates to see exactly what you're owed under UAE Labour Law. Works for limited and unlimited contracts, resignation and termination. Free, no login.
          </p>
        </header>

        {/* Calculator */}
        <GratuityCalculator />

        {/* Content */}
        <GratuityContent />

        {/* FAQ */}
        <section className="px-[20px] sm:px-[36px] mt-12 border-t border-[rgba(255,255,255,0.07)] pt-16">
          <FAQ items={faqItems} />
        </section>
      </div>
    </main>
  );
}