import Link from "next/link";
import React from "react";
import { Scale, FileText, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function GratuityContent() {
  return (
    <section className="max-w-[860px] px-[20px] sm:px-[36px] py-[48px] space-y-12 text-[#87847d]">

      {/* SECTION 1: What is UAE Gratuity? */}
      <article>
        <h2 className="text-2xl font-bold text-[#e6e3db] mb-4">What is UAE Gratuity? — End of Service Benefits Explained</h2>
        <p className="text-[#e6e3db] mb-3">
          If you work in the UAE's private sector and you're about to leave your job — whether you're resigning, being terminated, or your contract is up — your employer is legally required to pay you a lump‑sum payment called gratuity.
        </p>
        <p className="text-[#e6e3db] mb-3">
          The basis is Federal Decree‑Law No. 33 of 2021 (updated 2026) – Article 51. It applies after completing one full year of continuous service.
        </p>
        <p className="text-[#e6e3db] mb-3">
          Gratuity is calculated only on your basic salary as defined in the contract. All allowances – housing, transport, bonuses, etc. – are excluded.
        </p>
        <p className="text-[#e6e3db] mb-3">
          The total payment is capped at two years' worth of your basic salary, regardless of how many years you have worked.
        </p>
      </article>

      {/* SECTION 2: Formula */}
      <article>
        <h2 className="text-2xl font-bold text-[#e6e3db] mb-4">UAE Gratuity Calculation Formula — 21 Days and 30 Days Explained</h2>
        <div className="bg-[rgba(201,168,76,0.05)] border border-[rgba(201,168,76,0.15)] rounded-[14px] p-5 mb-4">
          <pre className="text-[#e6e3db] whitespace-pre-wrap">
Gratuity = (Basic Salary ÷ 30) × Eligible Days × Years of Service
First 5 years: 21 days/year | Beyond 5 years: 30 days/year | Cap: 2 years' salary
          </pre>
        </div>
        <p className="text-[#e6e3db] mb-3">
          The first five years use 21 days of basic salary per year – a loyalty reward. After five years the rate rises to 30 days per year.
        </p>
        <p className="text-[#e6e3db] mb-3">
          Eligible days are the total service days after subtracting any unpaid leave.
        </p>
      </article>

      {/* SECTION 3: Worked Examples */}
      <article>
        <h2 className="text-2xl font-bold text-[#e6e3db] mb-4">Worked Examples — What Will You Actually Get?</h2>
        <div className="bg-[rgba(201,168,76,0.05)] border border-[rgba(201,168,76,0.15)] rounded-[14px] p-5 mb-4">
          <strong className="text-[#e6e3db] block mb-2">Example 1: 3 years, AED 5,000 basic salary</strong>
          <p className="text-[#e6e3db] mb-2">Contributory period: 3 years</p>
          <p className="text-[#e6e3db] mb-2">Formula: (5,000 ÷ 30) × 21 × 3 = AED 10,500</p>
          <p className="text-[#e6e3db]">Result: <strong>AED 10,500</strong></p>
        </div>
        <div className="bg-[rgba(201,168,76,0.05)] border border-[rgba(201,168,76,0.15)] rounded-[14px] p-5 mb-4">
          <strong className="text-[#e6e3db] block mb-2">Example 2: 7 years, AED 8,000 basic salary (limited contract)</strong>
          <p className="text-[#e6e3db] mb-2">First 5 years: (8,000 ÷ 30) × 21 × 5 = AED 28,000</p>
          <p className="text-[#e6e3db] mb-2">Next 2 years: (8,000 ÷ 30) × 30 × 2 = AED 16,000</p>
          <p className="text-[#e6e3db] mb-2">Total: AED 44,000</p>
        </div>
        <div className="bg-[rgba(201,168,76,0.05)] border border-[rgba(201,168,76,0.15)] rounded-[14px] p-5">
          <strong className="text-[#e6e3db] block mb-2">Example 3: Unlimited contract resignation, 4 years, AED 6,000</strong>
          <p className="text-[#e6e3db] mb-2">Full gratuity would be: (6,000 ÷ 30) × 21 × 4 = AED 16,800</p>
          <p className="text-[#e6e3db] mb-2">Sliding scale (3‑5 years resignation) applies 2/3 factor:</p>
          <p className="text-[#e6e3db] mb-2">Result: 16,800 × 2/3 = AED 11,200</p>
        </div>
      </article>

      {/* SECTION 4: Limited vs Unlimited */}
      <article>
        <h2 className="text-2xl font-bold text-[#e6e3db] mb-4">Limited vs Unlimited Contract — How It Affects Your Gratuity</h2>
        <p className="text-[#e6e3db] mb-3">
          <strong className="text-[#e6e3db]">Limited (fixed‑term) contracts</strong> – all contracts signed after February 2022. After one year you receive full gratuity whether you resign or are terminated.
        </p>
        <p className="text-[#e6e3db] mb-3">
          <strong className="text-[#e6e3db]">Unlimited (legacy) contracts</strong> – still exist for employees hired before February 2022. Resignation before five years uses a sliding scale:
        </p>
        <table className="w-full mb-4 border-collapse" style={{ color: '#e6e3db' }}>
          <thead>
            <tr className="border-b border-[#c9a84c]">
              <th className="pb-2 text-left">Service Period</th>
              <th className="pb-2 text-left">Resigned</th>
              <th className="pb-2 text-left">Terminated</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#c9a84c]"><td className="py-2">Less than 1 year</td><td className="py-2">Nothing</td><td className="py-2">Nothing</td></tr>
            <tr className="border-b border-[#c9a84c]"><td className="py-2">1–3 years</td><td className="py-2">1/3 of gratuity</td><td className="py-2">Full gratuity</td></tr>
            <tr className="border-b border-[#c9a84c]"><td className="py-2">3–5 years</td><td className="py-2">2/3 of gratuity</td><td className="py-2">Full gratuity</td></tr>
            <tr className="border-b border-[#c9a84c]"><td className="py-2">5+ years</td><td className="py-2">Full gratuity</td><td className="py-2">Full gratuity</td></tr>
          </tbody>
        </table>
        <p className="text-[#e6e3db] mb-3">
          If your contract was renewed after February 2022 it is now a limited contract, so the old reduction rules no longer apply.
        </p>
      </article>

      {/* SECTION 5: How to Use the Calculator */}
      <article>
        <h2 className="text-2xl font-bold text-[#e6e3db] mb-4">How to Use This UAE Gratuity Calculator — Step by Step</h2>
        <ol className="list-decimal list-outside pl-6 text-[#e6e3db] space-y-2">
          <li>Enter your basic monthly salary (AED).</li>
          <li>Select contract type — Limited or Unlimited.</li>
          <li>Select reason for leaving — Resigned, Terminated, Contract Completed, or Mutual Agreement.</li>
          <li>Enter joining and end dates (and any unpaid leave days).</li>
          <li>Click Calculate — view detailed breakdown instantly.</li>
        </ol>
      </article>

      {/* SECTION 6: What Counts as Basic Salary */}
      <article>
        <h2 className="text-2xl font-bold text-[#e6e3db] mb-4">What Counts as Basic Salary for Gratuity?</h2>
        <ul className="list-disc list-outside pl-6 text-[#e6e3db] space-y-2">
          <li><strong className="text-[#e6e3db]">Included</strong>: Fixed basic salary as written in your contract.</li>
          <li><strong className="text-[#e6e3db]">Excluded</strong>: Housing allowance, transport, food, phone, overtime, bonuses, commissions.</li>
        </ul>
        <p className="text-[#e6e3db] mt-3">
          Use the number from your employment contract, not the figure shown on payslips after deductions.
        </p>
      </article>

      {/* SECTION 7: Final Settlement */}
      <article>
        <h2 className="text-2xl font-bold text-[#e6e3db] mb-4">Final Settlement UAE — More Than Just Gratuity</h2>
        <p className="text-[#e6e3db] mb-3">
          Final settlement includes:
        </p>
        <ul className="list-disc list-outside pl-6 text-[#e6e3db] space-y-2">
          <li>Unpaid salary for days worked.</li>
          <li>Gratuity (21/30 day formula).</li>
          <li>Unused annual leave encashment (basic salary ÷ 30 × unused days).</li>
          <li>Notice period pay if applicable.</li>
          <li>Any agreed end‑of‑contract bonuses.</li>
          <li>Minus lawful deductions.</li>
        </ul>
        <p className="text-[#e6e3db] mt-3">
          Under Article 53 employers must pay the full settlement within 14 days of your last working day.
        </p>
      </article>

      {/* SECTION 8: Free Zones */}
      <article>
        <h2 className="text-2xl font-bold text-[#e6e3db] mb-4">Free Zones — Does This Calculator Apply to DIFC and ADGM?</h2>
        <p className="text-[#e6e3db] mb-3">
          Most UAE free zones (JAFZA, DMCC, Dubai South, Sharjah free zones) follow the mainland gratuity formula.
        </p>
        <p className="text-[#e6e3db] mb-3">
          DIFC and ADGM operate under their own DEWS pension scheme, which does not use the standard gratuity calculation.
        </p>
        <p className="text-[#e6e3db]">
          If you are unsure which regime applies, check your employment contract or ask HR.
        </p>
      </article>

      {/* SECTION 9: When Can Gratuity Be Denied */}
      <article>
        <h2 className="text-2xl font-bold text-[#e6e3db] mb-4">When Can Gratuity Be Denied?</h2>
        <p className="text-[#e6e3db] mb-3">
          Article 120 allows withholding gratuity for gross misconduct such as theft, fraud, or serious workplace violence.
        </p>
        <p className="text-[#e6e3db] mb-3">
          Leaving without serving the notice period can also affect your entitlement.
        </p>
        <p className="text-[#e6e3db]">
          Less than one year of service – no gratuity at all.
        </p>
      </article>

      {/* SECTION 10: Why Use This Free Calculator */}
      <article>
        <h2 className="text-2xl font-bold text-[#e6e3db] mb-4">Why Use This Free UAE Gratuity Calculator?</h2>
        <ul className="list-disc list-outside pl-6 text-[#e6e3db] space-y-2">
          <li>Accurate 2026 rates based on Federal Decree‑Law No. 33 of 2021.</li>
          <li>Handles both limited and unlimited contracts.</li>
          <li>Resignation and termination scenarios calculated correctly.</li>
          <li>Unpaid leave days automatically subtracted.</li>
          <li>Shows full final settlement breakdown, not just gratuity.</li>
          <li>100 % private – no data sent to any server.</li>
        </ul>
      </article>

      {/* ── SECTION 11: Internal Links ── */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-white mb-6">Explore Other QuickCalcs Tools</h2>
        <nav aria-label="Related tools navigation" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { href: "/tools/ksa-gosi-calculator", icon: "🛡️", title: "Saudi GOSI Calculator", desc: "Calculate GOSI contributions for Saudi nationals and expats. Updated 2026 KSA rates." },
            { href: "/tools/pakistan-freelancer-tax-calculator", icon: "🧾", title: "Pakistan Freelancer Tax Calculator", desc: "FBR income tax for freelancers. Supports PSEB 0.25%, non-PSEB 1%, and non-filers." },
            { href: "/tools/zakat-calculator", icon: "☪️", title: "Zakat Calculator", desc: "Calculate Zakat on savings, gold, investments and business assets. Nisab auto-updated." },
            { href: "/tools/gold-calculator", icon: "💰", title: "Gold Price Calculator", desc: "Live 24K, 22K, 21K, 18K rates for UAE and GCC. Includes Zakat and unit converter." },
            { href: "/tools/hajj-umrah-budget-calculator", icon: "🕋", title: "Hajj & Umrah Budget Calculator", desc: "Estimate pilgrimage costs — flights, hotels, visas, and food for 2026." },
          ].map((tool) => (
            <Link key={tool.href} href={tool.href} className="block p-4 rounded-xl border border-[rgba(255,255,255,0.07)] hover:border-[#c9a84c] hover:shadow-md transition-all">
              <div className="flex items-start gap-3">
                <span className="text-2xl">{tool.icon}</span>
                <div>
                  <p className="font-semibold text-[#e6e3db]">{tool.title}</p>
                  <p className="text-sm text-[#87847d] mt-1">{tool.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </nav>
      </section>

    </section>
  );
}
