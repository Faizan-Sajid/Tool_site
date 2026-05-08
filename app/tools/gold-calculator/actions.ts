"use server";

export async function fetchGoldPrices() {
  // Mocking the API call with ISR caching (revalidate: 86400 is 24 hours)
  // In a real scenario, you would use fetch(API_URL, { next: { revalidate: 86400 } })
  
  const spotPriceUSD = 2350.50; // Base USD Spot Price (XAU/USD)
  const exchangeRates = {
    USD: 1.0,
    AED: 3.6725,
    SAR: 3.75,
    KWD: 0.307,
  };

  const TROY_OUNCE_TO_GRAMS = 31.1034768;

  const calculateRates = (rate: number) => {
    const p24 = (spotPriceUSD / TROY_OUNCE_TO_GRAMS) * rate;
    return {
      "24K": p24,
      "22K": p24 * (22 / 24),
      "21K": p24 * (21 / 24),
      "18K": p24 * (18 / 24),
    };
  };

  const liveData = {
    spotPrice: spotPriceUSD,
    rates: {
      USD: calculateRates(exchangeRates.USD),
      AED: calculateRates(exchangeRates.AED),
      SAR: calculateRates(exchangeRates.SAR),
      KWD: calculateRates(exchangeRates.KWD),
    },
    lastUpdated: new Date().toISOString(),
  };

  // Simulate a small delay to test the loading state
  // await new Promise(resolve => setTimeout(resolve, 1000));

  return liveData;
}
