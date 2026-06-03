"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  Calculator,
  ChevronDown,
  Coins,
  History,
  Info,
  RefreshCcw,
} from "lucide-react";
import { fetchGoldPrices } from "./actions";

type Currency = "AED" | "SAR" | "KWD" | "USD" | "QAR" | "BHD" | "PKR";
type Karat = "24K" | "22K" | "21K" | "18K";
type WeightUnit = "Gram" | "Tola" | "Troy Ounce" | "Kilogram" | "Masha" | "Ratti";

interface GoldPriceData {
  spotPrice: number;
  rates: Record<Currency, Record<Karat, number>>;
  lastUpdated: string;
}

const currencies: { code: Currency; label: string }[] = [
  { code: "AED", label: "AED (UAE Dirham)" },
  { code: "PKR", label: "PKR (Pakistani Rupee)" },
  { code: "SAR", label: "SAR (Saudi Riyal)" },
  { code: "QAR", label: "QAR (Qatari Riyal)" },
  { code: "BHD", label: "BHD (Bahraini Dinar)" },
  { code: "KWD", label: "KWD (Kuwaiti Dinar)" },
  { code: "USD", label: "USD (US Dollar)" },
];

const unitsToGrams: Record<WeightUnit, number> = {
  Gram: 1,
  Tola: 11.664,
  "Troy Ounce": 31.1034768,
  Kilogram: 1000,
  Masha: 0.972,
  Ratti: 0.1215,
};

const purityMultipliers: Record<Karat, number> = {
  "24K": 0.999,
  "22K": 22 / 24,
  "21K": 21 / 24,
  "18K": 18 / 24,
};

const tabs = [
  { id: "value", label: "Value Calc", icon: Calculator },
  { id: "zakat", label: "Zakat", icon: Coins },
  { id: "converter", label: "Converter", icon: RefreshCcw },
] as const;

export default function GoldCalculator() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]["id"]>("value");
  const [priceData, setPriceData] = useState<GoldPriceData | null>(null);
  const [loading, setLoading] = useState(true);

  const [valWeight, setValWeight] = useState("");
  const [valPurity, setValPurity] = useState<Karat>("24K");
  const [valUnit, setValUnit] = useState<WeightUnit>("Gram");
  const [valCurrency, setValCurrency] = useState<Currency>("AED");
  const [valMakingCharge, setValMakingCharge] = useState("");

  const [zakItems, setZakItems] = useState<{ weight: string; purity: Karat }[]>([{ weight: "", purity: "24K" }]);
  const [zakCurrency, setZakCurrency] = useState<Currency>("AED");
  const [zakResult, setZakResult] = useState<{ totalWeight: number; totalValue: number; zakatDue: number; nisabMet: boolean } | null>(null);

  const [convValue, setConvValue] = useState("");
  const [convFrom, setConvFrom] = useState<WeightUnit>("Gram");
  const [convResults, setConvResults] = useState<Record<string, string> | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchGoldPrices();
        setPriceData(data as GoldPriceData);
      } catch (error) {
        console.error("Failed to fetch gold price estimates:", error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  const formatPrice = (price: number, curr: Currency | "USD") => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: curr === "KWD" || curr === "BHD" ? 3 : 2,
      maximumFractionDigits: curr === "KWD" || curr === "BHD" ? 3 : 2,
    }).format(price);
  };

  const valueResult = useMemo(() => {
    const weight = Number.parseFloat(valWeight);
    const makingPercent = Number.parseFloat(valMakingCharge || "0");
    const safeWeight = Number.isFinite(weight) && weight > 0 ? weight : 0;
    const safeMakingPercent = Number.isFinite(makingPercent) && makingPercent > 0 ? makingPercent : 0;
    const weightInGrams = safeWeight * unitsToGrams[valUnit];
    const pricePerGram = priceData ? priceData.rates[valCurrency][valPurity] : 0;
    const baseValue = weightInGrams * pricePerGram;
    const makingChargeValue = baseValue * (safeMakingPercent / 100);
    const totalValue = baseValue + makingChargeValue;

    return {
      weight: safeWeight,
      makingPercent: safeMakingPercent,
      weightInGrams,
      pureGoldContent: weightInGrams * purityMultipliers[valPurity],
      pricePerGram,
      baseValue,
      makingChargeValue,
      totalValue,
    };
  }, [priceData, valCurrency, valMakingCharge, valPurity, valUnit, valWeight]);

  const calculateValue = () => {
    const weight = Number.parseFloat(valWeight);
    const makingPercent = Number.parseFloat(valMakingCharge || "0");
    const newErrors: Record<string, string> = {};

    if (!valWeight || !Number.isFinite(weight) || weight <= 0) {
      newErrors.valWeight = "Please enter a weight greater than zero.";
    }

    if (valMakingCharge && (!Number.isFinite(makingPercent) || makingPercent < 0)) {
      newErrors.valMakingCharge = "Making charges cannot be negative.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateZakat = () => {
    if (!priceData) return;

    const newErrors: Record<string, string> = {};
    let totalWeight24K = 0;
    let totalValue = 0;

    zakItems.forEach((item, index) => {
      const weight = Number.parseFloat(item.weight);

      if (!item.weight || !Number.isFinite(weight) || weight <= 0) {
        newErrors[`zakWeight_${index}`] = "Please enter a weight greater than zero.";
        return;
      }

      const weight24K = weight * purityMultipliers[item.purity];
      totalWeight24K += weight24K;
      totalValue += weight24K * priceData.rates[zakCurrency]["24K"];
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const nisabMet = totalWeight24K >= 87.48;
    setZakResult({
      totalWeight: totalWeight24K,
      totalValue,
      zakatDue: nisabMet ? totalValue * 0.025 : 0,
      nisabMet,
    });
    setErrors({});
  };

  const handleConvert = () => {
    const amount = Number.parseFloat(convValue);

    if (!convValue || !Number.isFinite(amount) || amount <= 0) {
      setErrors({ convValue: "Please enter an amount greater than zero." });
      return;
    }

    const grams = amount * unitsToGrams[convFrom];
    setConvResults({
      GRAM: grams.toFixed(3),
      TOLA: (grams / unitsToGrams.Tola).toFixed(3),
      "TROY OZ": (grams / unitsToGrams["Troy Ounce"]).toFixed(3),
      KILOGRAM: (grams / unitsToGrams.Kilogram).toFixed(3),
      MASHA: (grams / unitsToGrams.Masha).toFixed(3),
      RATTI: (grams / unitsToGrams.Ratti).toFixed(3),
    });
    setErrors({});
  };

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-9">
      <div className="relative border-b border-[#1a1c24] mb-8 md:mb-12">
        <nav className="flex items-center gap-4 md:gap-8 overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0" aria-label="Gold calculator tools">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
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

      {activeTab === "value" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <div className="space-y-6">
            <div className="bg-[#131620] border border-[#1a1c24] rounded-2xl p-6 sm:p-8">
              <h2 className="text-white text-[17px] font-medium mb-8 flex items-center gap-2">
                <Calculator className="w-4 h-4 text-[#c9a84c]" />
                Calculate Gold Value
              </h2>

              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-[#3e3c38] uppercase tracking-wider">Weight</label>
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={valWeight}
                      onChange={(e) => {
                        setValWeight(e.target.value);
                        if (errors.valWeight) setErrors({ ...errors, valWeight: "" });
                      }}
                      placeholder="0.00"
                      className={`w-full bg-[#0c0e16] border rounded-xl px-4 py-3 text-white focus:outline-none transition-colors ${errors.valWeight ? "border-red-500/50" : "border-[#1a1c24] focus:border-[#c9a84c40]"}`}
                    />
                    {errors.valWeight && <p className="text-[10px] text-red-500 font-medium">{errors.valWeight}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-[#3e3c38] uppercase tracking-wider">Unit</label>
                    <div className="relative">
                      <select
                        value={valUnit}
                        onChange={(e) => setValUnit(e.target.value as WeightUnit)}
                        className="w-full appearance-none bg-[#0c0e16] border border-[#1a1c24] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#c9a84c40] transition-colors cursor-pointer"
                      >
                        {Object.keys(unitsToGrams).map((unit) => (
                          <option key={unit} value={unit}>{unit}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3e3c38] pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-[#3e3c38] uppercase tracking-wider">Karat (Purity)</label>
                    <div className="relative">
                      <select
                        value={valPurity}
                        onChange={(e) => setValPurity(e.target.value as Karat)}
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
                        onChange={(e) => setValCurrency(e.target.value as Currency)}
                        className="w-full appearance-none bg-[#0c0e16] border border-[#1a1c24] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#c9a84c40] transition-colors cursor-pointer"
                      >
                        {currencies.map((curr) => (
                          <option key={curr.code} value={curr.code}>{curr.label}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3e3c38] pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label className="text-[11px] font-bold text-[#3e3c38] uppercase tracking-wider">Making Charges</label>
                    <span className="text-[10px] text-[#3e3c38] font-medium">Optional %</span>
                  </div>
                  <div className="relative">
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={valMakingCharge}
                      onChange={(e) => {
                        setValMakingCharge(e.target.value);
                        if (errors.valMakingCharge) setErrors({ ...errors, valMakingCharge: "" });
                      }}
                      placeholder="0.00"
                      className={`w-full bg-[#0c0e16] border rounded-xl px-4 py-3 text-white focus:outline-none transition-colors pl-10 ${errors.valMakingCharge ? "border-red-500/50" : "border-[#1a1c24] focus:border-[#c9a84c40]"}`}
                    />
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[11px] font-bold text-[#3e3c38]">%</span>
                  </div>
                  {errors.valMakingCharge && <p className="text-[10px] text-red-500 font-medium">{errors.valMakingCharge}</p>}
                </div>

                <div className="pt-4 space-y-4">
                  <button
                    type="button"
                    onClick={calculateValue}
                    className="w-full bg-[#c9a84c] hover:bg-[#b8973d] text-[#0c0e16] font-bold py-4 rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(201,168,76,0.2)] flex items-center justify-center gap-2 uppercase tracking-widest text-[13px]"
                  >
                    <Calculator className="w-4 h-4" />
                    Update Calculation
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setValWeight("");
                      setValMakingCharge("");
                      setErrors({});
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
                Calculations use an estimated XAU/USD benchmark converted into your selected currency. Jeweller quotes can differ because of spread, making charges, VAT, and local premiums.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-[#131620] border border-[#1a1c24] rounded-2xl overflow-hidden sticky top-8" aria-live="polite" aria-atomic="true">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#c9a84c]" />
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-white text-[15px] font-medium uppercase tracking-wider">Result Summary</h2>
                  <div className="flex items-center gap-2 text-[#3e3c38]">
                    <History className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase">Estimated</span>
                  </div>
                </div>

                <div className="space-y-1">
                  {[
                    { label: "Weight Entered", value: `${valueResult.weight.toFixed(2)} ${valUnit}` },
                    { label: "Weight in Grams", value: `${valueResult.weightInGrams.toFixed(3)} g` },
                    { label: "Pure Gold Content", value: `${valueResult.pureGoldContent.toFixed(3)} g` },
                    { label: `Estimated ${valPurity} Price`, value: loading ? "Loading..." : `${formatPrice(valueResult.pricePerGram, valCurrency)} ${valCurrency}/g` },
                    { label: "Base Gold Value", value: `${formatPrice(valueResult.baseValue, valCurrency)} ${valCurrency}` },
                    { label: `Making Charges (${valueResult.makingPercent}%)`, value: `${formatPrice(valueResult.makingChargeValue, valCurrency)} ${valCurrency}` },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between gap-4 py-4 border-b border-[#1a1c24] last:border-0">
                      <span className="text-[13px] text-[#87847d] font-light">{row.label}</span>
                      <span className="text-[13px] text-white font-medium text-right">{row.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-8 rounded-2xl bg-[#0c0e16] border border-[#1a1c24] text-center">
                  <span className="block text-[11px] font-bold text-[#3e3c38] uppercase tracking-[0.2em] mb-3">Estimated Total Value</span>
                  <div className="text-[42px] font-[var(--font-serif)] text-[#c9a84c] leading-none mb-2">
                    {formatPrice(valueResult.totalValue, valCurrency)} <span className="text-xl font-sans uppercase">{valCurrency}</span>
                  </div>
                  <p className="text-[10px] text-[#3e3c38] font-bold uppercase tracking-widest mt-4">Before VAT unless you add retailer charges separately</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 max-w-[860px] lg:col-span-2">
            <h2 className="text-xl font-medium text-[#e6e3db] mb-4">How to Use the Free Gold Value Calculator</h2>
            <div className="space-y-4 text-[15px] text-[#87847d] leading-relaxed">
              <p>Enter your gold weight, choose grams, tola, troy ounces, kilograms, masha, or ratti, then select the karat and currency. The calculator converts the weight to grams and applies the selected purity ratio to estimate the gold value.</p>
              <p>Use the making charge field only when you want to model a jeweller's labour or premium percentage. The result is an estimate, not a guaranteed buy or sell quote.</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === "zakat" && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <div className="bg-[#131620] border border-[#1a1c24] rounded-2xl overflow-hidden relative group">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#c9a84c]" />
            <div className="p-6 sm:p-8 flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <span className="text-[11px] font-bold text-[#3e3c38] uppercase tracking-[0.2em] mb-2 block">Nisab Threshold 2026</span>
                <div className="text-[32px] sm:text-[42px] font-[var(--font-serif)] text-white leading-none">
                  87.48<span className="text-xl font-sans ml-2 text-[#87847d]">grams</span>
                </div>
                <p className="text-[10px] text-[#3e3c38] font-bold uppercase tracking-widest mt-3">Equivalent to 7.5 tola of gold</p>
              </div>
              <div className="text-center md:text-right">
                <span className="text-[11px] font-bold text-[#3e3c38] uppercase tracking-[0.2em] mb-2 block">Estimated Nisab Value</span>
                <div className="text-[28px] font-medium text-[#c9a84c] mb-1">
                  {priceData ? formatPrice(87.48 * priceData.rates[zakCurrency]["24K"], zakCurrency) : "0.00"} {zakCurrency}
                </div>
                <div className="text-[13px] text-[#3e3c38] font-medium italic">
                  ≈ ${priceData ? formatPrice(87.48 * priceData.rates.USD["24K"], "USD") : "0.00"} USD
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-[#131620] border border-[#1a1c24] rounded-2xl p-6 sm:p-8">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-white text-[17px] font-medium flex items-center gap-2">
                    <Coins className="w-4 h-4 text-[#c9a84c]" />
                    Your Gold Items
                  </h2>
                  <button
                    type="button"
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
                      <div className={`grid grid-cols-12 gap-3 p-4 rounded-xl bg-[#0c0e16] border transition-colors group ${errors[`zakWeight_${index}`] ? "border-red-500/50" : "border-[#1a1c24]"}`}>
                        <div className="col-span-7 space-y-1.5">
                          <label className="text-[9px] font-bold text-[#3e3c38] uppercase tracking-widest">Weight (g)</label>
                          <input
                            type="number"
                            min="0"
                            step="0.01"
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
                          <select
                            value={item.purity}
                            onChange={(e) => {
                              const newItems = [...zakItems];
                              newItems[index].purity = e.target.value as Karat;
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
                      {errors[`zakWeight_${index}`] && <p className="text-[10px] text-red-500 font-medium ml-1">{errors[`zakWeight_${index}`]}</p>}
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={() => setZakItems([...zakItems, { weight: "", purity: "24K" }])}
                    className="w-full py-4 rounded-xl border border-dashed border-[#1a1c24] bg-[rgba(201,168,76,0.02)] text-[11px] font-bold text-[#3e3c38] uppercase tracking-[0.15em] hover:bg-[rgba(201,168,76,0.05)] hover:border-[#c9a84c30] hover:text-[#c9a84c] transition-all flex items-center justify-center gap-2"
                  >
                    <span className="text-lg">+</span> Add another item
                  </button>
                </div>

                <div className="mt-8 pt-8 border-t border-[#1a1c24] space-y-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-[#3e3c38] uppercase tracking-wider">Result Currency</label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {currencies.map((curr) => (
                        <button
                          type="button"
                          key={curr.code}
                          onClick={() => setZakCurrency(curr.code)}
                          className={`py-2 rounded-lg text-[10px] font-bold border transition-all ${
                            zakCurrency === curr.code
                              ? "bg-[#131620] border-[#c9a84c40] text-[#c9a84c]"
                              : "bg-[#0c0e16] border-[#1a1c24] text-[#3e3c38] hover:text-[#87847d]"
                          }`}
                        >
                          {curr.code}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-2">
                    <button
                      type="button"
                      onClick={calculateZakat}
                      className="flex-[2] bg-[#c9a84c] hover:bg-[#b8973d] text-[#0c0e16] font-bold py-4 rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(201,168,76,0.2)] flex items-center justify-center gap-2 uppercase tracking-widest text-[13px]"
                    >
                      Calculate Zakat
                    </button>
                    <button
                      type="button"
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

            <div className="relative">
              <div className="bg-[#131620] border border-[#1a1c24] rounded-2xl overflow-hidden sticky top-8" aria-live="polite" aria-atomic="true">
                <div className="p-8">
                  <div className="flex justify-between items-center mb-10 gap-4">
                    <h2 className="text-white text-[15px] font-medium uppercase tracking-wider">Zakat Assessment</h2>
                    {zakResult && (
                      <div className={`flex items-center gap-2 px-3 py-1 rounded-full border transition-colors ${zakResult.nisabMet ? "bg-[#2dd4a010] border-[#2dd4a020]" : "bg-red-500/10 border-red-500/20"}`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${zakResult.nisabMet ? "bg-[#2dd4a0]" : "bg-red-500"}`} />
                        <span className={`text-[9px] font-bold uppercase tracking-widest ${zakResult.nisabMet ? "text-[#2dd4a0]" : "text-red-500"}`}>
                          {zakResult.nisabMet ? "Nisab Met — Zakat Due" : "Below Nisab — No Zakat"}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-1">
                    {[
                      { label: "Total Pure Gold (24K Equiv.)", value: `${zakResult ? zakResult.totalWeight.toFixed(2) : "0.00"} g` },
                      { label: "Total Market Value", value: `${zakResult ? formatPrice(zakResult.totalValue, zakCurrency) : "0.00"} ${zakCurrency}` },
                      { label: "Zakat Rate (Lunar)", value: "2.5%" },
                    ].map((row) => (
                      <div key={row.label} className="flex justify-between gap-4 py-4 border-b border-[#1a1c24] last:border-0">
                        <span className="text-[13px] text-[#87847d] font-light">{row.label}</span>
                        <span className="text-[13px] text-white font-medium text-right">{row.value}</span>
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
                    <p className="text-[10px] text-[#3e3c38] font-bold uppercase tracking-widest mt-6 max-w-[240px] mx-auto leading-relaxed">
                      {zakResult?.nisabMet ? "Zakat is calculated at 2.5% of eligible gold value" : "Nisab threshold not met (87.48g)"}
                    </p>
                  </div>

                  <p className="text-[10px] text-[#3e3c38] text-center px-4 leading-relaxed mt-8">
                    This is a general guidance tool. For complex holdings, please consult a qualified scholar.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 max-w-[860px]">
            <h2 className="text-xl font-medium text-[#e6e3db] mb-4">Zakat on Gold Calculator 2026 & Sharia Rules</h2>
            <div className="space-y-4 text-[15px] text-[#87847d] leading-relaxed">
              <p>Use the zakat calculator to total your gold holdings by purity, convert them to 24K-equivalent weight, and check whether they meet the 87.48 gram nisab threshold.</p>
              <p>If the nisab is met and the gold has been held for one lunar year, the calculator estimates zakat at 2.5% of the current gold value in your selected currency.</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === "converter" && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <div className="bg-[#131620] border border-[#1a1c24] rounded-2xl p-6 sm:p-8">
            <h2 className="text-white text-[17px] font-medium mb-8 flex items-center gap-2">
              <RefreshCcw className="w-4 h-4 text-[#c9a84c]" />
              Gold Unit Converter
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-[#3e3c38] uppercase tracking-wider">Amount</label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={convValue}
                  onChange={(e) => {
                    setConvValue(e.target.value);
                    if (errors.convValue) setErrors({});
                  }}
                  placeholder="Enter amount"
                  className={`w-full bg-[#0c0e16] border rounded-xl px-4 py-3 text-white focus:outline-none transition-colors ${errors.convValue ? "border-red-500/50" : "border-[#1a1c24] focus:border-[#c9a84c40]"}`}
                />
                {errors.convValue && <p className="text-[10px] text-red-500 font-medium mt-1 ml-1">{errors.convValue}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-[#3e3c38] uppercase tracking-wider">From Unit</label>
                <div className="relative">
                  <select
                    value={convFrom}
                    onChange={(e) => setConvFrom(e.target.value as WeightUnit)}
                    className="w-full appearance-none bg-[#0c0e16] border border-[#1a1c24] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#c9a84c40] transition-colors cursor-pointer"
                  >
                    {Object.keys(unitsToGrams).map((unit) => (
                      <option key={unit} value={unit}>{unit}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3e3c38] pointer-events-none" />
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleConvert}
              className="w-full bg-[#c9a84c] hover:bg-[#b8973d] text-[#0c0e16] font-bold py-4 rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(201,168,76,0.2)] flex items-center justify-center gap-2 uppercase tracking-widest text-[13px]"
            >
              <RefreshCcw className="w-4 h-4" />
              Convert Units
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-center" aria-live="polite" aria-atomic="true">
            {[
              { unit: "GRAM", value: convResults ? convResults.GRAM : "0.000", sub: "Base Unit" },
              { unit: "TOLA", value: convResults ? convResults.TOLA : "0.000", sub: "South Asia" },
              { unit: "TROY OZ", value: convResults ? convResults["TROY OZ"] : "0.000", sub: "International Market" },
              { unit: "KILOGRAM", value: convResults ? convResults.KILOGRAM : "0.000", sub: "Bulk Standard" },
              { unit: "MASHA", value: convResults ? convResults.MASHA : "0.000", sub: "Traditional" },
              { unit: "RATTI", value: convResults ? convResults.RATTI : "0.000", sub: "Small Jewellery Unit" },
            ].map((item) => (
              <div key={item.unit} className="p-6 rounded-2xl bg-[#131620] border border-[#1a1c24] hover:border-[#c9a84c40] transition-all duration-300 group">
                <span className="text-[#3e3c38] text-[10px] font-bold uppercase tracking-[0.2em] mb-4 block group-hover:text-[#c9a84c] transition-colors">{item.unit}</span>
                <div className="mb-1">
                  <span className="text-[28px] md:text-[32px] font-medium text-[#e6e3db] tracking-tight">{item.value}</span>
                </div>
                <div className="mt-4 pt-4 border-t border-white/[0.03] text-[9px] text-[#3e3c38] uppercase tracking-widest font-bold">{item.sub}</div>
              </div>
            ))}
          </div>

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
                    { base: "1 Troy Ounce", g: "31.1034768 g", t: "2.666 Tola" },
                    { base: "1 Gram", g: "1.000 g", t: "0.0857 Tola" },
                    { base: "1 Masha", g: "0.972 g", t: "0.0833 Tola" },
                    { base: "1 Ratti", g: "0.1215 g", t: "0.0104 Tola" },
                  ].map((row) => (
                    <tr key={row.base} className="hover:bg-[#1a1e2e] transition-colors group">
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

    </div>
  );
}
