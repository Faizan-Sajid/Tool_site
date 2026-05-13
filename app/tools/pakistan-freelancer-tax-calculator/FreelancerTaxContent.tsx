import React from "react";
import FAQAccordion from "@/components/FreelancerTaxFAQ";
import { ShieldCheck, TrendingUp, AlertCircle, FileText, CheckCircle2 } from "lucide-react";

const faqItems = [
  {
    question: "What is the freelancer tax rate in Pakistan for 2026?",
    answer:
      "For the tax year 2026, the FBR provides a reduced rate of 0.25% for IT freelancers registered with PSEB. Non‑registered IT exporters and technical service providers are taxed at a flat rate of 1% under Section 154S of the Income Tax Ordinance.",
  },
  {
    question: "How can I qualify for the 0.25% reduced tax rate?",
    answer:
      "To qualify for the 0.25% tax rate, you must be registered with the Pakistan Software Export Board (PSEB) and ensure that 80% of your export proceeds are remitted to your Pakistani bank account through formal banking channels.",
  },
  {
    question: "Do I need to be an 'Active Taxpayer' (ATL) to claim these rates?",
    answer:
      "Yes. Being on the Active Taxpayer List (ATL) is mandatory. Non‑filers do not qualify for the fixed export tax regimes and may face double withholding tax rates.",
  },
  {
    question: "Is a Proceeds Realization Certificate (PRC) necessary?",
    answer:
      "Yes, a PRC is legal evidence of your IT export income. It is crucial for tax filing and protecting your 0.25% or 1% tax status during an FBR audit.",
  },
  {
    question: "What is the tax rate for local/domestic freelancer projects?",
    answer:
      "The fixed export rates only apply to foreign income. Local projects for Pakistani clients are taxed under the standard progressive income tax slabs for individuals/business individuals.",
  },
];

export default function FreelancerTaxContent() {
  return (
    <article className="mt-16 text-[#e6e3db] max-w-[860px] mx-auto px-[20px] sm:px-[36px]">
      
      {/* Introduction */}
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
          Pakistan Freelancer Tax Calculator 2026: <span className="text-[#c9a84c]">FBR IT Export Rates Explained</span>
        </h2>
        <p className="text-[#87847d] text-lg leading-relaxed">
          Understanding the <strong className="text-[#e6e3db]">Pakistan Income Tax Calculator 2026</strong> for freelancers is critical for maximizing your earnings. If you bring foreign currency into Pakistan via IT or IT-enabled services (ITeS), the FBR (Federal Board of Revenue) offers highly subsidized fixed tax regimes. However, unlocking these benefits requires strict compliance, particularly ensuring your name is on the <strong>Active Taxpayer List (ATL)</strong>.
        </p>
      </div>

      {/* The 0.25% vs 1% Breakdown */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="w-6 h-6 text-[#2dd4a0]" />
          <h3 className="text-2xl font-bold text-white">FBR Freelancer Tax Rate 2026: 0.25% vs 1%</h3>
        </div>
        <p className="text-[#87847d] mb-6 leading-relaxed">
          The government categorizes IT export earnings based on your registration status. Knowing the difference is the ultimate way on <strong>how to save tax as a freelancer in Pakistan</strong>.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* PSEB Registered */}
          <div className="bg-[rgba(45,212,160,0.05)] border border-[rgba(45,212,160,0.15)] rounded-2xl p-6">
            <h4 className="text-[#2dd4a0] font-bold text-xl mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" /> PSEB Registered
            </h4>
            <div className="text-4xl font-black text-white mb-4">0.25%</div>
            <p className="text-[#87847d] text-sm mb-4">
              The <strong className="text-[#e6e3db]">PSEB registered freelancer tax rate is 0.25%</strong>. This is the lowest possible tier for IT exports.
            </p>
            <ul className="space-y-2 text-sm text-[#87847d]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2dd4a0] mt-0.5 shrink-0" />
                Requires active registration with the Pakistan Software Export Board.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2dd4a0] mt-0.5 shrink-0" />
                Requires filing annual income tax returns.
              </li>
            </ul>
          </div>

          {/* Non-PSEB Registered */}
          <div className="bg-[rgba(201,168,76,0.05)] border border-[rgba(201,168,76,0.15)] rounded-2xl p-6">
            <h4 className="text-[#c9a84c] font-bold text-xl mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" /> Non-PSEB Registered
            </h4>
            <div className="text-4xl font-black text-white mb-4">1.00%</div>
            <p className="text-[#87847d] text-sm mb-4">
              The <strong className="text-[#e6e3db]">freelancer tax for non-PSEB registered</strong> individuals is flat 1% on total foreign remittances.
            </p>
            <ul className="space-y-2 text-sm text-[#87847d]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c9a84c] mt-0.5 shrink-0" />
                Applies automatically to remittances tagged under IT services (e.g., via Fiverr or Upwork).
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c9a84c] mt-0.5 shrink-0" />
                Still highly favorable compared to standard income tax slabs.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 65F & Remittance Rule */}
      <section className="mb-12 bg-[#12141c] border border-[rgba(255,255,255,0.05)] rounded-2xl p-6 sm:p-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <FileText className="w-6 h-6 text-[#c9a84c]" />
          Section 65F & The 80% Foreign Remittance Rule
        </h3>
        <p className="text-[#87847d] leading-relaxed mb-4">
          Under <strong className="text-[#e6e3db]">Section 65F of the Income Tax Ordinance</strong>, the discounted <strong className="text-[#e6e3db]">IT Export Tax Pakistan</strong> rates (0.25% or 1%) are conditional. The most critical condition is the <strong>FBR 80% foreign remittance rule for freelancers</strong>.
        </p>
        <div className="bg-[rgba(255,255,255,0.03)] p-4 rounded-lg border border-[rgba(255,255,255,0.05)] text-sm text-[#a3a099] mb-4">
          <strong>The Rule:</strong> To qualify for the fixed withholding tax on exports, at least 80% of your total business receipts must be brought into Pakistan through formal banking channels (foreign exchange).
        </div>
        <p className="text-[#87847d] leading-relaxed text-sm">
          If you earn abroad but keep the money in foreign accounts (like a USD Payoneer account) without remitting it to a Pakistani bank, those funds lose the protection of the IT export tax regime and may be subjected to standard income tax slabs if audited.
        </p>
      </section>

      {/* Operational Guide */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-white mb-6">How to Use the Freelancer Tax Calculator</h3>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-[rgba(201,168,76,0.1)] text-[#c9a84c] flex items-center justify-center font-bold shrink-0">1</div>
            <div>
              <h4 className="font-bold text-[#e6e3db]">Enter Gross Monthly Income</h4>
              <p className="text-[#87847d] text-sm">Input your total earnings transferred to your Pakistani bank account. E.g., Your <strong className="text-[#e6e3db]">tax on Fiverr earnings in Pakistan 2026</strong> is calculated on the amount that lands in your local account.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-[rgba(201,168,76,0.1)] text-[#c9a84c] flex items-center justify-center font-bold shrink-0">2</div>
            <div>
              <h4 className="font-bold text-[#e6e3db]">Select PSEB Status</h4>
              <p className="text-[#87847d] text-sm">Toggle between Registered (0.25%) or Non-Registered (1%) to see your exact tax liability.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-[rgba(201,168,76,0.1)] text-[#c9a84c] flex items-center justify-center font-bold shrink-0">3</div>
            <div>
              <h4 className="font-bold text-[#e6e3db]">Analyze Take-Home Pay</h4>
              <p className="text-[#87847d] text-sm">The calculator instantly deducts the final fixed tax, showing your exact net income in PKR.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRC Compliance Steps */}
      <section className="mb-12 bg-gradient-to-br from-[rgba(45,212,160,0.05)] to-transparent border border-[rgba(45,212,160,0.1)] rounded-2xl p-6 sm:p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Securing Your Proceeds Realization Certificate (PRC)</h3>
        <p className="text-[#87847d] leading-relaxed mb-6">
          To prove your income is foreign-sourced IT exports to the FBR, you must obtain a <strong>Proceeds Realization Certificate (PRC)</strong>.
        </p>
        <ul className="space-y-3 text-sm text-[#87847d]">
          <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2dd4a0]" /> Withdraw funds from Payoneer/Wise/Upwork directly to your local Pakistani bank.</li>
          <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2dd4a0]" /> Ensure the bank tags the incoming remittance with proper IT Export codes (e.g., Code 9062).</li>
          <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2dd4a0]" /> Request the PRC electronically from your bank's portal or branch.</li>
          <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2dd4a0]" /> Keep these PRCs safe; your tax consultant will need them when filing your annual return.</li>
        </ul>
      </section>

      {/* FAQ Section */}
      <FAQAccordion items={faqItems} />

    </article>
  );
}
