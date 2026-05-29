import React from "react";
import Link from "next/link";
import FAQAccordion from "@/components/FreelancerTaxFAQ";
import { ShieldCheck, TrendingUp, AlertCircle, FileText, CheckCircle2, XCircle } from "lucide-react";

const faqItems = [
  {
    question: "What is the freelancer tax rate in Pakistan for 2026?",
    answer:
      "For the tax year 2026, FBR applies three rates based on your status. PSEB-registered freelancers pay 0.25% on foreign remittances. Non-PSEB filers pay 1% under Section 154S of the Income Tax Ordinance. Non-filers pay 2% — double the standard rate. These are fixed withholding tax rates on IT export income, not standard income tax slabs.",
  },
  {
    question: "How can I qualify for the 0.25% reduced tax rate?",
    answer:
      "To qualify for the 0.25% PSEB rate, you need two things: first, active registration with the Pakistan Software Export Board (PSEB) — you can apply at pseb.org.pk. Second, you must be on the FBR Active Taxpayer List (ATL) by filing your annual income tax return. Additionally, at least 80% of your total business receipts must come into Pakistan through formal banking channels (foreign exchange remittance).",
  },
  {
    question: "Do I need to be an Active Taxpayer (ATL) to get these reduced rates?",
    answer:
      "Yes, being on the Active Taxpayer List (ATL) is mandatory for both the 0.25% and 1% rates. Non-filers are automatically charged double the standard withholding rate — so a non-filer who would otherwise qualify for 1% ends up paying 2%. You can check your ATL status on the FBR Iris portal at iris.fbr.gov.pk.",
  },
  {
    question: "Is a Proceeds Realization Certificate (PRC) necessary?",
    answer:
      "Yes. A Proceeds Realization Certificate (PRC) is the legal document that proves your income is foreign-sourced IT export earnings. Without it, FBR cannot verify your export status during an audit. To get a PRC, withdraw your Payoneer, Wise, or Upwork funds directly to your Pakistani bank account and ensure the bank tags it with IT Export Code 9062. Then request the PRC from your bank's portal or branch. Keep all PRCs — your tax consultant will need them at filing time.",
  },
  {
    question: "What is the tax rate for local or domestic freelance projects?",
    answer:
      "The fixed 0.25% and 1% rates only apply to foreign income remitted to Pakistan. Local projects for Pakistani clients are taxed under the standard FBR progressive income tax slabs. For example, income up to PKR 600,000 per year is exempt. Income between PKR 600,001 and PKR 1,200,000 is taxed at 5%. Above PKR 1,200,000 it goes to 15% and higher. This is significantly more than the IT export rates.",
  },
  {
    question: "What is the tax on Upwork or Fiverr income in Pakistan 2026?",
    answer:
      "Upwork and Fiverr income qualifies as IT export income if the money comes into your Pakistani bank account through proper channels. If you are PSEB-registered, tax is 0.25% of the remitted amount. If you are a regular filer (non-PSEB), it is 1%. Non-filers pay 2%. For example, if you earn PKR 150,000/month from Upwork and are a non-PSEB filer, your monthly tax is PKR 1,500. Use the calculator above to get your exact number.",
  },
  {
    question: "Is Payoneer or Wise income taxable in Pakistan?",
    answer:
      "Yes, income received through Payoneer or Wise is taxable in Pakistan once it enters the country. The key is how you move the money. Withdraw directly from Payoneer or Wise to your Pakistani bank account — do not leave it sitting in a foreign wallet. Once the bank receives the remittance and tags it correctly as IT exports (Code 9062), you can get a PRC and apply the reduced tax rates of 0.25% or 1%.",
  },
  {
    question: "What happens if I do not file taxes as a freelancer?",
    answer:
      "Non-filers face serious consequences. First, your tax rate doubles — instead of 1%, you pay 2% on every foreign remittance. Second, you are excluded from the Active Taxpayer List which banks and government portals check. Third, FBR can issue notices and audit your income retrospectively. If you have significant undeclared income, penalties and surcharges apply. Filing your annual return costs very little compared to the savings from reduced withholding rates.",
  },
  {
    question: "What is Section 154S and how does it affect freelancers?",
    answer:
      "Section 154S of the Income Tax Ordinance is the legal basis for the reduced IT export tax rates. It makes the withholding tax on IT export remittances a final tax — meaning once deducted by the bank, you do not owe additional income tax on that amount under the normal slabs. This is the key benefit for freelancers. The bank deducts the tax automatically when your remittance arrives, and you report it in your annual return.",
  },
  {
    question: "How do I register with PSEB to get the 0.25% rate?",
    answer:
      "Visit pseb.org.pk and apply for freelancer registration. You will need your CNIC, a bank account, and proof of IT-related work such as a Fiverr or Upwork profile or client contracts. Once registered, update your status with your bank so future remittances are processed at the 0.25% rate. PSEB registration is free for individual freelancers.",
  },
];

export default function FreelancerTaxContent() {
  return (
    <article className="mt-12 text-[#e6e3db] max-w-[860px] mx-auto px-[20px] sm:px-[36px]">

      {/* ── SECTION 1: Introduction ── */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-[#e6e3db] mb-4 flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          Pakistan Freelancer Tax 2026 — What You Actually Need to Know
        </h2>
        <div className="text-sm leading-relaxed space-y-4 text-[#87847d]">
          <p>
            If you are freelancing in Pakistan and earning in foreign currency — whether through Upwork, Fiverr, direct clients, or any other platform — you fall under a special FBR tax regime designed specifically for IT export income. The good news is that this regime is far more generous than the standard income tax slabs most salaried Pakistanis pay.
          </p>
          <p>
            The <strong className="text-[#e6e3db]">Pakistan Income Tax Calculator 2026</strong> above is built on the current FBR rules under Section 154S of the Income Tax Ordinance. It covers three situations: PSEB-registered freelancers (0.25%), non-PSEB filers (1%), and non-filers (2%). Enter your income, select your status, and get your exact tax liability instantly — no login, no signup.
          </p>
          <p>
            Below, we explain how the system works, how each rate applies, and what you need to do to qualify for the lowest possible tax as a Pakistani freelancer in 2026.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: Three Rate Tiers ── */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-[#e6e3db] mb-4 flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          FBR Freelancer Tax Rates 2026 — All Three Tiers Explained
        </h2>
        <p className="text-sm text-[#87847d] mb-6 leading-relaxed">
          Pakistan's FBR categorizes freelance IT export income into three tiers based on your registration and filer status. Knowing which tier you fall into is the single most important thing for managing your taxes correctly.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {/* PSEB */}
          <div className="bg-[rgba(45,212,160,0.05)] border border-[rgba(45,212,160,0.15)] rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="w-5 h-5 text-[#2dd4a0]" />
              <h3 className="text-[#2dd4a0] font-bold text-sm">PSEB Registered</h3>
            </div>
            <div className="text-4xl font-black text-white mb-3">0.25%</div>
            <p className="text-[#87847d] text-xs leading-relaxed">
              Lowest rate available. Requires active PSEB registration and ATL status. Applied to total foreign remittance received in Pakistani bank account.
            </p>
          </div>

          {/* Non-PSEB Filer */}
          <div className="bg-[rgba(201,168,76,0.05)] border border-[rgba(201,168,76,0.15)] rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-[#c9a84c]" />
              <h3 className="text-[#c9a84c] font-bold text-sm">Non-PSEB Filer</h3>
            </div>
            <div className="text-4xl font-black text-white mb-3">1%</div>
            <p className="text-[#87847d] text-xs leading-relaxed">
              Standard IT export rate under Section 154S. Must be on FBR Active Taxpayer List. No PSEB registration needed for this tier.
            </p>
          </div>

          {/* Non-Filer */}
          <div className="bg-[rgba(239,68,68,0.05)] border border-[rgba(239,68,68,0.15)] rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="w-5 h-5 text-red-400" />
              <h3 className="text-red-400 font-bold text-sm">Non-Filer</h3>
            </div>
            <div className="text-4xl font-black text-white mb-3">2%</div>
            <p className="text-[#87847d] text-xs leading-relaxed">
              Double penalty rate for those not on ATL. Banks automatically deduct at this rate if you are not on the Active Taxpayer List.
            </p>
          </div>
        </div>

        {/* Rate comparison table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.07)]">
                <th className="text-left py-3 pr-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Status</th>
                <th className="text-center py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Tax Rate</th>
                <th className="text-center py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">ATL Required</th>
                <th className="text-center py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">PSEB Required</th>
                <th className="text-center py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Legal Basis</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[rgba(255,255,255,0.03)]">
                <td className="py-3 pr-4 text-[#e6e3db] font-medium">PSEB Registered Filer</td>
                <td className="text-center px-4 text-[#2dd4a0] font-bold">0.25%</td>
                <td className="text-center px-4 text-[#2dd4a0]">✓ Yes</td>
                <td className="text-center px-4 text-[#2dd4a0]">✓ Yes</td>
                <td className="text-center px-4 text-[#87847d]">Section 154S</td>
              </tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]">
                <td className="py-3 pr-4 text-[#e6e3db] font-medium">Non-PSEB Active Filer</td>
                <td className="text-center px-4 text-[#c9a84c] font-bold">1%</td>
                <td className="text-center px-4 text-[#2dd4a0]">✓ Yes</td>
                <td className="text-center px-4 text-[#3e3c38]">✗ No</td>
                <td className="text-center px-4 text-[#87847d]">Section 154S</td>
              </tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]">
                <td className="py-3 pr-4 text-[#e6e3db] font-medium">Non-Filer</td>
                <td className="text-center px-4 text-red-400 font-bold">2%</td>
                <td className="text-center px-4 text-red-400">✗ Not on ATL</td>
                <td className="text-center px-4 text-[#3e3c38]">✗ No</td>
                <td className="text-center px-4 text-[#87847d]">Penalty Rate</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SECTION 3: Worked Examples ── */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-[#e6e3db] mb-4 flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          Worked Examples — Freelancer Tax Calculation Pakistan 2026
        </h2>
        <p className="text-sm text-[#87847d] mb-6 leading-relaxed">
          Here are three real-world examples showing exactly how much tax applies to a freelancer earning PKR 150,000 per month from Upwork or Fiverr, depending on their registration status.
        </p>

        <div className="space-y-4">
          {/* Example 1 — PSEB */}
          <div className="bg-[rgba(45,212,160,0.04)] border border-[rgba(45,212,160,0.12)] rounded-[14px] p-5">
            <p className="text-[#2dd4a0] text-xs font-bold mb-4 uppercase tracking-wider">Example 1 — PSEB Registered Filer</p>
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between"><span className="text-[#87847d]">Monthly Remittance (Upwork/Fiverr)</span><span className="text-[#e6e3db]">PKR 150,000</span></div>
              <div className="flex justify-between"><span className="text-[#87847d]">Annual Income</span><span className="text-[#e6e3db]">PKR 1,800,000</span></div>
              <div className="flex justify-between"><span className="text-[#87847d]">Tax Rate (PSEB)</span><span className="text-[#2dd4a0] font-bold">0.25%</span></div>
              <div className="flex justify-between border-t border-[rgba(255,255,255,0.07)] pt-2 mt-2">
                <span className="text-[#87847d]">Monthly Tax Deducted</span><span className="text-[#2dd4a0] font-bold">PKR 375</span>
              </div>
              <div className="flex justify-between"><span className="text-[#87847d]">Annual Tax</span><span className="text-[#2dd4a0] font-bold">PKR 4,500</span></div>
              <div className="flex justify-between font-bold"><span className="text-[#e6e3db]">Net Monthly Take-Home</span><span className="text-[#e6e3db]">PKR 149,625</span></div>
            </div>
          </div>

          {/* Example 2 — Non-PSEB */}
          <div className="bg-[rgba(201,168,76,0.04)] border border-[rgba(201,168,76,0.12)] rounded-[14px] p-5">
            <p className="text-[#c9a84c] text-xs font-bold mb-4 uppercase tracking-wider">Example 2 — Non-PSEB Active Filer</p>
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between"><span className="text-[#87847d]">Monthly Remittance (Upwork/Fiverr)</span><span className="text-[#e6e3db]">PKR 150,000</span></div>
              <div className="flex justify-between"><span className="text-[#87847d]">Annual Income</span><span className="text-[#e6e3db]">PKR 1,800,000</span></div>
              <div className="flex justify-between"><span className="text-[#87847d]">Tax Rate (Non-PSEB Filer)</span><span className="text-[#c9a84c] font-bold">1%</span></div>
              <div className="flex justify-between border-t border-[rgba(255,255,255,0.07)] pt-2 mt-2">
                <span className="text-[#87847d]">Monthly Tax Deducted</span><span className="text-[#c9a84c] font-bold">PKR 1,500</span>
              </div>
              <div className="flex justify-between"><span className="text-[#87847d]">Annual Tax</span><span className="text-[#c9a84c] font-bold">PKR 18,000</span></div>
              <div className="flex justify-between font-bold"><span className="text-[#e6e3db]">Net Monthly Take-Home</span><span className="text-[#e6e3db]">PKR 148,500</span></div>
            </div>
          </div>

          {/* Example 3 — Non-Filer */}
          <div className="bg-[rgba(239,68,68,0.04)] border border-[rgba(239,68,68,0.12)] rounded-[14px] p-5">
            <p className="text-red-400 text-xs font-bold mb-4 uppercase tracking-wider">Example 3 — Non-Filer (Penalty Rate)</p>
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between"><span className="text-[#87847d]">Monthly Remittance (Upwork/Fiverr)</span><span className="text-[#e6e3db]">PKR 150,000</span></div>
              <div className="flex justify-between"><span className="text-[#87847d]">Annual Income</span><span className="text-[#e6e3db]">PKR 1,800,000</span></div>
              <div className="flex justify-between"><span className="text-[#87847d]">Tax Rate (Non-Filer)</span><span className="text-red-400 font-bold">2%</span></div>
              <div className="flex justify-between border-t border-[rgba(255,255,255,0.07)] pt-2 mt-2">
                <span className="text-[#87847d]">Monthly Tax Deducted</span><span className="text-red-400 font-bold">PKR 3,000</span>
              </div>
              <div className="flex justify-between"><span className="text-[#87847d]">Annual Tax</span><span className="text-red-400 font-bold">PKR 36,000</span></div>
              <div className="flex justify-between font-bold"><span className="text-[#e6e3db]">Net Monthly Take-Home</span><span className="text-[#e6e3db]">PKR 147,000</span></div>
            </div>
            <p className="text-xs text-red-400 mt-3">⚠ Filing a tax return saves PKR 31,500 per year vs non-filer status at this income level.</p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Section 65F & 80% Rule ── */}
      <section className="mb-14 bg-[#12141c] border border-[rgba(255,255,255,0.05)] rounded-2xl p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <FileText className="w-6 h-6 text-[#c9a84c] flex-shrink-0" />
          Section 65F and the 80% Foreign Remittance Rule
        </h2>
        <div className="text-sm leading-relaxed space-y-4 text-[#87847d]">
          <p>
            Under <strong className="text-[#e6e3db]">Section 65F of the Income Tax Ordinance</strong>, the reduced IT export tax rates — 0.25% and 1% — are conditional. The condition that trips up most freelancers is the <strong className="text-[#e6e3db]">80% foreign remittance rule</strong>.
          </p>
          <div className="bg-[rgba(255,255,255,0.03)] p-4 rounded-lg border border-[rgba(255,255,255,0.05)]">
            <strong className="text-[#e6e3db]">The Rule:</strong> At least 80% of your total business receipts must be brought into Pakistan through formal banking channels — meaning your Pakistani bank account, not a foreign wallet like Payoneer USD balance.
          </div>
          <p>
            If you earn PKR 200,000 from Upwork but only transfer PKR 100,000 to your Pakistani bank and keep the rest in your Payoneer account, only the remitted portion qualifies for the IT export tax rate. The remaining amount — if found during an audit — may be taxed under standard slabs.
          </p>
          <p>
            The practical advice: withdraw your full earnings to your Pakistani bank account every month and ensure the transaction is tagged under IT Export Code 9062. This creates a clean paper trail that protects your reduced tax status.
          </p>
        </div>
      </section>

      {/* ── SECTION 5: Fiverr / Upwork Platform Guide ── */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-[#e6e3db] mb-4 flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          Tax on Fiverr, Upwork, and Direct Client Income — Pakistan 2026
        </h2>
        <div className="text-sm leading-relaxed space-y-4 text-[#87847d]">
          <p>
            Whether you earn through Fiverr, Upwork, Freelancer.com, direct PayPal transfers, or Wise from a foreign client — the tax treatment is the same as long as the money enters Pakistan through your bank account. FBR does not distinguish between platforms. What matters is the nature of the income (IT services) and the channel through which it arrives.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <div className="bg-[rgba(201,168,76,0.04)] border border-[rgba(201,168,76,0.12)] rounded-[14px] p-4">
              <p className="text-[#c9a84c] text-xs font-bold mb-3 uppercase tracking-wider">✓ Qualifies for IT Export Rate</p>
              <ul className="space-y-2 text-xs">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#2dd4a0] mt-0.5 shrink-0" />Upwork earnings remitted to Pakistani bank</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#2dd4a0] mt-0.5 shrink-0" />Fiverr withdrawals via Payoneer → Pakistani bank</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#2dd4a0] mt-0.5 shrink-0" />Wise transfers from foreign clients to PKR account</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#2dd4a0] mt-0.5 shrink-0" />Direct bank wire transfers from international clients</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#2dd4a0] mt-0.5 shrink-0" />Amazon or YouTube earnings remitted formally</li>
              </ul>
            </div>
            <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.07)] rounded-[14px] p-4">
              <p className="text-[#87847d] text-xs font-bold mb-3 uppercase tracking-wider">✗ Does Not Qualify</p>
              <ul className="space-y-2 text-xs">
                <li className="flex items-start gap-2"><XCircle className="w-3.5 h-3.5 text-red-400 mt-0.5 shrink-0" />Earnings kept in Payoneer USD balance (not remitted)</li>
                <li className="flex items-start gap-2"><XCircle className="w-3.5 h-3.5 text-red-400 mt-0.5 shrink-0" />Hawala or informal money transfers</li>
                <li className="flex items-start gap-2"><XCircle className="w-3.5 h-3.5 text-red-400 mt-0.5 shrink-0" />Local Pakistani client payments (standard slabs apply)</li>
                <li className="flex items-start gap-2"><XCircle className="w-3.5 h-3.5 text-red-400 mt-0.5 shrink-0" />Cash payments from overseas contacts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: How to Become ATL Filer ── */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-[#e6e3db] mb-4 flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          How to Become an Active Taxpayer (ATL) — Step by Step
        </h2>
        <p className="text-sm text-[#87847d] mb-6 leading-relaxed">
          Getting on the FBR Active Taxpayer List is the fastest way to cut your freelancer tax rate from 2% to 1%. If you add PSEB registration, it drops further to 0.25%. Here is how to do both.
        </p>

        <div className="space-y-4">
          {[
            {
              step: "1",
              title: "Register on FBR Iris Portal",
              body: "Go to iris.fbr.gov.pk and create an account using your CNIC. You will receive an OTP on your registered mobile number. Once logged in, apply for a National Tax Number (NTN) if you do not have one already.",
            },
            {
              step: "2",
              title: "File Your Annual Income Tax Return",
              body: "In Iris, go to Declaration → Normal Return. Select the relevant tax year (July 1 to June 30). Declare your foreign freelance income under the IT exports category. Even if your income is below the taxable threshold, filing makes you an active taxpayer.",
            },
            {
              step: "3",
              title: "Check ATL Status",
              body: "After filing, your name appears on the Active Taxpayer List within a few days. You can verify at fbr.gov.pk/atl/check. Once listed, your bank automatically applies the reduced withholding rate on future remittances.",
            },
            {
              step: "4",
              title: "Register with PSEB (Optional — for 0.25% rate)",
              body: "Visit pseb.org.pk and apply under the freelancer registration category. Provide your CNIC, bank account details, and evidence of IT work. PSEB registration is free and opens the door to the lowest 0.25% rate.",
            },
            {
              step: "5",
              title: "Inform Your Bank",
              body: "Visit your bank branch or update your profile through the bank's online portal. Inform them of your ATL status and PSEB registration. Ensure remittances are tagged with IT Export Code 9062 so they receive the correct tax treatment.",
            },
          ].map((item) => (
            <div key={item.step} className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[rgba(201,168,76,0.12)] border border-[rgba(201,168,76,0.3)] text-[#c9a84c] text-xs font-bold flex items-center justify-center">
                {item.step}
              </span>
              <div>
                <p className="font-bold text-[#e6e3db] mb-1 text-sm">{item.title}</p>
                <p className="text-sm text-[#87847d] leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 7: PRC Guide ── */}
      <section className="mb-14 bg-gradient-to-br from-[rgba(45,212,160,0.05)] to-transparent border border-[rgba(45,212,160,0.1)] rounded-2xl p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">
          Proceeds Realization Certificate (PRC) — Why It Matters
        </h2>
        <div className="text-sm leading-relaxed space-y-4 text-[#87847d]">
          <p>
            A Proceeds Realization Certificate (PRC) is the official document from your bank confirming that a specific amount arrived as foreign remittance for IT services. It is your legal proof during an FBR audit. Without it, FBR cannot confirm your income qualifies for the reduced rates, and you risk being taxed under standard slabs.
          </p>
          <ul className="space-y-3">
            {[
              "Withdraw your Payoneer, Wise, or Upwork earnings directly to your Pakistani bank account — not to a foreign wallet.",
              "Ask your bank to tag the remittance under IT Export Code 9062 at the time of receipt.",
              "Request a PRC for each transaction from your bank's digital portal or branch. Most major banks issue them within 24–48 hours.",
              "Store all PRCs digitally and share them with your tax consultant when filing your annual return.",
              "Keep records for at least 6 years — FBR can audit retrospectively.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#2dd4a0] mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── SECTION 8: Local vs Export Income ── */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-[#e6e3db] mb-4 flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          Local Freelance Income vs IT Export Income — Tax Difference
        </h2>
        <div className="text-sm leading-relaxed space-y-4 text-[#87847d]">
          <p>
            The IT export tax rates (0.25% and 1%) only apply to foreign-sourced income that enters Pakistan through formal banking channels. If you also do local work for Pakistani clients, that income is taxed under the standard FBR progressive slabs.
          </p>
        </div>

        <div className="overflow-x-auto mt-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.07)]">
                <th className="text-left py-3 pr-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Annual Income (PKR)</th>
                <th className="text-center py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Standard Slab Tax</th>
                <th className="text-center py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">IT Export (Non-PSEB)</th>
                <th className="text-center py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">IT Export (PSEB)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { income: "Up to 600,000", slab: "0%", nonPseb: "1%", pseb: "0.25%" },
                { income: "600,001 – 1,200,000", slab: "5%", nonPseb: "1%", pseb: "0.25%" },
                { income: "1,200,001 – 2,400,000", slab: "15%", nonPseb: "1%", pseb: "0.25%" },
                { income: "2,400,001 – 3,600,000", slab: "25%", nonPseb: "1%", pseb: "0.25%" },
                { income: "Above 3,600,000", slab: "35%", nonPseb: "1%", pseb: "0.25%" },
              ].map((row) => (
                <tr key={row.income} className="border-b border-[rgba(255,255,255,0.03)]">
                  <td className="py-3 pr-4 text-[#87847d]">{row.income}</td>
                  <td className="text-center px-4 text-red-400 font-bold">{row.slab}</td>
                  <td className="text-center px-4 text-[#c9a84c] font-bold">{row.nonPseb}</td>
                  <td className="text-center px-4 text-[#2dd4a0] font-bold">{row.pseb}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-[#3e3c38] mt-3">
          * Standard tax slabs for individual filers (Tax Year 2026). IT export rates are final tax — no additional slab tax applies on that income.
        </p>
      </section>

      {/* ── SECTION 9: Why Use This Calculator ── */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-[#e6e3db] mb-6 flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          Why Use This Free FBR Freelancer Tax Calculator?
        </h2>
        <ul className="space-y-3 text-sm">
          {[
            { title: "All three FBR rates covered:", body: "0.25% PSEB, 1% non-PSEB filer, and 2% non-filer — switch between them in one click." },
            { title: "Monthly and yearly modes:", body: "Enter your income in whatever frequency you think in and get results for both periods instantly." },
            { title: "Net take-home calculation:", body: "See exactly how much lands in your account after tax is deducted — not just the tax amount." },
            { title: "Updated for 2026:", body: "Built on current FBR rules under Section 154S and the Budget 2025-26 provisions." },
            { title: "100% private:", body: "All calculations run in your browser. No data is stored or sent to any server." },
            { title: "Free forever:", body: "No login, no signup, no paywall. Use it as many times as you need." },
          ].map((item) => (
            <li key={item.title} className="flex gap-3">
              <span className="text-[#c9a84c] flex-shrink-0 mt-0.5">✓</span>
              <span><strong className="text-[#e6e3db]">{item.title}</strong> {item.body}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── SECTION 10: Internal Links ── */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-white mb-6">Explore Other QuickCalcs Tools</h2>
        <nav aria-label="Related tools navigation" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { href: "/tools/ksa-gosi-calculator", icon: "🛡️", title: "Saudi GOSI Calculator", desc: "Calculate GOSI contributions for Saudi nationals and expats. Updated 2026 KSA rates." },
            { href: "/tools/uae-gratuity-calculator", icon: "🧮", title: "UAE Gratuity Calculator", desc: "End-of-service benefits as per UAE Labour Law 2026. Limited and unlimited contracts." },
            { href: "/tools/zakat-calculator", icon: "☪️", title: "Zakat Calculator", desc: "Calculate Zakat on savings, gold, investments and business assets. Nisab auto-updated." },
            { href: "/tools/gold-calculator", icon: "💰", title: "Gold Price Calculator", desc: "Live 24K, 22K, 21K, 18K rates for UAE and GCC. Includes Zakat and unit converter." },
            { href: "/tools/malaysia-epf-calculator", icon: "🇲🇾", title: "Malaysia EPF Calculator", desc: "Calculate EPF contributions for employees and employers in Malaysia. Includes 2026 contribution rates and take-home salary breakdown." },
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

      {/* ── FAQ ── */}
      <FAQAccordion items={faqItems} />

    </article>
  );
}