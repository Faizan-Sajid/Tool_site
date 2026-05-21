import React from "react";
import type { Metadata } from "next";
import { ShieldCheck, Zap, Lock, Code, Calculator } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | QuickCalcs.app — Free & Accurate Financial Tools",
  description: "Learn about the mission, core trust pillars, and privacy-first approach behind QuickCalcs.app. Your trusted source for 2026 regional financial calculators.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto overflow-x-hidden">
      {/* Header Section */}
      <header className="mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(201,168,76,0.05)] border border-[rgba(201,168,76,0.1)] text-[#c9a84c] text-[10px] font-bold uppercase tracking-widest mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
          QuickCalcs.app
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-[#e6e3db] leading-[1.1] mb-6">
          About <span className="italic-font text-[#c9a84c] font-serif">QuickCalcs.app</span>
        </h1>
        <p className="text-xl text-[#c9a84c] font-medium italic-font font-serif">
          Precision in Every Calculation: Empowering Your Financial Decisions.
        </p>
      </header>

      <div className="space-y-16 text-[#87847d] leading-relaxed">
        {/* Intro Section */}
        <section>
          <div className="space-y-4 text-sm sm:text-base">
            <p>
              Welcome to <strong className="text-[#e6e3db]">QuickCalcs.app</strong>, your premier destination for high-precision utility and financial tools tailored for the modern professional and individual.
            </p>
            <p>
              In a world where regional regulations, employment laws, and market rates are constantly shifting, we believe that getting a reliable answer should be fast, free, and completely transparent. Whether you are an employee planning your future, a business owner managing compliance, or an investor tracking assets, QuickCalcs is built to provide the clarity you need.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section>
          <h2 className="text-2xl font-bold text-[#e6e3db] mb-6 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
            Our Mission
          </h2>
          <div className="space-y-4 text-sm sm:text-base">
            <p>
              QuickCalcs.app was founded to bridge the gap between complex regional laws and everyday users. We realized that calculating essential figures—such as UAE Gratuity benefits, Saudi GOSI contributions, or Zakat obligations—often involved navigating dense legal text or using outdated spreadsheets.
            </p>
            <p>
              Our mission is to simplify that complexity. We provide a centralized hub of &quot;one-click&quot; tools that are updated to reflect the latest 2026 regional standards. By transforming intricate formulas into intuitive interfaces, we empower you to make informed decisions without the guesswork.
            </p>
          </div>
        </section>

        {/* Why Trust Section */}
        <section>
          <h2 className="text-2xl font-bold text-[#e6e3db] mb-8 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
            Why Trust QuickCalcs.app?
          </h2>
          <p className="mb-8 text-sm sm:text-base">
            Trust is our most valuable currency. To ensure we remain the most reliable utility platform in the region, we operate on three core pillars:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#131620] border border-[rgba(255,255,255,0.07)] hover:border-[#c9a84c] transition-all duration-300 group">
              <ShieldCheck className="w-8 h-8 text-[#c9a84c] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-[#e6e3db] font-bold mb-3">1. Accuracy & Compliance</h3>
              <p className="text-xs leading-relaxed">
                Our tools are not just calculators; they are engineered based on official frameworks. From the UAE Labour Law 2026 for gratuity to the latest Saudi GOSI contribution rates, we rigorously audit our formulas to ensure they align with current legal and religious standards.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#131620] border border-[rgba(255,255,255,0.07)] hover:border-[#c9a84c] transition-all duration-300 group">
              <Lock className="w-8 h-8 text-[#c9a84c] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-[#e6e3db] font-bold mb-3">2. Privacy-First Approach</h3>
              <p className="text-xs leading-relaxed">
                We believe your financial data belongs to you. Unlike many other platforms, QuickCalcs.app does not track, store, or save any data you input into our calculators. All logic is processed instantly on your device, ensuring your sensitive information remains 100% anonymous and secure.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#131620] border border-[rgba(255,255,255,0.07)] hover:border-[#c9a84c] transition-all duration-300 group">
              <Zap className="w-8 h-8 text-[#c9a84c] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-[#e6e3db] font-bold mb-3">3. Blazing Fast Performance</h3>
              <p className="text-xs leading-relaxed">
                Built on a modern Next.js and Tailwind CSS architecture, our platform is optimized for speed and mobile responsiveness. We understand that you need answers on the go, which is why our site is designed to load in milliseconds, providing a seamless experience across all devices.
              </p>
            </div>
          </div>
        </section>

        {/* Core Tools Section */}
        <section>
          <h2 className="text-2xl font-bold text-[#e6e3db] mb-8 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
            Our Core Tools
          </h2>
          <p className="mb-8 text-sm sm:text-base">
            We currently specialize in a growing suite of high-utility tools, including:
          </p>
          <div className="space-y-4">
            {[
              { title: "UAE Gratuity Calculator", desc: "Precise end-of-service calculations based on the latest 2026 Labour Law." },
              { title: "Saudi GOSI Calculator", desc: "Contribution breakdowns for Saudi nationals and expats in the KSA." },
              { title: "Zakat Calculator", desc: "Sharia-compliant wealth purification tools with live Nisab benchmarks." },
              { title: "GCC Gold Price Calculator", desc: "Real-time market rates for 24K, 22K, 18K gold across GCC markets." },
            ].map((tool, index) => (
              <div key={index} className="flex gap-4 p-4 rounded-xl bg-[#131620] border border-[rgba(255,255,255,0.03)] group hover:border-[rgba(201,168,76,0.2)] transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[rgba(201,168,76,0.05)] flex items-center justify-center flex-shrink-0 border border-[rgba(201,168,76,0.1)]">
                   <Calculator className="w-5 h-5 text-[#c9a84c]" />
                </div>
                <div>
                  <h4 className="text-[#e6e3db] font-bold text-sm group-hover:text-[#c9a84c] transition-colors">{tool.title}</h4>
                  <p className="text-xs text-[#87847d] mt-1">{tool.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Developer Section */}
        <section className="p-8 rounded-3xl bg-gradient-to-br from-[#131620] to-[#0c0e16] border border-[rgba(201,168,76,0.15)] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 transition-opacity group-hover:opacity-10">
            <Code className="w-32 h-32 text-[#c9a84c] -rotate-12" />
          </div>
          <h2 className="text-2xl font-bold text-[#e6e3db] mb-6 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
            Meet the Developer
          </h2>
          <div className="text-sm sm:text-base space-y-4 relative z-10">
            <p>
              QuickCalcs.app is developed and maintained by a dedicated <strong className="text-[#e6e3db]">Full-Stack & AI Developer</strong> with a passion for digital efficiency. With a background in building complex automated systems and a deep focus on user experience, I created this platform to provide a cleaner, faster, and more honest alternative to traditional utility sites.
            </p>
            <p>
              My goal is to continue expanding this library of tools, ensuring that QuickCalcs.app remains your first choice for accuracy and reliability in the digital age.
            </p>
          </div>
        </section>

        {/* Footer/Contact */}
        <footer className="text-center pt-8 border-t border-[rgba(255,255,255,0.07)]">
          <p className="text-xs text-[#3e3c38]">
            QuickCalcs.app · Professional Utility Solutions · 2026
          </p>
        </footer>
      </div>
    </main>
  );
}
