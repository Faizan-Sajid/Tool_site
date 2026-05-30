import Link from "next/link";
import React from "react";

const glossaryTerms = [
  { english: "End of Service Gratuity", arabic: "مكافأة نهاية الخدمة" },
  { english: "Basic Salary", arabic: "الراتب الأساسي" },
  { english: "Continuous Service", arabic: "الخدمة المستمرة" },
  { english: "Resignation", arabic: "الاستقالة" },
  { english: "Termination", arabic: "إنهاء الخدمة" },
  { english: "Final Settlement", arabic: "التسوية النهائية" },
  { english: "Limited / Fixed-term Contract", arabic: "عقد محدد المدة" },
  { english: "Gross Misconduct", arabic: "سوء السلوك الجسيم" },
  { english: "Ministry of Human Resources and Emiratisation (MOHRE)", arabic: "وزارة الموارد البشرية والتوطين" },
  { english: "Labor Dispute", arabic: "نزاع عمالي" },
];

const relatedTools = [
  { href: "/tools/ksa-gosi-calculator", icon: "🛡️", title: "Saudi GOSI Calculator", desc: "Calculate GOSI contributions for Saudi nationals and expats. Updated 2026 KSA rates." },
  { href: "/tools/pakistan-freelancer-tax-calculator", icon: "🧾", title: "Pakistan Freelancer Tax Calculator", desc: "FBR income tax for freelancers. Supports PSEB 0.25%, non-PSEB 1%, and non-filers." },
  { href: "/tools/zakat-calculator", icon: "☪️", title: "Zakat Calculator", desc: "Calculate Zakat on savings, gold, investments and business assets. Nisab auto-updated." },
  { href: "/tools/gold-calculator", icon: "💰", title: "Gold Price Calculator", desc: "Live 24K, 22K, 21K, 18K rates for UAE and GCC. Includes Zakat and unit converter." },
  { href: "/tools/hajj-umrah-budget-calculator", icon: "🕋", title: "Hajj & Umrah Budget Calculator", desc: "Estimate pilgrimage costs — flights, hotels, visas, and food for 2026." },
  { href: "/tools/malaysia-epf-calculator", icon: "🇲🇾", title: "Malaysia EPF Calculator", desc: "Calculate EPF contributions for employees and employers in Malaysia. Includes 2026 rates and take-home salary." },
];

export default function GratuityContent() {
  return (
    <section className="max-w-[860px] px-[20px] sm:px-[36px] py-[48px] space-y-12 text-[#87847d]">
      <section aria-labelledby="trust-review" className="rounded-[24px] border border-[rgba(45,212,160,0.22)] bg-[rgba(45,212,160,0.06)] p-5 sm:p-6 shadow-lg shadow-[#000]/10">
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#2dd4a0] mb-2">Reviewed legal guidance</p>
            <h2 id="trust-review" className="text-xl sm:text-2xl font-bold text-[#e6e3db]">UAE gratuity estimate reviewed for 2026</h2>
          </div>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[#0c0e16] p-4">
              <dt className="text-[10px] uppercase tracking-wider text-[#87847d] font-bold mb-1">Last Reviewed</dt>
              <dd className="text-[#e6e3db] font-semibold">May 2026</dd>
            </div>
            <div className="rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[#0c0e16] p-4">
              <dt className="text-[10px] uppercase tracking-wider text-[#87847d] font-bold mb-1">Reviewed By</dt>
              <dd className="text-[#e6e3db] font-semibold">QuickCalcs Legal &amp; HR Compliance Team</dd>
            </div>
            <div className="sm:col-span-2 rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[#0c0e16] p-4">
              <dt className="text-[10px] uppercase tracking-wider text-[#87847d] font-bold mb-1">Legal Basis</dt>
              <dd className="text-[#e6e3db] font-semibold">UAE Federal Decree-Law No. 33 of 2021</dd>
            </div>
          </dl>
          <blockquote className="rounded-2xl border-l-4 border-[#c9a84c] bg-[rgba(201,168,76,0.08)] p-4 text-sm leading-relaxed text-[#e6e3db]">
            <strong>Legal disclaimer:</strong> This calculator provides informational estimates only. QuickCalcs is independent and is not officially affiliated with the Ministry of Human Resources and Emiratisation (MOHRE). For binding employment disputes, official complaints, or case-specific legal advice, contact MOHRE or a qualified UAE labour-law professional.
          </blockquote>
        </div>
      </section>

      <article>
        <h2 className="text-2xl font-bold text-[#e6e3db] mb-4">What is UAE Gratuity? — End of Service Benefits Explained</h2>
        <p className="text-[#e6e3db] mb-3 leading-relaxed">
          UAE end-of-service gratuity is a statutory lump-sum benefit paid to eligible private-sector employees when employment ends. It is designed to protect employees at resignation, termination, contract completion, or mutual separation after at least one full year of continuous service.
        </p>
        <p className="text-[#e6e3db] mb-3 leading-relaxed">
          The core legal basis is UAE Federal Decree-Law No. 33 of 2021. For most mainland and non-DIFC private-sector employees, gratuity is calculated from the employee&apos;s basic salary, not the full compensation package. Housing, transport, phone, food, commission, overtime, and discretionary bonuses are generally excluded unless the contract or a binding award says otherwise.
        </p>
        <p className="text-[#e6e3db] leading-relaxed">
          The standard formula awards 21 days of basic salary for each year in the first five years of service and 30 days of basic salary for each year after that. The total statutory gratuity is capped at two years of basic salary.
        </p>
      </article>

      <article>
        <h2 className="text-2xl font-bold text-[#e6e3db] mb-4">UAE Gratuity Calculation Formula — 21 Days and 30 Days Explained</h2>
        <div className="bg-[rgba(201,168,76,0.05)] border border-[rgba(201,168,76,0.15)] rounded-[14px] p-5 mb-4 overflow-x-auto">
          <pre className="text-[#e6e3db] whitespace-pre-wrap text-sm sm:text-base leading-relaxed">{`Daily basic salary = Monthly basic salary ÷ 30
First 5 years = Daily basic salary × 21 days × years of service
After 5 years = Daily basic salary × 30 days × years beyond 5
Maximum gratuity = 24 months of basic salary`}</pre>
        </div>
        <p className="text-[#e6e3db] mb-3 leading-relaxed">
          Use the basic salary shown in your employment contract. If your salary changed during employment, the final basic salary is commonly used for the gratuity estimate, but disputed or unusual compensation structures should be checked with MOHRE or legal counsel.
        </p>
        <p className="text-[#e6e3db] leading-relaxed">
          Unpaid leave days are normally excluded from continuous service for the gratuity calculation. This calculator lets you subtract unpaid leave so the estimate reflects eligible service days more accurately.
        </p>
      </article>

      <article>
        <h2 className="text-2xl font-bold text-[#e6e3db] mb-4">Resignation vs. Termination After the 2022 Reform — Same Formula for Fixed-Term Contracts</h2>
        <p className="text-[#e6e3db] mb-3 leading-relaxed">
          One of the most important UAE gratuity updates is the removal of the old resignation penalty for new fixed-term contracts. Under the post-2022 UAE labour-law framework, employees on limited or fixed-term contracts use the same gratuity formula whether they resign or are terminated, provided they completed at least one full year of continuous service.
        </p>
        <div className="rounded-2xl border border-[rgba(45,212,160,0.2)] bg-[rgba(45,212,160,0.06)] p-5 mb-4">
          <h3 className="text-lg font-bold text-[#e6e3db] mb-2">2026 fixed-term contract rule</h3>
          <p className="text-[#e6e3db] leading-relaxed">
            A resigning employee and a terminated employee receive the same basic calculation: 21 days per year for the first five years, then 30 days per year after five years, subject to the two-year salary cap.
          </p>
        </div>
        <blockquote className="rounded-2xl border-l-4 border-[#c9a84c] bg-[rgba(201,168,76,0.08)] p-4 text-sm leading-relaxed text-[#e6e3db]">
          <strong>Legacy warning:</strong> Some older unlimited contracts may still have transitional conditions or historical payroll treatment. If your contract began before the 2022 reforms and was not clearly converted to a fixed-term contract, confirm the applicable position with HR, MOHRE, or a qualified UAE labour-law adviser before relying on any estimate.
        </blockquote>
      </article>

      <article>
        <h2 className="text-2xl font-bold text-[#e6e3db] mb-4">Alternative End-of-Service Savings Scheme — Cabinet Resolution No. 96 of 2023</h2>
        <p className="text-[#e6e3db] mb-3 leading-relaxed">
          In addition to the traditional gratuity model, the UAE introduced a voluntary alternative end-of-service benefits system through Cabinet Resolution No. 96 of 2023. This alternative savings and investment framework is supervised by MOHRE and the Securities and Commodities Authority (SCA). It allows participating employers to move away from the classic end-of-service accrual method and enroll eligible workers in regulated investment funds.
        </p>
        <p className="text-[#e6e3db] mb-3 leading-relaxed">
          Under the mechanism, the employer makes monthly contributions into approved investment funds instead of only carrying a gratuity liability on its books. The employee&apos;s end-of-service benefit then depends on the accumulated contributions and the performance of the selected fund, subject to the rules of the scheme. This creates a clearer funding path for employers and can give employees more transparent visibility over their long-term benefit balance.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-5">
          <div className="rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[#131620] p-5">
            <p className="text-[10px] uppercase tracking-wider text-[#87847d] font-bold mb-2">Less than 5 years of service</p>
            <p className="text-3xl font-bold text-[#c9a84c]">5.83%</p>
            <p className="text-sm text-[#e6e3db] mt-2">of monthly basic salary contributed by the employer</p>
          </div>
          <div className="rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[#131620] p-5">
            <p className="text-[10px] uppercase tracking-wider text-[#87847d] font-bold mb-2">More than 5 years of service</p>
            <p className="text-3xl font-bold text-[#c9a84c]">8.33%</p>
            <p className="text-sm text-[#e6e3db] mt-2">of monthly basic salary contributed by the employer</p>
          </div>
        </div>
        <p className="text-[#e6e3db] mb-3 leading-relaxed">
          Progressive UAE employers are increasingly reviewing this alternative end-of-service savings scheme in 2026 because it can improve funding discipline, employee transparency, and portability. It is not automatically used by every company. Your employer must be enrolled in the approved scheme, and your employment documents or HR portal should state whether your benefit is handled through the traditional gratuity formula or the alternative investment scheme.
        </p>
        <p className="text-[#e6e3db] leading-relaxed">
          To check your status, ask HR whether your company participates in the MOHRE-supervised alternative end-of-service benefits scheme, request the name of the approved fund, and confirm whether monthly contributions are being made at 5.83% or 8.33% of your basic salary. If your employer has not transitioned, the standard gratuity calculation remains the practical estimate for most employees.
        </p>
      </article>

      <article>
        <h2 className="text-2xl font-bold text-[#e6e3db] mb-4">Worked Examples — What Will You Actually Get?</h2>
        <div className="space-y-4">
          <div className="bg-[rgba(201,168,76,0.05)] border border-[rgba(201,168,76,0.15)] rounded-[14px] p-5">
            <h3 className="text-[#e6e3db] font-bold mb-2">Example 1: 3 years, AED 5,000 basic salary</h3>
            <p className="text-[#e6e3db] mb-2">Daily rate: AED 5,000 ÷ 30 = AED 166.67</p>
            <p className="text-[#e6e3db] mb-2">Formula: AED 166.67 × 21 × 3 = AED 10,500</p>
            <p className="text-[#e6e3db]">Estimated gratuity: <strong>AED 10,500</strong></p>
          </div>
          <div className="bg-[rgba(201,168,76,0.05)] border border-[rgba(201,168,76,0.15)] rounded-[14px] p-5">
            <h3 className="text-[#e6e3db] font-bold mb-2">Example 2: 7 years, AED 8,000 basic salary</h3>
            <p className="text-[#e6e3db] mb-2">First 5 years: AED 8,000 ÷ 30 × 21 × 5 = AED 28,000</p>
            <p className="text-[#e6e3db] mb-2">Next 2 years: AED 8,000 ÷ 30 × 30 × 2 = AED 16,000</p>
            <p className="text-[#e6e3db]">Estimated gratuity: <strong>AED 44,000</strong></p>
          </div>
          <div className="bg-[rgba(201,168,76,0.05)] border border-[rgba(201,168,76,0.15)] rounded-[14px] p-5">
            <h3 className="text-[#e6e3db] font-bold mb-2">Example 3: Resignation after 4 years on a 2026 fixed-term contract</h3>
            <p className="text-[#e6e3db] mb-2">For a valid fixed-term contract, resignation and termination use the same formula after one year of continuous service.</p>
            <p className="text-[#e6e3db]">If basic salary is AED 6,000, estimated gratuity is AED 6,000 ÷ 30 × 21 × 4 = <strong>AED 16,800</strong>.</p>
          </div>
        </div>
      </article>

      <article>
        <h2 className="text-2xl font-bold text-[#e6e3db] mb-4">What Counts as Basic Salary for UAE Gratuity?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="rounded-2xl border border-[rgba(45,212,160,0.18)] bg-[rgba(45,212,160,0.05)] p-5">
            <h3 className="text-[#2dd4a0] font-bold mb-2">Included</h3>
            <p className="text-[#e6e3db] text-sm leading-relaxed">The fixed monthly basic salary stated in your employment contract or most recent agreed salary amendment.</p>
          </div>
          <div className="rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[#131620] p-5">
            <h3 className="text-[#c9a84c] font-bold mb-2">Usually excluded</h3>
            <p className="text-[#e6e3db] text-sm leading-relaxed">Housing, transport, food, phone, overtime, discretionary bonuses, commissions, and other allowances.</p>
          </div>
        </div>
        <p className="text-[#e6e3db] leading-relaxed">
          If your employer uses total salary instead of basic salary, or excludes amounts that are actually part of your contractual basic wage, ask for a written final-settlement breakdown before signing any clearance document.
        </p>
      </article>

      <article>
        <h2 className="text-2xl font-bold text-[#e6e3db] mb-4">Final Settlement UAE — More Than Just Gratuity</h2>
        <p className="text-[#e6e3db] mb-3 leading-relaxed">A UAE final settlement normally includes more than the end-of-service gratuity amount. Check each line before signing:</p>
        <ul className="list-disc list-outside pl-6 text-[#e6e3db] space-y-2">
          <li>Unpaid salary for days already worked.</li>
          <li>End-of-service gratuity using the 21-day and 30-day formula.</li>
          <li>Unused annual leave encashment where applicable.</li>
          <li>Notice-period pay if owed by either party.</li>
          <li>Approved bonuses, commissions, or reimbursements if contractually due.</li>
          <li>Lawful documented deductions, such as salary advances, loans, or unreturned company property.</li>
        </ul>
        <p className="text-[#e6e3db] mt-3 leading-relaxed">
          Under Article 53, the employer must pay all end-of-service entitlements within 14 days from the contract termination date.
        </p>
      </article>

      <article>
        <h2 className="text-2xl font-bold text-[#e6e3db] mb-4">Can UAE Gratuity Be Withheld?</h2>
        <blockquote className="rounded-2xl border-l-4 border-[#2dd4a0] bg-[rgba(45,212,160,0.06)] p-4 text-sm leading-relaxed text-[#e6e3db] mb-4">
          Under the current UAE Labour Law framework, an eligible employee&apos;s end-of-service gratuity should not be forfeited simply because of resignation, termination, workplace allegations, or leaving without notice. Deductions should be limited to legally documented amounts owed by the employee, such as salary advances, loans, or unreturned company assets.
        </blockquote>
        <p className="text-[#e6e3db] mb-3 leading-relaxed">
          If an employer reduces or refuses gratuity, ask for a written explanation and a line-by-line final-settlement statement. Do not rely only on verbal explanations. If the deduction is not documented or appears inconsistent with the law, raise the issue through MOHRE.
        </p>
        <p className="text-[#e6e3db] leading-relaxed">
          Employees with less than one full year of continuous service are generally not eligible for statutory gratuity. That is an eligibility rule, not a forfeiture penalty.
        </p>
      </article>

      <article>
        <h2 className="text-2xl font-bold text-[#e6e3db] mb-4">Free Zones — DIFC, ADGM, DEWS and Mainland UAE Rules</h2>
        <p className="text-[#e6e3db] mb-3 leading-relaxed">
          Many UAE free zones follow the mainland gratuity approach, but DIFC and ADGM have separate employment frameworks and savings-plan structures. DIFC employers commonly use the DIFC Employee Workplace Savings plan, known as DEWS, instead of the standard mainland gratuity formula.
        </p>
        <p className="text-[#e6e3db] leading-relaxed">
          If you work in a free zone, check your employment contract, free-zone authority guidance, and HR policy before relying on a mainland gratuity estimate. This calculator is best suited for standard UAE private-sector gratuity estimates under Federal Decree-Law No. 33 of 2021.
        </p>
      </article>

      <article>
        <h2 className="text-2xl font-bold text-[#e6e3db] mb-4">English-Arabic UAE Gratuity Glossary</h2>
        <p className="text-[#e6e3db] mb-4 leading-relaxed">
          These bilingual terms help employees, HR teams, and Arabic-speaking users understand common UAE labour-law and end-of-service benefit phrases.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[#131620]">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.03)]">
                <th className="p-4 text-left text-[#c9a84c] font-bold">English legal term</th>
                <th className="p-4 text-right text-[#c9a84c] font-bold">المصطلح العربي</th>
              </tr>
            </thead>
            <tbody>
              {glossaryTerms.map((term) => (
                <tr key={term.english} className="border-b border-[rgba(255,255,255,0.05)] last:border-b-0">
                  <td className="p-4 text-[#e6e3db] align-middle">{term.english}</td>
                  <td className="p-4 text-[#e6e3db] text-right text-base align-middle" dir="rtl" lang="ar">{term.arabic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>

      <article>
        <h2 className="text-2xl font-bold text-[#e6e3db] mb-4">Cases This Calculator May Not Cover</h2>
        <ul className="list-disc list-outside pl-6 text-[#e6e3db] space-y-2">
          <li>Domestic-worker arrangements or categories governed by separate rules.</li>
          <li>DIFC, ADGM, DEWS, or alternative savings-plan employees.</li>
          <li>Part-time, flexible-work, or unusual working-pattern contracts requiring proportional calculations.</li>
          <li>Disputes over whether allowances were disguised as basic salary.</li>
          <li>Cases involving court judgments, settlement agreements, or documented employer counterclaims.</li>
        </ul>
      </article>

      <section aria-labelledby="official-dispute-hub" className="rounded-[24px] border border-[rgba(201,168,76,0.2)] bg-[rgba(201,168,76,0.05)] p-5 sm:p-6">
        <h2 id="official-dispute-hub" className="text-2xl font-bold text-[#e6e3db] mb-4">Official Resource &amp; Legal Dispute Hub</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <a href="https://www.mohre.gov.ae/" target="_blank" rel="noopener noreferrer" className="block rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#0c0e16] p-4 hover:border-[#c9a84c] transition-colors">
            <span className="block text-[#c9a84c] text-[10px] uppercase tracking-wider font-bold mb-2">Official portal</span>
            <span className="block text-[#e6e3db] font-semibold">MOHRE Official Portal</span>
            <span className="block text-[#87847d] text-sm mt-1">Ministry of Human Resources and Emiratisation</span>
          </a>
          <a href="https://uaelegislation.gov.ae/" target="_blank" rel="noopener noreferrer" className="block rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#0c0e16] p-4 hover:border-[#c9a84c] transition-colors">
            <span className="block text-[#c9a84c] text-[10px] uppercase tracking-wider font-bold mb-2">Official legislation</span>
            <span className="block text-[#e6e3db] font-semibold">UAE Government Legislation Portal</span>
            <span className="block text-[#87847d] text-sm mt-1">Federal laws, resolutions, and legal references</span>
          </a>
        </div>
        <div className="space-y-4">
          <article className="rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[#0c0e16] p-5">
            <h3 className="text-lg font-bold text-[#e6e3db] mb-2">What should you do if your employer delays final settlement?</h3>
            <p className="text-[#e6e3db] leading-relaxed">
              Under Article 53, the employer must pay all end-of-service entitlements within 14 days from the contract termination date. If payment is delayed, request a written settlement statement, keep copies of your contract and salary records, and contact MOHRE if the employer does not correct the issue promptly.
            </p>
          </article>
          <article className="rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[#0c0e16] p-5">
            <h3 className="text-lg font-bold text-[#e6e3db] mb-2">How do you file an official MOHRE complaint?</h3>
            <ol className="list-decimal list-outside pl-5 text-[#e6e3db] space-y-2 leading-relaxed">
              <li>Collect your employment contract, Emirates ID details, salary evidence, resignation or termination notice, and final-settlement calculation.</li>
              <li>Open the MOHRE app or MOHRE portal and choose the labour complaint or labour dispute service.</li>
              <li>Enter employer details, describe the gratuity or final-settlement issue, and upload supporting documents.</li>
              <li>Track the complaint through MOHRE channels and respond to requests for clarification or mediation.</li>
              <li>If the dispute is not resolved administratively, follow MOHRE instructions for escalation through the competent legal process.</li>
            </ol>
          </article>
        </div>
      </section>

      <article>
        <h2 className="text-2xl font-bold text-[#e6e3db] mb-4">Why Use This Free UAE Gratuity Calculator?</h2>
        <ul className="list-disc list-outside pl-6 text-[#e6e3db] space-y-2">
          <li>Uses the 21-day and 30-day UAE gratuity formula for standard private-sector estimates.</li>
          <li>Reflects the 2022 reform parity for resignation and termination on fixed-term contracts.</li>
          <li>Accounts for unpaid leave days and the two-year basic-salary cap.</li>
          <li>Explains the alternative end-of-service savings scheme and 2026 employer transition questions.</li>
          <li>Provides English-Arabic terminology for UAE gratuity, final settlement, and labour disputes.</li>
          <li>Runs in your browser without requiring login, email, or account creation.</li>
        </ul>
      </article>

      <section className="mb-14">
        <h2 className="text-2xl font-bold text-white mb-6">Explore Other QuickCalcs Tools</h2>
        <nav aria-label="Related tools navigation" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {relatedTools.map((tool) => (
            <Link key={tool.href} href={tool.href} className="block p-4 rounded-xl border border-[rgba(255,255,255,0.07)] hover:border-[#c9a84c] hover:shadow-md transition-all">
              <div className="flex items-start gap-3">
                <span className="text-2xl" aria-hidden="true">{tool.icon}</span>
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
