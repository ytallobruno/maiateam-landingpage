---
name: fitness-landing-coach
description: "Guidelines, copy rules, design systems and pricing architecture details for modifying or expanding the Fitness/Personal Trainer landing page."
---

# Specialized Skill: Fitness Landing Page & Coach Business Logic

Use this skill whenever the user requests:

- Creating, editing, or refactoring visual sections of the Landing Page.
- Changing or adding fitness plans or pricing comparison tables.
- Updating or maintaining promotional rules (Black Friday, countdown timers).
- Adjusting WhatsApp links or Calls to Action (CTA).
- Creating new copy and copywriting for conversion in Brazilian Portuguese (pt-BR).

---

## 1. Persuasive Copywriting (pt-BR Fitness Niche)

In this Landing Page, persuasive writing aims to convert skeptical visitors into online consulting students. Use the following premises:

### Common Pain Points (What to target):

- **Stagnation:** "I train and train, but I don't see results in the mirror."
- **Lack of time:** "I don't have time to spend 2 hours in the gym every day."
- **Lack of guidance:** "I feel lost without knowing which exercises to do or how to execute them."
- **Overly restrictive diets:** "I don't want to give up eating what I like to get results."

### Desires (What to promise with focus):

- **Efficiency:** Intense 45 to 60-minute workouts adapted to their routine.
- **Freedom & Convenience:** Have the workout sheet on the phone, anywhere (gym or home).
- **Real Support:** Direct access to the Coach via WhatsApp, without automatic or generic replies.
- **Sustainable Lifestyle:** Gradual and real results without extreme measures.

### Recommended Vocabulary (for the final pt-BR copy):

- **Use:** "Consultoria Online", "Treino Individualizado", "Ficha de Treino Digital", "Suporte VIP no WhatsApp", "Metodologia Validada", "Alunos Reais, Resultados Reais".
- **Avoid:** Overly clinical or technical language, difficult jargon, or English terms without translation (prefer "antes e depois" to "before and after", "cronograma" to "timeline").

---

## 2. Dynamic Pricing & Promotions Architecture

All financial logic of the landing page is **data-driven** from the [src/config/](../../../src/config/) directory. It is strictly forbidden to insert static prices in the component code.

### How plans configuration is done:

1. Fixed data for plans, names, benefits, and customized WhatsApp messages reside in [plans.config.ts](../../../src/config/plans.config.ts).
2. The [pricing.config.ts](../../../src/config/pricing.config.ts) file maps normal and promotional prices for Black Friday.
3. The promotion activation status is regulated in [promotions.config.ts](../../../src/config/promotions.config.ts).

### How to read and apply promotions in Components:

Always use the `usePromotion` hook to identify active offers in the component:

```tsx
import { usePromotion } from "@/hooks/usePromotion";

export default function ExampleComponent() {
    const { isBlackFriday, isPriceCountdown, prices, savings } = usePromotion();

    // prices will contain the active prices of the plans (e.g., prices.prata, prices.ouro)
    // savings will contain the calculated savings if isBlackFriday is true
}
```

---

## 3. CTA Composition & WhatsApp Integration

For each plan displayed, the checkout button must lead to WhatsApp with a parameterized message containing the selected plan.

### WhatsApp Link Generation Pattern:

1. Retrieve the WhatsApp phone number configured globally (usually mapped via config or environment variables, check [seo.config.ts](../../../src/config/seo.config.ts)).
2. Get the `whatsappMessage` property of the corresponding plan from [plans.config.ts](../../../src/config/plans.config.ts).
3. Use a helper function or construct the URL with the URI-encoded message:
   `https://wa.me/YOURNUMBER?text=ENCODED_MESSAGE_HERE`
4. Always use `target="_blank"` and `rel="noopener noreferrer"` on the link.

---

## 4. Layout Optimization & Core Components

When adjusting or adding new visual sections, strictly follow the established styling and interaction patterns:

- **Mobile-First:** Every section must display perfectly on mobile devices. Use the `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3` pattern for layout alignment.
- **Grids and Spacings:** Avoid squeezed columns on laptop displays (1024px). Use a maximum of 3 columns for sections with detailed/long cards (such as the pricing section, which was corrected from `lg:grid-cols-4` to `lg:grid-cols-3`).
- **Fluid Animations:** Respect Emil Kowalski's animation philosophy. Do not animate interactions that happen dozens of times a day (like simple clicks without state feedback). If animating entry elements, use Framer Motion with smooth curves (`easeOut`) and short transition durations (150ms to 300ms).
- **Before and After (Transformations):** Use the **Swiper** library for transformation images of students (Results Section), ensuring visible pagination on mobile devices and support for swipe gestures.
- **SEO Schema:** When adding new questions to the FAQ in [FAQSection.tsx](../../../src/components/FAQSection.tsx), make sure to synchronize and update the `homeFaqs` array in [seo.config.ts](../../../src/config/seo.config.ts) so that the JSON-LD FAQPage markup of the home page remains up to date.
