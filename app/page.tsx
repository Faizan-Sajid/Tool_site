import { Suspense } from "react";
import HeroSection from "@/components/HeroSection";
import StatsStrip from "@/components/StatsStrip";
import FeaturedToolsSection from "@/components/FeaturedToolsSection";
import FAQ from "@/components/FAQ";
import { Metadata } from "next";

// ── SEO METADATA (Added Title/Description for SEO Score) ──
export const metadata: Metadata = {
  // SEO UPDATE 2026: Homepage metadata — GOSI-first keyword strategy
  title: "Free GOSI, Gratuity & Zakat Calculators 2026 | QuickCalcs",
  description: "Calculate GOSI deductions, UAE end-of-service gratuity, Zakat, gold prices & Pakistan freelancer tax instantly. Free, no login, updated for 2026 laws.",
  alternates: {
    canonical: "https://www.quickcalcs.app/",
  },
  openGraph: {
    title: "Free GOSI, Gratuity & Zakat Calculators 2026 | QuickCalcs",
    description: "Calculate GOSI deductions, UAE end-of-service gratuity, Zakat, gold prices & Pakistan freelancer tax instantly. Free, no login, updated for 2026 laws.",
    url: "https://www.quickcalcs.app/",
    type: "website",
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
    question: "How is GOSI calculated for expats in Saudi Arabia?",
    answer: "Non-Saudi expatriate employees pay zero GOSI deduction from their own salary. Only the employer contributes — 2% of the employee's contributory wage (basic salary + housing allowance) for occupational hazard insurance. Expats are not enrolled in the pension or SANED unemployment scheme. Use our GOSI calculator, select 'Expat (Non-Saudi)', and enter your salary to see the exact employer contribution."
  },
  {
    question: "How much gratuity do you get after 3 years in the UAE?",
    answer: "For a 3-year service period with a monthly basic salary of AED 6,000: your daily rate is AED 6,000 ÷ 30 = AED 200. Multiply by 21 days × 3 years = AED 12,600. This applies whether you resigned or were terminated on a limited (fixed-term) contract. Our UAE gratuity calculator gives you the exact figure for your specific salary and service dates."
  },
  {
    question: "What is the Zakat Nisab threshold in 2026?",
    answer: "The gold Nisab in 2026 is based on 87.48 grams of 24K gold. At current gold prices, this is approximately AED 28,000–30,000, SAR 30,000–32,000, or USD 7,500–8,000. Because gold prices move daily, the Nisab value changes accordingly. Our Zakat calculator uses live gold price data to always show today's accurate Nisab."
  },
  {
    question: "What is the difference between limited and unlimited contracts for UAE gratuity?",
    answer: "All employment contracts signed after February 2022 are limited (fixed-term) contracts under the new UAE Labour Law. For limited contracts, employees receive full gratuity after completing one year. Unlimited (legacy) contracts — signed before February 2022 — use a sliding scale for resignation: one-third of gratuity for 1–3 years, two-thirds for 3–5 years, and full gratuity for 5+ years."
  },
  {
    question: "How much does Umrah cost from Pakistan in 2026?",
    answer: "Economy packages from Pakistan in 2026 range from PKR 250,000–400,000 per person (return flights, 3-star hotel, visa, basic transport). Standard packages with 4-star hotels cost PKR 400,000–700,000. Ramadan packages are 30–50% more expensive. Use our Umrah budget calculator to break down the cost by component and compare economy vs standard vs premium."
  },
  {
    question: "What is the PSEB tax rate for Pakistani freelancers in 2026?",
    answer: "PSEB-registered freelancers who are active ATL filers pay 0.25% on foreign IT export remittances under Section 154S. Non-PSEB ATL filers pay 1%. Non-filers do not qualify for either rate and face double withholding tax. To get the PSEB rate, you must register with the Pakistan Software Export Board and ensure 80% of business receipts enter Pakistan through formal banking channels."
  },
  {
    question: "Are QuickCalcs tools compliant with 2026 UAE Labour Law and Saudi GOSI regulations?",
    answer: "Yes. All calculators are reviewed quarterly against official sources. UAE gratuity follows Federal Decree-Law No. 33 of 2021 (MOHRE 2026 interpretation). GOSI follows Royal Decree M/33 with the current 2026 rate of 10.75% employee and 12.75% employer for Saudi nationals. Zakat Nisab uses live gold prices from international spot markets."
  },
  {
    question: "Do I need to create an account to use QuickCalcs?",
    answer: "No. Every calculator on QuickCalcs is completely free and requires no account, email address, or login. All calculations happen inside your browser and no data is sent to any server. You can bookmark any calculator and return to it at any time without signing in."
  }
];

// ── FAQ SCHEMA FOR GSC ──
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How is GOSI calculated for expats in Saudi Arabia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non-Saudi expatriate employees pay zero GOSI deduction from their own salary. Only the employer contributes — 2% of the employee's contributory wage (basic salary + housing allowance) for occupational hazard insurance. Expats are not enrolled in the pension or SANED unemployment scheme."
      }
    },
    {
      "@type": "Question",
      "name": "How much gratuity do you get after 3 years in the UAE?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For a 3-year service period with a monthly basic salary of AED 6,000: daily rate is AED 200 (AED 6,000 ÷ 30). Total gratuity = AED 200 × 21 days × 3 years = AED 12,600. This applies for both resignation and termination on a limited (fixed-term) contract."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Zakat Nisab threshold in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The gold Nisab in 2026 is based on 87.48 grams of 24K gold — approximately AED 28,000–30,000, SAR 30,000–32,000, or USD 7,500–8,000 at current gold prices. The threshold changes daily as gold prices move."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between limited and unlimited contracts for UAE gratuity?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All contracts signed after February 2022 are limited (fixed-term) under UAE Labour Law — employees get full gratuity after one year regardless of resignation or termination. Unlimited (legacy) contracts use a sliding scale for resignation: one-third for 1–3 years, two-thirds for 3–5 years, full gratuity for 5+ years."
      }
    },
    {
      "@type": "Question",
      "name": "How much does Umrah cost from Pakistan in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Economy packages from Pakistan in 2026 range from PKR 250,000–400,000 per person, covering return flights, 3-star hotel, Umrah visa, and basic transport. Standard 4-star packages cost PKR 400,000–700,000. Ramadan packages are 30–50% more expensive than off-peak travel."
      }
    },
    {
      "@type": "Question",
      "name": "What is the PSEB tax rate for Pakistani freelancers in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "PSEB-registered ATL filers pay 0.25% on foreign IT export remittances under Section 154S of the Income Tax Ordinance. Non-PSEB ATL filers pay 1%. Non-filers do not qualify and face double withholding tax rates."
      }
    },
    {
      "@type": "Question",
      "name": "Are QuickCalcs tools compliant with 2026 UAE Labour Law and Saudi GOSI regulations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. UAE gratuity follows Federal Decree-Law No. 33 of 2021 (MOHRE 2026 interpretation). GOSI follows Royal Decree M/33 — 10.75% employee and 12.75% employer for Saudi nationals in 2026. Zakat Nisab uses live international gold spot prices. All calculators are reviewed quarterly."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to create an account to use QuickCalcs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Every calculator is completely free with no account, email address, or login required. All calculations happen inside your browser — no data is sent to any server, stored, or shared."
      }
    }
  ]
};

// ── WEBSITE SCHEMA FOR SEARCH BOX ──
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "QuickCalcs",
  "url": "https://www.quickcalcs.app",
  "description": "Free financial calculators for UAE, Saudi Arabia, and Pakistan. GOSI, gratuity, Zakat, gold price, Umrah budget, and freelancer tax tools.",
  "inLanguage": "en",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.quickcalcs.app/tools/{search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export default function Home() {
  return (
    <main className="bg-[#0c0e16] overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
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