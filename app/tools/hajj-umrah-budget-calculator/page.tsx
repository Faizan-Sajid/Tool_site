import React from "react";
import type { Metadata } from "next";
import HajjUmrahCalculator from "./HajjUmrahCalculator";
import HajjUmrahContent from "./HajjUmrahContent";
import FAQ from "@/components/FAQ";
import RelatedGuides from "@/components/blog/RelatedGuides";

export const metadata: Metadata = {
  title: "Hajj & Umrah Cost Calculator 2026 – Complete Pilgrimage Budget (Pakistan, India, UK, USA)",
  description:
    "Planning Hajj or Umrah in 2026? See exact cost from Pakistan (PKR 1.4M+), India (INR 4L+), UK (£4.5k+), USA ($11k+). Free calculator includes flights, hotels, visa. No login.",
  keywords: [
    // Primary (from GSC high-impression)
    "hajj calculator",
    "hajj cost calculator 2026",
    "umrah cost calculator 2026",
    "how much does umrah cost",
    "umrah expense",
    "umrah expenses",
    "hajj price",
    "hajj cost",
    "hajj price per person 2026",
    "umrah vs hajj cost",
    // Geo-specific
    "hajj cost from Pakistan 2026",
    "hajj cost from India 2026",
    "hajj cost from UK 2026",
    "hajj cost from USA 2026",
    "umrah cost from Pakistan 2026",
    "umrah cost from India 2026",
    "umrah cost from UK 2026",
    "umrah cost from USA 2026",
    "hajj from uae cost",
    "hajj price 2026 in india",
    // Visa & packages
    "how to get umrah visa online",
    "hajj package",
    "hajj package price by country",
    "government hajj package vs private",
    "nusuk hajj package 2026",
    // Long-tail intent
    "cheapest time for umrah",
    "hajj savings plan",
    "qurbani cost in hajj",
    "shifting vs non-shifting hajj package",
    // Non-English (low volume but easy wins)
    "wie viel kostet hajj 2026 pro person",
    "это цены 2026 года?",
    "narxlarichi",
  ],
  alternates: {
    canonical: "https://www.quickcalcs.app/tools/hajj-umrah-budget-calculator",
  },
  openGraph: {
    title: "Hajj & Umrah Cost Calculator 2026 – Free Pilgrimage Budget Planner",
    description: "Planning Hajj or Umrah in 2026? See exact cost from Pakistan (PKR 1.4M+), India (INR 4L+), UK (£4.5k+), USA ($11k+). Free, no login.",
    url: "https://www.quickcalcs.app/tools/hajj-umrah-budget-calculator",
    siteName: "QuickCalcs",
    locale: "en_SA",
    type: "website",
    images: [
      {
        url: "https://www.quickcalcs.app/tools/hajj-umrah-budget-calculator/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Hajj & Umrah Cost Calculator 2026 | QuickCalcs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hajj & Umrah Cost Calculator 2026 – Complete Budget Guide",
    description:
      "Exact pilgrimage costs by country. Pakistan, India, UK, USA. Includes flights, hotels, visa, food, transport. Free calculator.",
    images: [
      {
        url: "https://www.quickcalcs.app/tools/hajj-umrah-budget-calculator/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Hajj & Umrah Cost Calculator 2026 | QuickCalcs",
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
    question: "How much does Hajj cost in 2026 from Pakistan?",
    answer:
      "Private Hajj packages from Pakistan in 2026 start from around PKR 1,375,000 for economy (Maktab C) packages going up to PKR 3,500,000+ for premium. Government packages are generally cheaper but subject to ballot selection. Book early through a Ministry of Religious Affairs-approved operator.",
  },
  {
    question: "Can I use the Nusuk platform directly from Pakistan?",
    answer:
      "Pakistani passport holders cannot apply directly through Nusuk — you must go through a licensed operator approved by Pakistan's Ministry of Religious Affairs. The operator handles Nusuk registration on your behalf. For countries without a national Hajj authority (UK, USA, Canada, Europe), direct Nusuk registration is available at hajj.nusuk.sa.",
  },
  {
    question: "How much does Umrah cost during Ramadan 2026?",
    answer:
      "Ramadan Umrah costs 30-50% more than off-peak travel. From Pakistan, expect PKR 400,000–600,000 for the first 20 nights of Ramadan. The last ten nights (Laylatul Qadr period) can exceed PKR 700,000–900,000 per person. Book at least 6-8 months in advance for Ramadan packages.",
  },
  {
    question: "What is the cheapest time for Umrah in 2026?",
    answer:
      "Rajab and Shaban (roughly January–March 2026 outside Ramadan) offer the lowest prices — typically 30-40% below Ramadan rates. Weather is cooler, crowds are smaller, and you have more flexibility with hotels and flights.",
  },
  {
    question: "Is Qurbani included in Hajj package cost?",
    answer:
      "It depends on the package. Some operators include Qurbani in premium packages; most economy packages do not. Budget approximately SAR 350–600 (around PKR 35,000–60,000 or £75–130) for Qurbani if not included. Your operator will confirm the arrangement before departure.",
  },
  {
    question: "How do I save for Hajj if I cannot afford it now?",
    answer:
      "Start a dedicated Hajj savings account today, even if the amount is small. From Pakistan, saving PKR 25,000 per month for 5 years covers an economy package. From the UK, £92 per month over 5 years covers a standard package. Book early — packages reserved 12+ months ahead consistently cost less than last-minute bookings.",
  },
  {
    question: "What is the difference between shifting and non-shifting Hajj packages?",
    answer:
      "A shifting package moves you from accommodation near Mina to a Makkah hotel after the main Hajj days (after Eid and Jamarat). Non-shifting keeps you in one hotel throughout. Shifting packages are cheaper but involve more travel between sites. Non-shifting is recommended for elderly pilgrims or those with mobility concerns.",
  },
  {
    question: "Do women need a mahram for Umrah in 2026?",
    answer:
      "Saudi Arabia updated its rules in 2021 — women aged 45 and above can now perform Umrah in groups without a mahram, provided they travel with other women through a licensed operator. Women under 45 still require a mahram. For Hajj, the rules differ — check with your national Hajj authority for current requirements.",
  },
];

export default function HajjUmrahPage() {
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Hajj & Umrah Cost Calculator 2026 — Complete Budget Guide",
        description:
          "Free online Hajj and Umrah cost calculator. Estimate your complete pilgrimage budget from Pakistan, India, UK, USA, Bangladesh, Canada and more for 2026.",
        url: "https://www.quickcalcs.app/tools/hajj-umrah-budget-calculator",
        datePublished: "2025-10-01",
        dateModified: "2026-06-01",
        inLanguage: "en",
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [
            ".hajj-quick-answer",
            "h1",
            "h2",
            "h3"
          ]
        },
        potentialAction: {
          "@type": "UseAction",
          target: "https://www.quickcalcs.app/tools/hajj-umrah-budget-calculator"
        },
        reviewedBy: {
          "@type": "Organization",
          name: "QuickCalcs",
        },
        citation: ["https://www.nusuk.sa", "https://www.haj.gov.sa/en"],
        about: [
          { "@type": "Thing", name: "Hajj pilgrimage" },
          { "@type": "Thing", name: "Umrah pilgrimage" },
          { "@type": "Thing", name: "Hajj cost 2026" },
          { "@type": "Thing", name: "Umrah cost 2026" },
          { "@type": "Thing", name: "Saudi Ministry of Hajj and Umrah" },
        ],
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
              name: "Hajj & Umrah Cost Calculator 2026",
              item: "https://www.quickcalcs.app/tools/hajj-umrah-budget-calculator",
            },
          ],
        },
      },
      {
        "@type": "WebApplication",
        name: "Hajj & Umrah Cost Calculator 2026",
        url: "https://www.quickcalcs.app/tools/hajj-umrah-budget-calculator",
        applicationCategory: "TravelApplication",
        operatingSystem: "Any",
        isAccessibleForFree: true,
        description:
          "Free calculator to estimate Hajj and Umrah pilgrimage costs by country, package type, duration and season for 2026.",
        areaServed: ["PK", "IN", "GB", "US", "BD", "ID", "AE", "SA"],
        audience: {
          "@type": "Audience",
          audienceType: "Muslims planning Hajj or Umrah from South Asia, Middle East, UK, USA, Canada"
        },
      },
      {
        "@type": "Article",
        headline: "Hajj & Umrah Cost Calculator 2026 — Complete Budget Guide",
        datePublished: "2025-10-01",
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
        mainEntityOfPage:
          "https://www.quickcalcs.app/tools/hajj-umrah-budget-calculator",
        citation: "https://www.nusuk.sa",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#0c0e16]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
      />
      <HajjUmrahCalculator />
      <HajjUmrahContent />
      <RelatedGuides relatedTool="/tools/hajj-umrah-budget-calculator" />
      <section className="px-[20px] sm:px-[36px] mt-12 max-w-[860px]">
        <h2 className="text-2xl font-bold mb-6 text-white">
          Frequently Asked Questions
        </h2>
      <FAQ items={faqItems} />
      </section>

      
    </main>
  );
}
