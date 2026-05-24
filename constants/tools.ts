export interface Tool {
  id: string;
  href: string;
  ariaLabel: string;
  category: "finance" | "hr" | "visa" | "legal" | "business";
  country: "all" | "uae" | "sa" | "kw" | "uk";
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
    description: "Calculate your exact GOSI deductions and net salary for 2026. Covers Saudi national rates (10.75% employee / 12.75% employer), expat rates, contributory wage cap of SAR 45,000, and the 2024–2028 phased rate schedule. Instant results, no login required.",
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
    description: "Calculate your FBR IT export tax for 2026. PSEB-registered ATL filers pay 0.25% under Section 154S. Non-PSEB ATL filers pay 1%. Non-filers face double withholding. Enter your annual income and PSEB/filer status to see your exact tax liability and take-home in PKR.",
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
];
