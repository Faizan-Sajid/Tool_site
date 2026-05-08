import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – QuickCalcs",
  description:
    "Learn how QuickCalcs collects data, uses Google Analytics and Google AdSense, and your privacy rights under GDPR and CCPA.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#0c0e16] text-[#c9c6be]">
      <div className="max-w-[780px] mx-auto px-5 sm:px-9 py-20">
        {/* Top label */}
        <span className="text-[#c9a84c] text-sm font-semibold">Legal</span>

        {/* Page title */}
        <h1 className="mt-2 text-3xl font-bold text-white">Privacy Policy</h1>
        <p className="text-[#87847d] mt-1">Effective date: January 1, 2026</p>

        <div className="space-y-12 mt-8">
          {/* Introduction */}
          <section>
            <h2 className="text-lg font-semibold text-white border-b border-[rgba(255,255,255,0.07)] pb-3 mb-4">
              Introduction
            </h2>
            <p>
              QuickCalcs (https://www.quickcalcs.app) provides free online calculators and tools. We respect your privacy and are committed to protecting any information you provide. By using our site, you agree to the terms of this Privacy Policy.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-lg font-semibold text-white border-b border-[rgba(255,255,255,0.07)] pb-3 mb-4">
              Information We Collect
            </h2>
            <p>
              We do not require registration; no names, email addresses, or other personally identifiable information (PII) are collected directly. Anonymous usage data is collected via cookies and analytics services to help us improve the site.
            </p>
          </section>

          {/* Google Analytics */}
          <section>
            <h2 className="text-lg font-semibold text-white border-b border-[rgba(255,255,255,0.07)] pb-3 mb-4">
              Google Analytics
            </h2>
            <p>
              We use Google Analytics to understand how visitors use the site. Google collects your IP address, pages visited, and time on site. Google processes this data in accordance with its privacy policy. You can opt out of Google Analytics
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c9a84c] hover:underline"
              >
                here
              </a>
              .
            </p>
          </section>

          {/* Google AdSense & Advertising */}
          <section>
            <h2 className="text-lg font-semibold text-white border-b border-[rgba(255,255,255,0.07)] pb-3 mb-4">
              Google AdSense & Advertising
            </h2>
            <p>
              QuickCalcs displays advertisements served through Google AdSense. Third‑party vendors, including Google, may place cookies (e.g., the DoubleClick cookie) to deliver interest‑based ads based on prior visits. You may opt out of personalized ads at
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c9a84c] hover:underline"
              >
                Google Ads Settings
              </a>
              {' '}or via the
              <a
                href="https://optout.aboutads.info"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c9a84c] hover:underline"
              >
                AboutAds opt‑out page
              </a>
              . We fully comply with Google AdSense program policies and do not click our own ads or encourage invalid clicks.
            </p>
          </section>

          {/* Cookies Policy */}
          <section>
            <h2 className="text-lg font-semibold text-white border-b border-[rgba(255,255,255,0.07)] pb-3 mb-4">
              Cookies Policy
            </h2>
            <p>We use three types of cookies:</p>
            <ul className="list-disc pl-5 text-[#87847d]">
              <li><strong>Essential:</strong> Required for site functionality.</li>
              <li><strong>Analytics:</strong> Google Analytics cookies.</li>
              <li><strong>Advertising:</strong> Google AdSense/DoubleClick cookies.</li>
            </ul>
            <p>You can disable cookies through your browser settings.</p>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-lg font-semibold text-white border-b border-[rgba(255,255,255,0.07)] pb-3 mb-4">
              How We Use Your Information
            </h2>
            <p>
              Collected data is used solely to improve QuickCalcs, display relevant advertisements, detect abuse, and meet legal obligations. We do NOT sell or share personal data with third parties.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-lg font-semibold text-white border-b border-[rgba(255,255,255,0.07)] pb-3 mb-4">
              Data Retention
            </h2>
            <p>
              Google Analytics retains data for 26 months before it is automatically deleted. No personally identifiable data is stored on our servers.
            </p>
          </section>

          {/* Children’s Privacy */}
          <section>
            <h2 className="text-lg font-semibold text-white border-b border-[rgba(255,255,255,0.07)] pb-3 mb-4">
              Children’s Privacy
            </h2>
            <p>
              Our services are not directed to children under 13, and we do not knowingly collect personal data from minors.
            </p>
          </section>

          {/* Your Rights (GDPR & CCPA) */}
          <section>
            <h2 className="text-lg font-semibold text-white border-b border-[rgba(255,255,255,0.07)] pb-3 mb-4">
              Your Rights (GDPR & CCPA)
            </h2>
            <p>
              You have the right to access, correct, delete, or object to the processing of your data, to receive data portability, and to withdraw consent at any time. To exercise these rights, please contact us at
              <a
                href="mailto:privacy@quickcalcs.app"
                className="text-[#c9a84c] hover:underline"
              >
                privacy@quickcalcs.app
              </a>
              .
            </p>
          </section>

          {/* Third‑Party Links */}
          <section>
            <h2 className="text-lg font-semibold text-white border-b border-[rgba(255,255,255,0.07)] pb-3 mb-4">
              Third‑Party Links
            </h2>
            <p>
              Our site may contain links to external websites. We are not responsible for their privacy practices.
            </p>
          </section>

          {/* Changes to This Policy */}
          <section>
            <h2 className="text-lg font-semibold text-white border-b border-[rgba(255,255,255,0.07)] pb-3 mb-4">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Please review this page periodically for any changes.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-lg font-semibold text-white border-b border-[rgba(255,255,255,0.07)] pb-3 mb-4">
              Contact Us
            </h2>
            <div className="border border-[#c9a84c] rounded p-4">
              <p className="font-bold text-white">QuickCalcs</p>
              <p>
                Website:{' '}
                <a
                  href="https://www.quickcalcs.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c9a84c] hover:underline"
                >
                  https://www.quickcalcs.app
                </a>
              </p>
              <p>
                Email:{' '}
                <a
                  href="mailto:privacy@quickcalcs.app"
                  className="text-[#c9a84c] hover:underline"
                >
                  privacy@quickcalcs.app
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
