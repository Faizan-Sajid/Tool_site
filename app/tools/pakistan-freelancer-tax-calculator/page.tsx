import type { Metadata } from "next";
import FreelancerTaxCalculator from "./FreelancerTaxCalculator";
import FreelancerTaxContent from "./FreelancerTaxContent";
import FAQ from "@/components/FAQ";
import { Home, ChevronRight, Info } from "lucide-react";
import Link from "next/link";
import { TOOLS } from "@/constants/tools";

export const metadata: Metadata = {
  title: "Pakistan Freelancer Tax Calculator 2025-26 | FBR Rates",
  description:
    "Calculate your freelancer income tax in Pakistan free. Based on FBR 2025-26 rules — PSEB 0.25%, non-PSEB 1%, non-filer 2%. Instant results.",
  keywords:
    "Pakistan Freelancer Tax Calculator 2025-26, FBR Tax, freelancer tax Pakistan, PSEB tax rate, freelance income tax calculator",
  openGraph: {
    title: "Pakistan Freelancer Tax Calculator 2025-26 | FBR Rates",
    description:
      "Free tool to estimate freelance tax in Pakistan (2025-26). Supports PSEB registered (0.25%), non-registered filers (1%), and non-filers (2%).",
    url: "https://www.quickcalcs.app/tools/pakistan-freelancer-tax-calculator",
    siteName: "QuickCalcs",
    type: "website",
    images: [
      {
        url: "https://www.quickcalcs.app/og-freelancer-tax.png",
        width: 1200,
        height: 630,
        alt: "Pakistan Freelancer Tax Calculator 2025-26",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pakistan Freelancer Tax Calculator 2025-26 | FBR Rates",
    description:
      "Free tool to estimate freelance tax in Pakistan (2025-26). PSEB 0.25% | Non-PSEB 1% | Non-Filer 2%.",
    images: ["https://www.quickcalcs.app/og-freelancer-tax.png"],
  },
  alternates: {
    canonical:
      "https://www.quickcalcs.app/tools/pakistan-freelancer-tax-calculator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Pakistan Freelancer Tax Calculator",
  description:
    "Free online tool to compute FBR tax for freelancers (2026), including foreign remittance rates.",
  operatingSystem: "Web",
  applicationCategory: "FinanceApplication",
  offers: { "@type": "Offer", price: "0", priceCurrency: "PKR" },
};

export default function PakistanFreelancerTaxPage() {
  // BreadcrumbList JSON‑LD for rich snippets
  const breadcrumbLd = {
    "@context": "https://schema.org",
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
        name: "Finance Tools",
        item: "https://www.quickcalcs.app/tools",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Pakistan Freelancer Tax Calculator",
        item:
          "https://www.quickcalcs.app/tools/pakistan-freelancer-tax-calculator",
      },
    ],
  };

  return (
    <>
      {/* SoftwareApplication JSON‑LD (existing) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* BreadcrumbList JSON‑LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {/* FAQPage JSON‑LD script is assumed to exist elsewhere – preserve it */}
      <main className="min-h-screen bg-[#0d0f14] text-[#e6e3db]">
        <div className="max-w-[860px] mx-auto pt-8 pb-16">
          {/* Breadcrumbs */}
          <nav className="px-[20px] sm:px-[36px] flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#3e3c38] mb-8">
            <Link
              href="/"
              className="hover:text-[#c9a84c] flex items-center gap-1.5 transition-colors"
            >
              <Home className="w-3 h-3" /> Home
            </Link>
            <ChevronRight className="w-3 h-3 text-[#1a1c24]" />
            <Link
              href="/finance"
              className="hover:text-[#c9a84c] transition-colors"
            >
              Finance
            </Link>
            <ChevronRight className="w-3 h-3 text-[#1a1c24]" />
            <span className="text-[#c9a84c]">Freelancer Tax Calculator</span>
          </nav>

          {/* Header badge + title */}
          <header className="px-[20px] sm:px-[36px] mb-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(201,168,76,0.05)] border border-[rgba(201,168,76,0.1)] text-[#c9a84c] text-[10px] font-bold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
              Finance · Pakistan 2026
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#e6e3db] leading-[1.1] mb-6">
              Pakistan Freelancer <span className="italic text-[#c9a84c] font-serif">Tax Calculator</span>
            </h1>
            <p className="text-[#87847d] text-sm max-w-2xl leading-relaxed">
              Compute your FBR income tax as a freelancer. Supports Upwork, Fiverr &amp; direct clients. Foreign remittance taxed at 0.25‑1%.
            </p>
          </header>

          {/* Calculator UI */}
          <FreelancerTaxCalculator />

          {/* Long‑form SEO content */}
          <FreelancerTaxContent />

          {/* Related Tools – Internal Linking for SEO */}
          <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#e6e3db] mb-6">
              Explore Other QuickCalcs Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TOOLS.filter(
                (t) => t.href !== "/tools/pakistan-freelancer-tax-calculator"
              )
                .slice(0, 4)
                .map((tool) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className="block bg-[#0c0e16] border border-[rgba(255,255,255,0.07)] rounded-xl p-5 hover:border-[#c9a84c] transition-all duration-200 hover:shadow-lg group"
                  >
                    <div className="flex items-start gap-3">
                      {tool.icon && (
                        <span className="text-2xl">{tool.icon}</span>
                      )}
                      <div>
                        <h3 className="text-base font-semibold text-[#e6e3db] group-hover:text-[#c9a84c] transition-colors">
                          {tool.title}
                        </h3>
                        {tool.description && (
                          <p className="text-sm text-[rgba(230,227,219,0.55)] mt-1 leading-snug">
                            {tool.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
