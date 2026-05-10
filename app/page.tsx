import { Suspense } from "react";
import HeroSection from "@/components/HeroSection";
import StatsStrip from "@/components/StatsStrip";
import FeaturedToolsSection from "@/components/FeaturedToolsSection";
import FAQ from "@/components/FAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
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
    question: "Are these tools really free?",
    answer: "Yes, all tools are 100% free with no hidden charges, login requirements, or paywalls. We are funded by non-intrusive contextual sponsorships, not user data.",
  },
  {
    question: "Is my data safe when I use the calculators?",
    answer: "Absolutely. All calculations run entirely in your browser. We never collect, store, or transmit your input data to any server.",
  },
  {
    question: "Are these tools compliant with 2026 UAE & GCC laws?",
    answer: "Yes, we update all calculators, gratuity rules, and tax thresholds quarterly to match the latest official government and MOHRE guidelines for 2026.",
  },
  {
    question: "Do I need to create an account to use QuickCalcs?",
    answer: "No account needed whatsoever. All tools work instantly without any registration, email address, or login of any kind.",
  },
];

export default function Home() {
  return (
    <main className="bg-[#0c0e16]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />
      <HeroSection />
      <StatsStrip />
      <Suspense fallback={<div className="h-40 flex items-center justify-center text-[#87847d]">Loading tools...</div>}>
        <FeaturedToolsSection />
      </Suspense>
      <FAQ items={homeFaqs} />
    </main>
  );
}
