# AGENTS.md (Workspace Customizations - Antigravity)

## 1. General Development Guidelines (Karpathy Guidelines)

### Think Before Coding

- **Do not assume. Do not hide confusion. Surface tradeoffs.**
- Before implementing: Declare your assumptions. If there is uncertainty, ask. If there are simpler approaches or multiple interpretations, present them.

### Simplicity First

- **Write the minimum code necessary.** Avoid premature abstractions or unrequested complex configurations.
- If the code becomes long and complex, stop and rewrite it in a simple way.

### Surgical Changes

- **Change only what is necessary.** Respect the style of the current file. Remove orphan variables/imports created by your changes, but do not clean pre-existing dead code unless requested.

---

## 2. Project Overview & Business Domain

### What is the project?

A **High-Converting Landing Page in Next.js (App Router)** for fitness consulting / Personal Trainer Coach.

### Tone of Voice and Copywriting (pt-BR)

- All communication with the end-user is in **Portuguese (pt-BR)**.
- The tone must be motivational, direct, energetic, and professional, focusing on overcoming common objections (e.g., lack of time, lack of focus, stagnated results).
- Recommended common terms: "Consultoria Online", "Treino Personalizado", "Antes e Depois", "Acompanhamento Individualizado", "Plano Prata/Ouro/Platinum".

### Mobile-First and Performance

- More than 80% of traffic in this niche comes from mobile devices. Therefore, all layout changes must be designed primarily for small screens and then adapted for desktop.
- Avoid overly narrow columns at intermediate resolutions (1024px laptops).
- Always optimize images with `next/image`, specifying `priority` for above-the-fold images (Hero section / Coach photo) to keep LCP low.

---

## 3. Architecture and Dynamic Configurations (Urgent/Critical)

### Non-Negotiable Pricing & Promotions Rule

**NEVER insert prices, discounts, percentages, or promotional dates statically (hardcoded) in the JSX of components.**

- All plans and their benefits are configured in [plans.config.ts](/src/config/plans.config.ts).
- All price tiers (normal and Black Friday) are configured in [pricing.config.ts](/src/config/pricing.config.ts).
- Date controls and campaign activation are configured in [promotions.config.ts](/src/config/promotions.config.ts).
- Reading prices and the active promotion status must be done through the client-side `usePromotion()` hook in [usePromotion.ts](/src/hooks/usePromotion.ts).

### Conversion Flow and WhatsApp Integration

- The Call to Action (CTA) buttons of the training plans redirect to WhatsApp.
- The default message sent in the WhatsApp link must be retrieved dynamically from the `whatsappMessage` property of the corresponding plan configured in [plans.config.ts](/src/config/plans.config.ts) and be properly URI encoded.

### SEO & Structured Data (JSON-LD)

- Preserve the project's SEO optimizations.
- When updating frequently asked questions (FAQs) or training plans, ensure that the JSON-LD scripts in [page.tsx](/src/app/page.tsx) (`FAQPage`, `OfferCatalog`, and `WebSite`) are updated in sync to reflect the new data.

---

## 4. Commands and Tools

Always use **npm** for running commands (evidence: `package-lock.json`):

- Install dependencies: `npm install`
- Dev server: `npm run dev`
- Production build: `npm run build`
- Code formatting: `npm run format`
- Lint check: `npm run lint`
- Auto-fix lint: `npm run lint:fix`

### Recommended Validation Workflow

Before completing any code change, run:

```bash
npm run format && npm run lint && npm run build
```

---

## 5. Code Conventions

- **Routes:** Next.js App Router.
- **Components:** `export default function ComponentName()` in PascalCase.
- **Styling:** Tailwind CSS inline in JSX (avoid creating new local CSS files).
- **Imports:** Use absolute imports with the `@/` alias mapped to `./src/`.
- **Accessibility:** Preserve `aria-*` tags, semantic heading alternation (`h1` unique, followed by `h2/h3`), and image `alt` descriptions.
- **Corrected errors:** When correcting complex errors or layout/logic bugs, document them incrementally at the end of [.github/instructions/error-history.instructions.md](/.github/instructions/error-history.instructions.md).
