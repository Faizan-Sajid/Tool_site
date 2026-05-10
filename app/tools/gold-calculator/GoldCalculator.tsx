"use client";

import React, { useState, useEffect } from "react"; 
import Link from "next/link"
import {
  TrendingUp,
  Calculator,
  History,
  Coins,
  RefreshCcw,
  ChevronDown,
  ExternalLink,
  ArrowUpRight,
  Info
} from "lucide-react";
import { fetchGoldPrices } from "./actions";

interface GoldLiveData {
  spotPrice: number;
  rates: {
    [key: string]: {
      [karat: string]: number;
    };
  };
  lastUpdated: string;
}

export default function GoldCalculator() {
  // 1. State Initialization
  const [activeTab, setActiveTab] = useState<"prices" | "value" | "zakat" | "converter">("prices");
  const [currency, setCurrency] = useState<"AED" | "SAR" | "KWD" | "USD">("AED");
  const [liveData, setLiveData] = useState<GoldLiveData | null>(null);
  const [loading, setLoading] = useState(true);

  // Value Calculator State
  const [valWeight, setValWeight] = useState("");
  const [valPurity, setValPurity] = useState("24K");
  const [valUnit, setValUnit] = useState("Gram");
  const [valCurrency, setValCurrency] = useState<"AED" | "SAR" | "KWD" | "USD">("AED");
  const [valMakingCharge, setValMakingCharge] = useState("");

  // Zakat State
  const [zakItems, setZakItems] = useState([{ weight: "", purity: "24K" }]);
  const [zakCurrency, setZakCurrency] = useState<"AED" | "SAR" | "USD" | "KWD">("AED");
  const [zakResult, setZakResult] = useState<{ totalWeight: number; totalValue: number; zakatDue: number; nisabMet: boolean } | null>(null);

  // Converter State
  const [convValue, setConvValue] = useState("");
  const [convFrom, setConvFrom] = useState("Gram");
  const [convResults, setConvResults] = useState<{ [key: string]: string } | null>(null);

  // Validation State
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchGoldPrices();
        setLiveData(data);
      } catch (error) {
        console.error("Failed to fetch gold prices:", error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // Helper for formatting
  const formatPrice = (price: number, curr: string) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: curr === 'KWD' ? 3 : 2,
      maximumFractionDigits: curr === 'KWD' ? 3 : 2,
    }).format(price);
  };

  // Zakat Calculation Logic
  const calculateZakat = () => {
    if (!liveData) return;
    
    let totalWeight24K = 0;
    let totalValue = 0;
    const hasError = zakItems.some((item, index) => {
      const weight = parseFloat(item.weight);
      if (!item.weight || isNaN(weight) || weight <= 0) {
        setErrors(prev => ({ ...prev, [`zakWeight_${index}`]: "Please enter a valid weight" }));
        return true;
      }
      return false;
    });

    if (hasError) return;

    zakItems.forEach(item => {
      const weight = parseFloat(item.weight);
      const purityMultiplier = parseInt(item.purity) / 24;
      const weight24K = weight * purityMultiplier;
      totalWeight24K += weight24K;
      totalValue += weight24K * liveData.rates[zakCurrency]["24K"];
    });

    const NISAB_THRESHOLD = 87.48;
    const nisabMet = totalWeight24K >= NISAB_THRESHOLD;
    const zakatDue = nisabMet ? totalValue * 0.025 : 0;

    setZakResult({ totalWeight: totalWeight24K, totalValue, zakatDue, nisabMet });
    setErrors({});
  };

  // Converter Logic
  const handleConvert = () => {
    const amount = parseFloat(convValue);
    if (!convValue || isNaN(amount) || amount <= 0) {
      setErrors({ convValue: "Please enter a valid amount" });
      return;
    }

    const unitsToGrams: { [key: string]: number } = {
      Gram: 1,
      Tola: 11.664,
      "Troy Ounce": 31.1035,
      Kilogram: 1000,
      Masha: 0.972,
    };

    const grams = amount * unitsToGrams[convFrom];
    const newResults = {
      GRAM: grams.toFixed(3),
      TOLA: (grams / 11.664).toFixed(3),
      "TROY OZ": (grams / 31.1035).toFixed(3),
      KILOGRAM: (grams / 1000).toFixed(3),
      MASHA: (grams / 0.972).toFixed(3),
      GRAIN: (grams * 15.432).toFixed(3),
    };

    setConvResults(newResults);
    setErrors({});
  };

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-9">

      {/* Tab Navigation - Starts directly after server-rendered header */}
      <div className="relative border-b border-[#1a1c24] mb-8 md:mb-12">
        <nav className="flex items-center gap-4 md:gap-8 overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {[
            { id: "prices", label: "Live Prices", icon: TrendingUp },
            { id: "value", label: "Value Calc", icon: Calculator },
            { id: "zakat", label: "Zakat", icon: Coins },
            { id: "converter", label: "Converter", icon: RefreshCcw },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2.5 py-4 border-b-2 transition-all duration-300 whitespace-nowrap group flex-shrink-0 ${
                activeTab === tab.id
                  ? "border-[#c9a84c] text-white"
                  : "border-transparent text-[#3e3c38] hover:text-[#87847d]"
              }`}
            >
              <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? "text-[#c9a84c]" : "text-current"}`} />
              <span className="text-[12px] md:text-[13px] font-bold uppercase tracking-wider">{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>
      {/* 4. Tab Content */}
      {activeTab === "prices" && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">

          {/* Card 1: Spot Price Banner */}
          <div className="bg-[#131620] border border-[#1a1c24] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden group">
            {/* Subtle Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#c9a84c05] to-transparent pointer-events-none" />

            <div className="relative z-10 w-full md:w-auto text-center md:text-left">
              <span className="text-[11px] font-bold text-[#3e3c38] uppercase tracking-[0.2em] mb-3 block">
                Gold Spot Price (XAU/USD)
              </span>
              <div className="flex flex-col md:flex-row items-center gap-4">
                {loading ? (
                  <div className="h-[56px] w-[200px] bg-[#1a1c24] animate-pulse rounded-lg" />
                ) : (
                  <span className="text-[48px] md:text-[56px] font-[var(--font-serif)] text-white leading-none tracking-tight">
                    ${liveData ? formatPrice(liveData.spotPrice, 'USD') : '2,350.50'}
                  </span>
                )}
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2dd4a010] border border-[#2dd4a015]">
                  <ArrowUpRight className="w-4 h-4 text-[#2dd4a0]" />
                  <span className="text-[13px] font-bold text-[#2dd4a0]">+$23.50 (+0.49%)</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 flex flex-col items-center md:items-end gap-3">
              <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#0c0e16] border border-[#1a1c24]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2dd4a0] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2dd4a0]"></span>
                </span>
                <span className="text-[11px] font-bold uppercase tracking-widest text-white">Live</span>
              </div>
              <p className="text-[10px] font-bold text-[#3e3c38] uppercase tracking-[0.15em]">Updates every 24h (ISR)</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Card 2: Rates Per Gram */}
            <div className="lg:col-span-8 bg-[#131620] border border-[#1a1c24] rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
                <h2 className="text-white text-[17px] font-medium tracking-tight">Gold Rates Per Gram</h2>

                <div className="flex p-1 bg-[#0c0e16] rounded-xl border border-[#1a1c24]">
                  {(["AED", "SAR", "KWD", "USD"] as const).map((curr) => (
                    <button
                      key={curr}
                      onClick={() => setCurrency(curr)}
                      className={`px-4 py-2 rounded-lg text-[11px] font-bold transition-all duration-300 ${
                        currency === curr
                          ? "bg-[#131620] text-[#c9a84c] shadow-lg border border-[#1a1c24]"
                          : "text-[#3e3c38] hover:text-[#87847d]"
                      }`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {[
                  { k: "24K", u: "99.9% Pure" },
                  { k: "22K", u: "Retail Std" },
                  { k: "21K", u: "Jewelry Grade" },
                  { k: "18K", u: "18 Carat" },
                ].map((item) => (
                  <div key={item.k} className="p-5 md:p-6 rounded-2xl bg-[#1a1e2e] border border-white/[0.03] hover:border-[#c9a84c40] transition-all duration-300 group text-center sm:text-left">
                    <span className="text-[#c9a84c] text-[12px] font-bold uppercase tracking-widest mb-4 block">{item.k}</span>
                    <div className="mb-1">
                      {loading ? (
                        <div className="h-[28px] w-full bg-[#131620] animate-pulse rounded" />
                      ) : (
                        <span className="text-[24px] md:text-[28px] font-medium text-white tracking-tight leading-none">
                          {liveData ? formatPrice(liveData.rates[currency][item.k], currency) : '--'}
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] font-bold text-[#3e3c38] uppercase tracking-wider">{currency}/g</span>
                    <div className="mt-6 pt-4 border-t border-white/[0.03] text-[9px] text-[#3e3c38] group-hover:text-[#87847d] transition-colors uppercase tracking-widest font-bold">
                      {item.u}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 3: GCC Market Comparison */}
            <div className="lg:col-span-4 bg-[#131620] border border-[#1a1c24] rounded-2xl flex flex-col">
              <div className="px-6 md:px-8 py-6 border-b border-[#1a1c24]">
                <h2 className="text-white text-[15px] font-medium tracking-tight">GCC Market Comparison</h2>
                <p className="text-[10px] text-[#3e3c38] font-bold uppercase tracking-widest mt-1">24K Gold per Gram</p>
              </div>
              <div className="flex-1 p-2 overflow-x-auto no-scrollbar">
                <div className="min-w-[280px] sm:min-w-0">
                  {[
  { n: "UAE", f: "🇦🇪", r: "AED", u: "AED" },
  { n: "Saudi Arabia", f: "🇸🇦", r: "SAR", u: "SAR" },
  { n: "Kuwait", f: "🇰🇼", r: "KWD", u: "KWD" },
  { n: "Qatar", f: "🇶🇦", r: "AED", u: "QAR" },
  { n: "Bahrain", f: "🇧🇭", r: "SAR", u: "BHD" },
].map((row, i) => (
                    <div
                      key={row.n}
                      className={`flex items-center justify-between px-6 py-4 rounded-xl hover:bg-[#1a1e2e] transition-colors group ${
                        i !== 4 ? "border-b border-[#1a1c24]" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{row.f}</span>
                        <span className="text-[13px] text-[#87847d] font-light group-hover:text-white transition-colors">{row.n}</span>
                      </div>
                      <div className="text-right">
                        {loading ? (
                          <div className="h-[14px] w-[60px] bg-[#1a1c24] animate-pulse rounded mb-1" />
                        ) : (
                          <span className="text-[14px] font-medium text-white block">
                            {liveData ? formatPrice(liveData.rates[row.r]["24K"], row.r) : '--'}
                          </span>
                        )}
                        <span className="text-[9px] font-bold text-[#3e3c38] uppercase tracking-widest">{row.u}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 bg-[#0c0e16]/50 rounded-b-2xl border-t border-[#1a1c24]">
                <button className="w-full flex items-center justify-center gap-2 text-[11px] font-bold text-[#c9a84c] uppercase tracking-widest hover:text-white transition-colors">
                  View Full GCC Table <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {activeTab === "value" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500">

          {/* Left Column: Inputs */}
          <div className="space-y-6">
            <div className="bg-[#131620] border border-[#1a1c24] rounded-2xl p-6 sm:p-8">
              <h2 className="text-white text-[17px] font-medium mb-8 flex items-center gap-2">
                <Calculator className="w-4 h-4 text-[#c9a84c]" />
                Calculate Gold Value
              </h2>

              <div className="space-y-6">
                {/* Weight & Unit */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-[#3e3c38] uppercase tracking-wider">Weight</label>
                    <input
                      type="number"
                      value={valWeight}
                      onChange={(e) => setValWeight(e.target.value)}
                      placeholder="0.00"
                      className="w-full bg-[#0c0e16] border border-[#1a1c24] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#c9a84c40] transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-[#3e3c38] uppercase tracking-wider">Unit</label>
                    <div className="relative">
                      <select
                        value={valUnit}
                        onChange={(e) => setValUnit(e.target.value)}
                        className="w-full appearance-none bg-[#0c0e16] border border-[#1a1c24] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#c9a84c40] transition-colors cursor-pointer"
                      >
                        <option>Gram</option>
                        <option>Tola</option>
                        <option>Ounce</option>
                        <option>Kilogram</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3e3c38] pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Karat & Currency */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-[#3e3c38] uppercase tracking-wider">Karat (Purity)</label>
                    <div className="relative">
                      <select
                        value={valPurity}
                        onChange={(e) => setValPurity(e.target.value)}
                        className="w-full appearance-none bg-[#0c0e16] border border-[#1a1c24] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#c9a84c40] transition-colors cursor-pointer"
                      >
                        <option value="24K">24K (99.9%)</option>
                        <option value="22K">22K (91.6%)</option>
                        <option value="21K">21K (87.5%)</option>
                        <option value="18K">18K (75.0%)</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3e3c38] pointer-events-none" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-[#3e3c38] uppercase tracking-wider">Currency</label>
                    <div className="relative">
                      <select
                        value={valCurrency}
                        onChange={(e) => setValCurrency(e.target.value as any)}
                        className="w-full appearance-none bg-[#0c0e16] border border-[#1a1c24] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#c9a84c40] transition-colors cursor-pointer"
                      >
                        <option value="AED">AED (UAE Dirham)</option>
                        <option value="SAR">SAR (Saudi Riyal)</option>
                        <option value="KWD">KWD (Kuwaiti Dinar)</option>
                        <option value="USD">USD (US Dollar)</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3e3c38] pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Making Charges (Optional) */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label className="text-[11px] font-bold text-[#3e3c38] uppercase tracking-wider">Making Charges</label>
                    <span className="text-[10px] text-[#3e3c38] font-medium">Optional</span>
                  </div>
                  <div className="relative">
                    <input
                      type="number"
                      value={valMakingCharge}
                      onChange={(e) => setValMakingCharge(e.target.value)}
                      placeholder="0.00"
                      className="w-full bg-[#0c0e16] border border-[#1a1c24] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#c9a84c40] transition-colors pl-10"
                    />
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[11px] font-bold text-[#3e3c38]">%</span>
                  </div>
                </div>

                <div className="pt-4 space-y-4">
                  <button className="w-full bg-[#c9a84c] hover:bg-[#b8973d] text-[#0c0e16] font-bold py-4 rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(201,168,76,0.2)] flex items-center justify-center gap-2 uppercase tracking-widest text-[13px]">
                    <Calculator className="w-4 h-4" />
                    Update Calculation
                  </button>
                  <button
                    onClick={() => {
                      setValWeight("");
                      setValMakingCharge("");
                    }}
                    className="w-full bg-transparent border border-[#1a1c24] hover:bg-[#1a1c24] text-[#87847d] font-bold py-3 rounded-xl transition-all duration-300 text-[13px] uppercase tracking-wider"
                  >
                    Reset Fields
                  </button>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-[#c9a84c20] bg-[#c9a84c05] flex gap-4">
              <Info className="w-5 h-5 text-[#c9a84c] shrink-0" />
              <p className="text-[12px] text-[#87847d] leading-relaxed">
                Calculations are based on real-time market spot prices. Making charges and VAT (5% in UAE) may vary by retailer.
              </p>
            </div>
          </div>

          {/* Right Column: Results */}
          <div className="relative">
            <div className="bg-[#131620] border border-[#1a1c24] rounded-2xl overflow-hidden sticky top-8">
              {/* Gold Top Bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#c9a84c]" />

              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-white text-[15px] font-medium uppercase tracking-wider">Result Summary</h2>
                  <div className="flex items-center gap-2 text-[#3e3c38]">
                    <History className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase">Estimated</span>
                  </div>
                </div>

                {(() => {
                  const weight = parseFloat(valWeight) || 0;
                  const makingPercent = parseFloat(valMakingCharge) || 0;
                  const unitMultiplier = valUnit === "Tola" ? 11.664 : valUnit === "Ounce" ? 31.103 : valUnit === "Kilogram" ? 1000 : 1;
                  const weightInGrams = weight * unitMultiplier;
                  const pricePerGram = liveData ? liveData.rates[valCurrency][valPurity] : 0;
                  const baseValue = weightInGrams * pricePerGram;
                  const makingChargeValue = baseValue * (makingPercent / 100);
                  const totalValue = baseValue + makingChargeValue;

                  return (
                    <>
                      <div className="space-y-1">
                        {[
                          { label: "Weight Entered", value: `${weight.toFixed(2)} ${valUnit}s` },
                          { label: "Pure Gold Content", value: `${(weightInGrams * (parseInt(valPurity) / 24)).toFixed(2)} Grams` },
                          { label: `Live Gold Price (${valPurity})`, value: `${formatPrice(pricePerGram, valCurrency)} ${valCurrency}` },
                          { label: "Base Gold Value", value: `${formatPrice(baseValue, valCurrency)} ${valCurrency}` },
                          { label: `Making Charges (${makingPercent}%)`, value: `${formatPrice(makingChargeValue, valCurrency)} ${valCurrency}` },
                        ].map((row, i) => (
                          <div key={i} className="flex justify-between py-4 border-b border-[#1a1c24] last:border-0">
                            <span className="text-[13px] text-[#87847d] font-light">{row.label}</span>
                            <span className="text-[13px] text-white font-medium">{row.value}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 p-8 rounded-2xl bg-[#0c0e16] border border-[#1a1c24] text-center">
                        <span className="block text-[11px] font-bold text-[#3e3c38] uppercase tracking-[0.2em] mb-3">Estimated Total Value</span>
                        <div className="text-[42px] font-[var(--font-serif)] text-[#c9a84c] leading-none mb-2">
                          {formatPrice(totalValue, valCurrency)} <span className="text-xl font-sans uppercase">{valCurrency}</span>
                        </div>
                        <p className="text-[10px] text-[#3e3c38] font-bold uppercase tracking-widest mt-4">Inclusive of 0% VAT where applicable</p>
                      </div>
                    </>
                  );
                })()}

                <div className="mt-8 flex gap-3">
                  <button className="flex-1 bg-[#1a1c24] hover:bg-[#252836] text-white text-[11px] font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 uppercase tracking-wider">
                    Download PDF
                  </button>
                  <button className="flex-1 bg-[#1a1c24] hover:bg-[#252836] text-white text-[11px] font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 uppercase tracking-wider">
                    Share Link
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 max-w-[860px] lg:col-span-2">
            <h2 className="text-xl font-medium text-[#e6e3db] mb-4">How to Use the Free Gold Value Calculator</h2>
            <div className="space-y-4 text-[15px] text-[#87847d] leading-relaxed">
              <p>
                Our **Free Gold Value Calculator** is designed to help you determine the exact worth of your gold items based on current market rates. Whether you have **Gold Price 22K** jewelry or **Gold Price 24K** investment bars, this tool provides professional-grade precision for your calculations.
              </p>
              <p>
                To get an accurate valuation, simply enter the weight of your gold and select its purity (karat). The calculator automatically fetches the latest market rates to provide a base value. If you are buying from a retailer, don't forget to include the "Making Charges" (labor cost) and applicable VAT (5% in the UAE). Understanding these components ensures you never overpay for your gold purchases and helps you track the appreciation of your assets over time.
              </p>
            </div>
          </div>
        </div>
      )}
      {activeTab === "zakat" && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">

          {/* 1. Nisab Information Banner */}
          <div className="bg-[#131620] border border-[#1a1c24] rounded-2xl overflow-hidden relative group">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#c9a84c]" />
            <div className="p-6 sm:p-8 flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <span className="text-[11px] font-bold text-[#3e3c38] uppercase tracking-[0.2em] mb-2 block">Nisab Threshold 2026</span>
                <div className="text-[32px] sm:text-[42px] font-[var(--font-serif)] text-white leading-none">
                  87.48<span className="text-xl font-sans ml-2 text-[#87847d]">grams</span>
                </div>
                <p className="text-[10px] text-[#3e3c38] font-bold uppercase tracking-widest mt-3">Based on 24K Gold Price</p>
              </div>
              <div className="text-center md:text-right">
                <span className="text-[11px] font-bold text-[#3e3c38] uppercase tracking-[0.2em] mb-2 block">Current Nisab Value</span>
                <div className="text-[28px] font-medium text-[#c9a84c] mb-1">
                  {liveData ? formatPrice(87.48 * liveData.rates[zakCurrency]["24K"], zakCurrency) : '50,113'} {zakCurrency}
                </div>
                <div className="text-[13px] text-[#3e3c38] font-medium italic">
                  â‰ˆ ${liveData ? formatPrice(87.48 * liveData.rates["USD"]["24K"], "USD") : '13,645.00'} USD
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Left Column: Gold Holdings */}
            <div className="space-y-6">
              <div className="bg-[#131620] border border-[#1a1c24] rounded-2xl p-6 sm:p-8">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-white text-[17px] font-medium flex items-center gap-2">
                    <Coins className="w-4 h-4 text-[#c9a84c]" />
                    Your Gold Items
                  </h2>
                  <button
                    onClick={() => {
                      setZakItems([{ weight: "", purity: "24K" }]);
                      setZakResult(null);
                      setErrors({});
                    }}
                    className="text-[10px] font-bold text-[#c9a84c] uppercase tracking-widest hover:text-white transition-colors"
                  >
                    Clear All
                  </button>
                </div>

                <div className="space-y-4">
                  {zakItems.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className={`grid grid-cols-12 gap-3 p-4 rounded-xl bg-[#0c0e16] border transition-colors group ${errors[`zakWeight_${index}`] ? 'border-red-500/50' : 'border-[#1a1c24]'}`}>
                        <div className="col-span-7 space-y-1.5">
                          <label className="text-[9px] font-bold text-[#3e3c38] uppercase tracking-widest">Weight (g)</label>
                          <input
                            type="number"
                            value={item.weight}
                            onChange={(e) => {
                              const newItems = [...zakItems];
                              newItems[index].weight = e.target.value;
                              setZakItems(newItems);
                              if (errors[`zakWeight_${index}`]) {
                                const newErrors = { ...errors };
                                delete newErrors[`zakWeight_${index}`];
                                setErrors(newErrors);
                              }
                            }}
                            placeholder="0.00"
                            className="w-full bg-transparent text-white font-medium focus:outline-none placeholder:text-[#1a1c24]"
                          />
                        </div>
                        <div className="col-span-5 space-y-1.5 border-l border-[#1a1c24] pl-4">
                          <label className="text-[9px] font-bold text-[#3e3c38] uppercase tracking-widest">Purity</label>
                          <div className="relative">
                            <select
                              value={item.purity}
                              onChange={(e) => {
                                const newItems = [...zakItems];
                                newItems[index].purity = e.target.value;
                                setZakItems(newItems);
                              }}
                              className="w-full bg-transparent text-[#c9a84c] font-bold text-sm focus:outline-none appearance-none cursor-pointer"
                            >
                              <option value="24K">24K</option>
                              <option value="22K">22K</option>
                              <option value="21K">21K</option>
                              <option value="18K">18K</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      {errors[`zakWeight_${index}`] && (
                        <p className="text-[10px] text-red-500 font-medium ml-1">{errors[`zakWeight_${index}`]}</p>
                      )}
                    </div>
                  ))}

                  <button
                    onClick={() => setZakItems([...zakItems, { weight: "", purity: "24K" }])}
                    className="w-full py-4 rounded-xl border border-dashed border-[#1a1c24] bg-[rgba(201,168,76,0.02)] text-[11px] font-bold text-[#3e3c38] uppercase tracking-[0.15em] hover:bg-[rgba(201,168,76,0.05)] hover:border-[#c9a84c30] hover:text-[#c9a84c] transition-all flex items-center justify-center gap-2"
                  >
                    <span className="text-lg">+</span> Add another item
                  </button>
                </div>

                <div className="mt-8 pt-8 border-t border-[#1a1c24] space-y-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-[#3e3c38] uppercase tracking-wider">Result Currency</label>
                    <div className="grid grid-cols-4 gap-2">
                      {(["AED", "SAR", "USD", "KWD"] as const).map((curr) => (
                        <button
                          key={curr}
                          onClick={() => setZakCurrency(curr)}
                          className={`py-2 rounded-lg text-[10px] font-bold border transition-all ${
                            zakCurrency === curr
                              ? "bg-[#131620] border-[#c9a84c40] text-[#c9a84c]"
                              : "bg-[#0c0e16] border-[#1a1c24] text-[#3e3c38] hover:text-[#87847d]"
                          }`}
                        >
                          {curr}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-2">
                    <button
                      onClick={calculateZakat}
                      className="flex-[2] bg-[#c9a84c] hover:bg-[#b8973d] text-[#0c0e16] font-bold py-4 rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(201,168,76,0.2)] flex items-center justify-center gap-2 uppercase tracking-widest text-[13px]"
                    >
                      Calculate Zakat
                    </button>
                    <button
                      onClick={() => {
                        setZakItems([{ weight: "", purity: "24K" }]);
                        setZakResult(null);
                        setErrors({});
                      }}
                      className="flex-1 bg-transparent border border-[#1a1c24] hover:bg-[#1a1c24] text-[#87847d] font-bold py-4 rounded-xl transition-all duration-300 text-[11px] uppercase tracking-wider"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Results */}
            <div className="relative">
              <div className="bg-[#131620] border border-[#1a1c24] rounded-2xl overflow-hidden sticky top-8">
                <div className="p-8">
                  <div className="flex justify-between items-center mb-10">
                    <h2 className="text-white text-[15px] font-medium uppercase tracking-wider">Zakat Assessment</h2>
                    {zakResult && (
                      <div className={`flex items-center gap-2 px-3 py-1 rounded-full border transition-colors ${zakResult.nisabMet ? 'bg-[#2dd4a010] border-[#2dd4a020]' : 'bg-red-500/10 border-red-500/20'}`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${zakResult.nisabMet ? 'bg-[#2dd4a0]' : 'bg-red-500'}`} />
                        <span className={`text-[9px] font-bold uppercase tracking-widest ${zakResult.nisabMet ? 'text-[#2dd4a0]' : 'text-red-500'}`}>
                          {zakResult.nisabMet ? 'Nisab Met â€” Zakat Due' : 'Below Nisab â€” No Zakat'}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-1">
                    {[
                      { label: "Total Pure Gold (24K Equiv.)", value: `${zakResult ? zakResult.totalWeight.toFixed(2) : "0.00"} g` },
                      { label: "Total Market Value", value: `${zakResult ? formatPrice(zakResult.totalValue, zakCurrency) : "0.00"} ${zakCurrency}` },
                      { label: "Zakat Rate (Lunar)", value: "2.5%" },
                    ].map((row, i) => (
                      <div key={i} className="flex justify-between py-4 border-b border-[#1a1c24] last:border-0">
                        <span className="text-[13px] text-[#87847d] font-light">{row.label}</span>
                        <span className="text-[13px] text-white font-medium">{row.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 p-8 rounded-2xl bg-[#0c0e16] border border-[#1a1c24] text-center relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-[0.02] pointer-events-none group-hover:scale-110 transition-transform duration-700">
                      <Coins size={80} />
                    </div>
                    <span className="block text-[11px] font-bold text-[#3e3c38] uppercase tracking-[0.2em] mb-4">Total Zakat Due</span>
                    <div className="text-[48px] font-[var(--font-serif)] text-[#c9a84c] leading-none mb-2">
                      {zakResult ? formatPrice(zakResult.zakatDue, zakCurrency) : "0.00"} <span className="text-xl font-sans uppercase">{zakCurrency}</span>
                    </div>
                    <p className="text-[10px] text-[#3e3c38] font-bold uppercase tracking-widest mt-6 max-w-[200px] mx-auto leading-relaxed">
                      {zakResult?.nisabMet ? "Zakat is calculated at 2.5% of total value" : "Nisab threshold not met (87.48g)"}
                    </p>
                  </div>

                  <div className="mt-8 space-y-3">
                    <button className="w-full bg-[#1a1c24] hover:bg-[#252836] text-white text-[11px] font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 uppercase tracking-widest">
                      <ExternalLink className="w-4 h-4" /> Save Calculation
                    </button>
                    <p className="text-[10px] text-[#3e3c38] text-center px-4 leading-relaxed">
                      Note: This is a general guidance tool. For complex holdings, please consult a qualified scholar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 max-w-[860px]">
            <h2 className="text-xl font-medium text-[#e6e3db] mb-4">Zakat on Gold Calculator 2026 & Sharia Rules</h2>
            <div className="space-y-4 text-[15px] text-[#87847d] leading-relaxed">
              <p>
                Calculating your religious obligations is simplified with our **Zakat on Gold Calculator 2026**. According to Sharia principles, Zakat is mandatory on gold holdings that exceed the **Gold Nisab Threshold**. The Nisab is defined as the value of 87.48 grams (equivalent to 7.5 tola or 2.8125 troy ounces) of 24K pure gold.
              </p>
              <p>
                If your total gold weight meets or exceeds this threshold and has been in your possession for one lunar year (Hawl), you are required to pay 2.5% of its current market value as Zakat. This tool automatically calculates your total pure gold weight across different karats and determines the exact Zakat amount due in your preferred currency. It is a vital resource for ensuring your wealth remains purified and compliant with Islamic financial standards.
              </p>
            </div>
          </div>
        </div>
      )}

      {activeTab === "converter" && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
          {/* 1. Input Section */}
          <div className="bg-[#131620] border border-[#1a1c24] rounded-2xl p-6 sm:p-8">
            <h2 className="text-white text-[17px] font-medium mb-8 flex items-center gap-2">
              <RefreshCcw className="w-4 h-4 text-[#c9a84c]" />
              Gold Unit Converter
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-[#3e3c38] uppercase tracking-wider">Amount</label>
                <div className="relative">
                  <input
                    type="number"
                    value={convValue}
                    onChange={(e) => {
                      setConvValue(e.target.value);
                      if (errors.convValue) setErrors({});
                    }}
                    placeholder="Enter amount"
                    className={`w-full bg-[#0c0e16] border rounded-xl px-4 py-3 text-white focus:outline-none transition-colors ${errors.convValue ? 'border-red-500/50' : 'border-[#1a1c24] focus:border-[#c9a84c40]'}`}
                  />
                  {errors.convValue && (
                    <p className="text-[10px] text-red-500 font-medium mt-1 ml-1">{errors.convValue}</p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-[#3e3c38] uppercase tracking-wider">From Unit</label>
                <div className="relative">
                  <select
                    value={convFrom}
                    onChange={(e) => setConvFrom(e.target.value)}
                    className="w-full appearance-none bg-[#0c0e16] border border-[#1a1c24] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#c9a84c40] transition-colors cursor-pointer"
                  >
                    <option value="Gram">Gram</option>
                    <option value="Tola">Tola</option>
                    <option value="Troy Ounce">Troy Ounce</option>
                    <option value="Kilogram">Kilogram</option>
                    <option value="Masha">Masha</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3e3c38] pointer-events-none" />
                </div>
              </div>
            </div>

            <button
              onClick={handleConvert}
              className="w-full bg-[#c9a84c] hover:bg-[#b8973d] text-[#0c0e16] font-bold py-4 rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(201,168,76,0.2)] flex items-center justify-center gap-2 uppercase tracking-widest text-[13px]"
            >
              <RefreshCcw className="w-4 h-4" />
              Convert Units
            </button>
          </div>

          {/* 2. Conversion Results Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-center">
            {[
              { unit: "GRAM", value: convResults ? convResults.GRAM : "0.000", sub: "Base Unit" },
              { unit: "TOLA", value: convResults ? convResults.TOLA : "0.000", sub: "South Asia" },
              { unit: "TROY OZ", value: convResults ? convResults["TROY OZ"] : "0.000", sub: "Intl Market" },
              { unit: "KILOGRAM", value: convResults ? convResults.KILOGRAM : "0.000", sub: "Bulk Standard" },
              { unit: "MASHA", value: convResults ? convResults.MASHA : "0.000", sub: "Traditional" },
              { unit: "GRAIN", value: convResults ? convResults.GRAIN : "0.000", sub: "Micro Unit" },
            ].map((item) => (
              <div key={item.unit} className="p-6 rounded-2xl bg-[#131620] border border-[#1a1c24] hover:border-[#c9a84c40] transition-all duration-300 group">
                <span className="text-[#3e3c38] text-[10px] font-bold uppercase tracking-[0.2em] mb-4 block group-hover:text-[#c9a84c] transition-colors">
                  {item.unit}
                </span>
                <div className="mb-1">
                  <span className="text-[28px] md:text-[32px] font-medium text-[#e6e3db] tracking-tight">{item.value}</span>
                </div>
                <div className="mt-4 pt-4 border-t border-white/[0.03] text-[9px] text-[#3e3c38] uppercase tracking-widest font-bold">
                  {item.sub}
                </div>
              </div>
            ))}
          </div>

          {/* 3. Quick Reference Table */}
          <div className="bg-[#131620] border border-[#1a1c24] rounded-2xl overflow-hidden">
            <div className="px-8 py-6 border-b border-[#1a1c24] bg-[#0c0e16]/50">
              <h2 className="text-white text-[15px] font-medium tracking-tight">Standard Conversion Reference</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#1a1c24]">
                    <th className="px-8 py-4 text-[11px] font-bold text-[#3e3c38] uppercase tracking-widest">Base Unit</th>
                    <th className="px-8 py-4 text-[11px] font-bold text-[#3e3c38] uppercase tracking-widest">Equivalent In Grams</th>
                    <th className="px-8 py-4 text-[11px] font-bold text-[#3e3c38] uppercase tracking-widest">Equivalent In Tola</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1a1c24]">
                  {[
                    { base: "1 Tola", g: "11.664 g", t: "1.000 Tola" },
                    { base: "1 Troy Ounce", g: "31.103 g", t: "2.666 Tola" },
                    { base: "1 Gram", g: "1.000 g", t: "0.085 Tola" },
                    { base: "1 Masha", g: "0.972 g", t: "0.083 Tola" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-[#1a1e2e] transition-colors group">
                      <td className="px-8 py-5 text-[14px] text-[#e6e3db] font-medium">{row.base}</td>
                      <td className="px-8 py-5 text-[14px] text-[#87847d] group-hover:text-white transition-colors">{row.g}</td>
                      <td className="px-8 py-5 text-[14px] text-[#87847d] group-hover:text-white transition-colors">{row.t}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      

      {/* ===== Explore Other Tools ===== */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Explore Other QuickCalcs Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/tools/zakat-calculator" className="block p-4 rounded-xl border border-gray-600 hover:border-blue-400 hover:shadow-md transition-all">
            <div className="flex items-start gap-3">
              <span className="text-2xl">☪️</span>
              <div>
                <p className="font-semibold text-white">Zakat Calculator</p>
                <p className="text-sm text-gray-300 mt-1">Calculate Zakat on savings, gold, investments & business assets. Nisab auto-updated.</p>
              </div>
            </div>
          </Link>
          <Link href="/tools/uae-gratuity-calculator" className="block p-4 rounded-xl border border-gray-600 hover:border-blue-400 hover:shadow-md transition-all">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🧮</span>
              <div>
                <p className="font-semibold text-white">UAE Gratuity Calculator</p>
                <p className="text-sm text-gray-300 mt-1">End-of-service benefits as per UAE Labour Law 2026. Limited & unlimited contracts.</p>
              </div>
            </div>
          </Link>
          <Link href="/tools/ksa-gosi-calculator" className="block p-4 rounded-xl border border-gray-600 hover:border-blue-400 hover:shadow-md transition-all">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🛡️</span>
              <div>
                <p className="font-semibold text-white">Saudi GOSI Calculator</p>
                <p className="text-sm text-gray-300 mt-1">GOSI contributions for Saudi nationals and expats. Updated 2026 KSA rates.</p>
              </div>
            </div>
          </Link>
          <Link href="/tools/pakistan-freelancer-tax-calculator" className="block p-4 rounded-xl border border-gray-600 hover:border-blue-400 hover:shadow-md transition-all">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🧾</span>
              <div>
                <p className="font-semibold text-white">Pakistan Freelancer Tax Calculator</p>
                <p className="text-sm text-gray-300 mt-1">FBR income tax for freelancers. Supports PSEB 0.25%, non-PSEB 1%, non-filer 2%.</p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

