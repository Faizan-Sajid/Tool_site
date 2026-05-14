import Link from "next/link";
import React from "react";
import { Scale, FileText, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function GratuityContent() {
  return (
    <section className="max-w-[860px] px-[20px] sm:px-[36px] py-[48px] space-y-16 text-[#87847d]">

      {/* SECTION 1: Intro / Primary Keyword */}
      <article>
        <p className="text-lg leading-relaxed mb-6 text-[#e6e3db] font-medium">
          Navigating your end-of-service entitlements in the Emirates requires absolute precision and up-to-date legal knowledge.
          Our **MOHRE UAE Gratuity Calculator 2026** is the definitive professional tool designed to help expatriate employees
          accurately estimate their **End of Service Benefits UAE** in strict accordance with the latest federal mandates.
          Whether you are planning your next career move or transitioning out of the region, understanding your rights
          under the current **Dubai Gratuity Calculation** standards is essential for robust financial planning and
          [wealth management](https://www.quickcalcs.app/tools/zakat-calculator).
        </p>
      </article>

      {/* SECTION 2: How it's Calculated (H2 Requirement) */}
      <div>
        <h2 className="mb-6 text-2xl font-bold text-[#e6e3db] flex items-center gap-3">
          <Scale className="w-6 h-6 text-[#c9a84c]" />
          How UAE Gratuity is Calculated under Labour Law 2026
        </h2>
        <div className="text-sm leading-relaxed space-y-4">
          <p>
            The fundamental logic governing your payout is found in **UAE Labour Law Article 51**.
            As of 2026, the distinction between "unlimited" and "limited" contracts has been phased out,
            meaning **Limited Contract Resignation** follows a unified, simplified formula across all emirates.
          </p>
          <p>
            The calculation is based strictly on your final **Basic salary**, excluding all allowances such as
            housing, transportation, or utilities. The accrual rates are as follows:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <li className="bg-[#131620] border border-[rgba(255,255,255,0.05)] p-4 rounded-xl">
              <strong className="text-[#c9a84c] block mb-1">1 to 5 Years of Service</strong>
              <span className="text-[#e6e3db]">**21 days per year** of basic wage.</span>
            </li>
            <li className="bg-[#131620] border border-[rgba(255,255,255,0.05)] p-4 rounded-xl">
              <strong className="text-[#c9a84c] block mb-1">Over 5 Years of Service</strong>
              <span className="text-[#e6e3db]">**30 days per year** of basic wage.</span>
            </li>
          </ul>
          <div className="bg-[rgba(201,168,76,0.05)] border-l-4 border-[#c9a84c] p-4 text-xs italic">
            <span role="img" aria-label="Warning" className="mr-2">⚠️</span>
            **Statutory Limit:** The total gratuity amount is subject to a **24-month salary cap**,
            ensuring that the payment does not exceed two years' worth of your final basic wage.
          </div>
        </div>
      </div>

      {/* SECTION 3: Resignation vs Termination (H2 Requirement) */}
      <div>
        <h2 className="mb-6 text-2xl font-bold text-[#e6e3db] flex items-center gap-3">
          <AlertTriangle className="w-6 h-6 text-[#c9a84c]" />
          Resignation vs. Termination: Knowing Your Rights
        </h2>
        <div className="text-sm leading-relaxed space-y-4">
          <p>
            Under the **Federal Decree-Law No. 33 of 2021** (updated for 2026), the complex sliding scales for resignation
            that previously penalized employees have been abolished. Whether you resign or are terminated,
            your entitlement remains the same, provided you have completed at least one full year of continuous service.
          </p>
          <h3 className="text-[#e6e3db] font-bold text-lg mt-6">The 14 Days Settlement Rule</h3>
          <p>
            A critical update for 2026 is the enforcement of **Article 53**, often referred to as the **14 days settlement rule**.
            Employers are legally mandated to pay all end-of-service entitlements, including gratuity and leave encashment,
            within 14 days of the contract's end date. Failure to comply can result in significant MOHRE penalties.
          </p>
          <p>
            If you are re-investing your settlement into physical assets, monitoring the [live gold rates](https://www.quickcalcs.app/tools/gold-calculator)
            can help you maximize the long-term value of your payout.
          </p>
        </div>
      </div>

      {/* SECTION 4: Accuracy Check - 2021 Law & Limited Contracts */}
      <div>
        <h2 className="mb-6 text-2xl font-bold text-[#e6e3db] flex items-center gap-3">
          <span role="img" aria-label="Scale" className="text-xl">⚖️</span>
          Unified Contract Standards for 2026
        </h2>
        <p className="text-sm leading-relaxed">
          It is important to note that as per the 2021 Labour Law transition, which reached full maturity in 2026,
          all private sector employment contracts in the UAE are now classified as **Fixed-term (Limited) Contracts**.
          This shift was designed to protect both parties and provides a clear legal framework for calculating
          **End of Service Benefits UAE** without the ambiguity of the old "unlimited" system.
        </p>
      </div>

      {/* SECTION 5: CTA & Final Conclusion */}
      <div className="pt-12 border-t border-[rgba(255,255,255,0.07)] text-center">
        <h2 className="text-2xl font-bold text-[#e6e3db] mb-4">Calculate Your Future Today</h2>
        <p className="max-w-2xl mx-auto text-sm leading-relaxed mb-8">
          Our **MOHRE UAE Gratuity Calculator 2026** is updated quarterly to ensure compliance with the latest
          MOHRE ministerial resolutions. Don't leave your financial future to guesswork—use our professional-grade
          tool to get an instant, accurate breakdown of your legal entitlements.
        </p>
        <div className="flex justify-center gap-4">
           <span role="img" aria-label="Money Bag" className="text-3xl">💰</span>
           <span role="img" aria-label="Calculated" className="text-3xl">📈</span>
           <span role="img" aria-label="Legal document" className="text-3xl">📜</span>
        </div>
      </div>

      {/* ===== Explore Other Tools ===== */}
      <nav
        aria-label="Related tools navigation"
        className="mt-16 pt-8 border-t border-[rgba(255,255,255,0.07)]"
      >
        <h2 className="text-2xl font-bold mb-6 text-[#e6e3db]">Explore Other QuickCalcs Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/tools/gold-calculator" aria-label="Gold Price Calculator - Live 24K, 22K, 21K, 18K rates for UAE & GCC. Includes Zakat and unit converter." className="block p-4 rounded-xl border border-[rgba(255,255,255,0.1)] hover:border-[#c9a84c] hover:bg-[rgba(201,168,76,0.05)] transition-all focus:outline-none focus:ring-2 focus:ring-[#c9a84c]">
            <div className="flex items-start gap-3">
              <span role="img" aria-label="Gold calculator icon" className="text-2xl flex-shrink-0">💰</span>
              <div>
                <p className="font-semibold text-[#e6e3db]">Gold Price Calculator</p>
                <p className="text-xs text-[#87847d] mt-1">Live 24K, 22K, 21K, 18K rates for UAE & GCC. Includes Zakat and unit converter.</p>
              </div>
            </div>
          </Link>
          <Link href="/tools/zakat-calculator" aria-label="Zakat Calculator - Calculate Zakat on savings, gold, investments & business assets. Nisab auto-updated." className="block p-4 rounded-xl border border-[rgba(255,255,255,0.1)] hover:border-[#2dd4a0] hover:bg-[rgba(45,212,160,0.05)] transition-all focus:outline-none focus:ring-2 focus:ring-[#2dd4a0]">
            <div className="flex items-start gap-3">
              <span role="img" aria-label="Zakat calculator icon" className="text-2xl flex-shrink-0">☪️</span>
              <div>
                <p className="font-semibold text-[#e6e3db]">Zakat Calculator</p>
                <p className="text-xs text-[#87847d] mt-1">Calculate Zakat on savings, gold, investments & business assets. Nisab auto-updated.</p>
              </div>
            </div>
          </Link>
          <Link href="/tools/ksa-gosi-calculator" aria-label="Saudi GOSI Calculator - GOSI contributions for Saudi nationals and expats. Updated 2026 KSA rates." className="block p-4 rounded-xl border border-[rgba(255,255,255,0.1)] hover:border-[#c9a84c] hover:bg-[rgba(201,168,76,0.05)] transition-all focus:outline-none focus:ring-2 focus:ring-[#c9a84c]">
            <div className="flex items-start gap-3">
              <span role="img" aria-label="Saudi GOSI calculator icon" className="text-2xl flex-shrink-0">🛡️</span>
              <div>
                <p className="font-semibold text-[#e6e3db]">Saudi GOSI Calculator</p>
                <p className="text-xs text-[#87847d] mt-1">GOSI contributions for Saudi nationals and expats. Updated 2026 KSA rates.</p>
              </div>
            </div>
          </Link>
          <Link href="/tools/pakistan-freelancer-tax-calculator" aria-label="Pakistan Freelancer Tax Calculator - FBR income tax for freelancers. Supports PSEB 0.25%, non-PSEB 1%, non-filer 2%." className="block p-4 rounded-xl border border-[rgba(255,255,255,0.1)] hover:border-[#2dd4a0] hover:bg-[rgba(45,212,160,0.05)] transition-all focus:outline-none focus:ring-2 focus:ring-[#2dd4a0]">
            <div className="flex items-start gap-3">
              <span role="img" aria-label="Pakistan freelancer tax calculator icon" className="text-2xl flex-shrink-0">🧾</span>
              <div>
                <p className="font-semibold text-[#e6e3db]">Pakistan Freelancer Tax Calculator</p>
                <p className="text-xs text-[#87847d] mt-1">FBR income tax for freelancers. Supports PSEB 0.25%, non-PSEB 1%, non-filer 2%.</p>
              </div>
            </div>
          </Link>
          <Link href="/tools/hajj-umrah-budget-calculator" className="block p-4 rounded-xl border border-gray-600 hover:border-blue-400 hover:shadow-md transition-all">
                    <div className="flex items-start gap-3">
                        <span className="text-2xl">🕋</span>
                        <div>
                          <p className="font-semibold text-white">Hajj &amp; Umrah Budget Calculator</p>
                          <p className="text-sm text-gray-300 mt-1">Estimate pilgrimage costs – flights, hotels, visas, and food for 2026.</p>
                        </div>
                      </div>
                    </Link>
        </div>
      </nav>
    </section>
  );
}
