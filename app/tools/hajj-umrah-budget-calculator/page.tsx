import React from "react";
import type { Metadata } from "next";
import HajjUmrahCalculator from "./HajjUmrahCalculator";
import HajjUmrahContent from "./HajjUmrahContent";
import FAQ from "@/components/FAQ";
import { Home, ChevronRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Umrah Cost Calculator 2026 – Free Budget Estimator",
  description:
    "Free Umrah cost calculator for 2026. Estimate your complete budget from Pakistan, India, UK, USA, and Canada including flights, hotels, visa, and transport.",
  keywords: [
    "umrah cost calculator",
    "umrah budget calculator",
    "hajj umrah budget calculator",
    "umrah cost calculator free",
    "umrah cost calculator online",
    "umrah expense calculator",
    "hajj budget calculator 2026",
    "calculate umrah cost online",
    "umrah cost calculator pakistan",
    "umrah budget calculator pakistan 2026",
    "umrah cost calculator india",
    "umrah calculator india 2026",
    "umrah cost calculator uk",
    "umrah cost calculator bangladesh",
    "umrah price estimator usa",
    "umrah price calculator canada",
    "how much does umrah cost from pakistan 2026",
    "umrah cost from india 2026",
    "umrah cost from uk 2026",
    "umrah package price 2026",
    "hajj cost 2026",
    "hajj cost estimator",
  ],
  alternates: {
    canonical: "https://www.quickcalcs.app/tools/hajj-umrah-budget-calculator",
  },
  openGraph: {
    title:
      "Umrah Cost Calculator 2026 – Free Hajj & Umrah Budget Estimator | QuickCalcs",
    description:
      "Instantly calculate your Umrah cost from Pakistan, India, UK, USA, Bangladesh & more. Free online calculator — no login needed.",
    url: "https://www.quickcalcs.app/tools/hajj-umrah-budget-calculator",
    siteName: "QuickCalcs",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.quickcalcs.app/tools/hajj-umrah-budget-calculator/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Hajj & Umrah Budget Calculator | QuickCalcs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Umrah Cost Calculator 2026 – Free Hajj & Umrah Budget Estimator | QuickCalcs",
    description: "Instantly calculate your Umrah cost from Pakistan, India, UK, USA, Bangladesh & more.",
    images: [
      {
        url: "https://www.quickcalcs.app/tools/hajj-umrah-budget-calculator/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Hajj & Umrah Budget Calculator | QuickCalcs",
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
      "max-video-preview": -1,
    },
  },
};

const faqItems = [
  {
    question: "How much does Umrah cost from Pakistan in 2026?",
    answer:
      "An economy Umrah package from Pakistan in 2026 costs approximately PKR 250,000–400,000 per person, covering return flights, hotel accommodation, Umrah visa, and basic transport. Standard packages range from PKR 400,000–700,000. Costs rise by 30–50% during Ramadan. Use our free Umrah budget calculator above to get a personalised estimate.",
  },
  {
    question: "How much does Umrah cost from India in 2026?",
    answer:
      "Umrah from India in 2026 costs approximately Rs 85,000–Rs 1,80,000 per person for a budget package, and Rs 1,80,000–Rs 3,00,000 for a standard package. Flights from Mumbai, Delhi, or Kolkata make up 40–50% of the total cost. Our free Umrah cost calculator for India lets you estimate by city, hotel zone, and duration.",
  },
  {
    question: "How much does Umrah cost from the UK in 2026?",
    answer:
      "Umrah from the UK in 2026 typically costs between 1,500 and 3,000 GBP for an economy package and 3,000 to 6,000 GBP for a standard package per person. Return flights from London to Jeddah generally range from 400 to 700 GBP. The Saudi tourist eVisa costs approximately 100 to 150 GBP including mandatory insurance.",
  },
  {
    question: "What is the cheapest time to do Umrah in 2026?",
    answer:
      "The cheapest time for Umrah is January to February (Rajab and Shaban), which can be up to 40% cheaper than peak season. Ramadan packages are the most expensive — typically 30–50% higher than off-peak months. Avoid school holidays and the last 10 nights of Ramadan for the best rates.",
  },
  {
    question: "What does a typical Umrah budget include?",
    answer:
      "A complete Umrah budget includes: (1) return flights from your country to Jeddah or Madinah, (2) hotel accommodation in Makkah and Madinah, (3) Umrah visa and mandatory Saudi health insurance, (4) ground transport between cities, and (5) daily food and personal expenses. Our free Umrah expense calculator covers all these components.",
  },
  {
    question: "What is the difference between Hajj and Umrah cost?",
    answer:
      "Hajj is 3–5 times more expensive than Umrah. Hajj is performed only during Dhul Hijjah, has government-regulated quotas per country, and requires mandatory tent stays in Mina and Arafat. Umrah can be performed any time of year with no quota, making it significantly more affordable and flexible to plan.",
  },
  {
    question: "Is this Umrah cost calculator free to use?",
    answer:
      "Yes, the QuickCalcs Umrah Budget Calculator is completely free to use — no account, no login, no subscription required. Simply select your country, package type, number of pilgrims, and duration to get an instant cost estimate for your 2026 Umrah trip.",
  },
  {
    question: "Does the calculator include Ramadan pricing?",
    answer:
      "Yes. Our Umrah cost calculator includes a Ramadan Season toggle. Enabling it automatically applies the typical 30–50% price premium seen during Ramadan across all countries and package types, giving you an accurate estimate for peak-season travel.",
  },
];

export default function HajjUmrahPage() {
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Umrah Cost Calculator 2026 – Free Hajj & Umrah Budget Estimator by Country",
    description:
      "Free online Umrah cost calculator. Estimate your complete Umrah or Hajj budget from Pakistan, India, UK, USA, Bangladesh, Canada and more for 2026.",
    url: "https://www.quickcalcs.app/tools/hajj-umrah-budget-calculator",
    isPartOf: {
      "@type": "WebSite",
      name: "QuickCalcs",
      url: "https://www.quickcalcs.app",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.quickcalcs.app",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Finance Tools",
          item: "https://www.quickcalcs.app/#all-tools",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Umrah Cost Calculator 2026",
          item: "https://www.quickcalcs.app/tools/hajj-umrah-budget-calculator",
        },
      ],
    },
  };

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-[#0c0e16]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />
      <HajjUmrahCalculator />
      <HajjUmrahContent />
      <section className="px-[20px] sm:px-[36px] mt-12">
        <h2 className="text-2xl font-bold mb-6 text-white">
          Frequently Asked Questions
        </h2>
        <FAQ items={faqItems} />
      </section>
    </main>
  );
}