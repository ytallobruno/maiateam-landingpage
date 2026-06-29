# 📁 Central Project Configurations (`src/config/`)

This directory houses all the centralized configuration files for the landing page. Modifying these configurations updates the content, pricing, active marketing campaigns, SEO metadata, and social proof sections of the website dynamically.

---

## 📂 Directory Structure

```
src/config/
├── plans.config.ts        # Plan details, benefits, WhatsApp messages, and component themes
├── pricing.config.ts      # Active normal and promotional (Black Friday) prices
├── promotions.config.ts   # Campaign flags and dates (Black Friday, countdown timers)
├── results.config.ts      # Before & After student transformations and testimonial quotes
├── seo.config.ts          # Page title, meta tags, student login URLs, FAQPage & Offer list
├── index.ts               # Barrel export facilitating centralized imports
└── README.md              # Documentation (You are here)
```

---

## 🎯 Config Files Overview

### 1️⃣ `promotions.config.ts`

**Responsibility:** Controls the active promotion campaigns (such as Black Friday discount modes and price countdown sticky bars).

**Campaign controls:**

```typescript
export const promotionsConfig = {
    blackFriday: {
        enabled: true, // Toggles Black Friday mode on/off
        startDate: new Date("2026-11-01T00:00:00"),
        endDate: new Date("2026-11-30T23:59:59"),
    },
    priceCountdown: {
        enabled: false, // Toggles a sticky urgency countdown bar
        endDate: new Date("2026-12-31T23:59:59"),
        message: "Preços sobem em:",
    },
    protocoloAvulso: {
        enabled: false, // Toggles visual urgency badge for single protocol
        message: "APENAS 5 VAGAS",
    },
};
```

**Key Utilities:**

- `isBlackFridayActive()`: Checks if the current date is within the Black Friday campaign period.
- `isPriceCountdownActive()`: Checks if the countdown is enabled and still running.
- `getPromotionDates()`: Returns localized formatted date strings for display.

---

### 2️⃣ `pricing.config.ts`

**Responsibility:** Maps normal and Black Friday pricing schemas for all plans.

- **Black Friday Mode:** Original prices (de) and discounted prices (por).
- **Normal Mode:** Cash/PIX price (vista) and Credit Card installment price (credito).

**Key Utilities:**

- `getCurrentPrices(isBlackFriday)`: Returns the current pricing objects depending on the active campaign mode.
- `getBlackFridaySavings()`: Computes original vs discount savings for marketing copy.

---

### 3️⃣ `plans.config.ts`

**Responsibility:** Defines the contents, benefits, WhatsApp redirect messages, and visual styling themes of the plans.

**Plan Structure:**

- `id`: Unique identifier (matches pricing keys).
- `name`: Display title of the plan.
- `description`: Subtitle/summary.
- `features`: Array of features included.
- `whatsappMessage`: Personalized message sent by the user when redirecting to WhatsApp.
- `theme`: Tailwind style themes mapping for normal and Black Friday modes.

---

### 4️⃣ `results.config.ts`

**Responsibility:** Centralizes before-and-after transformation metrics and quotes from former/active students displayed in the `ResultsSection`.

**Student Transformation Object:**

```typescript
export interface Result {
    image: string; // Image path under /public
    name: string; // Student name
    result: string; // Period or change summary (e.g. "Evolução em 8 semanas")
    quote: string; // Direct quote or testimonial
    featured?: boolean; // Highlighted card flag
}
```

---

### 5️⃣ `seo.config.ts`

**Responsibility:** Centralizes SEO configurations, page metadata, keywords, platform links, and structured data schemas (JSON-LD) for index pages.

**Key exports:**

- `siteMetadata`: Web page Title, template, default description, and social sharing image.
- `homeFaqs`: List of FAQs used both in UI rendering and in `FAQPage` JSON-LD schema.
- `homeOfferCatalog`: List of offers used in `OfferCatalog` schema.

---

## 🔄 Imports & Best Practices

### Centralized Barrel Import (Recommended)

You should import configurations and utilities directly from `@/config` to keep imports clean:

```typescript
import { promotionsConfig, plansConfig, resultsConfig, getCurrentPrices } from "@/config";
```

### Component Consumption (Prices & Promo Hook)

Always use the `usePromotion` hook in client components to read pricing and campaign states dynamically. **Never hardcode price values or percentages in JSX components.**

```tsx
import { usePromotion } from "@/hooks/usePromotion";

export default function PricingCard() {
    const { isBlackFriday, prices } = usePromotion();
    // Use prices.prata, prices.ouro, etc.
}
```
