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

const longTailFaqItems = [
  {
    question: "How much is EPF deducted from salary in Malaysia?",
    answer:
      "For Malaysian employees below 60, EPF deducts 11% from your monthly salary. On a RM5,000 salary, that is RM550 per month. Your employer adds RM650 (13%) on top — meaning your total monthly EPF contribution is RM1,200, with RM550 coming from your pocket and RM650 from your employer.",
  },
  {
    question: "Does the employer EPF rate change at RM5,000?",
    answer:
      "Yes. The employer contribution is 13% for employees earning RM5,000 or below, and 12% for those earning above RM5,000. The employee rate stays at 11% regardless. This threshold applies to the monthly contributory wage — not total compensation including allowances.",
  },
  {
    question: "Is EPF contribution calculated on basic salary or gross salary?",
    answer:
      "EPF is calculated on your monthly contributory wage, which typically includes basic salary plus certain fixed allowances like housing allowance. It excludes reimbursements, travel claims, and certain bonus types. Check your payslip to see which components your employer includes in the EPF calculation.",
  },
  {
    question: "Does EPF apply to part-time and contract workers?",
    answer:
      "Yes. EPF contribution is mandatory for all employees in Malaysia regardless of employment type — full-time, part-time, or fixed-term contract. Employers must register and contribute for all employees including those on short-term contracts. The only exception is self-employed individuals, who contribute voluntarily through i-Saraan.",
  },
  {
    question: "What is the EPF contribution rate for age 60 and above?",
    answer:
      "Once you reach age 60, the employee contribution rate reduces to 5.5% and employer rates reduce to 6.5% (salaries ≤RM5,000) or 6% (above RM5,000). You can choose to maintain the full 11% employee rate by submitting Borang KWSP 17A to your HR department.",
  },
  {
    question: "Does EPF contribution apply to bonuses in Malaysia?",
    answer:
      "Yes, bonuses are generally subject to EPF contribution as they are considered part of wages under the EPF Act 1991. However, certain ex-gratia payments and approved allowances may be excluded. Your employer's payroll team determines which bonus components are EPF-liable based on EPF guidelines.",
  },
  {
    question: "What happens if my employer does not pay EPF?",
    answer:
      "Under the EPF Act 1991, employers who fail to remit contributions face fines up to RM20,000 or imprisonment up to 3 years, or both. You can check whether your employer has been contributing correctly by logging into i-Akaun at kwsp.gov.my. If contributions are missing, you can report to EPF enforcement at 03-8922 6000 or visit any EPF branch.",
  },
  {
    question: "How does voluntary EPF contribution reduce my tax in Malaysia?",
    answer:
      "Voluntary EPF contributions — including i-Saraan — qualify for up to RM4,000 in personal tax relief under the Life Insurance and EPF category. For someone in the 24% tax bracket, maximising this relief saves RM960 in income tax per year. Combined with the RM500 government match on i-Saraan, the effective first-year return on voluntary contributions is exceptionally high.",
  },
  {
    question: "What is the EPF RIA Framework and basic savings target?",
    answer:
      "The Retirement Income Adequacy (RIA) Framework, launched January 2026, sets three retirement savings benchmarks: Basic (RM390,000), Adequate (RM600,000), and Enhanced (RM1,000,000+) — all at age 60. Check the EPF balance projection in this calculator to see if you are on track for the basic savings benchmark based on your current salary and contribution.",
  },
  {
    question: "Can I withdraw from EPF Akaun Fleksibel anytime?",
    answer:
      "Yes. Akaun Fleksibel (10% of your contributions) can be withdrawn at any time through the i-Akaun app or EPF branch with no conditions or minimum amount. The remaining 75% in Akaun Persaraan is locked until age 55, and 15% in Akaun Sejahtera is accessible for approved purposes like housing and medical needs.",
  },
];

export default function EpfContent({ faqItems = [] }: EpfContentProps) {
  return (
    <section className="max-w-[860px] px-[20px] sm:px-[36px] py-[48px] space-y-16 text-[#87847d]">
      <aside className="p-5 rounded-2xl border border-[rgba(201,168,76,0.18)] bg-[rgba(201,168,76,0.04)] text-sm leading-relaxed">
        <p className="text-[#e6e3db] font-bold mb-2">Last reviewed: May 2026</p>
        <p>
          This page is for general salary and retirement planning only. EPF/KWSP contribution rules can change, and payroll treatment may differ by wage component. Always verify final statutory obligations with your employer, payroll provider, or the{" "}
          <a
            href="https://www.kwsp.gov.my/en/employer/responsibilities/mandatory-contribution"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="text-[#c9a84c] hover:underline"
          >
            KWSP official portal
          </a>.
        </p>
      </aside>

      <article className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-[#e6e3db] mb-6 flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          What is EPF and Why Does It Matter?
        </h2>
        <div className="text-sm leading-relaxed space-y-4">
          <p>
            EPF, also called KWSP in Malaysia, is the main retirement savings system for private-sector employees. Every month, part of your salary is deducted as the employee EPF contribution, while your employer adds a separate contribution on top.
          </p>
          <p>
            This Malaysia EPF calculator helps employees, HR teams, payroll admins, expats, and small employers estimate monthly KWSP contributions, take-home salary after EPF, employer EPF cost, Akaun Fleksibel split, and projected EPF savings.
          </p>
        </div>
      </article>

      <article className="space-y-6">
        <h2 className="text-2xl font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          EPF Contribution Rates Malaysia 2026 — Official KWSP Third Schedule
        </h2>
        <div className="text-sm leading-relaxed space-y-4">
          <p>
            For Malaysian citizens and Permanent Residents below age 60, the standard KWSP employee contribution rate is 11%. The employer EPF rate is 13% when the monthly contributory wage is RM5,000 or below, and 12% when it is above RM5,000.
          </p>
          <p>
            This tool uses statutory KWSP contribution rates and upward Ringgit rounding for planning. For salaries under RM20,000, actual payroll amounts may follow EPF Third Schedule bracket values, so small differences can appear on payslips.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[#131620]">
          <table className="w-full text-left border-collapse">
            <caption className="sr-only">Contribution Rate Summary table for Malaysia EPF and KWSP in 2026</caption>
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)]">
                <th className="p-4 text-xs font-bold text-[#e6e3db] uppercase tracking-wider">Employee category</th>
                <th className="p-4 text-xs font-bold text-[#e6e3db] uppercase tracking-wider">Monthly wage</th>
                <th className="p-4 text-xs font-bold text-[#e6e3db] uppercase tracking-wider">Employee rate</th>
                <th className="p-4 text-xs font-bold text-[#e6e3db] uppercase tracking-wider">Employer rate</th>
              </tr>
            </thead>
            <tbody className="text-xs text-[#87847d]">
              <tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="p-4 font-medium text-[#e6e3db]">Malaysian / PR under 60</td><td className="p-4">RM5,000 or below</td><td className="p-4">11%</td><td className="p-4 text-amber-500 font-bold">13%</td></tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="p-4 font-medium text-[#e6e3db]">Malaysian / PR under 60</td><td className="p-4">Above RM5,000</td><td className="p-4">11%</td><td className="p-4 text-amber-500 font-bold">12%</td></tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="p-4 font-medium text-[#e6e3db]">Age 60 and above</td><td className="p-4">Any amount</td><td className="p-4">5.5%</td><td className="p-4 text-amber-500 font-bold">6.5% / 6%</td></tr>
              <tr><td className="p-4 font-medium text-[#e6e3db]">Foreign workers</td><td className="p-4">Any amount</td><td className="p-4">0%</td><td className="p-4 text-amber-500 font-bold">2%</td></tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl border border-[rgba(201,168,76,0.15)] bg-[rgba(201,168,76,0.03)]">
          <p className="text-xs font-bold text-[#c9a84c] mb-2 uppercase tracking-wider">Why this calculator is more accurate</p>
          <ul className="text-xs text-[#87847d] space-y-1.5 list-none">
            <li>✓ Applies statutory KWSP contribution rates with upward Ringgit rounding</li>
            <li>✓ Includes the RM5,000 employer contribution threshold</li>
            <li>✓ Includes the foreign worker 2% employer rule effective October 2025</li>
            <li>✓ Shows take-home salary after employee EPF deduction</li>
            <li>✓ Shows the 75/15/10 Akaun Persaraan, Akaun Sejahtera and Akaun Fleksibel split</li>
          </ul>
        </div>
      </article>

      <article className="space-y-4">
        <h2 className="text-2xl font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          What Counts as Your Monthly Contributory Wage?
        </h2>
        <div className="text-sm leading-relaxed space-y-4">
          <p>
            EPF is normally calculated on monthly wages, not only the number printed as basic salary. Fixed allowances such as housing allowance may be EPF-liable, while reimbursements, travel claims, and some one-off payments may be excluded.
          </p>
          <p>
            If your payslip has several earning lines, use the amount your employer treats as EPF wages. That gives the closest result for EPF contribution table 2026 comparisons and KWSP employer contribution 13 or 12 checks.
          </p>
        </div>
      </article>

      <article className="space-y-4">
        <h2 className="text-2xl font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          Take-Home Salary After EPF — What You Actually Receive
        </h2>
        <p className="text-sm leading-relaxed">
          Your estimated take-home salary after EPF is your gross monthly salary minus the employee EPF deduction. It is not your final net pay, because PCB income tax, SOCSO, EIS, unpaid leave, benefits-in-kind, and other payroll items may still apply.
        </p>
      </article>

      <article className="space-y-4">
        <h2 className="text-2xl font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          EPF for Foreign Workers Malaysia — October 2025 Mandatory Rule
        </h2>
        <p className="text-sm leading-relaxed">
          The EPF contribution foreign worker 2026 rule makes employer contributions mandatory for eligible non-Malaysian workers from October 2025. This KWSP foreign worker calculator section applies the 2% employer rule described by KWSP. Permanent Residents should use the Malaysian / PR option because they follow standard employee and employer rates.
        </p>
      </article>

      <article className="space-y-4">
        <h2 className="text-2xl font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          EPF Akaun Fleksibel — Understanding Your 3-Account Structure
        </h2>
        <div className="text-sm leading-relaxed space-y-4">
          <p>
            Since May 2024, KWSP contributions are split into three accounts: 75% to Akaun Persaraan, 15% to Akaun Sejahtera, and 10% to Akaun Fleksibel. This EPF Akaun Fleksibel calculator helps show the portion of each monthly contribution that may become more accessible.
          </p>
          <ul className="list-none space-y-3">
            <li><span className="text-[#c9a84c] font-bold">Akaun Persaraan:</span> long-term retirement savings.</li>
            <li><span className="text-[#c9a84c] font-bold">Akaun Sejahtera:</span> approved needs such as housing, education, and medical expenses.</li>
            <li><span className="text-[#c9a84c] font-bold">Akaun Fleksibel:</span> the 10% flexible account that can be withdrawn subject to KWSP procedures.</li>
          </ul>
        </div>
      </article>

      <article className="space-y-4">
        <h2 className="text-2xl font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          EPF Contribution at Age 60 and Above
        </h2>
        <p className="text-sm leading-relaxed">
          Once a member reaches age 60, KWSP contribution rates are lower than standard under-60 rates. Many payroll teams also handle Borang KWSP 17A elections for members who want to maintain a higher employee contribution. If you are close to retirement, compare the calculator result with your HR payroll setting and KWSP account record.
        </p>
      </article>

      <article className="space-y-4">
        <h2 className="text-2xl font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          EPF Voluntary Contribution — i-Saraan, i-Saraan Plus and Tax Relief
        </h2>
        <p className="text-sm leading-relaxed">
          Employees and self-employed Malaysians may add voluntary EPF savings through channels such as i-Topup, i-Saraan, and i-Saraan Plus. These contributions can support retirement goals and may qualify for personal tax relief, subject to current LHDN rules and annual limits.
        </p>
      </article>

      <article className="space-y-6">
        <h2 className="text-2xl font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          EPF RIA Framework — Are You Saving Enough for Retirement?
        </h2>
        <p className="text-sm leading-relaxed">
          The EPF Retirement Income Adequacy Framework gives members clearer savings targets for age 60. Use the Malaysia EPF retirement projection above to compare your projected balance with the basic, adequate, and enhanced benchmarks.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[{ label: "Basic", value: "RM390,000" }, { label: "Adequate", value: "RM600,000" }, { label: "Enhanced", value: "RM1,000,000+" }].map((tier) => (
            <div key={tier.label} className="p-4 rounded-xl border border-[rgba(255,255,255,0.05)] bg-[#0c0e16]">
              <p className="text-[10px] text-[#c9a84c] font-bold uppercase mb-1">{tier.label} Savings</p>
              <p className="text-lg font-bold text-[#e6e3db]">{tier.value}</p>
            </div>
          ))}
        </div>
      </article>

      <article className="space-y-4">
        <h2 className="text-2xl font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          Kalkulator KWSP — Soalan Lazim dalam Bahasa Malaysia
        </h2>
        <div className="text-sm leading-relaxed space-y-3">
          <p><strong className="text-[#e6e3db]">Apa itu kalkulator KWSP?</strong> Kalkulator KWSP membantu anda anggar caruman pekerja, caruman majikan, potongan gaji, dan simpanan persaraan EPF.</p>
          <p><strong className="text-[#e6e3db]">Berapa kadar caruman KWSP 2026?</strong> Untuk pekerja Malaysia bawah umur 60 tahun, kadar pekerja biasanya 11%, manakala majikan membayar 13% atau 12% bergantung kepada gaji bulanan.</p>
          <p><strong className="text-[#e6e3db]">Adakah Akaun Fleksibel boleh dikeluarkan?</strong> Ya, Akaun Fleksibel boleh dikeluarkan tertakluk kepada prosedur KWSP semasa.</p>
        </div>
      </article>

      <article className="space-y-6">
        <h2 className="text-2xl font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          EPF / KWSP Glossary
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[#131620]">
          <table className="w-full text-left border-collapse">
            <tbody className="text-xs text-[#87847d]">
              {[{ term: "EPF / KWSP", meaning: "Malaysia's Employees Provident Fund retirement savings system." }, { term: "Contributory wage", meaning: "The wage amount used to calculate EPF contributions." }, { term: "Akaun Fleksibel", meaning: "The 10% flexible EPF account introduced under the 3-account structure." }, { term: "RIA Framework", meaning: "EPF retirement adequacy benchmarks for age-60 savings." }].map((row) => (
                <tr key={row.term} className="border-b border-[rgba(255,255,255,0.03)]">
                  <td className="p-4 font-bold text-[#e6e3db]">{row.term}</td>
                  <td className="p-4">{row.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>

      <article className="space-y-6">
        <h2 className="text-2xl font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          Long-Tail EPF FAQ
        </h2>
        <div className="space-y-6 text-sm leading-relaxed">
          {longTailFaqItems.map((item) => (
            <div key={item.question} className="p-4 rounded-xl border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.01)]">
              <h3 className="text-base font-bold text-[#e6e3db] mb-2">{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </article>

      <article className="space-y-4">
        <h2 className="text-2xl font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          Official EPF Source and Calculation Basis
        </h2>
        <p className="text-sm leading-relaxed">
          Calculation references include KWSP mandatory contribution guidance, the EPF Act 1991 contribution framework, the RM5,000 employer-rate threshold, the October 2025 foreign worker update, and the 75/15/10 three-account structure. For final payroll compliance, use KWSP records as the authority.
        </p>
        <a href="https://www.kwsp.gov.my/en/employer/responsibilities/mandatory-contribution" target="_blank" rel="nofollow noopener noreferrer" className="inline-flex text-sm text-[#c9a84c] hover:underline">
          View KWSP mandatory contribution guidance ↗
        </a>
      </article>

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

      {faqItems.length > 0 && (
        <section className="pt-10 border-t border-[rgba(255,255,255,0.07)]">
          <FAQ items={faqItems} />
        </section>
      )}
    </section>
  );
}
