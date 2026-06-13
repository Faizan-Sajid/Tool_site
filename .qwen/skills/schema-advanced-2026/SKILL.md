---
name: schema-advanced-2026
description: Implement 2026-compliant structured data for Next.js tool/calculator pages. Covers FAQPage deprecation (May 7, 2026), SoftwareApplication/WebApplication for calculators, enhanced WebPage with E-E-A-T fields, Organization entity schema, ItemList for hub pages, and triple schema stacking for GEO. Never adds fake ratings or unsupported markup.
source: auto-skill
created_at: '2026-06-01T00:00:00.000Z'
---

# Advanced Schema — 2026

Use this skill when the user asks to implement or update structured data on tool pages, or when a schema audit finds missing or outdated JSON-LD.

## Procedure

### 1. 2026 Schema Landscape — What Changed

Three major changes since 2024:

**A — FAQPage is dead (May 7, 2026):** Google deprecated FAQ rich results. `FAQPage` JSON-LD no longer generates rich result snippets. Remove all `FAQPage` JSON-LD from pages. Keep visible Q&A HTML — it remains valuable for featured snippets and AI extraction.

**B — E-E-A-T fields are now used by AI systems:** `WebPage.author`, `WebPage.reviewedBy`, `WebPage.dateModified`, `WebPage.citation` are consumed by Google's AI Overview system to evaluate content trustworthiness. These were previously optional signals; in 2026 they are a core E-E-A-T requirement.

**C — AI engines use schema for entity resolution:** `Organization` schema at the site level is how AI engines "know" your brand. Without it, each page is an isolated document with no brand context. With it, every page is understood as part of a trusted named entity.

### 2. Schema Decision Tree

For each page type, use this decision tree:

**Calculator / Tool page:**
- Primary: `SoftwareApplication` or `WebApplication`
- Secondary: `WebPage` with E-E-A-T fields
- If page has step-by-step visible instructions: add `HowTo`
- If page has visible Q&A: keep HTML, remove FAQPage JSON-LD

**Informational / Guide page:**
- Primary: `Article` (ChatGPT citation studies explicitly favor `Article` schema)
- Secondary: `WebPage` with E-E-A-T fields
- If page has visible Q&A: keep HTML, remove FAQPage JSON-LD

**Hub / Index page (lists multiple tools):**
- Primary: `WebPage`
- Secondary: `ItemList` with all tool URLs
- Remove `SearchAction` unless a real search endpoint exists at a confirmed route

**Site-level (app/layout.tsx):**
- `Organization` with name, url, logo, description, sameAs

### 3. SoftwareApplication Schema Template

```typescript
const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'GOSI Calculator — Saudi Arabia',
  description: 'Calculate monthly GOSI contribution for employees and employers in Saudi Arabia. Covers all contribution rates effective 2024.',
  url: 'https://yoursite.com/tools/gosi-calculator',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  browserRequirements: 'Requires JavaScript',
  isAccessibleForFree: true,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  // Only add aggregateRating if you have real verified user reviews
};
```

### 4. Enhanced WebPage Schema with E-E-A-T Fields

```typescript
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: '[Page Title]',
  description: '[Primary query answer in 150 chars]',
  url: 'https://yoursite.com/tools/gosi-calculator',
  datePublished: '2024-01-15', // actual publish date — never new Date()
  dateModified: '2026-03-01', // actual last content update — never new Date()
  author: {
    '@type': 'Organization',
    name: 'YourSiteName',
    url: 'https://yoursite.com',
  },
  // Add reviewedBy only if a named expert actually reviewed the content
  about: {
    '@type': 'Thing',
    name: 'GOSI Saudi Arabia',
    description: 'General Organization for Social Insurance contribution calculations',
  },
  citation: [
    {
      '@type': 'CreativeWork',
      name: 'GOSI Official Contribution Rates',
      url: 'https://www.gosi.gov.sa/en/contributions',
    },
  ],
  inLanguage: 'en',
  isPartOf: {
    '@type': 'WebSite',
    name: 'YourSiteName',
    url: 'https://yoursite.com',
  },
};
```

### 5. Geo-Targeting Fields — areaServed, audience, inLanguage, speakable, potentialAction

For tool pages targeting a specific country or region, add these geo-targeting fields to the schema. They signal geographic relevance to Google and AI engines without needing a separate country-specific page.

**In WebPage schema:**
```typescript
{
  "@type": "WebPage",
  // ... existing fields
  
  "inLanguage": "en",                              // Primary page language
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [                               // Classes matching answer blocks
      ".quick-answer",                             // AI Overview box
      "h1",
      "h2",
      "h3"
    ]
  },
  "potentialAction": {
    "@type": "UseAction",
    "target": "https://yoursite.com/tools/your-tool" // Page URL
  },
}
```

**In SoftwareApplication/WebApplication schema:**
```typescript
{
  "@type": "SoftwareApplication",
  // ... existing fields
  
  "areaServed": {
    "@type": "Country",
    "name": "Saudi Arabia",
    "sameAs": "https://www.wikidata.org/wiki/Q851"  // Wikidata entry for the country
  },
  // For multi-country pages, use an array:
  // "areaServed": ["PK", "IN", "GB", "US", "BD", "ID", "AE", "SA"],
  
  "audience": {
    "@type": "Audience",
    "audienceType": "Private sector employees in Saudi Arabia, HR managers, payroll teams, Saudi nationals, non-Saudi expats in KSA"
  },
}
```

**When to use each field:**
| Field | When to add | Example |
|---|---|---|
| `inLanguage` | Every page | `"en"`, `"ar"`, `"fr"` |
| `speakable` | Any page with answer-first content blocks | cssSelector targets `.quick-answer` class |
| `potentialAction` | Calculator/tool pages | `UseAction` targeting the tool URL |
| `areaServed` | Pages targeting specific countries | Single `Country` object with Wikidata `sameAs` OR array of ISO codes |
| `audience` | Pages serving a specific user segment | Describe who should use the tool |

**Wikidata `sameAs` references for common countries:**
| Country | Wikidata URL |
|---|---|
| Saudi Arabia | `https://www.wikidata.org/wiki/Q851` |
| UAE | `https://www.wikidata.org/wiki/Q878` |
| Pakistan | `https://www.wikidata.org/wiki/Q843` |
| India | `https://www.wikidata.org/wiki/Q668` |
| UK | `https://www.wikidata.org/wiki/Q145` |
| USA | `https://www.wikidata.org/wiki/Q30` |
| Malaysia | `https://www.wikidata.org/wiki/Q833` |

### 6. Organization Schema (Site-Level)

Add once to `app/layout.tsx` or a global `<JsonLd>` component. Do not repeat per page:

```typescript
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'YourSiteName',
  url: 'https://yoursite.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://yoursite.com/logo.png',
    width: 512,
    height: 512,
  },
  description: 'Free online calculators for [primary use case]. [2 sentences max].',
  sameAs: [
    'https://www.linkedin.com/company/yoursitename',
    'https://github.com/yoursitename',
  ],
};
```

### 6. ItemList Schema for Hub Pages

```typescript
const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Free Online Calculators',
  description: 'Complete list of tools available on YourSiteName',
  numberOfItems: TOOLS.length,
  itemListElement: TOOLS.map((tool, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: tool.title,
    description: tool.description,
    url: `https://yoursite.com${tool.href}`,
  })),
};
```

### 7. Verification Procedure

For each schema change:
1. Copy the JSON-LD and paste into schema.org validator (validator.schema.org). Fix any validation errors.
2. Run Google Rich Results Test on the page URL. Verify: no FAQPage schema detected, SoftwareApplication or WebPage detected as expected.
3. Search the codebase for `"FAQPage"` string — confirm zero remaining occurrences in the target files.
4. Verify `dateModified` is a hardcoded ISO date string, not `new Date().toISOString()`.
5. Verify `aggregateRating` is absent unless real review data exists.

## Output Pattern

- Start with the schema decision tree result: which schema types were chosen and why.
- For each schema addition or change: provide the exact JSON-LD code block.
- Include the verification results: schema.org validator, Rich Results Test, FAQPage grep, dateModified check.
- End with a note about triple schema stacking (JSON-LD + OG + microdata) where applicable.
