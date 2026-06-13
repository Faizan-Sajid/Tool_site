import Link from "next/link";
import React from "react";

export default function HajjUmrahContent() {
  return (
    <section className="max-w-[860px] px-[20px] sm:px-[36px] py-[48px] space-y-16 text-[#87847d]">
      <div className="rounded-2xl border border-[rgba(201,168,76,0.18)] bg-[#111827] p-5 text-sm leading-relaxed space-y-4">
        <p className="text-[#e6e3db] font-semibold">Last updated: June 2026</p>
        <p>
          Cost estimates are based on 2026 Nusuk platform pricing, licensed operator packages, and official announcements from the Saudi Ministry of Hajj and Umrah. Prices shown are indicative ranges — final costs depend on booking date, package availability, hotel distance from Haram, and currency exchange rates at time of payment.
        </p>
        <p>
          Always confirm final pricing with a licensed Hajj/Umrah operator or directly through the official Nusuk platform.
        </p>
        <div>
          <p className="text-[#e6e3db] font-medium mb-2">Official sources:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Saudi Ministry of Hajj and Umrah:{" "}
              <a href="https://www.haj.gov.sa/en" target="_blank" rel="nofollow noopener noreferrer" className="text-[#c9a84c] hover:underline">
                haj.gov.sa
              </a>
            </li>
            <li>
              Official Nusuk platform:{" "}
              <a href="https://www.nusuk.sa" target="_blank" rel="nofollow noopener noreferrer" className="text-[#c9a84c] hover:underline">
                nusuk.sa
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* "Updated with 2026 rates" badge */}
      <div className="flex justify-end -mt-12">
        <span className="text-xs bg-[#1e1c17] px-3 py-1 rounded-full text-[#87847d] border border-[rgba(255,255,255,0.07)]">
          📅 Updated with 2026 rates – June 2026
        </span>
      </div>

      {/* AI OVERVIEW / FEATURED SNIPPET BOX — FOR LLM EXTRACTION */}
      <div className="hajj-quick-answer rounded-[14px] border border-[rgba(201,168,76,0.2)] bg-[rgba(201,168,76,0.04)] p-5 text-sm leading-relaxed">
        <p className="text-[#c9a84c] text-xs font-bold mb-3 uppercase tracking-wider">
          Hajj & Umrah Quick Answers — 2026
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="font-semibold text-[#e6e3db] mb-1">🕋 Hajj Cost 2026 (per person)</p>
            <ul className="list-disc pl-5 space-y-1 text-[#e6e3db]">
              <li><span className="font-semibold text-[#e6e3db]">Pakistan:</span> PKR 1,375,000–3,500,000+</li>
              <li><span className="font-semibold text-[#e6e3db]">India:</span> INR 4,00,000–10,00,000+</li>
              <li><span className="font-semibold text-[#e6e3db]">UK:</span> £4,500–£12,000+</li>
              <li><span className="font-semibold text-[#e6e3db]">USA:</span> $11,000–$15,000+</li>
              <li><span className="font-semibold text-[#e6e3db]">UAE/GCC:</span> AED 18,000–40,000+</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-[#e6e3db] mb-1">🕌 Umrah Cost 2026 (off-peak, 7-10 nights)</p>
            <ul className="list-disc pl-5 space-y-1 text-[#e6e3db]">
              <li><span className="font-semibold text-[#e6e3db]">Pakistan:</span> PKR 220,000–300,000</li>
              <li><span className="font-semibold text-[#e6e3db]">India:</span> INR 85,000–1,50,000</li>
              <li><span className="font-semibold text-[#e6e3db]">UK:</span> £1,500–£3,000</li>
              <li><span className="font-semibold text-[#e6e3db]">USA:</span> $2,000–$4,000</li>
              <li><span className="font-semibold text-[#e6e3db]">Cheapest time:</span> Rajab/Shaban (Jan-Mar, 30-50% lower than Ramadan)</li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-[#3e3c38] mt-3">Source: Nusuk platform 2026, licensed operator data. Prices vary by hotel distance and season.</p>
      </div>

      <div>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          Hajj Price 2026 by Country — Complete Cost Breakdown
        </h2>
        <div className="text-sm leading-relaxed space-y-4 mb-6">
          <p>
            This is the most common question — and the most variable. The <span className="font-semibold text-[#e6e3db]">hajj price</span> in 2026 ranges from roughly PKR 1,375,000 from Pakistan to over £12,000 from the UK, depending on package tier, hotel proximity to Haram, and whether flights are included.
          </p>
          <p>
            The table below gives realistic estimates by country for 2026. These reflect actual licensed operator pricing and Nusuk platform packages — not guesswork.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.07)]">
                <th className="text-left py-3 pr-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Country</th>
                <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Economy Package</th>
                <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Standard Package</th>
                <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Premium Package</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">🇵🇰 Pakistan</td><td className="px-4 text-[#c9a84c]">PKR 1.4M–1.8M</td><td className="px-4 text-[#c9a84c]">PKR 2.0M–2.8M</td><td className="px-4 text-[#c9a84c]">PKR 3.5M+</td></tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">🇮🇳 India</td><td className="px-4 text-[#c9a84c]">INR 4,00,000–5,50,000</td><td className="px-4 text-[#c9a84c]">INR 6,00,000–8,00,000</td><td className="px-4 text-[#c9a84c]">INR 10,00,000+</td></tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">🇧🇩 Bangladesh</td><td className="px-4 text-[#c9a84c]">BDT 7,00,000–9,00,000</td><td className="px-4 text-[#c9a84c]">BDT 10,00,000–13,00,000</td><td className="px-4 text-[#c9a84c]">BDT 16,00,000+</td></tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">🇬🇧 UK</td><td className="px-4 text-[#c9a84c]">£4,500–£5,700</td><td className="px-4 text-[#c9a84c]">£5,500–£9,500</td><td className="px-4 text-[#c9a84c]">£10,000–£12,000+</td></tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">🇺🇸 USA</td><td className="px-4 text-[#c9a84c]">$11,000–$13,000</td><td className="px-4 text-[#c9a84c]">$13,000–$15,000</td><td className="px-4 text-[#c9a84c]">$15,000+</td></tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">🇦🇪 UAE / GCC</td><td className="px-4 text-[#c9a84c]">AED 18,000–24,000</td><td className="px-4 text-[#c9a84c]">AED 26,000–35,000</td><td className="px-4 text-[#c9a84c]">AED 40,000+</td></tr>
              <tr><td className="py-4 pr-4">🇮🇩 Indonesia</td><td className="px-4 text-[#c9a84c]">USD 3,400–4,500 subsidized</td><td className="px-4 text-[#c9a84c]">USD 5,000–7,000</td><td className="px-4 text-[#c9a84c]">USD 9,000+</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs italic text-[#87847d]">
          All prices per person. Economy = shifting packages, quad occupancy, standard flights. Premium = closer hotel, smaller rooms, often with meals included. Source: Nusuk 2026 packages and licensed operator data.
        </p>
      </div>

      <div>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          Government Hajj Package vs Private — What Is the Difference?
        </h2>
        <div className="text-sm leading-relaxed space-y-4 mb-6">
          <p>
            Countries like Pakistan, India, Bangladesh, and Indonesia run government-managed Hajj schemes through their religious affairs ministries. These are usually cheaper — but they come with trade-offs worth understanding before you apply.
          </p>
        </div>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="border-b border-[rgba(255,255,255,0.07)]"><th className="text-left py-3 pr-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Factor</th><th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Government Package</th><th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Private Package</th></tr></thead>
            <tbody>
              <tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">Price</td><td className="px-4 text-[#c9a84c]">Lower, subsidized</td><td className="px-4 text-[#c9a84c]">Higher, market rate</td></tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">Hotel distance</td><td className="px-4 text-[#c9a84c]">Further from Haram, often 1–2km+</td><td className="px-4 text-[#c9a84c]">Often closer</td></tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">Booking</td><td className="px-4 text-[#c9a84c]">Apply through ministry, lottery</td><td className="px-4 text-[#c9a84c]">Book through licensed operator</td></tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">Group size</td><td className="px-4 text-[#c9a84c]">Large, hundreds per batch</td><td className="px-4 text-[#c9a84c]">Smaller groups</td></tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">Flexibility</td><td className="px-4 text-[#c9a84c]">Fixed dates, fixed itinerary</td><td className="px-4 text-[#c9a84c]">More flexibility</td></tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">Meals</td><td className="px-4 text-[#c9a84c]">Usually included</td><td className="px-4 text-[#c9a84c]">Varies by package</td></tr>
              <tr><td className="py-4 pr-4">Waiting list</td><td className="px-4 text-[#c9a84c]">Common in Pakistan, India</td><td className="px-4 text-[#c9a84c]">Depends on operator</td></tr>
            </tbody>
          </table>
        </div>
        <div className="text-sm leading-relaxed space-y-4">
          <p>
            In Pakistan, the government Hajj package is managed by the Ministry of Religious Affairs. Demand exceeds supply every year — the selection process includes a computerized ballot. Applying early in January gives the best chance.
          </p>
          <p>
            In the UK, USA, and most Western countries, there is no government package. All pilgrims book through Nusuk-approved private operators.
          </p>
        </div>
      </div>

      <div>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          What Is Included in a Hajj Package?
        </h2>
        <p className="text-sm leading-relaxed mb-6">This is where most pilgrims get surprised. The listed price rarely tells the full story.</p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="border-b border-[rgba(255,255,255,0.07)]"><th className="text-left py-3 pr-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Cost Component</th><th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Usually Included</th><th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Sometimes Extra</th></tr></thead>
            <tbody>
              <tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">Return flights</td><td className="px-4 text-[#c9a84c]">Depends on package</td><td className="px-4 text-[#c9a84c]">Budget packages often exclude</td></tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">Makkah hotel</td><td className="px-4 text-[#c9a84c]">Yes</td><td className="px-4 text-[#c9a84c]">Distance and stars vary</td></tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">Madinah hotel</td><td className="px-4 text-[#c9a84c]">Yes, 3–5 nights</td><td className="px-4 text-[#c9a84c]">Duration varies</td></tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">Mina tent</td><td className="px-4 text-[#c9a84c]">Yes</td><td className="px-4 text-[#c9a84c]">Comfort level varies</td></tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">Arafat/Muzdalifah transport</td><td className="px-4 text-[#c9a84c]">Yes</td><td className="px-4 text-[#c9a84c]">Quality varies</td></tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">Visa/permit fee</td><td className="px-4 text-[#c9a84c]">Yes</td><td className="px-4 text-[#c9a84c]">Visa fee SAR 300</td></tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">Meals</td><td className="px-4 text-[#c9a84c]">Varies</td><td className="px-4 text-[#c9a84c]">Not always full board</td></tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">Qurbani sacrifice</td><td className="px-4 text-[#c9a84c]">Sometimes</td><td className="px-4 text-[#c9a84c]">Often extra SAR 350–600</td></tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">Ihram clothing</td><td className="px-4 text-[#c9a84c]">No</td><td className="px-4 text-[#c9a84c]">Buy before travel, around PKR 2,000</td></tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">Personal expenses</td><td className="px-4 text-[#c9a84c]">No</td><td className="px-4 text-[#c9a84c]">Budget SAR 500–1,500 extra</td></tr>
              <tr><td className="py-4 pr-4">Travel insurance</td><td className="px-4 text-[#c9a84c]">Sometimes</td><td className="px-4 text-[#c9a84c]">Verify with operator</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed">
          Shifting packages move you from a Mina-area hotel to a Makkah hotel after the peak Hajj days. They cost less — but you spend more time travelling between the two sites. Non-shifting packages keep you in one hotel throughout, which is easier for elderly pilgrims.
        </p>
      </div>

      <div>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3"><span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />Umrah Expenses 2026 — Budget Guide from Pakistan, India, UK, USA</h2>
        <p className="text-sm leading-relaxed mb-6">Umrah is more accessible than Hajj — no quota system, no waiting list, and you can go any time of year. But costs vary significantly depending on season, how close you stay to Masjid al-Haram, and which country you fly from.</p>
        <div className="text-sm leading-relaxed space-y-6">
          <div><h3 className="text-base font-bold text-[#e6e3db] mb-2">How Much Does Umrah Cost from Pakistan in 2026?</h3><p>Economy Umrah from Pakistan in 2026 costs between PKR 220,000 and PKR 300,000 for a 7–10 night trip outside Ramadan. Standard packages with better hotels run PKR 350,000–500,000. During Ramadan — especially the last ten nights — prices climb sharply, often exceeding PKR 600,000–800,000 per person.</p><p className="mt-3">The Umrah visa fee is SAR 300, roughly PKR 22,300. Pakistani pilgrims must apply through a licensed operator attested by the Ministry of Religious Affairs — direct Nusuk applications are not available for Pakistani passport holders.</p><p className="mt-3">An important 2026 change: the Umrah visa entry window is now 30 days from issuance, reduced from 90 days. Your stay in Saudi Arabia cannot exceed 30 days, and extensions are not permitted.</p></div>
          <div><h3 className="text-base font-bold text-[#e6e3db] mb-2">How Much Does Umrah Cost from India in 2026?</h3><p>Economy Umrah from India costs roughly INR 85,000–1,50,000 for a standard 7–10 night package. Premium packages with Haram-view hotels and better flights cost INR 2,00,000–3,50,000.</p><p className="mt-3">India has a large number of licensed Umrah operators — prices vary significantly, so compare at least 3 quotes before booking.</p></div>
          <div><h3 className="text-base font-bold text-[#e6e3db] mb-2">How Much Does Umrah Cost from the UK in 2026?</h3><p>Umrah from the UK typically costs £1,500–£3,000 for a standard economy package during off-peak months. Ramadan packages, particularly for the last ten nights, regularly exceed £4,000–£6,000 per person depending on hotel proximity.</p><p className="mt-3">British Pakistani pilgrims often find better package value through operators based in Birmingham, Bradford, or Manchester who have direct relationships with Saudi hotels.</p></div>
          <div><h3 className="text-base font-bold text-[#e6e3db] mb-2">Umrah Cost from USA &amp; Canada 2026</h3><p>Economy Umrah from the USA runs $2,000–$4,000 including flights. During Ramadan, expect $4,000–$7,000+ for a decent package. Canada is broadly similar, often slightly higher due to fewer direct flight options from smaller cities.</p></div>
          <div><h3 className="text-base font-bold text-[#e6e3db] mb-2">Umrah Cost from Bangladesh 2026</h3><p>Umrah from Bangladesh costs BDT 1,50,000–2,50,000 for a standard package. Ramadan premiums apply here too — last-ten-nights packages often reach BDT 3,50,000–5,00,000. Biman Bangladesh Airlines offers direct Dhaka-Jeddah flights which reduce overall package costs.</p></div>
        </div>
      </div>

      <div>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3"><span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />When Is Umrah Cheapest in 2026?</h2>
        <div className="text-sm leading-relaxed space-y-4 mb-6"><p>The cheapest Umrah periods are Rajab and Shaban, roughly January to March 2026 outside Ramadan. Prices are 30–50% lower than Ramadan and you still benefit from cooler weather.</p><p>Avoid Ramadan entirely if budget is the priority — prices double during the month and can triple in the last ten nights. If you want the spiritual experience of Ramadan, book at least 6–8 months in advance to get reasonable rates.</p><p>The Muharram and Safar months, post-Hajj in October-November, are also relatively affordable as operators clear inventory.</p></div>
        <div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="border-b border-[rgba(255,255,255,0.07)]"><th className="text-left py-3 pr-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Season</th><th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Relative Cost</th><th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Notes</th></tr></thead><tbody><tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">Rajab/Shaban off-peak</td><td className="px-4 text-[#c9a84c]">Lowest</td><td className="px-4 text-[#c9a84c]">Best value, cooler weather</td></tr><tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">Dhul Qa&apos;dah/Dhul Hijjah</td><td className="px-4 text-[#c9a84c]">Medium</td><td className="px-4 text-[#c9a84c]">Post-Hajj, moderate prices</td></tr><tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">Muharram/Safar</td><td className="px-4 text-[#c9a84c]">Low-Medium</td><td className="px-4 text-[#c9a84c]">Good availability</td></tr><tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">Ramadan first 20 days</td><td className="px-4 text-[#c9a84c]">High</td><td className="px-4 text-[#c9a84c]">30–50% premium</td></tr><tr><td className="py-4 pr-4">Last 10 nights Ramadan</td><td className="px-4 text-[#c9a84c]">Very High</td><td className="px-4 text-[#c9a84c]">2–3x standard price</td></tr></tbody></table></div>
      </div>

      {/* NEW: How to Get Umrah Visa Online 2026 */}
      <div>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          How to Get Umrah Visa Online 2026 — Step-by-Step Guide
        </h2>
        <div className="text-sm leading-relaxed space-y-4">
          <p>
            As of 2026, the Umrah visa process has been simplified. Most nationalities can apply online through the official Nusuk platform. Here&apos;s how:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li><span className="font-semibold text-[#e6e3db]">Create a Nusuk account</span> at <a href="https://www.nusuk.sa" target="_blank" rel="nofollow noopener noreferrer" className="text-[#c9a84c] hover:underline">nusuk.sa</a> — requires email, passport copy, and photo.</li>
            <li><span className="font-semibold text-[#e6e3db]">Select your travel dates</span> — Umrah can be performed any time except Hajj season (Dhul Hijjah 8-13).</li>
            <li><span className="font-semibold text-[#e6e3db]">Choose an approved package</span> — packages include accommodation, transport, and visa processing fees.</li>
            <li><span className="font-semibold text-[#e6e3db]">Pay online</span> — visa fee is SAR 300 (approx. $80). Payment via credit card or debit card.</li>
            <li><span className="font-semibold text-[#e6e3db]">Receive e-visa</span> — typically within 24-72 hours. Print or save PDF to present at immigration.</li>
          </ol>
          <div className="bg-[rgba(201,168,76,0.05)] border border-[rgba(201,168,76,0.15)] rounded-[14px] p-5 mt-4">
            <p className="text-[#c9a84c] text-xs font-bold mb-2 uppercase tracking-wider">Important 2026 Updates</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Umrah visa entry window is now <span className="font-semibold text-[#e6e3db]">30 days from issuance</span> (reduced from 90 days). Stay cannot exceed 30 days.</li>
              <li>Extensions are not permitted. Plan your dates carefully.</li>
              <li>Women aged 45+ can travel without a mahram in groups. Women under 45 require a mahram.</li>
              <li>Vaccination requirements: Meningococcal (within 3 years) and COVID-19 (two doses). Check Nusuk for updates.</li>
            </ul>
          </div>
          <p>
            For Pakistani, Indian, and Bangladeshi passport holders: You must apply through a licensed operator approved by your country&apos;s Ministry of Religious Affairs. Direct Nusuk applications are not available for these nationalities.
          </p>
        </div>
      </div>

      <div>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3"><span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />Nusuk Hajj 2026 — How Registration Works</h2>
        <div className="text-sm leading-relaxed space-y-4"><p>Since 2022, Saudi Arabia has centralised all Hajj bookings through the Nusuk platform at hajj.nusuk.sa. Understanding how it works saves time and prevents costly mistakes.</p><p>Registration for 2026, 1447 AH, opened in October 2025. The process has two phases: account registration first, then package selection and payment when your country&apos;s window opens.</p><p>Countries with national Hajj authorities, including Pakistan, India, Bangladesh, Indonesia, Malaysia, Egypt, Nigeria, and Turkey, must register through their government ministry first. The ministry allocates spots based on the quota system — roughly 1 pilgrim per 1,000 Muslim citizens — and may use a lottery when demand exceeds supply.</p><p>Countries without dedicated Hajj authorities, including UK, USA, Canada, Europe, and East Asia, register directly through Nusuk and book packages through Nusuk-approved private operators.</p><p>The ministry issues a strong warning: Nusuk Hajj at hajj.nusuk.sa is the only authorized channel. Any third-party website claiming to offer Hajj registration or package payments outside of Nusuk-approved operators is unauthorized.</p></div>
      </div>

      <div>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3"><span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />How to Save for Hajj — Monthly Savings Plan</h2>
        <p className="text-sm leading-relaxed mb-6">For most pilgrims, Hajj is the most significant financial commitment of their lives. Starting a dedicated savings plan early makes it achievable without financial stress.</p>
        <div className="overflow-x-auto mb-6"><table className="w-full text-sm border-collapse"><thead><tr className="border-b border-[rgba(255,255,255,0.07)]"><th className="text-left py-3 pr-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Country</th><th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Economy Package</th><th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Save over 3 years</th><th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Save over 5 years</th></tr></thead><tbody><tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">Pakistan</td><td className="px-4 text-[#c9a84c]">PKR 1.5M</td><td className="px-4 text-[#c9a84c]">PKR 41,700/month</td><td className="px-4 text-[#c9a84c]">PKR 25,000/month</td></tr><tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">India</td><td className="px-4 text-[#c9a84c]">INR 4,50,000</td><td className="px-4 text-[#c9a84c]">INR 12,500/month</td><td className="px-4 text-[#c9a84c]">INR 7,500/month</td></tr><tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">UK</td><td className="px-4 text-[#c9a84c]">£5,500</td><td className="px-4 text-[#c9a84c]">£153/month</td><td className="px-4 text-[#c9a84c]">£92/month</td></tr><tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">USA</td><td className="px-4 text-[#c9a84c]">$12,000</td><td className="px-4 text-[#c9a84c]">$333/month</td><td className="px-4 text-[#c9a84c]">$200/month</td></tr><tr><td className="py-4 pr-4">Bangladesh</td><td className="px-4 text-[#c9a84c]">BDT 8,00,000</td><td className="px-4 text-[#c9a84c]">BDT 22,200/month</td><td className="px-4 text-[#c9a84c]">BDT 13,300/month</td></tr></tbody></table></div>
        <ul className="list-disc space-y-3 pl-6 text-sm"><li>Open a separate savings account labelled Hajj fund — segregating it makes you less likely to dip into it.</li><li>In the UK, consider an ISA or Premium Bonds for the Hajj fund — both are Shariah-compatible savings methods.</li><li>In Pakistan and Bangladesh, Islamic bank savings accounts offer profit sharing without riba.</li><li>Book early — packages booked 12+ months in advance are consistently cheaper than last-minute bookings.</li><li>Avoid Ramadan for first-time pilgrims on a budget — the spiritual reward of Hajj is not diminished by going in a quieter season.</li></ul>
      </div>

      {/* NEW: Hajj Package Price per Person 2026 by City in Pakistan */}
      <div>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          Hajj Package Price per Person 2026 — by City in Pakistan
        </h2>
        <div className="text-sm leading-relaxed space-y-4 mb-4">
          <p>
            Hajj package prices vary by departure city in Pakistan due to different flight routes and local operator costs. Below are estimated economy package prices for 2026 (private operators).
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.07)]">
                <th className="text-left py-3 pr-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">City</th>
                <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Economy Package (PKR)</th>
                <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Standard Package (PKR)</th>
                <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Premium Package (PKR)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">🇵🇰 Karachi</td><td className="px-4 text-[#c9a84c]">1,375,000–1,600,000</td><td className="px-4 text-[#c9a84c]">2,000,000–2,500,000</td><td className="px-4 text-[#c9a84c]">3,500,000+</td></tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">🇵🇰 Lahore</td><td className="px-4 text-[#c9a84c]">1,400,000–1,650,000</td><td className="px-4 text-[#c9a84c]">2,100,000–2,600,000</td><td className="px-4 text-[#c9a84c]">3,600,000+</td></tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">🇵🇰 Islamabad</td><td className="px-4 text-[#c9a84c]">1,450,000–1,700,000</td><td className="px-4 text-[#c9a84c]">2,200,000–2,700,000</td><td className="px-4 text-[#c9a84c]">3,700,000+</td></tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">🇵🇰 Peshawar</td><td className="px-4 text-[#c9a84c]">1,350,000–1,550,000</td><td className="px-4 text-[#c9a84c]">1,950,000–2,400,000</td><td className="px-4 text-[#c9a84c]">3,400,000+</td></tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">🇵🇰 Multan</td><td className="px-4 text-[#c9a84c]">1,380,000–1,620,000</td><td className="px-4 text-[#c9a84c]">2,050,000–2,550,000</td><td className="px-4 text-[#c9a84c]">3,550,000+</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-[#3e3c38] mt-2">
          Prices are per person for private operator packages. Government packages are 20-30% cheaper but subject to ballot. Prices updated June 2026.
        </p>
      </div>

      <div>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3"><span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />Hajj vs Umrah — Key Differences and Cost</h2>
        <p className="text-sm leading-relaxed mb-6">Most Muslims perform Umrah at least once before Hajj. The two pilgrimages overlap in rituals but differ fundamentally in obligation, timing, and cost.</p>
        <div className="overflow-x-auto mb-6"><table className="w-full text-sm border-collapse"><thead><tr className="border-b border-[rgba(255,255,255,0.07)]"><th className="text-left py-3 pr-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Factor</th><th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Hajj</th><th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Umrah</th></tr></thead><tbody><tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">Obligation</td><td className="px-4 text-[#c9a84c]">Fard, required once if able</td><td className="px-4 text-[#c9a84c]">Sunnah, recommended</td></tr><tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">Timing</td><td className="px-4 text-[#c9a84c]">Fixed, Dhul Hijjah 8–13</td><td className="px-4 text-[#c9a84c]">Any time of year</td></tr><tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">Duration</td><td className="px-4 text-[#c9a84c]">5–6 days minimum</td><td className="px-4 text-[#c9a84c]">3–7 days typical</td></tr><tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">Cost</td><td className="px-4 text-[#c9a84c]">3–5x more than Umrah</td><td className="px-4 text-[#c9a84c]">More affordable</td></tr><tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">Quota</td><td className="px-4 text-[#c9a84c]">Yes, government-controlled</td><td className="px-4 text-[#c9a84c]">No quota</td></tr><tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">Waiting list</td><td className="px-4 text-[#c9a84c]">Common in large Muslim countries</td><td className="px-4 text-[#c9a84c]">No waiting list</td></tr><tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">Key rituals</td><td className="px-4 text-[#c9a84c]">Tawaf, Sai, Arafat, Mina, Jamarat</td><td className="px-4 text-[#c9a84c]">Tawaf, Sai</td></tr><tr><td className="py-4 pr-4">Nusuk required</td><td className="px-4 text-[#c9a84c]">Yes, mandatory for all pilgrims</td><td className="px-4 text-[#c9a84c]">Recommended</td></tr></tbody></table></div>
        <div className="text-sm leading-relaxed space-y-4"><p>The three types of Hajj also affect cost. Hajj Tamattu, most common for non-residents, involves Umrah first then Hajj with a break in between — Qurbani is required, adding SAR 350–600 to the cost.</p><p>Hajj Qiran combines Ihram for both in one — also requires Qurbani. Hajj Ifrad is Hajj alone without Umrah — no Qurbani required, with slightly simpler logistics.</p><p>Most package operators from Pakistan, India, and UK offer Hajj Tamattu packages by default.</p></div>
      </div>

      <div>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3"><span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />Official Source and Calculation Basis</h2>
        <div className="text-sm leading-relaxed space-y-4 mb-4"><p>This calculator uses baseline cost data from 2026 Nusuk platform packages, licensed operator pricing, and official announcements from the Saudi Ministry of Hajj and Umrah.</p><p>Cost estimates are indicative. Actual prices depend on operator-specific rates, booking timing, hotel availability, and currency fluctuations. The calculator does not connect to live pricing APIs — always confirm final costs with a licensed Hajj or Umrah operator before making any payment.</p></div>
        <ul className="list-disc space-y-3 pl-6 text-sm"><li>Official Nusuk Hajj platform: <a href="https://hajj.nusuk.sa" target="_blank" rel="nofollow noopener noreferrer" className="text-[#c9a84c] hover:underline">hajj.nusuk.sa</a></li><li>Saudi Ministry of Hajj and Umrah: <a href="https://www.haj.gov.sa/en" target="_blank" rel="nofollow noopener noreferrer" className="text-[#c9a84c] hover:underline">haj.gov.sa</a></li><li>Ministry of Religious Affairs Pakistan: <a href="https://www.mora.gov.pk" target="_blank" rel="nofollow noopener noreferrer" className="text-[#c9a84c] hover:underline">mora.gov.pk</a></li></ul>
      </div>

      <div>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3"><span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />Common Hajj and Umrah Terms</h2>
        <div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="border-b border-[rgba(255,255,255,0.07)]"><th className="text-left py-3 pr-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">English</th><th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Arabic</th><th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Urdu</th></tr></thead><tbody><tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">Hajj Cost Calculator</td><td className="px-4 text-[#c9a84c]" dir="rtl">حاسبة تكلفة الحج</td><td className="px-4 text-[#c9a84c]" dir="rtl">حج کا خرچہ کیلکولیٹر</td></tr><tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">Umrah Budget</td><td className="px-4 text-[#c9a84c]" dir="rtl">ميزانية العمرة</td><td className="px-4 text-[#c9a84c]" dir="rtl">عمرہ کا بجٹ</td></tr><tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">Pilgrimage cost</td><td className="px-4 text-[#c9a84c]" dir="rtl">تكلفة الحج والعمرة</td><td className="px-4 text-[#c9a84c]" dir="rtl">حج عمرہ کا خرچہ</td></tr><tr className="border-b border-[rgba(255,255,255,0.03)]"><td className="py-4 pr-4">Nusuk platform</td><td className="px-4 text-[#c9a84c]" dir="rtl">منصة نسك</td><td className="px-4 text-[#c9a84c]" dir="rtl">نسک پلیٹ فارم</td></tr><tr><td className="py-4 pr-4">Package price</td><td className="px-4 text-[#c9a84c]" dir="rtl">سعر الباقة</td><td className="px-4 text-[#c9a84c]" dir="rtl">پیکج قیمت</td></tr></tbody></table></div>
        <p className="mt-4 text-xs italic">Muslims searching in Arabic for <span dir="rtl">حاسبة تكلفة الحج 2026</span> or in Urdu for <span dir="rtl">حج کا خرچہ پاکستان سے 2026</span> will find the same calculator above — select your country from the dropdown to get costs in your local currency.</p>
      </div>

      {/* MULTILINGUAL MINI-SECTIONS FOR LOW-COMPETITION QUERIES */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="border border-[rgba(255,255,255,0.07)] rounded-xl p-4 bg-[#131620]">
          <p className="text-[#c9a84c] text-xs font-bold mb-2">🇩🇪 German</p>
          <p className="text-sm font-semibold text-[#e6e3db]">Wie viel kostet Hajj 2026 pro Person?</p>
          <p className="text-xs text-[#87847d] mt-1">Die Hajj-Kosten 2026 beginnen bei £4.500 aus Großbritannien, $11.000 aus den USA und PKR 1,4 Mio. aus Pakistan. Die Preise variieren je nach Pakettyp (Economy, Standard, Premium) und Hotelentfernung zur Haram-Moschee.</p>
        </div>
        <div className="border border-[rgba(255,255,255,0.07)] rounded-xl p-4 bg-[#131620]">
          <p className="text-[#c9a84c] text-xs font-bold mb-2">🇷🇺 Russian</p>
          <p className="text-sm font-semibold text-[#e6e3db]">Это цены 2026 года?</p>
          <p className="text-xs text-[#87847d] mt-1">Да, все цены в этом калькуляторе обновлены на 2026 год (1447 год хиджры). Данные основаны на официальных пакетах платформы Nusuk и лицензированных операторах. Стоимость Хаджа из Пакистана начинается от 1 375 000 рупий.</p>
        </div>
        <div className="border border-[rgba(255,255,255,0.07)] rounded-xl p-4 bg-[#131620]">
          <p className="text-[#c9a84c] text-xs font-bold mb-2">🇹🇷 Turkish / 🇺🇿 Uzbek</p>
          <p className="text-sm font-semibold text-[#e6e3db]">Hac 2026 fiyatları / Narxlar 2026</p>
          <p className="text-xs text-[#87847d] mt-1">2026 Hac fiyatları: Pakistan'dan PKR 1,4 milyon, Hindistan'dan INR 4 lakh, İngiltere'den £4.500. Umre için en ucuz dönem: Rajab ve Şaban (Ocak-Mart). — Narxlar 2026 yil uchun yangilangan. Hajj narxlari Pokistondan 1,4 million PKR dan boshlanadi.</p>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Related Calculators for Your Pilgrimage Budget</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/tools/gold-calculator" className="block p-4 rounded-xl border border-gray-600 hover:border-[#c9a84c] hover:shadow-md transition-all"><div className="flex items-start gap-3"><span className="text-2xl">💰</span><div><p className="font-semibold text-white">Gold Price Calculator</p><p className="text-sm text-gray-300 mt-1">Check gold price in SAR for Qurbani sacrifice value. Also convert grams to tolas for Zakat calculation.</p></div></div></Link>
          <Link href="/tools/zakat-calculator" className="block p-4 rounded-xl border border-gray-600 hover:border-[#c9a84c] hover:shadow-md transition-all"><div className="flex items-start gap-3"><span className="text-2xl">🟡</span><div><p className="font-semibold text-white">Zakat Calculator</p><p className="text-sm text-gray-300 mt-1">Calculate Zakat on your Hajj savings fund. Includes gold, silver, cash, and investments. Sharia-compliant 2026.</p></div></div></Link>
          <Link href="/tools/uae-gratuity-calculator" className="block p-4 rounded-xl border border-gray-600 hover:border-[#c9a84c] hover:shadow-md transition-all"><div className="flex items-start gap-3"><span className="text-2xl">🧮</span><div><p className="font-semibold text-white">UAE Gratuity Calculator</p><p className="text-sm text-gray-300 mt-1">For expats in GCC planning Hajj — calculate end-of-service benefit to fund your pilgrimage.</p></div></div></Link>
          <Link href="/tools/ksa-gosi-calculator" className="block p-4 rounded-xl border border-gray-600 hover:border-[#c9a84c] hover:shadow-md transition-all"><div className="flex items-start gap-3"><span className="text-2xl">🛡️</span><div><p className="font-semibold text-white">Saudi GOSI Calculator</p><p className="text-sm text-gray-300 mt-1">GOSI contributions for Saudi nationals and expats. Updated 2026 KSA rates.</p></div></div></Link>
          <Link href="/tools/pakistan-freelancer-tax-calculator" className="block p-4 rounded-xl border border-gray-600 hover:border-[#c9a84c] hover:shadow-md transition-all"><div className="flex items-start gap-3"><span className="text-2xl">🧾</span><div><p className="font-semibold text-white">Pakistan Freelancer Tax Calculator</p><p className="text-sm text-gray-300 mt-1">FBR income tax for freelancers. Supports PSEB 0.25%, non‑PSEB 1%, non‑filer 2%.</p></div></div></Link>
          <Link href="/tools/malaysia-epf-calculator" className="block p-4 rounded-xl border border-gray-600 hover:border-[#c9a84c] hover:shadow-md transition-all"><div className="flex items-start gap-3"><span className="text-2xl">🇲🇾</span><div><p className="font-semibold text-white">Malaysia EPF Calculator</p><p className="text-sm text-gray-300 mt-1">Calculate EPF contributions for employees and employers in Malaysia. Includes 2026 contribution rates and take-home salary breakdown.</p></div></div></Link>
        </div>
      </section>
    </section>
  );
}
