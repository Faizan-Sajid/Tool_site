import React from "react";
import Link from "next/link";
import FAQ from "@/components/FAQ";

interface FaqItem {
  question: string;
  answer: string;
}

interface EpfContentProps {
  faqItems?: FaqItem[];
}

export default function EpfContent({ faqItems = [] }: EpfContentProps) {
  return (
    <section className="max-w-[860px] px-[20px] sm:px-[36px] py-[48px] space-y-16 text-[#87847d]">
      
      {/* SECTION 1: Intro */}
      <article className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-[#e6e3db] mb-6 flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          Malaysia EPF Calculator 2026 — Official KWSP Third Schedule Rates
        </h2>
        <div className="text-sm leading-relaxed space-y-4">
          <p>
            This Malaysia EPF calculator estimates employee and employer KWSP contribution amounts in Ringgit using current statutory contribution rates, the RM5,000 employer-rate threshold, and upward rounding rules. It is based on the <strong>EPF Act 1991</strong>, effective October 2025, and verified against the{" "}
            <a
              href="https://www.kwsp.gov.my/en/employer/responsibilities/mandatory-contribution"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c9a84c] hover:underline"
            >
              KWSP official mandatory contribution guidelines
            </a>.
          </p>
          <p>
            The Employees Provident Fund (EPF) is the cornerstone of social security for Malaysia&apos;s private-sector workforce. Whether you are a local employee, a Permanent Resident (PR), or an expat affected by the new 2025 mandates, a transparent KWSP contribution estimate is essential for financial planning and payroll compliance. In 2026, the contribution rate, foreign-worker mandate, and &ldquo;Akaun Fleksibel&rdquo; structure all matter when reviewing take-home pay and retirement savings.
          </p>
        </div>
      </article>

      {/* SECTION 2: Contribution Rates Table */}
      <article className="space-y-6">
        <h2 className="text-2xl font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          KWSP EPF Contribution Table 2026 — Third Schedule Rates & Breakdown
        </h2>
        <div className="text-sm leading-relaxed space-y-4">
          <p>
            Malaysia&apos;s KWSP contribution rules are not identical for every worker. For Malaysian citizens and Permanent Residents under age 60, the employee rate is normally 11%, while the employer rate depends on the monthly wage level. The RM5,000 threshold is the key payroll line: salaries at or below this amount use the higher employer rate.
          </p>
          <p>
            A common payroll question is whether the employer contributes 13% or 12%. If monthly wages are RM5,000 or below, the employer contributes 13%. Once wages exceed RM5,000, the employer rate shifts to 12%. The table below gives a quick reference for the standard mandatory rates in Malaysia.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[#131620]">
          <table className="w-full text-left border-collapse">
            <caption className="sr-only">
              Malaysia EPF contribution rates by employee category, salary threshold, and employer rate for 2026
            </caption>
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)]">
                <th className="p-4 text-xs font-bold text-[#e6e3db] uppercase tracking-wider">Employee Category</th>
                <th className="p-4 text-xs font-bold text-[#e6e3db] uppercase tracking-wider">Monthly Salary</th>
                <th className="p-4 text-xs font-bold text-[#e6e3db] uppercase tracking-wider">Employee Rate</th>
                <th className="p-4 text-xs font-bold text-[#e6e3db] uppercase tracking-wider">Employer Rate</th>
                <th className="p-4 text-xs font-bold text-[#e6e3db] uppercase tracking-wider">Total Contribution</th>
              </tr>
            </thead>
            <tbody className="text-xs text-[#87847d]">
              <tr className="border-b border-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.01)] transition-colors">
                <td className="p-4 font-medium text-[#e6e3db]">Standard (Under 60)</td>
                <td className="p-4">RM0 – RM5,000</td>
                <td className="p-4">11%</td>
                <td className="p-4 text-amber-500 font-bold">13%</td>
                <td className="p-4">24%</td>
              </tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.01)] transition-colors">
                <td className="p-4 font-medium text-[#e6e3db]">Standard (Under 60)</td>
                <td className="p-4">Above RM5,000</td>
                <td className="p-4">11%</td>
                <td className="p-4 text-amber-500 font-bold">12%</td>
                <td className="p-4">23%</td>
              </tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.01)] transition-colors">
                <td className="p-4 font-medium text-[#e6e3db]">Seniors (Age 60+)</td>
                <td className="p-4">Any Amount</td>
                <td className="p-4">0% (Mandatory)</td>
                <td className="p-4 text-amber-500 font-bold">4%</td>
                <td className="p-4">4%</td>
              </tr>
              <tr className="hover:bg-[rgba(255,255,255,0.01)] transition-colors">
                <td className="p-4 font-medium text-[#e6e3db]">Foreign Workers</td>
                <td className="p-4">Any Amount</td>
                <td className="p-4">2%</td>
                <td className="p-4 text-amber-500 font-bold">2%</td>
                <td className="p-4">4%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 p-4 rounded-xl border border-[rgba(201,168,76,0.15)] bg-[rgba(201,168,76,0.03)]">
          <p className="text-xs font-bold text-[#c9a84c] mb-2 uppercase tracking-wider">
            Why this calculator is more accurate
          </p>
          <ul className="text-xs text-[#87847d] space-y-1.5 list-none">
            <li>✓ Applies current statutory employee and employer rates with required upward Ringgit rounding</li>
            <li>✓ Includes October 2025 foreign worker 2% mandatory rule</li>
            <li>✓ Correct 75/15/10 Akaun Fleksibel split (most tools still show outdated 70/30)</li>
            <li>✓ No salary ceiling applied — consistent with KWSP rules</li>
            <li>✓ Source verified: <a href="https://www.kwsp.gov.my/en/employer/responsibilities/mandatory-contribution" target="_blank" rel="noopener noreferrer" className="text-[#c9a84c] hover:underline">KWSP Third Schedule, May 2026</a></li>
          </ul>
        </div>
        <p className="text-[10px] italic text-[#3e3c38]">
          *Note: Statutory rounding rules require all contributions to be rounded up to the nearest whole Ringgit (Math.ceil). There is no salary ceiling for EPF contributions in Malaysia.
        </p>
      </article>

      {/* SECTION: Salary Bracket Table — targets "epf rate table", "epf contribution table 2026" */}
      <article className="space-y-6">
        <h2 className="text-2xl font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          EPF Contribution Table 2026 — Monthly Amounts by Salary (RM)
        </h2>
        <p className="text-sm text-[#87847d] leading-relaxed">
          The table below shows common monthly EPF contribution examples for Malaysian employees under 60.
          The figures apply the standard employee and employer rates with upward Ringgit rounding.
          Use it as a quick payroll reference, or use the calculator above for your own salary.
        </p>

        <div className="overflow-x-auto rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[#131620]">
          <table className="w-full text-left border-collapse">
            <caption className="sr-only">
              Example monthly EPF employee and employer contribution amounts by salary for Malaysian employees under age 60
            </caption>
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)]">
                <th className="p-3 text-xs font-bold text-[#e6e3db] uppercase tracking-wider">Monthly Salary</th>
                <th className="p-3 text-xs font-bold text-[#e6e3db] uppercase tracking-wider">Employee (RM)</th>
                <th className="p-3 text-xs font-bold text-[#e6e3db] uppercase tracking-wider">Employer (RM)</th>
                <th className="p-3 text-xs font-bold text-[#e6e3db] uppercase tracking-wider">Total (RM)</th>
                <th className="p-3 text-xs font-bold text-[#e6e3db] uppercase tracking-wider">Employer Rate</th>
              </tr>
            </thead>
            <tbody className="text-xs text-[#87847d]">
              {[
                { salary: "RM 1,500", emp: 165, er: 195, tot: 360, rate: "13%" },
                { salary: "RM 2,000", emp: 220, er: 260, tot: 480, rate: "13%" },
                { salary: "RM 3,000", emp: 330, er: 390, tot: 720, rate: "13%" },
                { salary: "RM 4,000", emp: 440, er: 520, tot: 960, rate: "13%" },
                { salary: "RM 5,000", emp: 550, er: 650, tot: 1200, rate: "13%" },
                { salary: "RM 6,000", emp: 660, er: 720, tot: 1380, rate: "12%" },
                { salary: "RM 7,000", emp: 770, er: 840, tot: 1610, rate: "12%" },
                { salary: "RM 8,000", emp: 880, er: 960, tot: 1840, rate: "12%" },
                { salary: "RM 10,000", emp: 1100, er: 1200, tot: 2300, rate: "12%" },
                { salary: "RM 12,000", emp: 1320, er: 1440, tot: 2760, rate: "12%" },
                { salary: "RM 15,000", emp: 1650, er: 1800, tot: 3450, rate: "12%" },
                { salary: "RM 20,000", emp: 2200, er: 2400, tot: 4600, rate: "12%" },
              ].map((row) => (
                <tr
                  key={row.salary}
                  className="border-b border-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.01)] transition-colors"
                >
                  <td className="p-3 font-medium text-[#e6e3db]">{row.salary}</td>
                  <td className="p-3">RM {row.emp.toLocaleString()}</td>
                  <td className="p-3 text-amber-500 font-medium">RM {row.er.toLocaleString()}</td>
                  <td className="p-3 font-bold text-[#e6e3db]">RM {row.tot.toLocaleString()}</td>
                  <td className="p-3">{row.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[10px] italic text-[#3e3c38]">
          *For salaries above RM20,000, EPF uses direct percentage calculation instead of Third Schedule brackets.
          Foreign workers: both employee and employer contribute 2% each (flat, no bracket).
          Source: <a href="https://www.kwsp.gov.my/en/employer/responsibilities/mandatory-contribution" target="_blank" rel="noopener noreferrer" className="text-[#c9a84c]">KWSP Official Portal</a>
        </p>
      </article>

      {/* SECTION: Worked Examples — targets "epf calculation" pos 74 */}
      <article className="space-y-6">
        <h2 className="text-2xl font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          EPF Calculation Examples 2026 — Step by Step
        </h2>
        <p className="text-sm text-[#87847d] leading-relaxed">
          Here is how EPF calculation works for common Malaysian salary levels using statutory rates,
          the RM5,000 employer-rate threshold, and upward rounding. These worked examples show how
          the 2026 KWSP contribution rules apply in practice.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              label: "Malaysian Employee — RM 3,500/month",
              rows: [
                { desc: "Employee contribution (11%)", val: "RM 385", highlight: false },
                { desc: "Employer contribution (13%)", val: "RM 455", highlight: true },
                { desc: "Total monthly EPF", val: "RM 840", highlight: false },
                { desc: "Akaun Persaraan (75%)", val: "RM 630", highlight: false },
                { desc: "Akaun Sejahtera (15%)", val: "RM 126", highlight: false },
                { desc: "Akaun Fleksibel (10%)", val: "RM 84", highlight: false },
              ],
              note: "Below RM5,000 — employer contributes 13%",
            },
            {
              label: "Malaysian Employee — RM 5,000/month",
              rows: [
                { desc: "Employee contribution (11%)", val: "RM 550", highlight: false },
                { desc: "Employer contribution (13%)", val: "RM 650", highlight: true },
                { desc: "Total monthly EPF", val: "RM 1,200", highlight: false },
                { desc: "Akaun Persaraan (75%)", val: "RM 900", highlight: false },
                { desc: "Akaun Sejahtera (15%)", val: "RM 180", highlight: false },
                { desc: "Akaun Fleksibel (10%)", val: "RM 120", highlight: false },
              ],
              note: "Exactly at RM5,000 threshold — employer still 13%",
            },
            {
              label: "Malaysian Employee — RM 7,000/month",
              rows: [
                { desc: "Employee contribution (11%)", val: "RM 770", highlight: false },
                { desc: "Employer contribution (12%)", val: "RM 840", highlight: true },
                { desc: "Total monthly EPF", val: "RM 1,610", highlight: false },
                { desc: "Akaun Persaraan (75%)", val: "RM 1,208", highlight: false },
                { desc: "Akaun Sejahtera (15%)", val: "RM 242", highlight: false },
                { desc: "Akaun Fleksibel (10%)", val: "RM 161", highlight: false },
              ],
              note: "Above RM5,000 — employer drops to 12%",
            },
            {
              label: "Foreign Worker — RM 4,000/month",
              rows: [
                { desc: "Employee contribution (2%)", val: "RM 80", highlight: false },
                { desc: "Employer contribution (2%)", val: "RM 80", highlight: true },
                { desc: "Total monthly EPF", val: "RM 160", highlight: false },
                { desc: "Effective from", val: "Oct 2025", highlight: false },
                { desc: "Rule", val: "Mandatory", highlight: false },
                { desc: "Domestic helpers", val: "Exempt", highlight: false },
              ],
              note: "October 2025 mandatory rule — all non-citizens",
            },
          ].map((example) => (
            <div
              key={example.label}
              className="p-4 rounded-xl border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.01)]"
            >
              <p className="text-xs font-bold text-[#c9a84c] mb-3">{example.label}</p>
              <div className="space-y-1.5">
                {example.rows.map((row) => (
                  <div key={row.desc} className="flex justify-between text-xs">
                    <span className="text-[#87847d]">{row.desc}</span>
                    <span className={row.highlight ? "text-amber-500 font-bold" : "text-[#e6e3db] font-medium"}>
                      {row.val}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-[#3e3c38] mt-3 pt-2 border-t border-[rgba(255,255,255,0.05)]">
                {example.note}
              </p>
            </div>
          ))}
        </div>
      </article>

      {/* SECTION: Official rate confirmation — targets "kwsp employee contribution rate 11% official 2026 malaysia" */}
      <article className="space-y-4">
        <h2 className="text-2xl font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          Is the KWSP Employee Contribution Rate 11% Official for 2026?
        </h2>
        <div className="text-sm leading-relaxed space-y-3 text-[#87847d]">
          <p>
            Yes — the 11% employee contribution rate is officially confirmed under
            the Third Schedule of the EPF Act 1991. This rate is in full effect for 2026 and applies
            to all Malaysian citizens and Permanent Residents below age 60. There is no planned
            amendment to this rate for the current financial year.
          </p>
          <p>
            The 11% employee rate applies to Malaysian citizens and Permanent Residents under age 60,
            regardless of salary amount and regardless of employer industry or company size.
            Both employees and employers are legally bound under the EPF Act to remit contributions
            by the 15th of each following month.
          </p>
          <div className="p-4 rounded-xl border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.01)]">
            <p className="text-xs font-bold text-[#e6e3db] mb-2">Official confirmation sources:</p>
            <ul className="text-xs text-[#87847d] space-y-1">
              <li>
                →{" "}
                <a
                  href="https://www.kwsp.gov.my/en/employer/responsibilities/mandatory-contribution"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c9a84c] hover:underline"
                >
                  KWSP Mandatory Contribution page — Third Schedule with worked examples
                </a>
              </li>
              <li>→ EPF Act 1991, Third Schedule, Part A — effective October 2025 salary month</li>
              <li>→ Applicable to: Malaysian citizens, Permanent Residents, employees under age 60</li>
            </ul>
          </div>
        </div>
      </article>

      {/* SECTION 3: Age 60 Rules */}
      <article className="space-y-6">
        <h2 className="text-2xl font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          EPF Contribution Rate Age 60 Malaysia — KWSP Reduced Rates Explained
        </h2>
        <div className="text-sm leading-relaxed space-y-4">
          <p>
            Reaching the age of 60 is a significant milestone for EPF members. Under Malaysia&apos;s age 60+ contribution rules, the mandatory contribution rates drop sharply once an employee enters this age bracket. For most employees, the mandatory deduction from salary becomes 0%, while the employer&apos;s mandatory share is reduced to a flat 4%.
          </p>
          <p>
            It is a common myth that contributions stop entirely at 60. In reality, contributions can continue at these reduced rates as long as the member remains employed. This &ldquo;Age 60+ Rate&rdquo; is designed to encourage the employment of senior citizens by lowering the cost of hiring for employers while allowing employees to take home their full gross salary. However, members and employers can still mutually agree to contribute at higher &ldquo;voluntary excess&rdquo; rates if they wish to continue building retirement capital.
          </p>
        </div>
      </article>

      {/* SECTION 4: Foreign Worker 2026 */}
      <article className="space-y-6">
        <h2 className="text-2xl font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          EPF Contribution for Foreign Workers Malaysia 2026 (October 2025 Mandatory Rule)
        </h2>
        <div className="text-sm leading-relaxed space-y-4">
          <p>
            One of the most significant shifts in Malaysian payroll history occurred in October 2025. Previously, EPF was voluntary for many non-citizens. Under the updated rules, non-Malaysian employees, including expats and migrant workers, are generally required to contribute.
          </p>
          <p>
            The mandatory foreign-worker rate is currently set at 2% for the employee and 2% for the employer, totaling 4%. This rule applies to non-citizens with valid work permits, excluding domestic helpers. It is important to distinguish between Foreign Workers and Permanent Residents (PR): PR holders in Malaysia are treated the same as citizens and must contribute at the full standard rates of 11% and 12/13%.
          </p>
        </div>
      </article>

      {/* SECTION 5: Akaun Fleksibel */}
      <article className="space-y-6">
        <h2 className="text-2xl font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          EPF Akaun Fleksibel Calculator — 3-Account Contribution Split 2026
        </h2>
        <div className="text-sm leading-relaxed space-y-4">
          <p>
            Akaun Fleksibel is now part of the modern KWSP account structure. Since May 2024, monthly contributions are no longer split 70:30 between two accounts. Instead, a new three-account structure has been implemented:
          </p>
          <ul className="list-none space-y-3">
            <li className="flex gap-3">
              <span className="text-[#c9a84c] font-bold">1. Akaun Persaraan (75%):</span>
              <span>The primary retirement fund (formerly Account 1), which cannot be accessed until age 55.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#c9a84c] font-bold">2. Akaun Sejahtera (15%):</span>
              <span>Designed for life-cycle needs (formerly Account 2) such as housing, education, and medical expenses.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#c9a84c] font-bold">3. Akaun Fleksibel (10%):</span>
              <span>The new &ldquo;Account 3&rdquo; that allows members to make withdrawals at any time for any purpose, providing liquidity during emergencies.</span>
            </li>
          </ul>
          <p className="text-sm text-[#87847d] mt-3">
            Planning full Islamic financial obligations alongside your EPF savings? Our{" "}
            <Link href="/tools/zakat-calculator" className="text-[#c9a84c] hover:underline">
              Zakat Calculator Malaysia 2026
            </Link>{" "}
            helps you calculate Zakat on savings and investments separately.
          </p>
          <p>
            While Akaun Fleksibel provides flexibility, financial advisors often recommend leaving this account untouched whenever possible. The power of compounding at the current 6.15% dividend rate is significantly diminished if 10% of your contributions are withdrawn regularly.
          </p>
        </div>
      </article>

      {/* SECTION 6: Retirement Projection + RIA */}
      <article className="space-y-6">
        <h2 className="text-2xl font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          Malaysia EPF Retirement Projection — Are You on Track for 2026?
        </h2>
        <div className="text-sm leading-relaxed space-y-4">
          <p>
            The retirement projection feature uses the Retirement Income Adequacy (RIA) Framework introduced in early 2026. This framework sets clear benchmarks for what constitutes &ldquo;enough&rdquo; savings to support a 20-year retirement in Malaysia.
          </p>
          <p>
            Under the current KWSP retirement adequacy framework, members aged 60 can compare their savings against three reference tiers:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
            <div className="p-4 rounded-xl border border-[rgba(255,255,255,0.05)] bg-[#0c0e16]">
              <p className="text-[10px] text-[#c9a84c] font-bold uppercase mb-1">Basic Savings</p>
              <p className="text-lg font-bold text-[#e6e3db]">RM 390,000</p>
              <p className="text-[10px] text-[#3e3c38]">Minimum adequacy</p>
            </div>
            <div className="p-4 rounded-xl border border-[#c9a84c]/20 bg-[#0c0e16]">
              <p className="text-[10px] text-[#c9a84c] font-bold uppercase mb-1">Adequate Savings</p>
              <p className="text-lg font-bold text-[#e6e3db]">RM 650,000</p>
              <p className="text-[10px] text-[#3e3c38]">Comfortable lifestyle</p>
            </div>
            <div className="p-4 rounded-xl border border-[rgba(255,255,255,0.05)] bg-[#0c0e16]">
              <p className="text-[10px] text-[#c9a84c] font-bold uppercase mb-1">Enhanced Savings</p>
              <p className="text-lg font-bold text-[#e6e3db]">RM 1,300,000</p>
              <p className="text-[10px] text-[#3e3c38]">Full income replacement</p>
            </div>
          </div>
          <p className="text-sm text-[#87847d]">
            For Shariah-compliant savings planning alongside EPF, use our{" "}
            <Link href="/tools/zakat-calculator" className="text-[#c9a84c] hover:underline">
              Zakat calculator
            </Link>{" "}
            to ensure your annual Zakat obligations on savings are met before projecting net retirement balance.
          </p>
          <p>
            With the <strong>average EPF dividend hovering at 6.15%</strong> (Conventional) and 6.25% (Shariah), compound interest is your greatest ally. If your projection falls below the Basic Savings threshold, consider voluntary top-ups via the i-Topup facility or Private Retirement Schemes (PRS) to bridge the gap.
          </p>
        </div>
      </article>

      {/* SECTION 7: How to Use */}
      <article className="space-y-6">
        <h2 className="text-2xl font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          How to Use This EPF Calculator Malaysia
        </h2>
        <div className="text-sm leading-relaxed space-y-4">
          <p>
            Getting a practical EPF estimate is simple. The calculator applies the current employee and employer rates, the RM5,000 employer threshold, and upward Ringgit rounding so you can quickly understand your monthly contribution breakdown.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex gap-3 p-4 rounded-xl border border-[rgba(255,255,255,0.03)] bg-[rgba(255,255,255,0.01)]">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[rgba(201,168,76,0.1)] text-[#c9a84c] text-xs font-bold flex items-center justify-center">1</span>
              <p className="text-xs">Enter your <strong>Gross Monthly Salary</strong>. Include all fixed allowances subject to EPF.</p>
            </div>
            <div className="flex gap-3 p-4 rounded-xl border border-[rgba(255,255,255,0.03)] bg-[rgba(255,255,255,0.01)]">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[rgba(201,168,76,0.1)] text-[#c9a84c] text-xs font-bold flex items-center justify-center">2</span>
              <p className="text-xs">Select your <strong>Employee Category</strong> (Malaysian, Senior 60+, or Foreign Worker).</p>
            </div>
            <div className="flex gap-3 p-4 rounded-xl border border-[rgba(255,255,255,0.03)] bg-[rgba(255,255,255,0.01)]">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[rgba(201,168,76,0.1)] text-[#c9a84c] text-xs font-bold flex items-center justify-center">3</span>
              <p className="text-xs">Optional: Enter your <strong>Current Balance and Age</strong> to see a 6.15% compound projection.</p>
            </div>
            <div className="flex gap-3 p-4 rounded-xl border border-[rgba(255,255,255,0.03)] bg-[rgba(255,255,255,0.01)]">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[rgba(201,168,76,0.1)] text-[#c9a84c] text-xs font-bold flex items-center justify-center">4</span>
              <p className="text-xs">Review the breakdown of <strong>Employee vs Employer shares</strong> instantly.</p>
            </div>
          </div>
        </div>
      </article>

     

      {/* INTERNAL LINKS */}
      <section className="pt-10 border-t border-[rgba(255,255,255,0.07)]">
        <h2 className="text-xl font-bold text-white mb-6">Explore Other Finance Tools</h2>
        <nav aria-label="Related tools navigation" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { href: "/tools/zakat-calculator", icon: "🟡", title: "Zakat Calculator", desc: "Calculate your annual Zakat on savings, gold, and investments. Sharia-compliant 2026." },
            { href: "/tools/gold-calculator", icon: "💰", title: "Gold Price Calculator", desc: "Live 24K, 22K, 21K, 18K rates for UAE & GCC. Includes Zakat and unit converter." },
            { href: "/tools/uae-gratuity-calculator", icon: "🧮", title: "UAE Gratuity Calculator", desc: "End-of-service benefits as per UAE Labour Law 2026. Limited & unlimited contracts." },
            { href: "/tools/ksa-gosi-calculator", icon: "🛡️", title: "Saudi GOSI Calculator", desc: "GOSI contributions for Saudi nationals and expats. Updated 2026 KSA rates." },
            { href: "/tools/pakistan-freelancer-tax-calculator", icon: "🧾", title: "Pakistan Freelancer Tax Calculator", desc: "FBR income tax for freelancers. Supports PSEB 0.25%, non-PSEB 1%, non-filer 2%." },
            { href: "/tools/hajj-umrah-budget-calculator", icon: "🕋", title: "Hajj & Umrah Cost Calculator", desc: "Estimate Hajj and Umrah travel costs from Pakistan and Gulf. Updated 2026 packages." },
          ].map((tool) => (
            <Link key={tool.href} href={tool.href} className="block p-4 rounded-xl border border-[rgba(255,255,255,0.07)] hover:border-[#c9a84c] hover:shadow-md transition-all">
              <div className="flex items-start gap-3">
                <span className="text-2xl" role="img" aria-label={tool.title}>{tool.icon}</span>
                <div>
                  <p className="font-semibold text-[#e6e3db] text-sm">{tool.title}</p>
                  <p className="text-[11px] text-[#87847d] mt-1">{tool.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </nav>
      </section>

      {/* FAQ Section */}
      {faqItems.length > 0 && (
        <section className="pt-10 border-t border-[rgba(255,255,255,0.07)]">
          <FAQ items={faqItems} />
        </section>
      )}

    </section>
  );
}
