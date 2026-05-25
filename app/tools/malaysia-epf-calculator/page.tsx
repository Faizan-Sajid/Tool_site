import React from "react";
import type { Metadata } from "next";
import EpfCalculator from "./EpfCalculator";
import EpfContent from "./EpfContent";
import FAQ from "@/components/FAQ";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Malaysia EPF Calculator 2026 | KWSP Contribution Rate — Employee, Employer & Foreign Worker",
  description: "Calculate Malaysia EPF (KWSP) contributions instantly. Official Third Schedule 2026 rates — 11% employee, 13%/12% employer, 2% foreign worker (Oct 2025 mandatory). Retirement projection + Akaun Fleksibel breakdown. Free, no login.",
  keywords: [
    "malaysia epf calculator 2026",
    "epf calculator malaysia",
    "kwsp calculator",
    "epf contribution table 2026",
    "kwsp contribution rate 2026",
    "epf retirement calculator malaysia",
    "epf contribution foreign worker 2026",
    "kwsp foreign worker calculator",
    "epf calculator age 60 malaysia",
    "epf third schedule calculator 2026",
    "kwsp employer contribution 13 or 12",
    "epf contribution rate rm5000 threshold",
    "malaysia epf retirement projection",
    "epf akaun fleksibel calculator",
    "epf contribution expat malaysia 2026"
  ],
  alternates: {
    canonical: "https://www.quickcalcs.app/tools/malaysia-epf-calculator",
  },
  openGraph: {
    title: "Malaysia EPF Calculator 2026 | KWSP Contribution Rate",
    description: "Free Malaysia EPF calculator with official 2026 Third Schedule rates. Employee 11%, employer 13%/12%, foreign worker 2% (Oct 2025). Retirement projection included.",
    url: "https://www.quickcalcs.app/tools/malaysia-epf-calculator",
    siteName: "QuickCalcs",
    locale: "en_MY",
    type: "website",
    images: [
      {
        url: "https://www.quickcalcs.app/tools/malaysia-epf-calculator/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Malaysia EPF Calculator | QuickCalcs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Malaysia EPF Calculator 2026 | KWSP Contribution Rate",
    description: "Free EPF/KWSP calculator with 2026 Third Schedule rates. Foreign worker 2% rule, Akaun Fleksibel, retirement projection. No login needed.",
    images: [
      {
        url: "https://www.quickcalcs.app/tools/malaysia-epf-calculator/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Malaysia EPF Calculator | QuickCalcs",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
};

const faqItems = [
  {
    question: "What is the EPF contribution rate for 2026 in Malaysia?",
    answer:
      "Under the Third Schedule of the EPF Act 1991, Malaysian employees under 60 contribute 11% of monthly wages. Employers contribute 13% for salaries at or below RM5,000 and 12% for salaries above that threshold. These rates apply to both Malaysian citizens and Permanent Residents.",
  },
  {
    question: "What is the EPF contribution rate for foreign workers in Malaysia 2026?",
    answer:
      "Effective October 2025, EPF contributions became mandatory for all non-Malaysian employees. Both employer and employee each contribute 2% under Third Schedule Part F. Permanent Residents follow standard 11%/13% or 12% rates.",
  },
  {
    question: "Does the EPF employer contribution rate change at RM5,000 salary?",
    answer:
      "Yes. For employees earning RM5,000 or below, the employer contributes 13%. For employees earning above RM5,000, the employer rate drops to 12%. The employee contribution remains 11% in both cases.",
  },
  {
    question: "What happens to EPF contributions when an employee turns 60?",
    answer:
      "At age 60, the employee rate drops from 11% to 5.5% (or 0% mandatory default), and the employer rate drops from 12–13% to 4%. Contributions continue at these reduced rates for as long as the employee remains employed. Members can fully withdraw their EPF balance at age 60.",
  },
  {
    question: "What are the three EPF accounts and how are contributions split?",
    answer:
      "Since May 2024, EPF contributions are split into three accounts: Akaun Persaraan (75%, retirement only), Akaun Sejahtera (15%, housing/education/health), and Akaun Fleksibel (10%, withdraw anytime). Total contribution amount is unchanged.",
  },
  {
    question: "What is the EPF retirement savings target for 2026 in Malaysia?",
    answer:
      "Under the Retirement Income Adequacy (RIA) Framework introduced in January 2026, EPF recommends three tiers by age 60: Basic Savings RM390,000, Adequate Savings RM650,000, and Enhanced Savings RM1,300,000.",
  },
  {
    question: "Is there a maximum salary for EPF contribution calculation?",
    answer:
      "No. Unlike SOCSO (capped at RM6,000), EPF has no upper salary ceiling. All wages are subject to EPF. For salaries above RM20,000/month, direct percentage calculation applies instead of the Third Schedule bracket table.",
  },
  {
    question: "Can I contribute more than 11% to my EPF voluntarily?",
    answer:
      "Yes. EPF members can make voluntary contributions above 11% through the i-Topup facility. Self-employed individuals can use i-Simpan. Voluntary contributions earn the same EPF dividend and qualify for income tax relief up to RM4,000/year.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Malaysia EPF Calculator 2026",
    "alternateName": "KWSP Contribution Calculator Malaysia",
    "url": "https://www.quickcalcs.app/tools/malaysia-epf-calculator",
    "description": "Free Malaysia EPF (KWSP) calculator using official 2026 Third Schedule rates. Calculate employee and employer EPF contributions, foreign worker EPF, and retirement projection.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "MYR"
    },
    "featureList": [
      "EPF contribution calculation using Third Schedule 2026",
      "Foreign worker EPF calculation (Oct 2025 mandatory rule)",
      "Age 60 EPF rate calculation",
      "Malaysia EPF retirement projection",
      "Akaun Fleksibel breakdown",
      "Employer 13% vs 12% threshold calculator"
    ],
    "audience": {
      "@type": "Audience",
      "audienceType": "Malaysian employees, employers, HR professionals, expats in Malaysia"
    },
    "inLanguage": "en",
    "isAccessibleForFree": true,
    "dateModified": "2026-05-25"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  },
  {
    "@context": "https://schema.org",
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
        "name": "Tools",
        "item": "https://www.quickcalcs.app/tools"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Malaysia EPF Calculator 2026",
        "item": "https://www.quickcalcs.app/tools/malaysia-epf-calculator"
      }
    ]
  }
];

export default function EpfPage() {
  return (
    <main className="min-h-screen bg-[#0c0e16]">
      <Script
        id="epf-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-[860px] mx-auto pt-8 pb-16">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="px-[20px] sm:px-[36px] flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#8b8a87] mb-8">
          <Link href="/" className="hover:text-[#c9a84c] flex items-center gap-1.5 transition-colors">
            <Home className="w-3 h-3" /> Home
          </Link>
          <ChevronRight className="w-3 h-3 text-[#1a1c24]" />
          <Link href="/?category=finance" className="hover:text-[#c9a84c] transition-colors">Finance Tools</Link>
          <ChevronRight className="w-3 h-3 text-[#1a1c24]" />
          <span className="text-[#c9a84c]">EPF Calculator</span>
        </nav>

        {/* Header */}
        <header className="px-[20px] sm:px-[36px] mb-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(201,168,76,0.05)] border border-[rgba(201,168,76,0.1)] text-[#c9a84c] text-[10px] font-bold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
            🇲🇾 Malaysia · KWSP / EPF
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#e6e3db] leading-[1.1] mb-6">
            Malaysia EPF Calculator 2026
          </h1>
          <p className="text-[#87847d] text-sm max-w-2xl leading-relaxed">
            Calculate employee & employer contributions instantly — based on official KWSP Third Schedule rates effective October 2025. Includes foreign worker 2% mandate and retirement projections.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            {["✅ Third Schedule Rates", "✅ Foreign Worker 2% Rule", "✅ No Login Required", "✅ Updated Oct 2025"].map((tag) => (
              <span key={tag} className="px-3 py-1.5 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] text-[10px] font-medium text-[#87847d]">
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Calculator Component */}
        <EpfCalculator />

        {/* Content Section */}
        <EpfContent />

        {/* FAQ Section */}
        <section className="px-[20px] sm:px-[36px] mt-12 border-t border-[rgba(255,255,255,0.07)] pt-16">
          <FAQ items={faqItems} />
        </section>
      </div>
    </main>
  );
}
