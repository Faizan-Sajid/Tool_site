import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import SidebarOverlay from "@/components/SidebarOverlay";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import { SidebarProvider } from "@/context/SidebarContext";
import Script from 'next/script';
// 1. Speed Insights ko yahan import karen
import { SpeedInsights } from "@vercel/speed-insights/next";

// Font optimization: display: 'swap' ensures text is visible immediately with system font fallback
const jakartaPlus = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
});

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.quickcalcs.app"),
  title: {
    default: "QuickCalcs — Free UAE Gratuity, GOSI & Zakat Calculators 2026",
    template: "%s | QuickCalcs",
  },
  description:
    "Free online calculators for UAE gratuity, Saudi GOSI contributions, Zakat 2026, gold price per tola, and Umrah budgeting. Updated quarterly, no login required, instantly in your browser.",
  keywords: [
    "Free Online Calculators",
    "Financial Tools",
    "UAE Gratuity",
    "Saudi GOSI",
    "Zakat Calculator",
    "Gold Price Tola",
    "Umrah Budget",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "QuickCalcs — Free UAE Gratuity, GOSI & Zakat Calculators 2026",
    description:
      "Free online calculators for UAE gratuity, Saudi GOSI contributions, Zakat 2026, gold price per tola, and Umrah budgeting. Updated quarterly, no login required.",
    url: "https://www.quickcalcs.app",
    siteName: "QuickCalcs",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "QuickCalcs – Free UAE Gratuity, GOSI & Zakat Calculators 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QuickCalcs — Free UAE Gratuity, GOSI & Zakat Calculators 2026",
    description:
      "Free online calculators for UAE gratuity, Saudi GOSI contributions, Zakat 2026, gold price per tola, and Umrah budgeting. Updated quarterly, no login required.",
    images: [
      {
        url: "/opengraph-image.png",
        alt: "QuickCalcs – Free UAE Gratuity, GOSI & Zakat Calculators 2026",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full ${jakartaPlus.variable} ${lora.variable}`}
    >
      <head>
        {/* Critical CSS for LCP element (h1 heading) - inline to avoid render blocking */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical h1 styles for Gold Price Calculator */
            h1.lcp-heading {
              font-family: var(--font-serif), Georgia, serif;
              font-size: clamp(32px, 5vw, 72px);
              line-height: 1.1;
              font-weight: 500;
              color: white;
              margin-bottom: 1.5rem;
              letter-spacing: -0.02em;
              display: block;
              visibility: visible;
            }
          `
        }} />
      </head>
      <body className="bg-[#0c0e16] text-[#e6e3db] min-h-screen antialiased overflow-x-hidden">
        <SidebarProvider>
          {/* Navbar stays fixed at the top */}
          <Navbar />

          {/* Mobile Overlay */}
          <SidebarOverlay />

          <div className="flex min-h-screen pt-[62px]">
            {/* Sidebar stays fixed/hidden based on mobile state */}
            <Suspense fallback={<aside className="fixed left-0 top-[62px] h-[calc(100vh-62px)] w-[230px] bg-[#0c0e16] border-r border-[rgba(255,255,255,0.07)] z-[100] hidden md:block"></aside>}><Sidebar /></Suspense>

            {/* Main content area with responsive sidebar offset */}
            <main className="flex-1 min-h-screen ml-0 md:ml-[200px] lg:ml-[230px] transition-all duration-300 flex flex-col w-full">
              <div className="flex-grow">
                {children}
              </div>
              <Footer />
            </main>
          </div>
        </SidebarProvider>
        
        {/* Google Analytics - lazyOnload defers script execution until browser idle */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VJNR9Q5GEF"
          strategy="lazyOnload"
          async
        />
        
        {/* Initialize gtag with same non-blocking strategy */}
        <Script
          id="google-analytics-init"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VJNR9Q5GEF', {
                page_path: window.location.pathname,
                anonymize_ip: true
              });
            `,
          }}
        />

        {/* 2. Speed Insights component ko body ke bilkul aakhir ma add kar dein */}
        <SpeedInsights />
      </body>
    </html>
  );
}