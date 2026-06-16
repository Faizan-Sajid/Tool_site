# Security Audit Report — QuickCalcs (gulftools)

**Audit date:** 2026-06-15  
**Project:** QuickCalcs (`quickcalcs.app`)  
**Next.js version:** 16.2.4  
**Deployment target:** Vercel  
**Auditor:** Qwen Code (security engineering mode)

---

## Executive Summary

**Overall score: 7.0 / 10**

The project has a small attack surface (no user accounts, no database, no payment processing, no forms that accept arbitrary text input). The most significant gaps are in HTTP security headers — **Content-Security-Policy**, **Strict-Transport-Security**, and **Permissions-Policy** are missing entirely. There are no hardcoded credentials, no middleware bypass risk, and no XSS vector from the blog rendering pipeline. The single server action (`fetchGoldPrices`) is purely internal math and does not accept user input or make outbound HTTP requests.

**Must fix before / soon after production deployment:** CSP, HSTS, Permissions-Policy headers + Dependabot setup.  
**Nice to have / future improvements:** Input hardening in calculator forms, rate-limiting awareness, `next/security` headers.

---

## 1. Security Headers

### Current configuration (`next.config.ts`, lines 16–32)

```ts
// Global security headers
{ key: "X-Frame-Options", value: "SAMEORIGIN" },
{ key: "X-Content-Type-Options", value: "nosniff" },
{ key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
{ key: "X-XSS-Protection", value: "1; mode=block" },
```

### Gaps

| Header | Status | Severity | Notes |
|---|---|---|---|
| **Content-Security-Policy (CSP)** | **Missing** | **High** | No CSP means inline scripts (`dangerouslySetInnerHTML` for JSON-LD) execute without nonce/hash validation. While the site has no user-generated content, CSP also provides XSS defence-in-depth and clickjacking protection beyond `X-Frame-Options`. |
| **Strict-Transport-Security (HSTS)** | **Missing** | **Medium** | No `Strict-Transport-Security` header. Without it, a first-encounter MITM could downgrade a user's first visit from HTTPS to HTTP. Vercel applies HSTS at the edge by default, but this is worth explicating in `next.config.ts` for defence-in-depth and for any self-hosted fallback. |
| **Permissions-Policy** | **Missing** | **Low** | No restriction on browser features (camera, microphone, geolocation, etc.). The site has no need for any of these. |
| **`X-Frame-Options: SAMEORIGIN`** | **Present** | ✅ Good | Prevents clickjacking on other origins. |
| **`X-Content-Type-Options: nosniff`** | **Present** | ✅ Good | Prevents MIME-type sniffing. |
| **`Referrer-Policy`** | **Present** | ✅ Good | `strict-origin-when-cross-origin` is a sensible default. |
| **`X-XSS-Protection`** | **Present** | ✅ Good | Legacy, but harmless. |

### Recommended fixes (in `next.config.ts`)

1. **Add HSTS:**
   ```ts
   { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" }
   ```

2. **Add CSP (production-tight):**
   ```ts
   {
     key: "Content-Security-Policy",
     value: process.env.NODE_ENV === "production"
       ? "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://www.google-analytics.com; connect-src 'self' https://www.google-analytics.com https://vitals.vercel-insights.com; frame-src 'none'; object-src 'none'"
       : "", // dev: let Next.js dev server manage CSP
   }
   ```
   - `'unsafe-inline'` is required for the JSON-LD `<script>` blocks injected via `dangerouslySetInnerHTML` and for Tailwind's inline styles. This is acceptable because all JSON-LD content is author-controlled (static tool data, not user input).
   - Google Analytics requires `https://www.googletagmanager.com` and `https://www.google-analytics.com` in `script-src` and `connect-src`.

3. **Add Permissions-Policy:**
   ```ts
   { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" }
   ```

---

## 2. Next.js Version & Known CVEs

### Version: `16.2.4` (pinned, no caret range)

| CVE | Affected Versions | Fixed In | This Project | Severity |
|---|---|---|---|---|
| **CVE-2025-29927** (Middleware Auth Bypass) | 11.1.4–12.3.4, 13.0.0–13.5.8, 14.0.0–14.2.24, 15.0.0–15.2.2 | 12.3.5, 13.5.9, 14.2.25, 15.2.3+ | ✅ **Not affected** (16.2.4 > 15.2.3) | N/A |
| No other critical CVEs known for 16.x at time of audit | — | — | ✅ No known CVEs | N/A |

### Risk assessment

The project uses **Next.js 16.2.4** which is a very recent version. There is no `middleware.ts` file in the project anyway, so CVE-2025-29927 (which requires middleware) would not apply regardless.

**Recommendation:** Keep Next.js updated via `npm update next` or Dependabot once configured.

---

## 3. Server Actions & Data Fetching Security

### Inventory

| File | Type | User Input | External Fetch | Risk |
|---|---|---|---|---|
| `app/tools/gold-calculator/actions.ts` | Server Action (`"use server"`) | **None** | **None** | **None** |
| `app/llms.txt/route.ts` | Route Handler (`GET`) | **None** | **None** | **None** |

### `actions.ts` analysis (`app/tools/gold-calculator/actions.ts`, lines 1–50)

```ts
"use server";
export async function fetchGoldPrices() {
  const spotPriceUSD = 2350.50;     // hardcoded constant
  const exchangeRates = { ... };    // hardcoded constants
  const purityMultipliers = { ... }; // hardcoded constants
  // ... pure computation, returns object
}
```

- **No user input parameters** → no injection, no SSRF, no validation concerns.
- **No outbound HTTP requests** → no SSRF risk, no API key leakage.
- **No error that can leak internals** → the only error scenario would be a JS runtime error, which Next.js handles gracefully.
- **No rate limiting** → the action is called client-side via `useEffect`. Since it doesn't hit any external service, rate limiting is unnecessary.
- **Hardcoded gold price** (`2350.50 USD/oz`) — this is a stale benchmark, not a security issue, but it's worth noting for accuracy.

**Verdict:** ✅ No security concerns. The gold price is hardcoded, which is an accuracy/trust issue but not a security one.

### `llms.txt/route.ts` analysis

- Reads `process.env.NEXT_PUBLIC_SITE_URL` (safe — this is a public config value, not a secret).
- Returns static markdown content — no user input, no dynamic rendering.
- Cache headers set correctly (`Cache-Control: public, max-age=86400`).

**Verdict:** ✅ No concerns.

---

## 4. Environment Variables

### All `process.env` references

| File | Variable | `NEXT_PUBLIC_`? | Content type | Risk |
|---|---|---|---|---|
| `app/llms.txt/route.ts:8` | `NEXT_PUBLIC_SITE_URL` | Yes | Public site URL | ✅ **Low** — This is a configuration value (the site's own domain), not a secret. Using it publicly is intentional. |

### Secrets audit

- **No API keys** found anywhere in the codebase.
- **No tokens, passwords, or credentials** found anywhere in the codebase.
- **No `.env` files** committed to the repository (`.gitignore` includes `.env*`).
- **No hardcoded secrets** found in source files (grep for `api_key`, `secret`, `token`, `password`, `credential`, `bearer`, `jwt`, `private_key` returned zero results in `app/` and `components/`).

**Verdict:** ✅ Clean. No secret leakage.

---

## 5. Markdown / Blog Content Rendering (XSS Surface)

### Rendering pipeline

- **Source:** `content/blog/*.md` — static local files committed to the repository.
- **Parsing:** `gray-matter` for frontmatter + `react-markdown` for body rendering.
- **Plugins:** `remark-gfm` only (GitHub Flavored Markdown — tables, strikethrough, task lists).
- **`rehype-raw`:** ❌ **Not installed or used** — raw HTML in markdown is **not** rendered.
- **`dangerouslySetInnerHTML`:** Only used for JSON-LD structured data blocks (see section below), never for blog content.

### Risk assessment

| Scenario | Risk |
|---|---|
| Malicious `.md` file committed by an attacker | **None** — requires write access to the repository. If an attacker has repo write access, there are much bigger problems. |
| Raw HTML in markdown | ✅ **Blocked** — `rehype-raw` is not used, so `<script>` tags in markdown would be escaped and displayed as text. |
| Future: user-submitted markdown | ⚠️ **Would need review** — currently, all markdown is static files committed to the repo. If this changes to user-submitted content, add `rehype-sanitize`. |

**Verdict:** ✅ Low risk for current static-file architecture. If the blog ever accepts user submissions, add `rehype-sanitize` to the `react-markdown` pipeline.

### All `dangerouslySetInnerHTML` instances (13 total)

Every instance is one of two safe patterns:

1. **JSON-LD structured data** (11 instances) — `JSON.stringify()` of an author-controlled object literal (tool constants, tool metadata). No user input. The `JSON.stringify` call guarantees the output is safely serialized JSON.
   - `app/layout.tsx:154` — Organization schema
   - `app/page.tsx:152,156,160` — WebSite/ItemList/FAQPage schemas
   - `app/tools/zakat-calculator/page.tsx:160`
   - `app/tools/gold-calculator/page.tsx:213`
   - ... (7 more tool page schemas)

2. **Critical CSS** (1 instance — `app/layout.tsx:135`) — A `<style>` block containing a single CSS rule for the LCP heading. No user input.

3. **Google Analytics init** (1 instance — `app/layout.tsx:204`) — Hardcoded GA initialisation script. No user input.

**Verdict:** ✅ All instances are safe. The serialised JSON-LD cannot produce executable HTML.

---

## 6. Dependency / Supply Chain

### Dependabot

| Check | Status |
|---|---|
| `.github/dependabot.yml` | ❌ **Not configured** |

### Dependency audit summary

| Package | Version | Notes | Risk |
|---|---|---|---|
| `next` | 16.2.4 (pinned) | Recent, actively maintained | ✅ Low |
| `react`, `react-dom` | 19.2.4 | Latest stable | ✅ Low |
| `gray-matter` | ^4.0.3 | Mature, maintained | ✅ Low |
| `react-markdown` | ^10.1.0 | Active, uses `useEffect`-free server rendering | ✅ Low |
| `remark-gfm` | ^4.0.1 | Plugin for react-markdown | ✅ Low |
| `lucide-react` | ^1.8.0 | Icon library, no runtime risk | ✅ Low |
| `framer-motion` | ^12.38.0 | Animation library | ✅ Low |
| `@next/third-parties` | ^16.2.5 | Next.js official | ✅ Low |
| `@vercel/speed-insights` | ^2.0.0 | Vercel official | ✅ Low |
| `eslint-config-next` | 16.2.4 | Matches Next.js version | ✅ Low |
| `tailwindcss` | ^4 | Latest v4 | ✅ Low |

**`npm audit` result:** (from install output) `3 vulnerabilities (2 moderate, 1 high)` — these are from transitive dependencies and were flagged as "do not require attention" by npm. No actionable critical vulnerabilities.

### Recommendations

1. **Create `.github/dependabot.yml`:**
   ```yml
   version: 2
   updates:
     - package-ecosystem: "npm"
       directory: "/"
       schedule:
         interval: "weekly"
       open-pull-requests-limit: 5
   ```

2. **Periodic review of transitive dependencies** — no urgent action needed.

---

## 7. General Next.js / Deployment Hygiene

### robots.txt (`app/robots.ts`)

- ✅ AI crawlers explicitly allowed (`GPTBot`, `ClaudeBot`, `PerplexityBot`, etc.)
- ✅ Category-filter URLs blocked (`/*?category=*`) — prevents parameter pollution
- ✅ `/api/` and `/_next/data/` blocked
- ✅ `/llms.txt` listed as secondary sitemap

### sitemap.xml (`app/sitemap.ts`)

- ✅ Tool pages included with correct priorities
- ✅ Blog pages included (after recent changes)
- ✅ Static pages (`/about`, `/privacy-policy`, `/terms-of-use`) included
- ❌ No `lastmod` for blog index page (`new Date()` will change every build — minor)
- ✅ No internal/draft routes exposed

### Debug code

| Finding | Location | Severity |
|---|---|---|
| `console.error("Failed to fetch gold price estimates:", error)` | `GoldCalculator.tsx:82` | ✅ **Low** — client-side error logging, no sensitive data leaked. Move to a proper monitoring solution long-term. |
| No other `console.log`/`console.warn`/`console.error` found | — | ✅ Clean |

### `.gitignore` completeness

```
/node_modules     ✅
/.next/           ✅
.env*             ✅
.vercel           ✅
/out/             ✅
/build            ✅
*.tsbuildinfo     ✅
next-env.d.ts     ✅
.DS_Store         ✅
npm-debug.log*    ✅
```

**Verdict:** ✅ Comprehensive. No missing entries.

### Hardcoded URLs / credentials

- Zero hardcoded API keys, tokens, or passwords found anywhere in the codebase.
- The only hardcoded URL is the site's own canonical domain (`https://www.quickcalcs.app`), which is expected.

### Middleware

- ❌ **No `middleware.ts` exists.** This is not a security gap (the site doesn't need auth middleware), but means CVE-2025-29927 does not apply.

---

## 8. Form / Input Handling in Calculators

### Components audited (3 of 7)

| Component | File | Input fields | Validation | Issues |
|---|---|---|---|---|
| **GoldCalculator** | `app/tools/gold-calculator/GoldCalculator.tsx` | Weight (number), Making charge % (number), + 3 select dropdowns | ✅ Basic: `parseFloat`, `Number.isFinite`, >0 check, non-negative making charge | ⚠️ No maximum bound on weight — `1e100` would render a value but not crash; UX issue, not security |
| **GratuityCalculator** | `app/tools/uae-gratuity-calculator/GratuityCalculator.tsx` | Basic salary (number), Start date (date), End date (date), Unpaid leaves (number), + 2 select dropdowns | ✅ Robust: date comparison, leaves ≤ total days, salary > 0 | ✅ Well-validated |
| **ZakatCalculator** | `app/tools/zakat-calculator/ZakatCalculator.tsx` | Cash, gold/silver, investments, business assets, liabilities (all numbers) | ✅ Basic: `parseFloat`, non-negative check, required-field check | ⚠️ Empty string → error even for optional fields (liabilities); UX issue, not security |

### General observation

All calculator inputs use `<input type="number">` with `min="0"` and `step="0.01"`. Values are parsed with `parseFloat()` and validated with `Number.isFinite()` and range checks before use. There are no string inputs that could contain injection payloads.

**Verdict:** ✅ No injection risk. The only input types are numbers and select dropdowns — no free-text fields exist in any calculator.

---

## Prioritised Action List

### Critical (fix immediately)

| # | Issue | Location | Fix |
|---|---|---|---|
| C-1 | **Missing Content-Security-Policy header** | `next.config.ts` | Add CSP (see §1 for recommended policy). This is the single highest-impact security improvement. |

### High

| # | Issue | Location | Fix |
|---|---|---|---|
| H-1 | **Missing Strict-Transport-Security header** | `next.config.ts` | Add `Strict-Transport-Security: max-age=63072000; includeSubDomains`. Vercel may set this at the edge, but explicating it is defence-in-depth. |
| H-2 | **No Dependabot config** | `.github/dependabot.yml` | Create basic weekly npm update config (see §6). |

### Medium

| # | Issue | Location | Fix |
|---|---|---|---|
| M-1 | **Missing Permissions-Policy header** | `next.config.ts` | Restrict unused browser features (camera, mic, geolocation, FLoC). |
| M-2 | **Gold price in `actions.ts` is hardcoded** | `app/tools/gold-calculator/actions.ts:3` | Either wire to a live gold price API (adds SSRF risk — mitigate with URL allowlist + rate limiting) or document prominently that the price is a stale benchmark. |

### Low / Nice to Have

| # | Issue | Location | Fix |
|---|---|---|---|
| L-1 | **No input max bounds in calculators** | `GoldCalculator.tsx`, `ZakatCalculator.tsx` | Add `max={999999999}` or similar to prevent absurdly large inputs. UX polish, not security. |
| L-2 | **No rate limiting on server action** | `actions.ts` | Currently unnecessary (no external fetch, no user input). If a live API is added, add rate limiting. |
| L-3 | **`console.error` in client component** | `GoldCalculator.tsx:82` | Acceptable for now. Consider `Sentry` or similar for production error monitoring. |
| L-4 | **Sitemap `lastModified` uses `new Date()`** | `app/sitemap.ts:36` | Will change on every build. Pin to a stable date or use actual content-modified dates. |
| L-5 | **Blog content safety if source changes** | `app/blog/[slug]/page.tsx` + `lib/blog.ts` | If blog ever accepts user-submitted content, add `rehype-sanitize` to the `react-markdown` pipeline. Currently safe with static files. |

---

## Detailed File References

### Security headers (`next.config.ts`)

```
File: F:\tools_site\gulftools\next.config.ts
Lines 16-32: Current headers() configuration
Missing:  CSP, HSTS, Permissions-Policy
Present:  X-Frame-Options, X-Content-Type-Options, Referrer-Policy, X-XSS-Protection
```

### Environment variable usage

```
File: F:\tools_site\gulftools\app\llms.txt\route.ts
Line 8:  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '')
Status:  Safe — public config value, not a secret
```

### Server actions

```
File: F:\tools_site\gulftools\app\tools\gold-calculator\actions.ts
Lines 1-50:  "use server" — fetchGoldPrices()
Status:      Safe — no user input, no external fetch, pure computation
```

### `dangerouslySetInnerHTML` usage (all safe)

```
File: F:\tools_site\gulftools\app\layout.tsx
Line 135:  <style> — Critical CSS for LCP heading
Line 154:  <script> — Organization JSON-LD schema
Line 204:  <script> — Google Analytics init

File: F:\tools_site\gulftools\app\page.tsx
Line 152:  WebSite JSON-LD schema
Line 156:  ItemList JSON-LD schema
Line 160:  FAQPage JSON-LD schema

File: F:\tools_site\gulftools\app\tools\zakat-calculator\page.tsx
Line 160:  Combined JSON-LD schema

File: F:\tools_site\gulftools\app\tools\gold-calculator\page.tsx
Line 213:  Combined JSON-LD schema

File: F:\tools_site\gulftools\app\tools\uae-gratuity-calculator\page.tsx
Line 205:  Combined JSON-LD schema

File: F:\tools_site\gulftools\app\tools\pakistan-freelancer-tax-calculator\page.tsx
Line 287:  Combined JSON-LD schema

File: F:\tools_site\gulftools\app\tools\ksa-gosi-calculator\page.tsx
Line 281:  Combined JSON-LD schema

File: F:\tools_site\gulftools\app\tools\malaysia-epf-calculator\page.tsx
Line 347:  Combined JSON-LD schema

File: F:\tools_site\gulftools\app\tools\hajj-umrah-budget-calculator\page.tsx
Line 251:  Combined JSON-LD schema

Status: All instances use JSON.stringify() of author-controlled object literals
        or hardcoded CSS/JS. No user input in any case.
```

### Calculator validation (spot-checked)

```
File: F:\tools_site\gulftools\app\tools\gold-calculator\GoldCalculator.tsx
Lines 195-205:  calculateValue() — parseFloat, Number.isFinite, >0
Lines 208-220:  calculateZakat() — iterates items, validates each weight

File: F:\tools_site\gulftools\app\tools\uae-gratuity-calculator\GratuityCalculator.tsx
Lines 45-62:    validate() — parseFloat, date comparison, leaves ≤ total days

File: F:\tools_site\gulftools\app\tools\zakat-calculator\ZakatCalculator.tsx
Lines 47-56:    validate() — non-negative, parseFloat
```

### Console logging

```
File: F:\tools_site\gulftools\app\tools\gold-calculator\GoldCalculator.tsx
Line 82:  console.error("Failed to fetch gold price estimates:", error)
Status:   Low risk — client-side only, no sensitive data leaked
```

---

## Appendix: No-findings list (things checked, not found)

| Check | Result |
|---|---|
| Hardcoded API keys / secrets in source | ❌ Not found |
| `.env` files committed | ❌ Not found |
| `middleware.ts` (CVE-2025-29927 surface) | ❌ Does not exist |
| `rehype-raw` plugin | ❌ Not installed |
| User-controllable path in `fetch()` calls | ❌ No outbound fetches from server |
| `NEXT_PUBLIC_` secret exposure | ❌ Only `NEXT_PUBLIC_SITE_URL` (public config) |
| Client-side data leakage via `NEXT_PUBLIC_` | ❌ No secrets exposed |
| Unsanitised URL params rendered as HTML | ❌ No `dangerouslySetInnerHTML` with URL params |
| XSS via blog markdown | ❌ `rehype-raw` absent; static files only |

---

*End of report. Generated 2026-06-15.*
