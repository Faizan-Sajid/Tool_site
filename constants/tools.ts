export interface Tool {
  id: string;
  href: string;
  ariaLabel: string;
  category: "finance" | "hr" | "visa" | "legal" | "business";
  country: "all" | "uae" | "sa" | "kw" | "uk" | "my";
  icon: string;
  title: string;
  description: string;
  isTeal?: boolean;
  tags: { text: string; variant?: "default" | "gold" | "teal" }[];
}

export const TOOLS: Tool[] = [
  {
    id: "gold-calculator",
    href: "/tools/gold-calculator",
    ariaLabel: "Gold Price Calculator",
    category: "finance",
    country: "all",
    icon: "💰",
    title: "Live Gold Price Calculator",
    description: "Real-time 24K, 22K, 21K, and 18K gold prices for UAE, Saudi Arabia, Kuwait, Qatar, and Bahrain. Enter weight in grams, tolas, or troy ounces and get instant values in AED, SAR, or USD. Includes Zakat calculation tab based on today's live gold rate.",
    tags: [
      { text: "Gold", variant: "gold" },
      { text: "Finance", variant: "default" },
      { text: "New", variant: "teal" },
    ],
  },
  {
    id: "zakat-calculator",
    href: "/tools/zakat-calculator",
    ariaLabel: "Zakat Calculator",
    category: "finance",
    country: "all",
    icon: "☪️",
    title: "Zakat Calculator 2026",
    description: "Calculate your annual Zakat obligation with live gold-price Nisab thresholds. Supports AED, SAR, USD, and PKR. Enter cash, gold, investments, and business assets — the calculator subtracts liabilities and returns your exact 2.5% Zakat amount with a full asset breakdown.",
    isTeal: true,
    tags: [
      { text: "Islamic", variant: "gold" },
      { text: "Finance", variant: "default" },
      { text: "New", variant: "teal" },
    ],
  },
  {
    id: "uae-gratuity-calculator",
    href: "/tools/uae-gratuity-calculator",
    ariaLabel: "UAE Gratuity Calculator",
    category: "hr",
    country: "uae",
    icon: "🧮",
    title: "UAE Gratuity Calculator",
    description: "Calculate your UAE end-of-service gratuity (EOSB) under Federal Decree-Law No. 33 of 2021. Covers limited and unlimited contracts, the 21-day/30-day formula, 2-year salary cap, and MOHRE 14-day payment rule. Enter your salary and service dates for an instant breakdown.",
    tags: [
      { text: "UAE", variant: "gold" },
      { text: "HR", variant: "default" },
      { text: "Most Used", variant: "teal" },
    ],
  },
  {
    id: "ksa-gosi-calculator",
    href: "/tools/ksa-gosi-calculator",
    ariaLabel: "Saudi GOSI Calculator (2026)",
    category: "finance",
    country: "sa",
    icon: "🛡️",
    title: "Saudi GOSI Calculator",
    description: "Calculate Saudi payroll deduction and net salary after GOSI for Saudi nationals and expats in 2026. Includes basic salary, housing allowance, SANED, employer contribution, SAR 45,000 cap, and old vs new GOSI rate logic.",
    tags: [
      { text: "KSA", variant: "gold" },
      { text: "Finance", variant: "default" },
      { text: "Official", variant: "gold" },
    ],
  },
  {
    id: "pakistan-freelancer-tax-calculator",
    href: "/tools/pakistan-freelancer-tax-calculator",
    ariaLabel: "Pakistan Freelancer Tax Calculator",
    category: "finance",
    country: "all",
    icon: "🧾",
    title: "Pakistan Freelancer Tax Calculator",
    description: "Calculate Pakistan freelancer tax for 2026 under Section 154A. PSEB-registered ATL filers pay 0.25%, non-PSEB ATL filers pay 1%, and non-filers pay 2% withholding on IT export remittances. Includes net PKR take-home estimates.",
    tags: [
      { text: "PKR", variant: "default" },
      { text: "Finance", variant: "default" },
      { text: "New", variant: "teal" },
    ],
    isTeal: true,
  },
  {
    id: "hajj-umrah-budget-calculator",
    href: "/tools/hajj-umrah-budget-calculator",
    ariaLabel: "Hajj & Umrah Budget Calculator",
    category: "finance",
    country: "all",
    icon: "🕋",
    title: "Umrah Cost Calculator 2026",
    description: "Estimate your full Umrah budget from Pakistan, UK, USA, Canada, and 6 other countries. Breaks down flights, hotel zone (3-star/4-star/5-star), Umrah visa, ground transport, and daily expenses. Economy packages from Pakistan start at PKR 250,000–400,000 in 2026.",
    tags: [],
  },
  {
    id: "malaysia-epf-calculator",
    href: "/tools/malaysia-epf-calculator",
    ariaLabel: "Malaysia EPF Calculator 2026",
    category: "finance",
    country: "my",
    icon: "🇲🇾",
    title: "Malaysia EPF Calculator 2026",
    description: "Calculate your exact EPF (KWSP) contributions for 2026. Covers Malaysian citizen rates (11% employee / 13% employer for salary ≤RM5,000, 12% above), age 60+ reduced rates, foreign worker mandatory 2% rate effective October 2025, and full take-home salary breakdown. Official KWSP Third Schedule rates.",
    isTeal: false,
    tags: [
      { text: "Malaysia", variant: "gold" },
      { text: "Finance", variant: "default" },
      { text: "New", variant: "teal" },
    ],
  },
];
