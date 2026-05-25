import React from "react";
import Link from "next/link";
import { CheckCircle2, Info, HelpCircle, Landmark, TrendingUp, Users, Wallet } from "lucide-react";
import FAQ from "@/components/FAQ";

const faqItems = [
  {
    question: "What is the EPF contribution rate for 2026 in Malaysia?",
    answer:
      "Under the Third Schedule of the EPF Act 1991, Malaysian employees under 60 contribute 11% of monthly wages. Employers contribute 13% for salaries at or below RM5,000 and 12% for salaries above that threshold. These rates apply to both Malaysian citizens and Permanent Residents. The RM5,000 salary threshold is a key dividing line — many employers get this wrong.",
  },
  {
    question: "What is the EPF contribution rate for foreign workers in Malaysia 2026?",
    answer:
      "Effective October 2025, EPF contributions became mandatory for all non-Malaysian employees in Malaysia. Both the employer and employee each contribute 2% of monthly wages under Third Schedule Part F. This applies to foreign workers with valid work permits. Permanent Residents follow the standard 11%/13% or 12% rate structure, not the 2% foreign worker rate.",
  },
  {
    question: "Does the EPF employer contribution rate change at RM5,000 salary?",
    answer:
      "Yes — this is one of the most searched EPF questions in Malaysia. For employees earning RM5,000 or below per month, the employer contributes 13%. For employees earning above RM5,000, the employer rate drops to 12%. The employee's contribution remains 11% in both cases. This threshold (the \"RM5,000 rule\") is defined in the Third Schedule and applies regardless of employer size or industry.",
  },
  {
    question: "What happens to EPF contributions when an employee turns 60?",
    answer:
      "When a Malaysian employee reaches age 60, both contribution rates change significantly. The employee rate drops from 11% to 5.5%, and the employer rate drops from 12–13% to 6%. This is defined in the Third Schedule. Many sources incorrectly state the rate remains standard — this is wrong. Contributions continue at the reduced rate for as long as the employee remains employed. Members can fully withdraw their entire EPF balance at age 60.",
  },
  {
    question: "What are the three EPF accounts and how are contributions split?",
    answer:
      "Since the May 2024 restructuring, every EPF contribution is automatically split into three accounts: Akaun Persaraan receives 75% (strictly for retirement), Akaun Sejahtera receives 15% (housing, education, health), and Akaun Fleksibel receives 10% (can be withdrawn anytime for any reason). Your total contribution amount does not change — only how it is distributed has changed.",
  },
  {
    question: "What is the EPF retirement savings target for 2026 in Malaysia?",
    answer:
      "Under the Retirement Income Adequacy (RIA) Framework introduced by EPF in January 2026, three savings tiers are recommended by age 60: Basic Savings of RM390,000 (minimum adequacy), Adequate Savings of RM650,000 (comfortable retirement), and Enhanced Savings of RM1,300,000 (full income replacement). Most Malaysians currently fall below the Basic Savings threshold, highlighting the importance of voluntary top-up contributions.",
  },
  {
    question: "Is there a maximum salary for EPF contribution calculation?",
    answer:
      "No. Unlike SOCSO, which caps contributions at a salary of RM6,000 per month, EPF has no upper salary ceiling. All wages, regardless of amount, are subject to EPF contribution calculation. For salaries above RM20,000 per month, EPF uses a direct percentage calculation rather than the Third Schedule bracket table.",
  },
  {
    question: "Can I contribute more than 11% to my EPF voluntarily?",
    answer:
      "Yes. EPF members can make voluntary excess contributions above the mandatory 11% through the i-Topup facility. Self-employed individuals who are not subject to mandatory EPF can contribute through i-Simpan. Voluntary contributions earn the same EPF dividend rate and qualify for income tax relief of up to RM4,000 per year (combined EPF + life insurance).",
  },
];

export default function EpfContent() {
  return (
    <section className="max-w-[860px] px-[20px] sm:px-[36px] py-[48px] space-y-16 text-[#87847d]">
      
      {/* SECTION 1: Intro */}
      <article className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-[#e6e3db] mb-6 flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          Accurate Malaysia EPF Calculator 2026: Official Third Schedule Rates
        </h2>
        <div className="text-sm leading-relaxed space-y-4">
          <p>
            Navigating retirement savings in Malaysia requires a precise understanding of the <strong>Kumpulan Wang Simpanan Pekerja (KWSP)</strong> framework. Our <strong>malaysia epf calculator 2026</strong> is engineered to provide instant, legally compliant results based on the <strong>EPF Act 1991</strong>. Unlike generic percentage-based tools, this <strong>epf third schedule calculator 2026</strong> follows the official statutory brackets to ensure your payroll deductions and employer contributions are 100% accurate.
          </p>
          <p>
            The Employees Provident Fund (EPF) is the cornerstone of social security for Malaysia's private-sector workforce. Whether you are a local employee, a Permanent Resident (PR), or an expat affected by the new 2025 mandates, using a verified <strong>kwsp calculator</strong> is essential for financial planning and payroll compliance. In 2026, understanding the nuances of the <strong>kwsp contribution rate 2026</strong> is more critical than ever as the fund shifts toward the new "Akaun Fleksibel" structure.
          </p>
        </div>
      </article>

      {/* SECTION 2: Contribution Rates Table */}
      <article className="space-y-6">
        <h2 className="text-2xl font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          KWSP Contribution Rate 2026 — Complete Third Schedule Breakdown
        </h2>
        <div className="text-sm leading-relaxed space-y-4">
          <p>
            The <strong>kwsp contribution rate 2026</strong> is not a flat percentage for everyone. For employees earning below RM20,000 per month, the EPF uses a bracket-based system known as the <strong>Third Schedule</strong>. A key feature of this system is the <strong>epf contribution rate rm5000 threshold</strong>, which determines the mandatory percentage your employer must pay.
          </p>
          <p>
            One common point of confusion is <strong>kwsp employer contribution 13% or 12%</strong>. If your monthly wages are RM5,000 or below, your employer must contribute 13%. Once you cross the RM5,001 mark, the rate shifts to 12%. Use the <strong>epf contribution table 2026</strong> below as a quick reference for the standard mandatory rates in Malaysia.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[#131620]">
          <table className="w-full text-left border-collapse">
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
        <p className="text-[10px] italic text-[#3e3c38]">
          *Note: Statutory rounding rules require all contributions to be rounded up to the nearest whole Ringgit (Math.ceil). There is no salary ceiling for EPF contributions in Malaysia.
        </p>
      </article>

      {/* SECTION 3: Age 60 Rules */}
      <article className="space-y-6">
        <h2 className="text-2xl font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          EPF Calculator Age 60 Malaysia — How Rates Change at Retirement Age
        </h2>
        <div className="text-sm leading-relaxed space-y-4">
          <p>
            Reaching the age of 60 is a significant milestone for EPF members. According to the <strong>epf calculator age 60 malaysia</strong> guidelines, the mandatory contribution rates drop sharply once an employee hits this age bracket. For most employees, the mandatory deduction from their salary becomes 0%, while the employer's mandatory share is reduced to a flat 4%.
          </p>
          <p>
            It is a common myth that contributions stop entirely at 60. In reality, the <strong>epf third schedule calculator 2026</strong> confirms that contributions continue at these reduced rates as long as the member remains employed. This "Age 60+ Rate" is designed to encourage the employment of senior citizens by lowering the cost of hiring for employers while allowing employees to take home their full gross salary. However, members and employers can still mutually agree to contribute at higher "voluntary excess" rates (such as the standard 11%/12%) if they wish to continue building retirement capital.
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
            One of the most significant shifts in Malaysian payroll history occurred in October 2025. Previously, EPF was voluntary for non-citizens. However, under the new 2026 regulations, the <strong>epf contribution foreign worker 2026</strong> mandate requires all non-Malaysian employees (expats and migrant workers) to contribute.
          </p>
          <p>
            Using a <strong>kwsp foreign worker calculator</strong>, you will find that the mandatory rate is currently set at 2% for the employee and 2% for the employer (totaling 4%). This rule applies to all non-citizens with valid work permits, excluding domestic helpers. For those searching for <strong>epf contribution expat malaysia 2026</strong>, it is important to distinguish between Foreign Workers (2%) and Permanent Residents (PR). PR holders in Malaysia are treated the same as citizens and must contribute at the full standard rates of 11% and 12/13%.
          </p>
        </div>
      </article>

      {/* SECTION 5: Akaun Fleksibel */}
      <article className="space-y-6">
        <h2 className="text-2xl font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          EPF Akaun Fleksibel — How the 3-Account Structure Affects Your Contributions
        </h2>
        <div className="text-sm leading-relaxed space-y-4">
          <p>
            The <strong>epf akaun fleksibel calculator</strong> logic is now integrated into the modern KWSP experience. Since May 2024, your monthly contributions are no longer split 70:30 between two accounts. Instead, a new three-account structure has been implemented:
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
              <span>The new "Account 3" that allows members to make withdrawals at any time for any purpose, providing liquidity during emergencies.</span>
            </li>
          </ul>
          <p>
            While <strong>epf akaun fleksibel</strong> provides flexibility, financial advisors recommend leaving this account untouched whenever possible. The power of compounding at the current 6.15% dividend rate is significantly diminished if 10% of your contributions are withdrawn regularly.
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
            The <strong>malaysia epf retirement projection</strong> feature in our tool uses the Retirement Income Adequacy (RIA) Framework introduced in early 2026. This framework sets clear benchmarks for what constitutes "enough" savings to survive a 20-year retirement in Malaysia.
          </p>
          <p>
            Based on current <strong>epf retirement calculator malaysia</strong> data, KWSP recommends three savings tiers for members aged 60:
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
          <p>
            With the <strong>average EPF dividend hovering at 6.15%</strong> (Conventional) and 6.25% (Shariah), compound interest is your greatest ally. If your projection falls below the Basic Savings threshold, consider voluntary top-ups via the i-Topup facility or Private Retirement Schemes (PRS) to bridge the gap.
          </p>
        </div>
      </article>

      {/* SECTION 7: How to Use */}
      <article className="space-y-6">
        <h2 className="text-2xl font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          How to Use This EPF Calculator Malaysia (Third Schedule Accurate)
        </h2>
        <div className="text-sm leading-relaxed space-y-4">
          <p>
            Getting an accurate estimate with our <strong>epf third schedule calculator 2026</strong> is simple. Unlike other tools that use rough percentages, we apply the exact bracket amounts defined by KWSP.
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

    </section>
  );
}
