import Link from "next/link";

const FreelancerTaxCard = () => (
  <Link
    href="/tools/pakistan-freelancer-tax-calculator"
    className="group block bg-[#0c0e16] border border-[rgba(255,255,255,0.07)] rounded-[10px] p-6 hover:border-[rgba(201,168,76,0.3)] hover:shadow-[0_0_20px_rgba(201,168,76,0.08)] transition-all"
  >
    <div className="flex items-center gap-4">
      {/* Emoji in gold‑tinted circle */}
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(201,168,76,0.11)] border border-[rgba(201,168,76,0.2)] text-[#c9a84c] text-xl">
        🧾
      </span>
      <div>
        <h3 className="text-[#e6e3db] font-semibold text-lg">Pakistan Freelancer Tax Calculator</h3>
        <p className="text-[rgba(230,227,219,0.6)] text-sm mt-1">
          Calculate your FBR income tax as a freelancer. Supports Upwork, Fiverr & direct clients. Foreign remittance = 0% tax.
        </p>
        {/* Badges */}
        <div className="flex gap-2 flex-wrap mt-3">
          <span className="bg-[rgba(201,168,76,0.11)] text-[#c9a84c] border border-[rgba(201,168,76,0.2)] text-xs px-2 py-0.5 rounded-full">
            PKR · Finance
          </span>
          <span className="bg-[rgba(201,168,76,0.11)] text-[#c9a84c] border border-[rgba(201,168,76,0.2)] text-xs px-2 py-0.5 rounded-full">
            New 2026
          </span>
        </div>
        {/* Keyword tags */}
        <div className="flex gap-2 flex-wrap mt-3">
          <span className="bg-[rgba(201,168,76,0.11)] text-[#c9a84c] border border-[rgba(201,168,76,0.2)] text-xs px-2 py-0.5 rounded-full">
            freelancer tax calculator pakistan
          </span>
          <span className="bg-[rgba(201,168,76,0.11)] text-[#c9a84c] border border-[rgba(201,168,76,0.2)] text-xs px-2 py-0.5 rounded-full">
            upwork income tax pkr
          </span>
          <span className="bg-[rgba(201,168,76,0.11)] text-[#c9a84c] border border-[rgba(201,168,76,0.2)] text-xs px-2 py-0.5 rounded-full">
            FBR tax for freelancers
          </span>
          <span className="bg-[rgba(201,168,76,0.11)] text-[#c9a84c] border border-[rgba(201,168,76,0.2)] text-xs px-2 py-0.5 rounded-full">
            foreign remittance tax 0%
          </span>
        </div>
      </div>
    </div>
    {/* Arrow on hover */}
    <span className="absolute right-4 bottom-4 text-[#c9a84c] opacity-0 transition-opacity group-hover:opacity-100 text-xl">
      →
    </span>
  </Link>
);

export default FreelancerTaxCard;
