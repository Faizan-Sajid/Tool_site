import Link from "next/link";
import React from "react";
import { Scale, FileText, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function GratuityContent() {
  return (
    <section className="max-w-[860px] px-[20px] sm:px-[36px] py-[48px] space-y-16 text-[#87847d]">
      
      {/* SECTION 1: What is UAE Gratuity? (E-E-A-T & Limited Contract Mandate) */}
      <div>
        <h2 className="mb-6 text-2xl font-bold text-[#e6e3db] flex items-center gap-3">
          <Scale className="w-6 h-6 text-[#c9a84c]" />
          What is UAE Gratuity? (Federal Decree-Law No. 33 of 2021)
        </h2>
        <div className="text-sm leading-relaxed space-y-4">
          <p>
            Gratuity is a statutory end-of-service benefit paid to expatriate employees in the UAE. It serves as a financial thank-you for the years of service provided to an employer. Under <strong className="text-[#e6e3db]">Federal Decree-Law No. 33 of 2021</strong> (the unified UAE Labour Law), all eligible private-sector workers are entitled to this payment upon the termination or completion of their employment contract.
          </p>
          <div className="bg-[rgba(45,212,160,0.05)] border border-[rgba(45,212,160,0.15)] rounded-xl p-4 text-[#2dd4a0]">
            <strong className="block mb-1 text-[#e6e3db]">The 2025/2026 Limited Contract Mandate:</strong>
            As of recent MOHRE mandates, all private sector contracts have officially transitioned to <strong>Limited (Fixed-Term) Contracts</strong>. The old "Unlimited Contract" rules—and their complicated resignation deduction formulas—have been entirely abolished. Gratuity calculations are now unified across all emirates.
          </div>
          <p>
            This benefit is calculated exclusively based on your last received <strong className="text-[#e6e3db]">Basic Wage</strong>, explicitly excluding allowances like housing, transport, or utilities.
          </p>
        </div>
      </div>

      {/* SECTION 2: Resignation vs Termination (Search Intent) */}
      <div>
        <h2 className="mb-6 text-2xl font-bold text-[#e6e3db] flex items-center gap-3">
          <AlertTriangle className="w-6 h-6 text-[#c9a84c]" />
          Resignation vs. Termination: Is the calculation different?
        </h2>
        <div className="text-sm leading-relaxed space-y-4">
          <p>
            A common misconception among employees is that resigning yields a lower gratuity payout than being terminated. <strong>Under the new unified Labour Law, this is no longer true.</strong>
          </p>
          <p>
            Whether you resign or your employer terminates your contract, the calculation of your End of Service Benefits remains exactly the same, provided you have completed at least one year of continuous service. 
          </p>
          <div className="border-l-4 border-[#c9a84c] pl-4 py-1 text-[#e6e3db]">
            <strong>The Article 44 Exception:</strong> The only scenario where gratuity is entirely forfeited is if an employee is dismissed for Gross Misconduct under <strong className="text-[#c9a84c]">Article 44</strong> of the UAE Labour Law (e.g., submitting forged documents or causing substantial material loss).
          </div>
        </div>
      </div>

      {/* SECTION 3: Official Rules & Pro-Rata (Article 51) */}
      <div>
        <h2 className="mb-6 text-2xl font-bold text-[#e6e3db] flex items-center gap-3">
          <FileText className="w-6 h-6 text-[#c9a84c]" />
          Article 51: Calculation Rules & Pro-Rata Logic
        </h2>
        <p className="mb-4 text-sm">
          Governed by <strong>Article 51</strong>, the calculation of gratuity depends on your length of continuous service. Furthermore, gratuity is calculated on a <strong>pro-rata basis</strong> for fractions of a year (e.g., if you worked 2 years and 3 months, those 3 months are precisely calculated and added to your total).
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.07)]">
                <th className="text-left py-3 pr-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Service Period</th>
                <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Calculation Rate</th>
                <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Note</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[rgba(255,255,255,0.03)]">
                <td className="py-4 pr-4">Less than 1 Year</td>
                <td className="px-4 text-[#3e3c38]">No Entitlement</td>
                <td className="px-4 text-xs italic">Continuous service must exceed 1 year.</td>
              </tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]">
                <td className="py-4 pr-4">1 to 5 Years</td>
                <td className="px-4 text-[#c9a84c]">21 Days of Basic Wage</td>
                <td className="px-4 text-xs">Per each year of service.</td>
              </tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]">
                <td className="py-4 pr-4">More than 5 Years</td>
                <td className="px-4 text-[#c9a84c]">30 Days of Basic Wage</td>
                <td className="px-4 text-xs">For each year exceeding 5 years.</td>
              </tr>
              <tr className="border-t-2 border-[rgba(255,255,255,0.07)]">
                <td className="py-4 pr-4 font-bold text-[#e6e3db]">Maximum Cap</td>
                <td colSpan={2} className="px-4 font-bold text-[#2dd4a0]">
                  Total gratuity cannot exceed 2 years' worth of your final wage.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 4: How to Use This Calculator (Semantic Headings) */}
      <div>
        <h2 className="mb-6 text-2xl font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          How to Use the UAE Gratuity Calculator
        </h2>
        <div className="space-y-6">
          {[
            { step: 1, title: "Enter Basic Wage", desc: "Input your monthly basic wage in AED. Ensure you explicitly exclude any allowances like housing or transport." },
            { step: 2, title: "Select Dates", desc: "Choose your exact joining and end dates as per your labor contract or visa cancellation." },
            { step: 3, title: "Choose Reason", desc: "Select whether you resigned or were terminated. While calculations are unified, tracking this is useful for historical records." },
            { step: 4, title: "Review Breakdown", desc: "See your total service days, the pro-rata fraction applied, the rate (21 or 30 days), and the final AED amount." },
          ].map((item) => (
            <div key={item.step} className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[rgba(201,168,76,0.11)] border border-[rgba(201,168,76,0.2)] text-[#c9a84c] text-xs font-bold flex items-center justify-center mt-1">
                {item.step}
              </span>
              <div>
                <h3 className="text-base font-bold text-[#e6e3db]">{item.title}</h3>
                <p className="mt-1 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 5: Gratuity Settlement Checklist (UX & Value Add) */}
      <div>
        <h2 className="mb-6 text-2xl font-bold text-[#e6e3db] flex items-center gap-3">
          <CheckCircle2 className="w-6 h-6 text-[#2dd4a0]" />
          Gratuity Settlement Checklist
        </h2>
        <div className="rounded-[12px] bg-[#131620] border border-[rgba(45,212,160,0.2)] p-6 space-y-4 text-sm">
          <p className="text-[#e6e3db] font-bold">
            Before signing your final settlement document, ensure you have:
          </p>
          <ul className="list-disc list-inside ml-2 space-y-2">
            <li><strong>Cancelled Visa:</strong> Confirmed your visa cancellation status.</li>
            <li><strong>Clearance Letter:</strong> Obtained a clearance certificate proving no outstanding debts to the employer.</li>
            <li><strong>Leave Encashment:</strong> Verified that any unutilized annual leave days are paid out alongside gratuity.</li>
            <li><strong>Repatriation Ticket:</strong> Checked if you are entitled to a flight ticket home (if returning to your home country).</li>
          </ul>
          <p className="text-[#87847d] text-xs pt-4 border-t border-[rgba(255,255,255,0.05)] mt-4">
            * Unpaid leave days are deducted from total service days. For legal matters, always consult with MOHRE or a legal professional.
          </p>
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
        </div>
      </nav>
    </section>
  );
}
