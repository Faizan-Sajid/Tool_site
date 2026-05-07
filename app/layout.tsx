import type { Metadata } from "next";
/* Font imports removed to avoid external fetch */
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import SidebarOverlay from "@/components/SidebarOverlay";
import Footer from "@/components/Footer";
import { SidebarProvider } from "@/context/SidebarContext";
import { GoogleAnalytics } from '@next/third-parties/google';

// Font loading removed to avoid external requests

export const metadata: Metadata = {
  metadataBase: new URL("https://www.quickcalcs.app"),
  title: "QuickCalcs | Free Universal Online Calculators & Tools",
  description:
    "Access a wide range of professional tools including financial calculators, regional employment utilities, and SEO growth tools for global users.",
  keywords: [
    "Free Online Calculators",
    "Financial Tools",
    "SEO Utilities",
    "Global Business Tools",
    "UAE Gratuity",
    "Zakat Calculator",
  ],
  viewport: "width=device-width, initial-scale=1",
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
    title: "QuickCalcs | Free Universal Online Calculators & Tools",
    description:
      "Access a wide range of professional tools including financial calculators, regional employment utilities, and SEO growth tools for global users.",
    url: "https://www.quickcalcs.app",
    siteName: "QuickCalcs",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "QuickCalcs - Professional Utility Suite",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QuickCalcs | Free Universal Online Calculators & Tools",
    description:
      "Access a wide range of professional tools including financial calculators, regional employment utilities, and SEO growth tools for global users.",
    images: ["/og-image.png"],
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
      className="h-full"
    >
      <body className="bg-[#0c0e16] text-[#e6e3db] min-h-screen antialiased overflow-x-hidden">
        <SidebarProvider>
          {/* Navbar stays fixed at the top */}
          <Navbar />

          {/* Mobile Overlay */}
          <SidebarOverlay />

          <div className="flex min-h-screen pt-[62px]">
            {/* Sidebar stays fixed/hidden based on mobile state */}
            <Sidebar />

            {/* Main content area with responsive sidebar offset */}
            <main className="flex-1 min-h-screen ml-0 md:ml-[200px] lg:ml-[230px] transition-all duration-300 flex flex-col w-full">
              <div className="flex-grow">
                {children}
              </div>
              <Footer />
            </main>
          </div>
        </SidebarProvider>
        <GoogleAnalytics gaId="G-VJNR9Q5GEF" />
      </body>
    </html>
  );
}
