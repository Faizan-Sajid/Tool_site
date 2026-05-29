import Link from "next/link";
import React from "react";

export default function HajjUmrahContent() {
  return (
    <section className="max-w-[860px] px-[20px] sm:px-[36px] py-[48px] space-y-16 text-[#87847d]">

      {/* SECTION 1: How to Use */}
      <div>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          How to Use This Free Umrah Cost Calculator
        </h2>
        <div className="text-sm leading-relaxed space-y-4">
          <p>
            Our <strong>free Umrah cost calculator</strong> helps you estimate your complete 2026 Umrah budget in seconds — no travel agent needed, no login required. Select your departure country, choose economy, standard, or premium package, set your number of pilgrims, trip duration, and whether you are travelling during Ramadan. You will instantly see a breakdown of estimated flights, hotel, visa, transport, and daily expenses.
          </p>
          <p>
            This <strong>Umrah budget calculator</strong> covers pilgrims from Pakistan, India, UK, USA, Bangladesh, Canada, UAE, and more — making it one of the most comprehensive free tools available online for calculating Umrah costs in 2026.
          </p>
        </div>
      </div>

      {/* SECTION 2: Cost by Country */}
      <div>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          Umrah Cost by Country 2026 — Complete Budget Guide
        </h2>
        <div className="text-sm leading-relaxed space-y-4 mb-6">
          <p>
            Umrah cost varies significantly depending on where you depart from, when you travel, and what package you choose. Below is a complete guide to help you <strong>calculate your Umrah cost online</strong> for each major country.
          </p>
        </div>

        {/* Pakistan */}
        <div className="mb-8">
          <h3 className="text-base font-bold text-[#e6e3db] mb-3">
            🇵🇰 Umrah Cost Calculator — Pakistan 2026
          </h3>
          <div className="text-sm leading-relaxed space-y-3">
            <p>
              The <strong>Umrah cost from Pakistan in 2026</strong> ranges from <strong>PKR 250,000 to PKR 400,000</strong> for an economy package per person, covering return flights from Karachi, Lahore, or Islamabad, hotel accommodation, Umrah visa, and basic transport. Standard packages (4-star hotel, better flight times) cost PKR 400,000–700,000, while premium packages exceed PKR 700,000 per person.
            </p>
            <p>
              Key cost factors for Pakistani pilgrims: flight prices vary by departure city (Karachi and Lahore typically offer the most competitive fares), and Ramadan packages cost 30–50% more. The <strong>Umrah budget calculator for Pakistan 2026</strong> above automatically adjusts for these variables.
            </p>
          </div>
        </div>

        {/* India */}
        <div className="mb-8">
          <h3 className="text-base font-bold text-[#e6e3db] mb-3">
            🇮🇳 Umrah Cost Calculator — India 2026
          </h3>
          <div className="text-sm leading-relaxed space-y-3">
            <p>
              For Indian pilgrims, the <strong>Umrah cost in 2026</strong> starts at approximately <strong>&#8377;85,000–&#8377;1,80,000</strong> for a budget package. Standard packages with 4-star hotels range from &#8377;1,80,000–&#8377;3,00,000, and luxury packages exceed &#8377;3,00,000 per person. Flights from Mumbai, Delhi, Hyderabad, and Kolkata contribute 40–50% of total costs.
            </p>
            <p>
              Booking 3–6 months in advance is strongly recommended for Indian pilgrims. Our <strong>Umrah calculator for India 2026</strong> helps you compare economy vs standard vs premium packages side by side.
            </p>
          </div>
        </div>

        {/* UK */}
        <div className="mb-8">
          <h3 className="text-base font-bold text-[#e6e3db] mb-3">
            🇬🇧 Umrah Cost Calculator — UK 2026
          </h3>
          <div className="text-sm leading-relaxed space-y-3">
            <p>
              The <strong>Umrah cost from the UK in 2026</strong> typically ranges from <strong>&#163;1,500–&#163;3,000</strong> for economy packages and &#163;3,000–&#163;6,000 for standard packages per person. Return flights from London to Jeddah cost approximately &#163;400–&#163;700 in economy. The Saudi tourist eVisa with mandatory health insurance adds roughly &#163;100–&#163;150 per person.
            </p>
            <p>
              UK pilgrims benefit from shorter flight distances compared to North America, keeping costs relatively competitive. Use our <strong>free Umrah cost calculator for UK</strong> pilgrims above to get a personalised 2026 estimate.
            </p>
          </div>
        </div>

        {/* Bangladesh, USA, Canada */}
        <div className="mb-8">
          <h3 className="text-base font-bold text-[#e6e3db] mb-3">
            🇧🇩 Umrah Cost Calculator — Bangladesh 2026
          </h3>
          <div className="text-sm leading-relaxed space-y-3">
            <p>
              The <strong>Umrah cost from Bangladesh in 2026</strong> typically falls between BDT 1,80,000–3,00,000 for an economy package and BDT 3,00,000–5,00,000 for standard packages per person. Direct flights from Dhaka (DAC) to Jeddah or Madinah are available with Biman Bangladesh and Saudi airlines. Our <strong>Umrah cost calculator for Bangladesh</strong> gives you a fast, free estimate based on current market rates.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-base font-bold text-[#e6e3db] mb-3">
            🇺🇸🇨🇦 Umrah Price Estimator — USA &amp; Canada 2026
          </h3>
          <div className="text-sm leading-relaxed space-y-3">
            <p>
              <strong>Umrah from the USA</strong> ranges from $3,000–$5,000 economy and $5,000–$9,000 standard per person. Long-haul flights from New York, Houston, Chicago, and Los Angeles contribute significantly — typically 50–60% of the total budget. <strong>Umrah from Canada</strong> follows similar pricing with slight variations by departure city (Toronto, Montreal, Vancouver). Use our <strong>Umrah price calculator</strong> above to get a personalised estimate for North American pilgrims.
            </p>
          </div>
        </div>

        {/* Summary Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.07)]">
                <th className="text-left py-3 pr-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Country</th>
                <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Economy</th>
                <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Standard</th>
                <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[rgba(255,255,255,0.03)]">
                <td className="py-4 pr-4">🇵🇰 Pakistan</td>
                <td className="px-4 text-[#c9a84c]">PKR 250,000–400,000</td>
                <td className="px-4 text-[#c9a84c]">PKR 400,000–700,000</td>
                <td className="px-4 text-[#c9a84c]">PKR 700,000+</td>
              </tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]">
                <td className="py-4 pr-4">🇮🇳 India</td>
                <td className="px-4 text-[#c9a84c]">&#8377;85,000–1,80,000</td>
                <td className="px-4 text-[#c9a84c]">&#8377;1,80,000–3,00,000</td>
                <td className="px-4 text-[#c9a84c]">&#8377;3,00,000+</td>
              </tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]">
                <td className="py-4 pr-4">🇬🇧 UK</td>
                <td className="px-4 text-[#c9a84c]">&#163;1,500–3,000</td>
                <td className="px-4 text-[#c9a84c]">&#163;3,000–6,000</td>
                <td className="px-4 text-[#c9a84c]">&#163;6,000+</td>
              </tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]">
                <td className="py-4 pr-4">🇧🇩 Bangladesh</td>
                <td className="px-4 text-[#c9a84c]">BDT 1,80,000–3,00,000</td>
                <td className="px-4 text-[#c9a84c]">BDT 3,00,000–5,00,000</td>
                <td className="px-4 text-[#c9a84c]">BDT 5,00,000+</td>
              </tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]">
                <td className="py-4 pr-4">🇺🇸 USA</td>
                <td className="px-4 text-[#c9a84c]">$3,000–5,000</td>
                <td className="px-4 text-[#c9a84c]">$5,000–9,000</td>
                <td className="px-4 text-[#c9a84c]">$9,000+</td>
              </tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]">
                <td className="py-4 pr-4">🇨🇦 Canada</td>
                <td className="px-4 text-[#c9a84c]">CAD 4,000–7,000</td>
                <td className="px-4 text-[#c9a84c]">CAD 7,000–12,000</td>
                <td className="px-4 text-[#c9a84c]">CAD 12,000+</td>
              </tr>
              <tr>
                <td className="py-4 pr-4">🇦🇪 UAE</td>
                <td className="px-4 text-[#c9a84c]">AED 5,000–9,000</td>
                <td className="px-4 text-[#c9a84c]">AED 9,000–15,000</td>
                <td className="px-4 text-[#c9a84c]">AED 15,000+</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs italic text-[#87847d]">
          * Hajj packages cost significantly more (3–5x) than Umrah. Ramadan adds 30–50%. All figures are estimates for 2026 only.
        </p>
      </div>

      {/* SECTION 3: What's Included */}
      <div>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          What is Included in Your Umrah Budget? — Full Cost Breakdown
        </h2>
        <div className="text-sm leading-relaxed space-y-4 mb-6">
          <p>
            When you <strong>calculate Umrah cost online</strong>, it is essential to account for every expense component. Here is a complete breakdown of what your Umrah budget should cover:
          </p>
        </div>
        <ol className="list-decimal space-y-5 pl-6 text-sm">
          <li>
            <strong>Flights (40–55% of total cost)</strong> — Return airfare from your country to Jeddah (JED) or Madinah (MED). Book 3–6 months in advance for the best fares. Mid-week departures can save $150–$300 compared to weekends.
          </li>
          <li>
            <strong>Hotel Accommodation (25–35%)</strong> — Hotels in Makkah and Madinah vary significantly by zone. Zone A (steps from Masjid al-Haram) costs $250+ per night. Zone B (5–10 minute walk) runs $100–$250 per night. Zone C (shuttle required) is $50–$100 per night.
          </li>
          <li>
            <strong>Umrah Visa &amp; Health Insurance (5–10%)</strong> — Saudi Arabia requires a Umrah visa plus mandatory health insurance. Total visa cost by country: approx. &#163;100–150 (UK), $150–$300 (USA), PKR 15,000–25,000 (Pakistan), &#8377;10,000–&#8377;15,000 (India).
          </li>
          <li>
            <strong>Ground Transport (5–10%)</strong> — Transfers between Jeddah Airport, Makkah, and Madinah. Shared buses are cheapest; private cars cost more but offer more flexibility. Official taxis from Jeddah Airport to Makkah are typically SAR 250–300.
          </li>
          <li>
            <strong>Food &amp; Daily Expenses (5–10%)</strong> — Budget SAR 50–150 per day for meals. Local restaurants near Haram are affordable; hotel buffets are significantly pricier. Add 10–15% for personal expenses, shopping, laundry, and a local SIM card.
          </li>
        </ol>
      </div>

      {/* SECTION 4: Tips to Save */}
      <div>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          7 Tips to Reduce Your Umrah Cost in 2026
        </h2>
        <ol className="list-decimal space-y-4 pl-6 text-sm">
          <li>
            <strong>Travel in Rajab or Shaban (Jan–Feb)</strong> — Off-peak season is 30–40% cheaper than Ramadan. This is the single biggest saving lever available.
          </li>
          <li>
            <strong>Book 3–6 months in advance</strong> — Early bookings on flights and hotels typically save 15–25% vs last-minute rates.
          </li>
          <li>
            <strong>Stay in Zone B instead of Zone A</strong> — Hotels 5–10 minutes from Masjid al-Haram save &#163;500–&#163;800 per person vs steps-away Zone A hotels while remaining very walkable.
          </li>
          <li>
            <strong>Use the Saudi tourist eVisa if eligible</strong> — Often cheaper than dedicated Umrah visas and allows multiple entries within the validity period.
          </li>
          <li>
            <strong>Fly into Madinah first</strong> — Madinah flights are sometimes cheaper than Jeddah. Start your Ziyarah there and travel to Makkah overland.
          </li>
          <li>
            <strong>Travel in a group of 4 or more</strong> — Shared private transport between cities significantly reduces per-person ground costs compared to individual taxi bookings.
          </li>
          <li>
            <strong>Use our free Umrah expense calculator</strong> — Compare economy, standard, and premium package costs side by side before speaking to any travel agent. Knowledge is the best negotiating tool.
          </li>
        </ol>
      </div>

      {/* SECTION 5: Hajj vs Umrah */}
      <div>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          Hajj vs Umrah — Cost &amp; Key Differences
        </h2>
        <div className="text-sm leading-relaxed space-y-4 mb-6">
          <p>
            Understanding the difference between Hajj and Umrah is important when using a <strong>Hajj Umrah budget calculator</strong>. While both pilgrimages involve travel to Makkah, they differ significantly in obligation, timing, cost, and complexity.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.07)]">
                <th className="text-left py-3 pr-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold" />
                <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Hajj</th>
                <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-[#3e3c38] font-bold">Umrah</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[rgba(255,255,255,0.03)]">
                <td className="py-4 pr-4 font-medium">Obligation</td>
                <td className="px-4 text-[#c9a84c]">Mandatory (Fard) once in a lifetime</td>
                <td className="px-4 text-[#c9a84c]">Voluntary (Sunnah), any time</td>
              </tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]">
                <td className="py-4 pr-4 font-medium">Timing</td>
                <td className="px-4 text-[#c9a84c]">Only during Dhul-Hijjah</td>
                <td className="px-4 text-[#c9a84c]">Any month of the year</td>
              </tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]">
                <td className="py-4 pr-4 font-medium">Duration</td>
                <td className="px-4 text-[#c9a84c]">5–6 days (Mina, Arafat, Muzdalifah)</td>
                <td className="px-4 text-[#c9a84c]">2–3 days (Tawaf &amp; Sai)</td>
              </tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]">
                <td className="py-4 pr-4 font-medium">Relative Cost</td>
                <td className="px-4 text-[#c9a84c]">3–5x more expensive than Umrah</td>
                <td className="px-4 text-[#c9a84c]">More affordable, flexible pricing</td>
              </tr>
              <tr className="border-b border-[rgba(255,255,255,0.03)]">
                <td className="py-4 pr-4 font-medium">Quota</td>
                <td className="px-4 text-[#c9a84c]">Government quota per country applies</td>
                <td className="px-4 text-[#c9a84c]">No quota, open year-round</td>
              </tr>
              <tr>
                <td className="py-4 pr-4 font-medium">Planning Time</td>
                <td className="px-4 text-[#c9a84c]">1–2 years in advance typically</td>
                <td className="px-4 text-[#c9a84c]">As little as 4–6 weeks ahead</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 6: What is Hajj & Umrah */}
      <div>
        <h2 className="mb-6 text-lg font-bold text-[#e6e3db] flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#c9a84c] flex-shrink-0" />
          What is Hajj &amp; Umrah? — The Sacred Pilgrimages of Islam
        </h2>
        <div className="text-sm leading-relaxed space-y-4">
          <p>
            Hajj is the mandatory pilgrimage to Mecca that every Muslim must perform at least once in their lifetime, during the Islamic month of Dhul-Hijjah. It involves a series of rites performed over several days, including staying in Mina, standing on Arafat, and the symbolic stoning of the devil at Jamarat.
          </p>
          <p>
            Umrah is a voluntary pilgrimage that can be undertaken at any time of the year. It includes a subset of the Hajj rites — circling the Kaaba (Tawaf) and walking between Safa and Marwah (Sai) — but does not require the extended stay or the specific seasonal rituals of Hajj. Because Umrah can be performed anytime and has no per-country quota, it is significantly more accessible for most Muslims worldwide.
          </p>
          <p>
            Our <strong>Hajj and Umrah budget calculator</strong> supports both pilgrimages so you can plan and compare costs for either journey in 2026.
          </p>
        </div>
      </div>

      {/* INTERNAL LINKS */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Explore Other QuickCalcs Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/tools/zakat-calculator"
            className="block p-4 rounded-xl border border-gray-600 hover:border-blue-400 hover:shadow-md transition-all"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">🟡</span>
              <div>
                <p className="font-semibold text-white">Zakat Calculator</p>
                <p className="text-sm text-gray-300 mt-1">
                  Calculate your annual Zakat on savings, gold, and investments. Sharia-compliant 2026.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="/tools/gold-calculator"
            className="block p-4 rounded-xl border border-gray-600 hover:border-blue-400 hover:shadow-md transition-all"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">💰</span>
              <div>
                <p className="font-semibold text-white">Gold Price Calculator</p>
                <p className="text-sm text-gray-300 mt-1">
                  Live 24K, 22K, 21K, 18K rates for UAE &amp; GCC. Includes Zakat and unit converter.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="/tools/uae-gratuity-calculator"
            className="block p-4 rounded-xl border border-gray-600 hover:border-blue-400 hover:shadow-md transition-all"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">🧮</span>
              <div>
                <p className="font-semibold text-white">UAE Gratuity Calculator</p>
                <p className="text-sm text-gray-300 mt-1">
                  End-of-service benefits as per UAE Labour Law 2026. Limited &amp; unlimited contracts.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="/tools/ksa-gosi-calculator"
            className="block p-4 rounded-xl border border-gray-600 hover:border-blue-400 hover:shadow-md transition-all"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">🛡️</span>
              <div>
                <p className="font-semibold text-white">Saudi GOSI Calculator</p>
                <p className="text-sm text-gray-300 mt-1">
                  GOSI contributions for Saudi nationals and expats. Updated 2026 KSA rates.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="/tools/pakistan-freelancer-tax-calculator"
            className="block p-4 rounded-xl border border-gray-600 hover:border-blue-400 hover:shadow-md transition-all"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">🧾</span>
              <div>
                <p className="font-semibold text-white">Pakistan Freelancer Tax Calculator</p>
                <p className="text-sm text-gray-300 mt-1">
                  FBR income tax for freelancers. Supports PSEB 0.25%, non‑PSEB 1%, non‑filer 2%.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/tools/malaysia-epf-calculator" className="block p-4 rounded-xl border border-gray-600 hover:border-blue-400 hover:shadow-md transition-all">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🇲🇾</span>
              <div>
                <p className="font-semibold text-white">Malaysia EPF Calculator</p>
                <p className="text-sm text-gray-300 mt-1">Calculate EPF contributions for employees and employers in Malaysia. Includes 2026 contribution rates and take-home salary breakdown.</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

    </section>
  );
}