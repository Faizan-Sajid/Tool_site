"use server";

export async function fetchGoldPrices() {
  const spotPriceUSD = 2350.50; // Estimated base USD spot price (XAU/USD) — update periodically
  const exchangeRates = {
    USD: 1.0,
    AED: 3.6725,
    SAR: 3.75,
    KWD: 0.307,
    QAR: 3.64,
    BHD: 0.376,
    PKR: 278.5,
  };

  const TROY_OUNCE_TO_GRAMS = 31.1034768;
  const purityMultipliers = {
    "24K": 0.999,
    "22K": 22 / 24,
    "21K": 21 / 24,
    "18K": 18 / 24,
  };

  const calculateRates = (rate: number) => {
    const p24Raw = (spotPriceUSD / TROY_OUNCE_TO_GRAMS) * rate;
    return {
      "24K": p24Raw * purityMultipliers["24K"],
      "22K": p24Raw * purityMultipliers["22K"],
      "21K": p24Raw * purityMultipliers["21K"],
      "18K": p24Raw * purityMultipliers["18K"],
    };
  };

  const liveData = {
    spotPrice: spotPriceUSD,
    rates: {
      USD: calculateRates(exchangeRates.USD),
      AED: calculateRates(exchangeRates.AED),
      SAR: calculateRates(exchangeRates.SAR),
      KWD: calculateRates(exchangeRates.KWD),
      QAR: calculateRates(exchangeRates.QAR),
      BHD: calculateRates(exchangeRates.BHD),
      PKR: calculateRates(exchangeRates.PKR),
    },
    lastUpdated: new Date().toISOString(),
  };

  return liveData;
}
