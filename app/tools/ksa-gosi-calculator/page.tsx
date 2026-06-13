import type { Metadata } from "next";
import Link from "next/link";
import GosiCalculator from "./GosiCalculator";
import GosiContent from "./GosiContent";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "GOSI Calculator 2026 — KSA Net Salary for Saudis & Expats",
  description:
    "Saudi national or expat in KSA? See your exact GOSI deduction instantly — 10.75% employee rate, SAR 45,000 cap, pension formula included. Free, updated June 2026.",
  keywords: [
    // Primary — highest impression queries from GSC
    "GOSI calculator",
    "GOSI calculator 2026",
    "GOSI calculator KSA",
    "GOSI calculator for non Saudi nationals",
    "GOSI calculator Saudi Arabia",
    // Secondary — position 8-15 queries to push
    "GOSI contribution rates Saudi Arabia 2026",
    "GOSI contribution rates employer employee 2026",
    "GOSI pension calculation formula Saudi Arabia 2026",
    "contributory wage GOSI",
    "what is contributory wage in GOSI",
    "GOSI calculation formula",
    "GOSI calculation for non Saudi nationals",
    "net salary after GOSI Saudi Arabia",
    "how much does GOSI take from salary",
    // Untapped gaps
    "GOSI for GCC nationals Saudi Arabia",
    "GOSI gross vs net salary KSA",
    "GOSI salary deduction job offer Saudi Arabia",
    "GOSI payslip verification Saudi Arabia",
    "GOSI deduction SAR 10000 salary",
    "GOSI deduction SAR 15000 salary",
    "GOSI deduction SAR 20000 salary",
    "employer GOSI cost Saudi Arabia",
    "total cost of hiring Saudi employee GOSI",
    // Arabic transliterations for English searches
    "GOSI التأمينات الاجتماعية",
    "حاسبة التأمينات الاجتماعية 2026",
  ],
  openGraph: {
    title: "GOSI Calculator 2026 — KSA Net Salary for Saudis & Expats",
    description:
      "Saudi national or expat in KSA? See your exact GOSI deduction instantly — 10.75% employee rate, SAR 45,000 cap, pension formula. Free, updated June 2026.",
    url: "https://www.quickcalcs.app/tools/ksa-gosi-calculator",
    siteName: "QuickCalcs",
    type: "website",
    images: [
      {
        url: "https://www.quickcalcs.app/tools/ksa-gosi-calculator/opengraph-image",
        width: 1200,
        height: 630,
        alt: "GOSI Calculator 2026 — KSA Net Salary for Saudis & Expats | QuickCalcs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GOSI Calculator 2026 — KSA Salary Deduction for Saudis & Expats",
    description:
      "Exact GOSI deduction in seconds. Saudi nationals 10.75%, expats 0%. SAR 45K cap auto-applied. Free, no login, June 2026 rates.",
    images: [
      {
        url: "https://www.quickcalcs.app/tools/ksa-gosi-calculator/opengraph-image",
        width: 1200,
        height: 630,
        alt: "GOSI Calculator 2026 — KSA Net Salary for Saudis & Expats | QuickCalcs",
      },
    ],
  },
  alternates: {
    canonical: "https://www.quickcalcs.app/tools/ksa-gosi-calculator",
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

const visibleFaqItems = [
  {
    question: "How do I use the GOSI calculator for non-Saudi nationals?",
    answer:
      "Select 'Expat (Non-Saudi)' in the nationality toggle at the top of the calculator. Enter your basic salary and housing allowance. The calculator will show zero employee deduction and 2% employer contribution. As a non-Saudi expat, nothing is deducted from your salary — only your employer pays 2% for occupational hazard insurance.",
  },
  {
    question: "What is the GOSI employee contribution rate in Saudi Arabia for 2026?",
    answer:
      "For Saudi nationals, the GOSI employee contribution rate is 10.75% of the contributory wage — 10% goes to the pension (annuity) fund and 0.75% to SANED (unemployment insurance). For non‑Saudi expats, the employee rate is 0%. Only the employer pays 2% for expats.",
  },
  {
    question: "What are the GOSI contribution rates for Saudi Arabia employer and employee in 2026?",
    answer:
      "Saudi national employee: 10.75% (10% annuity + 0.75% SANED). Saudi national employer: 12.75% (10% annuity + 2% occupational hazards + 0.75% SANED). Non-Saudi expat employee: 0%. Non-Saudi expat employer: 2% (occupational hazards only). All rates are based on Royal Decree M/33.",
  },
  {
    question: "What is the GOSI pension calculation formula in Saudi Arabia?",
    answer:
      "The GOSI Saudi Arabia pension formula is: Monthly Pension = 2.5% × Years of Service × Average Contributory Wage. For example, 20 years of service with an average contributory wage of SAR 10,000 gives a monthly pension of SAR 5,000. The pension is capped at 100% of the average contributory wage, reached after 40 years of service. This applies to Saudi nationals only — expats are not eligible for GOSI pension.",
  },
  {
    question: "How is GOSI calculated in KSA?",
    answer:
      "GOSI calculation in KSA follows three steps. First, find the contributory wage by adding basic salary and housing allowance. Second, apply the SAR 45,000 cap if the wage exceeds it. Third, multiply by the correct rate: 10.75% for the Saudi employee, 12.75% for the Saudi employer, or 2% for a non‑Saudi expat employer. Our free GOSI calculator handles all three steps automatically.",
  },
  {
    question: "What is included in the GOSI contributory wage?",
    answer:
      "The GOSI contributory wage includes basic salary and housing allowance only. Transport allowance, food allowance, mobile allowance, overtime, and performance bonuses are all excluded. The maximum contributory wage is capped at SAR 45,000 per month.",
  },
  {
    question: "Do non-Saudi expats pay GOSI in Saudi Arabia?",
    answer:
      "No. Non-Saudi nationals pay zero GOSI deduction from their own salary. Only the employer contributes 2% of the contributory wage for occupational hazard insurance. Expats are not enrolled in the GOSI pension scheme or SANED unemployment insurance.",
  },
  {
    question: "What happens to GOSI if my salary exceeds SAR 45,000?",
    answer:
      "GOSI contributions are capped at a contributory wage of SAR 45,000 per month. If your basic salary plus housing allowance exceeds SAR 45,000, the GOSI calculation still uses SAR 45,000 as the base. Any amount above the cap is not subject to GOSI deductions for either employee or employer.",
  },
  {
    question: "What is SANED and does it affect my GOSI deduction?",
    answer:
      "SANED is Saudi Arabia's unemployment insurance program. It is part of the GOSI contribution — Saudi nationals pay 0.75% and employers also pay 0.75% toward SANED. These amounts are already included in the 10.75% employee rate and 12.75% employer rate shown above. Non-Saudi expats are not covered by SANED and do not pay into it.",
  },
  {
    question: "How do I calculate my net salary after GOSI deduction?",
    answer:
      "To find your net salary after GOSI: take your total monthly salary, subtract the GOSI employee deduction (10.75% of contributory wage for Saudi nationals, or 0% for expats). For example, if your basic salary is SAR 12,000 and housing allowance is SAR 3,000, your contributory wage is SAR 15,000. A Saudi national would have SAR 1,612.50 deducted (10.75%), leaving a net salary of SAR 13,387.50. Use the free GOSI salary calculator at the top of this page for instant results.",
  },
];

// Enhanced schema — FAQPage removed (deprecated May 7, 2026), HowTo replaced by Article
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.quickcalcs.app/tools/ksa-gosi-calculator",
      url: "https://www.quickcalcs.app/tools/ksa-gosi-calculator",
      name: "GOSI Calculator 2026 — KSA Net Salary for Saudis & Expats",
      description:
        "Saudi national or expat in KSA? See your exact GOSI deduction instantly — 10.75% employee rate, SAR 45,000 cap, pension formula included. Free, updated June 2026.",
      dateModified: "2026-06-01",
      datePublished: "2024-01-01",
      inLanguage: "en",
      reviewedBy: {
        "@type": "Organization",
        name: "QuickCalcs",
      },
      about: [
        { "@type": "Thing", name: "General Organization for Social Insurance" },
        { "@type": "Thing", name: "Saudi GOSI contributions" },
        { "@type": "Thing", name: "GOSI Contribution Rates Saudi Arabia 2026" },
        { "@type": "Thing", name: "Contributory Wage Saudi Arabia" },
        { "@type": "Thing", name: "GOSI for Non-Saudi Expats" },
        { "@type": "Thing", name: "GOSI Pension Formula" },
        { "@type": "Thing", name: "SANED Unemployment Insurance Saudi Arabia" },
      ],
      citation: ["https://www.gosi.gov.sa/en"],
      isPartOf: { "@id": "https://www.quickcalcs.app/" },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: [
          "h1",
          "h2",
          ".gosi-quick-answer",
          ".faq-answer"
        ]
      },
      potentialAction: {
        "@type": "UseAction",
        target: "https://www.quickcalcs.app/tools/ksa-gosi-calculator"
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.quickcalcs.app/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Tools",
            item: "https://www.quickcalcs.app/tools/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "GOSI Calculator Saudi Arabia 2026",
            item: "https://www.quickcalcs.app/tools/ksa-gosi-calculator",
          },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "GOSI Calculator Saudi Arabia 2026",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web Browser",
      url: "https://www.quickcalcs.app/tools/ksa-gosi-calculator",
      description:
        "Free GOSI calculator for Saudi Arabia — instant salary deduction for Saudi nationals and non-Saudi expats. 2026 KSA rates, SAR 45,000 cap, SANED, pension formula.",
      areaServed: {
        "@type": "Country",
        name: "Saudi Arabia",
        sameAs: "https://www.wikidata.org/wiki/Q851"
      },
      audience: {
        "@type": "Audience",
        audienceType: "Private sector employees in Saudi Arabia, HR managers, payroll teams, Saudi nationals, non-Saudi expats in KSA"
      },
      featureList: [
        "Exact GOSI deduction for Saudi nationals (10.75% employee, 12.75% employer)",
        "GOSI for non-Saudi expats (0% employee, 2% employer)",
        "SAR 45,000 contributory wage cap automatically applied",
        "SANED unemployment insurance calculation",
        "Net salary after GOSI deduction",
        "GOSI pension formula (2.5% × years × average wage)",
        "GCC nationals GOSI guidance",
        "Salary range examples SAR 5,000 to SAR 45,000+"
      ],
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "SAR",
      },
      brand: { "@type": "Brand", name: "QuickCalcs" },
    },
    {
      "@type": "Article",
      "@id": "https://www.quickcalcs.app/tools/ksa-gosi-calculator#article",
      headline: "GOSI Calculator 2026 — How to Calculate KSA Salary Deductions for Saudis and Expats",
      description: "Complete guide to GOSI contribution rates, contributory wage, pension formula, and net salary calculation for Saudi nationals and non-Saudi expats in KSA.",
      datePublished: "2024-01-01",
      dateModified: "2026-06-01",
      author: {
        "@type": "Organization",
        name: "QuickCalcs",
        url: "https://www.quickcalcs.app"
      },
      publisher: {
        "@type": "Organization",
        name: "QuickCalcs",
        url: "https://www.quickcalcs.app",
        logo: {
          "@type": "ImageObject",
          url: "https://www.quickcalcs.app/logo.png"
        }
      },
      mainEntityOfPage: "https://www.quickcalcs.app/tools/ksa-gosi-calculator",
      citation: "https://www.gosi.gov.sa/en",
      about: [
        { "@type": "Thing", name: "GOSI Contribution Rates Saudi Arabia 2026" },
        { "@type": "Thing", name: "Contributory Wage Saudi Arabia" },
        { "@type": "Thing", name: "GOSI for Non-Saudi Expats" },
        { "@type": "Thing", name: "Saudi Payroll Deductions" },
        { "@type": "Thing", name: "GOSI Pension Formula" },
        { "@type": "Thing", name: "SANED Unemployment Insurance Saudi Arabia" }
      ],
      keywords: "GOSI calculator, GOSI contribution rates 2026, contributory wage, GOSI for expats, GOSI pension formula, Saudi Arabia payroll deduction"
    },
  ],
};

export default function GosiCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="px-[20px] pt-[20px] sm:px-[36px] text-xs text-[#8b8a87]"
      >
        <ol className="flex items-center gap-1.5">
          <li>
            <Link href="/" className="hover:text-[#87847d] transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">›</li>
          <li>
            <Link href="/?category=finance" className="hover:text-[#87847d] transition-colors">
              Tools
            </Link>
          </li>
          <li aria-hidden="true">›</li>
          <li className="text-[#87847d]">GOSI Calculator</li>
        </ol>
      </nav>

      {/* H1 — keyword variation from title */}
      <header className="max-w-[860px] px-[20px] pt-[40px] sm:px-[36px]">
        <h1 className="mb-4 font-[family-name:var(--font-serif)] text-[clamp(32px,5vw,56px)] leading-[1.1] tracking-[-1px] text-[#e6e3db]">
          GOSI Calculator — KSA Salary Deduction for Saudi Nationals & Non-Saudi Expats (2026 Rates)
        </h1>
        <p className="max-w-[640px] text-[15px] leading-[1.6] text-[#87847d]">
          Enter your basic salary and housing allowance. Get your exact GOSI deduction, 
          employer cost, and net take-home pay instantly. Updated for June 2026 KSA rates — 
          covers Saudi nationals (10.75%), non-Saudi expats (0% employee / 2% employer), 
          SANED, and the SAR 45,000 contributory wage cap.
        </p>
      </header>

      <GosiCalculator />
      <GosiContent />

      <div className="max-w-[860px] px-[20px] pb-[60px] sm:px-[36px]">
        <FAQ items={visibleFaqItems} />
      </div>
    </>
  );
}