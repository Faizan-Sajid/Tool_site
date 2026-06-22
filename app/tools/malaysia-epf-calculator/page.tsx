import React from "react";
import type { Metadata } from "next";
import EpfCalculator from "./EpfCalculator";
import EpfContent from "./EpfContent";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import RelatedGuides from "@/components/blog/RelatedGuides";

export const metadata: Metadata = {
  title: {
    absolute: "Malaysia EPF Calculator 2026 | KWSP Contribution Calculator",
  },
  description: "You pay 11%. Employer pays 13% (salary ≤RM5,000) or 12% (above). Instant EPF/KWSP amount, Akaun Fleksibel split & retirement projection. Free, no login.",
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
    languages: {
      "en-MY": "https://www.quickcalcs.app/tools/malaysia-epf-calculator",
      "x-default": "https://www.quickcalcs.app/tools/malaysia-epf-calculator",
    },
  },
  openGraph: {
    title: "Malaysia EPF / KWSP Calculator 2026 | Free Contribution Tool",
    description: "You pay 11%. Employer pays 13% (salary ≤RM5,000) or 12% (above). Instant EPF/KWSP amount, Akaun Fleksibel split & retirement projection. Free, no login.",
    url: "https://www.quickcalcs.app/tools/malaysia-epf-calculator",
    siteName: "QuickCalcs",
    locale: "en_MY",
    type: "website",
    images: [
      {
        url: "https://www.quickcalcs.app/tools/malaysia-epf-calculator/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Malaysia EPF KWSP Calculator 2026 — Employee & Employer Contribution Rates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Malaysia EPF / KWSP Calculator 2026 | Free Contribution Tool",
    description: "You pay 11%. Employer pays 13% (salary ≤RM5,000) or 12% (above). Instant EPF/KWSP amount, Akaun Fleksibel split & retirement projection. Free, no login.",
    images: [
      {
        url: "https://www.quickcalcs.app/tools/malaysia-epf-calculator/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Malaysia EPF KWSP Calculator 2026 — Employee & Employer Contribution Rates",
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
      "Since October 2025, employers must contribute 2% of the monthly contributory wage for non-Malaysian employees. Foreign workers do not contribute from their own salary under the rule described on this page. Permanent Residents follow standard Malaysian employee rates.",
  },
  {
    question: "Does the EPF employer contribution rate change at RM5,000 salary?",
    answer:
      "Yes. For employees earning RM5,000 or below, the employer contributes 13%. For employees earning above RM5,000, the employer rate drops to 12%. The employee contribution remains 11% in both cases.",
  },
  {
    question: "What happens to EPF contributions when an employee turns 60?",
    answer:
      "At age 60, the employee contribution rate reduces to 5.5%, while employer rates reduce to 6.5% for salaries at or below RM5,000 and 6% for salaries above RM5,000. Members who want to keep contributing at the full 11% employee rate can submit Borang KWSP 17A to their employer.",
  },
  {
    question: "What are the three EPF accounts and how are contributions split?",
    answer:
      "Since May 2024, EPF contributions are split into three accounts: Akaun Persaraan receives 75%, Akaun Sejahtera receives 15%, and Akaun Fleksibel receives 10%. Akaun Fleksibel can be withdrawn anytime, while the other accounts follow EPF withdrawal rules.",
  },
  {
    question: "What is the EPF retirement savings target for 2026 in Malaysia?",
    answer:
      "Under the Retirement Income Adequacy Framework introduced in January 2026, EPF uses three age-60 benchmarks: Basic Savings RM390,000, Adequate Savings RM600,000, and Enhanced Savings RM1,000,000+. Compare your projected EPF balance against these tiers to see whether you are on track.",
  },
  {
    question: "Is there a maximum salary for EPF contribution calculation?",
    answer:
      "No. Unlike SOCSO, EPF has no upper salary ceiling. For monthly salaries under RM20,000, actual payroll amounts follow EPF Third Schedule bracket values. Above RM20,000, the statutory percentage rate applies directly.",
  },
  {
    question: "Can I contribute more than 11% to my EPF voluntarily?",
    answer:
      "Yes. EPF members can make voluntary contributions through channels such as i-Topup, while self-employed individuals can use i-Saraan. Voluntary EPF contributions may qualify for personal tax relief up to RM4,000 per year, subject to current tax rules.",
  },
];

const longTailFaqItems = [
  {
    question: "How much is EPF deducted from salary in Malaysia?",
    answer:
      "For Malaysian employees below 60, EPF deducts 11% from your monthly salary. On a RM5,000 salary, that is RM550 per month. Your employer adds RM650 (13%) on top — meaning your total monthly EPF contribution is RM1,200, with RM550 coming from your pocket and RM650 from your employer.",
  },
  {
    question: "Does the employer EPF rate change at RM5,000?",
    answer:
      "Yes. The employer contribution is 13% for employees earning RM5,000 or below, and 12% for those earning above RM5,000. The employee rate stays at 11% regardless. This threshold applies to the monthly contributory wage — not total compensation including allowances.",
  },
  {
    question: "Is EPF contribution calculated on basic salary or gross salary?",
    answer:
      "EPF is calculated on your monthly contributory wage, which typically includes basic salary plus certain fixed allowances like housing allowance. It excludes reimbursements, travel claims, and certain bonus types. Check your payslip to see which components your employer includes in the EPF calculation.",
  },
  {
    question: "Does EPF apply to part-time and contract workers?",
    answer:
      "Yes. EPF contribution is mandatory for all employees in Malaysia regardless of employment type — full-time, part-time, or fixed-term contract. Employers must register and contribute for all employees including those on short-term contracts. The only exception is self-employed individuals, who contribute voluntarily through i-Saraan.",
  },
  {
    question: "What is the EPF contribution rate for age 60 and above?",
    answer:
      "Once you reach age 60, the employee contribution rate reduces to 5.5% and employer rates reduce to 6.5% (salaries ≤RM5,000) or 6% (above RM5,000). You can choose to maintain the full 11% employee rate by submitting Borang KWSP 17A to your HR department.",
  },
  {
    question: "Does EPF contribution apply to bonuses in Malaysia?",
    answer:
      "Yes, bonuses are generally subject to EPF contribution as they are considered part of wages under the EPF Act 1991. However, certain ex-gratia payments and approved allowances may be excluded. Your employer's payroll team determines which bonus components are EPF-liable based on EPF guidelines.",
  },
  {
    question: "What happens if my employer does not pay EPF?",
    answer:
      "Under the EPF Act 1991, employers who fail to remit contributions face fines up to RM20,000 or imprisonment up to 3 years, or both. You can check whether your employer has been contributing correctly by logging into i-Akaun at kwsp.gov.my. If contributions are missing, you can report to EPF enforcement at 03-8922 6000 or visit any EPF branch.",
  },
  {
    question: "How does voluntary EPF contribution reduce my tax in Malaysia?",
    answer:
      "Voluntary EPF contributions — including i-Saraan — qualify for up to RM4,000 in personal tax relief under the Life Insurance and EPF category. For someone in the 24% tax bracket, maximising this relief saves RM960 in income tax per year. Combined with the RM500 government match on i-Saraan, the effective first-year return on voluntary contributions is exceptionally high.",
  },
  {
    question: "What is the EPF RIA Framework and basic savings target?",
    answer:
      "The Retirement Income Adequacy (RIA) Framework, launched January 2026, sets three retirement savings benchmarks: Basic (RM390,000), Adequate (RM600,000), and Enhanced (RM1,000,000+) — all at age 60. Check the EPF balance projection in this calculator to see if you are on track for the basic savings benchmark based on your current salary and contribution.",
  },
  {
    question: "Can I withdraw from EPF Akaun Fleksibel anytime?",
    answer:
      "Yes. Akaun Fleksibel (10% of your contributions) can be withdrawn at any time through the i-Akaun app or EPF branch with no conditions or minimum amount. The remaining 75% in Akaun Persaraan is locked until age 55, and 15% in Akaun Sejahtera is accessible for approved purposes like housing and medical needs.",
  },
];

const schemaFaqItems = [...faqItems, ...longTailFaqItems];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Malaysia EPF Calculator 2026 | KWSP Contribution Calculator",
    "url": "https://www.quickcalcs.app/tools/malaysia-epf-calculator",
    "description": "Calculate Malaysia EPF (KWSP) contributions instantly using 2026 statutory rates for Malaysian employees, age 60+ employees, foreign workers, take-home salary, and retirement projection.",
    "inLanguage": "en-MY",
    "isPartOf": {
      "@type": "WebSite",
      "name": "QuickCalcs",
      "url": "https://www.quickcalcs.app"
    },
    "publisher": {
      "@type": "Organization",
      "name": "QuickCalcs",
      "url": "https://www.quickcalcs.app",
      "logo": "https://www.quickcalcs.app/favicon.ico"
    },
    "mainEntity": {
      "@type": "WebApplication",
      "name": "Malaysia EPF Calculator 2026",
      "url": "https://www.quickcalcs.app/tools/malaysia-epf-calculator"
    },
    "datePublished": "2025-10-01",
    "dateModified": "2026-05-28",
    "reviewedBy": {
      "@type": "Organization",
      "name": "QuickCalcs"
    },
    "citation": [
      "https://www.kwsp.gov.my/en/employer/responsibilities/mandatory-contribution"
    ],
    "about": [
      { "@type": "Thing", "name": "Employees Provident Fund Malaysia" },
      { "@type": "Thing", "name": "KWSP contribution rates" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Malaysia EPF Calculator 2026",
    "alternateName": "KWSP Contribution Calculator Malaysia",
    "url": "https://www.quickcalcs.app/tools/malaysia-epf-calculator",
    "description": "Free Malaysia EPF (KWSP) calculator using 2026 statutory contribution rates. Calculate employee and employer EPF contributions, foreign worker EPF, take-home salary, and retirement projection.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "MYR"
    },
    "featureList": [
      "EPF contribution calculation using 2026 statutory rates",
      "Foreign worker EPF calculation (Oct 2025 mandatory rule)",
      "Age 60 EPF rate calculation",
      "Estimated take-home salary after EPF",
      "Malaysia EPF retirement projection",
      "Akaun Fleksibel breakdown",
      "Employer 13% vs 12% threshold calculator"
    ],
    "audience": {
      "@type": "Audience",
      "audienceType": "Malaysian employees, employers, HR professionals, expats in Malaysia"
    },
    "inLanguage": "en-MY",
    "isAccessibleForFree": true,
    "dateModified": "2026-05-28"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": schemaFaqItems.map(item => ({
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
        "name": "QuickCalcs Tools",
        "item": "https://www.quickcalcs.app"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Malaysia EPF Calculator 2026",
        "item": "https://www.quickcalcs.app/tools/malaysia-epf-calculator"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Use the Malaysia EPF Calculator",
    "description": "Step-by-step guide to using the Malaysia EPF calculator for KWSP employee and employer contributions.",
    "totalTime": "PT2M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "MYR",
      "value": "0"
    },
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Enter your gross monthly salary",
        "text": "Type your gross monthly salary in Ringgit. Include all fixed allowances subject to EPF."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Select your employee category",
        "text": "Choose Malaysian/PR for standard rates, Age 60+ for reduced rates, or Foreign Worker for the 2% employer contribution rule effective October 2025."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "View your EPF contribution breakdown",
        "text": "The calculator applies statutory employee and employer contribution rates, the RM5,000 employer-rate threshold, and upward Ringgit rounding. Results appear instantly."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Check your retirement projection",
        "text": "Optionally enter your current EPF balance and age to see a projection of your savings at age 55, using the 6.15% conventional dividend rate."
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Malaysia EPF Calculator 2026 — KWSP Contribution Rates & Take-Home Salary",
    "datePublished": "2025-10-01",
    "dateModified": "2026-05-28",
    "author": {
      "@type": "Organization",
      "name": "QuickCalcs",
      "url": "https://www.quickcalcs.app"
    },
    "publisher": {
      "@type": "Organization",
      "name": "QuickCalcs",
      "url": "https://www.quickcalcs.app"
    },
    "mainEntityOfPage": "https://www.quickcalcs.app/tools/malaysia-epf-calculator",
    "citation": "https://www.kwsp.gov.my/en/employer/responsibilities/mandatory-contribution"
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
          <Link href="/" className="hover:text-[#c9a84c] transition-colors">QuickCalcs Tools</Link>
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
            Calculate your exact EPF and KWSP contributions in seconds — based on the official statutory rates effective for 2026. Whether you are checking your payslip, planning your retirement savings, or figuring out what your employer owes, this free tool gives you the breakdown instantly.
          </p>
          <p className="text-[11px] text-[#3e3c38] mt-3 mb-1">
            Last verified: May 2026{" · "}Source:{" "}
            <a
              href="https://www.kwsp.gov.my/en/employer/responsibilities/mandatory-contribution"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c9a84c] hover:underline"
            >
              KWSP Official Portal ↗
            </a>
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            {["✅ Statutory KWSP Rates", "✅ Foreign Worker 2% Rule", "✅ Take-Home After EPF", "✅ Updated Oct 2025"].map((tag) => (
              <span key={tag} className="px-3 py-1.5 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] text-[10px] font-medium text-[#87847d]">
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Calculator Component */}
        <EpfCalculator />

        <section className="px-[20px] sm:px-[36px]" aria-labelledby="epf-methodology-heading">
          <div className="p-4 rounded-xl border border-[rgba(201,168,76,0.15)] bg-[rgba(201,168,76,0.03)] text-xs text-[#87847d] leading-relaxed">
            <h2 id="epf-methodology-heading" className="font-bold text-[#e6e3db] mb-2 text-sm">
              Calculation methodology
            </h2>
            <p>
              This calculator applies current KWSP/EPF statutory contribution rates for Malaysian/PR employees,
              age 60+ employees, and foreign workers. It factors in the RM5,000 employer-rate threshold and rounds
              employee and employer shares up to the nearest Ringgit. Results are estimates for planning and payroll
              checking only; always verify final statutory obligations with KWSP or your employer.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <EpfContent faqItems={faqItems} />
      </div>

      <RelatedGuides relatedTool="/tools/malaysia-epf-calculator" />
    </main>
  );
}
