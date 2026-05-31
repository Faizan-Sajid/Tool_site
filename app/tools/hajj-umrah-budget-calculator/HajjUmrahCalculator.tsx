"use client";

import React, { useState } from "react";
import { Home, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function HajjUmrahCalculator() {
  // UI‑only toggle state
  const [pilgrimage, setPilgrimage] = useState<string>("Umrah");
  const [season, setSeason] = useState<string>("Regular");
  // New controlled state variables
  const [country, setCountry] = useState<string>("Pakistan");
  const [packageType, setPackageType] = useState<string>("Economy");
  const [duration, setDuration] = useState<string>("7 Days");
  const [pilgrims, setPilgrims] = useState<number>(1);

  // Result state
  interface ResultType {
    flights: number;
    hotel: number;
    visa: number;
    food: number;
    total: number;
    currency: string;
    currencySymbol: string;
  }
  const [result, setResult] = useState<ResultType | null>(null);

  // Lookup data
  const countryData: Record<string, { currency: string; symbol: string; flights: number; visa: number }> = {
    Pakistan:        { currency: "PKR", symbol: "PKR ", flights: 130000, visa: 22000 },
    India:           { currency: "INR", symbol: "₹",   flights: 55000,  visa: 13000 },
    Bangladesh:      { currency: "BDT", symbol: "৳",   flights: 65000,  visa: 12000 },
    "United Kingdom":{ currency: "GBP", symbol: "£",   flights: 600,    visa: 110 },
    "United States": { currency: "USD", symbol: "$",   flights: 1300,   visa: 200 },
    Canada:          { currency: "CAD", symbol: "CA$", flights: 1700,   visa: 220 },
    UAE:             { currency: "AED", symbol: "AED ",flights: 800,    visa: 400 },
    "Saudi Arabia":  { currency: "SAR", symbol: "SAR ",flights: 300,    visa: 0 },
    Malaysia:        { currency: "MYR", symbol: "RM",  flights: 2200,   visa: 500 },
    Other:           { currency: "USD", symbol: "$",   flights: 1100,   visa: 200 },
  };

  const hotelNightlyRate: Record<string, Record<string, number>> = {
    Pakistan:         { Economy: 3500,  Standard: 7000,  "Premium / Luxury": 15000 },
    India:            { Economy: 3000,  Standard: 6000,  "Premium / Luxury": 12000 },
    Bangladesh:       { Economy: 3500,  Standard: 6000,  "Premium / Luxury": 10000 },
    "United Kingdom": { Economy: 60,    Standard: 120,   "Premium / Luxury": 200   },
    "United States":  { Economy: 90,    Standard: 170,   "Premium / Luxury": 350   },
    Canada:           { Economy: 110,   Standard: 190,   "Premium / Luxury": 380   },
    UAE:              { Economy: 400,   Standard: 700,   "Premium / Luxury": 1200  },
    "Saudi Arabia":   { Economy: 350,   Standard: 650,   "Premium / Luxury": 1200  },
    Malaysia:         { Economy: 650,   Standard: 1100,  "Premium / Luxury": 2000  },
    Other:            { Economy: 85,    Standard: 155,   "Premium / Luxury": 320   },
  };

  const foodDailyRate: Record<string, Record<string, number>> = {
    Pakistan:         { Economy: 2500,  Standard: 5000,  "Premium / Luxury": 9000  },
    India:            { Economy: 1500,  Standard: 3500,  "Premium / Luxury": 7000  },
    Bangladesh:       { Economy: 1500,  Standard: 3000,  "Premium / Luxury": 6000  },
    "United Kingdom": { Economy: 20,    Standard: 50,    "Premium / Luxury": 100   },
    "United States":  { Economy: 35,    Standard: 70,    "Premium / Luxury": 130   },
    Canada:           { Economy: 40,    Standard: 75,    "Premium / Luxury": 140   },
    UAE:              { Economy: 130,   Standard: 250,   "Premium / Luxury": 450   },
    "Saudi Arabia":   { Economy: 120,   Standard: 220,   "Premium / Luxury": 400   },
    Malaysia:         { Economy: 180,   Standard: 350,   "Premium / Luxury": 700   },
    Other:            { Economy: 30,    Standard: 60,    "Premium / Luxury": 120   },
  };

  const durationDays: Record<string, number> = {
    "7 Days": 7,
    "10 Days": 10,
    "14 Days": 14,
    "21 Days": 21,
    "28 Days": 28,
    "35 Days": 35,
    "40 Days": 40,
  };

  // Estimate handler
  const handleEstimate = () => {
    const data = countryData[country];
    const days = durationDays[duration];
    let flights = data.flights * pilgrims;
    let hotel = hotelNightlyRate[country][packageType] * days * pilgrims;
    let visa = data.visa * pilgrims;
    let food = foodDailyRate[country][packageType] * days * pilgrims;
    let subtotal = flights + hotel + visa + food;
    if (pilgrimage === "Hajj") subtotal *= 3.5;
    if (season === "Ramadan") subtotal *= 1.4;
    const ratio = subtotal / (flights + hotel + visa + food);
    flights = Math.round(flights * ratio);
    hotel = Math.round(hotel * ratio);
    visa = Math.round(visa * ratio);
    food = Math.round(food * ratio);
    const total = flights + hotel + visa + food;
    setResult({
      flights,
      hotel,
      visa,
      food,
      total,
      currency: data.currency,
      currencySymbol: data.symbol,
    });
  };

  return (
    <section className="max-w-[860px] px-[20px] sm:px-[36px] py-10">
      {/* Breadcrumb */}
      <nav className="px-[20px] sm:px-[36px] flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#8b8a87] mb-8" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-[#c9a84c] flex items-center gap-1.5 transition-colors">
          <Home className="w-3 h-3" /> Home
        </Link>
        <ChevronRight className="w-3 h-3 text-[#1a1c24]" />
        <Link href="/#all-tools" className="hover:text-[#c9a84c] transition-colors">Finance Tools</Link>
        <ChevronRight className="w-3 h-3 text-[#1a1c24]" />
        <span className="text-[#c9a84c]">Hajj &amp; Umrah Budget Calculator</span>
      </nav>

      {/* Header */}
      <header className="px-[20px] sm:px-[36px] mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(201,168,76,0.05)] border border-[rgba(201,168,76,0.1)] text-[#c9a84c] text-[10px] font-bold uppercase tracking-widest mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" /> Islamic Finance 2026
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-[#e6e3db] leading-[1.1] mb-4">
          Hajj &amp; Umrah Cost Calculator 2026
        </h1>
        <p className="text-[#87847d] text-sm max-w-2xl leading-relaxed">
          Estimate your complete Hajj or Umrah journey cost for 2026 — by country, pilgrimage type, package, and group size.
        </p>
      </header>

      {/* Calculator Card */}
      <div className="bg-[#1e293b] rounded-[24px] p-8 shadow-2xl">
        {/* Row 1 – Pilgrimage Type */}
        <div className="mb-6 flex gap-4">
          <button
            type="button"
            onClick={() => { setPilgrimage('Umrah'); setDuration('7 Days'); }}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
              pilgrimage === 'Umrah' ? 'bg-[#c9a84c] text-black' : 'bg-[#1e293b] text-[#87847d] hover:text-[#e6e3db]'
            }`}
          >
            Umrah
          </button>
          <button
            type="button"
            onClick={() => { setPilgrimage('Hajj'); setDuration('21 Days'); setSeason('Regular'); }}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
              pilgrimage === 'Hajj' ? 'bg-[#c9a84c] text-black' : 'bg-[#1e293b] text-[#87847d] hover:text-[#e6e3db]'
            }`}
          >
            Hajj
          </button>
        </div>

        {/* Row 2 – Country of Departure */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-[#87847d]">Country of Departure</label>
          <select
            className="w-full bg-[#0c0e16] border border-[rgba(255,255,255,0.07)] rounded-[14px] p-3 text-[#e6e3db] focus:outline-none focus:border-[#c9a84c]"
            value={country}
            onChange={e => setCountry(e.target.value)}
          >
            <option>Pakistan</option>
            <option>India</option>
            <option>Bangladesh</option>
            <option>United Kingdom</option>
            <option>United States</option>
            <option>Canada</option>
            <option>UAE</option>
            <option>Saudi Arabia</option>
            <option>Malaysia</option>
            <option>Other</option>
          </select>
        </div>

        {/* Row 3 – Package Type */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-[#87847d]">Package Type</label>
          <select
            className="w-full bg-[#0c0e16] border border-[rgba(255,255,255,0.07)] rounded-[14px] p-3 text-[#e6e3db] focus:outline-none focus:border-[#c9a84c]"
            value={packageType}
            onChange={e => setPackageType(e.target.value)}
          >
            <option>Economy</option>
            <option>Standard</option>
            <option>Premium / Luxury</option>
          </select>
        </div>

        {/* Row 4 – Duration of Stay */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-[#87847d]">Duration of Stay</label>
          <select
            className="w-full bg-[#0c0e16] border border-[rgba(255,255,255,0.07)] rounded-[14px] p-3 text-[#e6e3db] focus:outline-none focus:border-[#c9a84c]"
            value={duration}
            onChange={e => setDuration(e.target.value)}
          >
            {pilgrimage === "Umrah" ? (
              <>
                <option>7 Days</option>
                <option>10 Days</option>
                <option>14 Days</option>
                <option>21 Days</option>
              </>
            ) : (
              <>
                <option>21 Days</option>
                <option>28 Days</option>
                <option>35 Days</option>
                <option>40 Days</option>
              </>
            )}
          </select>
        </div>

        {/* Row 5 – Number of Pilgrims */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-[#87847d]">Number of Pilgrims</label>
          <input
            type="number"
            min={1}
            max={20}
            value={pilgrims}
            onChange={e => setPilgrims(parseInt(e.target.value) || 1)}
            className="w-full bg-[#0c0e16] border border-[rgba(255,255,255,0.07)] rounded-[14px] p-3 text-[#e6e3db] focus:outline-none focus:border-[#c9a84c]"
          />
        </div>

        {/* Row 6 – Travel Season */}
        {pilgrimage === 'Umrah' && (
          <>
            <div className="mb-6 flex gap-4 items-center">
              <button
                type="button"
                onClick={() => setSeason('Regular')}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  season === 'Regular' ? 'bg-[#c9a84c] text-black' : 'bg-[#1e293b] text-[#87847d] hover:text-[#e6e3db]'
                }`}
              >
                Regular Season
              </button>
              <button
                type="button"
                onClick={() => setSeason('Ramadan')}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  season === 'Ramadan' ? 'bg-[#c9a84c] text-black' : 'bg-[#1e293b] text-[#87847d] hover:text-[#e6e3db]'
                }`}
              >
                Ramadan Season
              </button>
            </div>
            <p className="text-[#87847d] text-xs mb-4">⚠️ Ramadan packages are typically 30–50% more expensive.</p>
          </>
        )}

        {/* Estimate Button */}
        <button
          type="button"
          className="w-full bg-[#c9a84c] hover:bg-[#b89844] text-black font-bold py-3 rounded-xl transition-colors"
          onClick={handleEstimate}
        >
          Estimate My Budget 🕋
        </button>

        {/* Result Section */}
        {result ? (
          <div className="mt-6 bg-[#0c0e16] rounded-[14px] p-5 border border-[rgba(201,168,76,0.2)]">
            <h2 className="text-[#e6e3db] font-semibold mb-4 text-base">
              Estimated Budget Breakdown
              <span className="ml-2 text-xs text-[#c9a84c] font-normal">({result.currency})</span>
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-[#87847d]">
                <span>✈️ Flights</span>
                <span className="text-[#e6e3db] font-medium">{result.currencySymbol}{result.flights.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-[#87847d]">
                <span>🏨 Hotel</span>
                <span className="text-[#e6e3db] font-medium">{result.currencySymbol}{result.hotel.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-[#87847d]">
                <span>📋 Visa &amp; Insurance</span>
                <span className="text-[#e6e3db] font-medium">{result.currencySymbol}{result.visa.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-[#87847d]">
                <span>🍽️ Food &amp; Transport</span>
                <span className="text-[#e6e3db] font-medium">{result.currencySymbol}{result.food.toLocaleString()}</span>
              </div>
              <hr className="border-[rgba(255,255,255,0.1)]" />
              <div className="flex justify-between font-bold text-base">
                <span className="text-[#e6e3db]">Total Estimate</span>
                <span className="text-[#c9a84c]">{result.currencySymbol}{result.total.toLocaleString()}</span>
              </div>
            </div>
            <p className="mt-4 text-[#87847d] text-xs italic">
              * This is an estimate only. Actual costs vary by agency, availability, and exchange rates. Always confirm with a licensed Hajj/Umrah operator.
            </p>
          </div>
        ) : (
          <div className="mt-6 bg-[#0c0e16] rounded-[14px] p-5 border border-[rgba(255,255,255,0.05)]">
            <h2 className="text-[#e6e3db] font-semibold mb-4">Estimated Budget Breakdown</h2>
            <div className="space-y-3 text-sm text-[#87847d]">
              <div className="flex justify-between"><span>✈️ Flights</span><span>—</span></div>
              <div className="flex justify-between"><span>🏨 Hotel</span><span>—</span></div>
              <div className="flex justify-between"><span>📋 Visa &amp; Insurance</span><span>—</span></div>
              <div className="flex justify-between"><span>🍽️ Food &amp; Transport</span><span>—</span></div>
              <hr className="border-[rgba(255,255,255,0.1)] my-2" />
              <div className="flex justify-between font-bold text-[#e6e3db]"><span>Total Estimate</span><span>—</span></div>
            </div>
            <p className="mt-2 text-[#87847d] text-xs">Enter your details above and click Estimate to see your breakdown.</p>
          </div>
        )}
      </div>
    </section>
  );
}
