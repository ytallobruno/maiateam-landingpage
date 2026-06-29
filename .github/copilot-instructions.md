# Copilot Instructions - Maiateam Landing Page

Next.js (App Router) landing page for fitness/personal training consulting, focused on conversion, SEO, and Portuguese pt-BR content.

> ℹ️ **Detailed reference**: See [AGENTS.md](../AGENTS.md) for full development philosophy and business guidelines.

---

## 1. Non-Negotiable Business & Coding Rules

1. **Dynamic Pricing & Promotions**:
    - **NEVER hardcode prices, percentages, discounts or promotional dates** in components.
    - Always read configurations from [pricing.config.ts](../src/config/pricing.config.ts), [plans.config.ts](../src/config/plans.config.ts), and [promotions.config.ts](../src/config/promotions.config.ts).
    - Consume active pricing and campaign status using the client-side `usePromotion()` hook from [usePromotion.ts](../src/hooks/usePromotion.ts).

2. **Conversion & WhatsApp Links**:
    - Call-to-action (CTA) buttons must dynamically point to WhatsApp.
    - Generate WhatsApp links using the phone number in config and the `whatsappMessage` specified for each plan in [plans.config.ts](../src/config/plans.config.ts), encoded properly (using `encodeURIComponent`).

3. **Portuguese pt-BR Tone**:
    - All user-facing copywriting and content must be in high-energy, motivational Brazilian Portuguese (pt-BR). Refer to common fitness terms (e.g. "Consultoria Online", "Ficha de Treino", "Antes e Depois").

4. **SEO & Structured Data (JSON-LD)**:
    - Ensure the JSON-LD schemas in [page.tsx](file:///e:/Documentos/projetos/maiateam-landingpage/src/app/page.tsx) (`FAQPage`, `OfferCatalog`) are synchronized and updated when FAQs or plans configs change.

5. **Mobile-First & Responsiveness**:
    - 80%+ of traffic is mobile. Ensure all grid structures and padding work perfectly on small devices.
    - Avoid narrow layouts on laptops (1024px); use a maximum of 3 grid columns for pricing or feature cards.

---

## 2. Technical Stack & Architecture

| Aspect         | Evidenced Stack                                              |
| :------------- | :----------------------------------------------------------- |
| **Framework**  | Next.js `^16.2.3` (App Router)                               |
| **Language**   | TypeScript `^5`, React `19.1.0`                              |
| **Styling**    | Tailwind CSS `^3.4.17` (inline utility classes)              |
| **Animations** | Framer Motion `^12.23.12`                                    |
| **Carousel**   | Swiper `^12.1.2` (Used for "Antes e Depois" transformations) |
| **Imports**    | Absolute with `@/*` mapping to `./src/*`                     |

### Core Folders

- `src/app/`: Routes, global layout, metadata routes (`robots.ts`, `sitemap.ts`)
- `src/components/`: Modular visual sections of the page (Hero, About, Method, Pricing, FAQ)
- `src/config/`: Centralized configurations (plans, pricing, promotions, seo, results data)
- `src/hooks/`: Reusable hooks (`usePromotion`)

---

## 3. Build, Test & Validation Commands

Validation is handled via linting and compiling, as there is no automated test framework in the repository.

```bash
# Start Dev Server (on port 3001)
npm run dev

# Prettier Code Formatting
npm run format

# ESLint Analysis & Fixes
npm run lint
npm run lint:fix

# Production Compilation
npm run build
```

**Recommended verification command before committing changes**:

```bash
npm run format && npm run lint && npm run build
```

---

## 4. AI Skills & Philosophy References

For advanced guidelines, please refer to:

- **UI Animation Polish**: See Emil Kowalski's guidelines in [.agents/skills/emil-design-eng/SKILL.md](./skills/emil-design-eng/SKILL.md).
- **Frontend Aesthetics**: See [.agents/skills/frontend-design/SKILL.md](./skills/frontend-design/SKILL.md).
- **Fitness Copy & Promo Hook Mechanics**: See [.agents/skills/fitness-landing-coach/SKILL.md](./skills/fitness-landing-coach/SKILL.md).
- **Error History**: See [.github/instructions/error-history.instructions.md](./instructions/error-history.instructions.md) for past bug fixes.
