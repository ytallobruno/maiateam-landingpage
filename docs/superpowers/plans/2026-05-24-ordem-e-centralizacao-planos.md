# Ordem e Centralizacao de Planos Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** centralizar os dados/temas dos planos em `plans.config.ts` e ajustar a ordem dos cards para avulso, mensal, prata, ouro, platinum (normal e Black Friday).

**Architecture:** `plans.config.ts` vira a fonte unica de ordem, badges, destaques e temas. `PricingSection.tsx` apenas compoe os cards com base no config e nos precos do `usePromotion`.

**Tech Stack:** Next.js (App Router), React, TypeScript, Tailwind CSS.

---

## Arquivos e Responsabilidades
- Modificar: `src/config/plans.config.ts` — dados dos planos, ordem, badges, destaques e classes de tema.
- Modificar: `src/components/PricingSection.tsx` — montar cards a partir do config e aplicar ordem.

---

### Task 1: Centralizar configuracao de planos e temas

**Files:**
- Modify: `src/config/plans.config.ts`

- [ ] **Step 1: Atualizar tipos de tema e adicionar classes**

```ts
export type PlanThemeKey = "gray" | "green" | "yellow" | "purple" | "amber" | "orange" | "cyan";

export type PlanCardTheme = {
    cardBorder: string;
    cardBg: string;
    badgeClass: string;
    priceClass: string;
    iconClass: string;
    hoverClass: string;
    buttonClass: string;
    featureBoxClass: string;
    pixSavingsClass: string;
};

export interface PlanFeatures {
    id: string;
    name: string;
    description: string;
    features: string[];
    whatsappMessage: string;
    paymentLink?: string;
    theme: {
        normal: PlanThemeKey;
        blackFriday: PlanThemeKey;
    };
}

export const themeClassesConfig: Record<PlanThemeKey, PlanCardTheme> = {
    gray: {
        cardBorder: "border-zinc-300/35",
        cardBg: "bg-gradient-to-b from-[#121212] to-[#0b0b0b]",
        badgeClass: "bg-gradient-to-r from-zinc-300 to-zinc-500 text-black",
        priceClass: "text-zinc-100",
        iconClass: "text-zinc-300",
        hoverClass: "hover:border-zinc-200/60 hover:shadow-[0_24px_44px_rgba(212,212,216,0.14)]",
        buttonClass: "bg-zinc-200 text-black hover:bg-zinc-100",
        featureBoxClass: "border-zinc-300/15 bg-zinc-300/[0.05]",
        pixSavingsClass: "bg-zinc-400/15 border-zinc-300/35 text-zinc-200",
    },
    green: {
        cardBorder: "border-green-400/45",
        cardBg: "bg-gradient-to-b from-[#07140d] to-[#050d08]",
        badgeClass: "bg-gradient-to-r from-green-300 to-green-500 text-black",
        priceClass: "text-green-300",
        iconClass: "text-green-400",
        hoverClass: "hover:border-green-300 hover:shadow-[0_24px_44px_rgba(74,222,128,0.18)]",
        buttonClass: "bg-gradient-to-r from-green-300 to-green-500 text-black hover:brightness-105",
        featureBoxClass: "border-green-300/20 bg-green-400/[0.06]",
        pixSavingsClass: "bg-green-500/15 border-green-300/40 text-green-200",
    },
    yellow: {
        cardBorder: "border-yellow-400/45",
        cardBg: "bg-gradient-to-b from-[#171406] to-[#0d0b05]",
        badgeClass: "bg-gradient-to-r from-yellow-300 to-amber-400 text-black",
        priceClass: "text-yellow-300",
        iconClass: "text-yellow-300",
        hoverClass: "hover:border-yellow-300 hover:shadow-[0_24px_44px_rgba(250,204,21,0.16)]",
        buttonClass: "bg-gradient-to-r from-yellow-300 to-amber-400 text-black hover:brightness-105",
        featureBoxClass: "border-yellow-300/20 bg-yellow-400/[0.06]",
        pixSavingsClass: "bg-yellow-400/15 border-yellow-300/40 text-yellow-200",
    },
    purple: {
        cardBorder: "border-purple-400/45",
        cardBg: "bg-gradient-to-b from-[#140c22] to-[#0b0814]",
        badgeClass: "bg-gradient-to-r from-purple-300 to-purple-500 text-black",
        priceClass: "text-purple-200",
        iconClass: "text-purple-300",
        hoverClass: "hover:border-purple-200 hover:shadow-[0_24px_44px_rgba(168,85,247,0.18)]",
        buttonClass: "bg-gradient-to-r from-purple-300 to-purple-500 text-black hover:brightness-105",
        featureBoxClass: "border-purple-300/20 bg-purple-400/[0.06]",
        pixSavingsClass: "bg-purple-400/15 border-purple-300/40 text-purple-200",
    },
    amber: {
        cardBorder: "border-amber-500/50",
        cardBg: "bg-gradient-to-b from-[#16110a] to-[#0d0a07]",
        badgeClass: "bg-gradient-to-r from-amber-500 to-amber-600 text-black",
        priceClass: "text-amber-300",
        iconClass: "text-amber-300",
        hoverClass: "hover:border-amber-300 hover:shadow-[0_24px_44px_rgba(245,158,11,0.16)]",
        buttonClass: "bg-amber-500 text-black hover:bg-amber-400",
        featureBoxClass: "border-amber-400/20 bg-amber-500/[0.06]",
        pixSavingsClass: "bg-amber-500/15 border-amber-400/40 text-amber-300",
    },
    orange: {
        cardBorder: "border-orange-300/70",
        cardBg: "bg-gradient-to-b from-[#181007] to-[#0f0a05]",
        badgeClass: "bg-gradient-to-r from-amber-300 to-orange-400 text-black",
        priceClass: "text-orange-200",
        iconClass: "text-orange-200",
        hoverClass: "hover:border-orange-200 hover:shadow-[0_24px_48px_rgba(251,146,60,0.2)]",
        buttonClass: "bg-gradient-to-r from-amber-300 to-orange-400 text-black hover:brightness-105",
        featureBoxClass: "border-orange-300/25 bg-orange-400/[0.06]",
        pixSavingsClass: "bg-orange-400/15 border-orange-300/45 text-orange-200",
    },
    cyan: {
        cardBorder: "border-cyan-300/55",
        cardBg: "bg-gradient-to-b from-[#091218] to-[#070b0f]",
        badgeClass: "bg-gradient-to-r from-cyan-300 to-sky-500 text-black",
        priceClass: "text-cyan-200",
        iconClass: "text-cyan-300",
        hoverClass: "hover:border-cyan-200 hover:shadow-[0_24px_44px_rgba(34,211,238,0.16)]",
        buttonClass: "bg-gradient-to-r from-cyan-300 to-sky-500 text-black hover:brightness-105",
        featureBoxClass: "border-cyan-300/20 bg-cyan-400/[0.06]",
        pixSavingsClass: "bg-cyan-500/15 border-cyan-300/40 text-cyan-200",
    },
};
```

- [ ] **Step 2: Atualizar plansConfig (mensal + textos atuais)**

```ts
export const plansConfig: Record<string, PlanFeatures> = {
    avulso: {
        id: "avulso",
        name: "PROTOCOLO AVULSO",
        description: "Plano Basic avulso com protocolo de 4 semanas e vagas limitadas (15)",
        features: [
            "Protocolo de 4 semanas",
            "1 planilha de treino permanente",
            "Alongamentos especificos",
            "Diretrizes de execucao",
            "Acesso vitalicio",
            "Sem acesso a nova plataforma de alunos",
        ],
        whatsappMessage: "Oii%20Lucas%21%20Gostaria%20de%20um%20protocolo%20avulso",
        paymentLink: "https://pay.kiwify.com.br/Xcq6j4S",
        theme: {
            normal: "green",
            blackFriday: "amber",
        },
    },
    mensal: {
        id: "mensal",
        name: "PLANO MENSAL",
        description: "Plano mensal com protocolo fixo de 4 semanas, renovado todo mes",
        features: [
            "Acesso a nova plataforma de alunos",
            "Planilha com videos de TODOS os exercicios",
            "Planilha de controle de carga",
            "Alongamentos especificos",
            "Ajustes periodicos nos treinos",
            "Protocolo de 4 semanas (renovacao mensal)",
        ],
        whatsappMessage: "Oii%20Lucas%21%20Gostaria%20do%20Plano%20Mensal",
        theme: {
            normal: "purple",
            blackFriday: "purple",
        },
    },
    prata: {
        id: "prata",
        name: "PLANO PRATA",
        description: "Plano Premium de entrada com 2 protocolos de treino e acesso a nova plataforma de alunos",
        features: [
            "Acesso a nova plataforma de alunos",
            "Planilha com videos de TODOS os exercicios",
            "Planilha de controle de carga",
            "Alongamentos especificos",
            "Ajustes periodicos nos treinos",
        ],
        whatsappMessage: "Oii%20Lucas%21%20Gostaria%20do%20Plano%20Prata",
        theme: {
            normal: "gray",
            blackFriday: "amber",
        },
    },
    ouro: {
        id: "ouro",
        name: "PLANO OURO",
        description: "Plano Premium com 3 protocolos de treino e acompanhamento mais proximo",
        features: [
            "Acesso a nova plataforma de alunos",
            "Planilha com videos de TODOS os exercicios",
            "Planilha de controle de carga",
            "Alongamentos especificos",
            "Ajustes periodicos nos treinos",
            "Chamada de alinhamento a cada 6 semanas para entrega do protocolo",
        ],
        whatsappMessage: "Oii%20Lucas%21%20Gostaria%20do%20Plano%20Ouro",
        theme: {
            normal: "yellow",
            blackFriday: "yellow",
        },
    },
    platinum: {
        id: "platinum",
        name: "PLANO PLATINUM",
        description: "Plano Premium com 4 protocolos de treino e acompanhamento avancado",
        features: [
            "Acesso a nova plataforma de alunos",
            "Planilha com videos de TODOS os exercicios",
            "Planilha de controle de carga",
            "Alongamentos especificos",
            "Ajustes periodicos nos treinos",
            "Chamada de alinhamento a cada 6 semanas para entrega do protocolo",
        ],
        whatsappMessage: "Oii%20Lucas%21%20Gostaria%20do%20Plano%20Platinum",
        theme: {
            normal: "cyan",
            blackFriday: "orange",
        },
    },
};
```

- [ ] **Step 3: Atualizar badges, ordem e destaques**

```ts
export const badgesConfig = {
    blackFriday: {
        avulso: "Preco Fixo",
        mensal: "MENSAL",
        prata: "🔥 BLACK FRIDAY",
        ouro: "🏆 BLACK FRIDAY + MAIS POPULAR",
        platinum: "👑 BLACK FRIDAY PREMIUM",
    },
    normal: {
        avulso: "MAIS VENDIDO",
        mensal: "MENSAL",
        prata: "INICIAL",
        ouro: "RECOMENDADO",
        platinum: "PREMIUM",
    },
};

export const planOrderConfig = {
    blackFriday: ["avulso", "mensal", "prata", "ouro", "platinum"],
    normal: ["avulso", "mensal", "prata", "ouro", "platinum"],
};

export const highlightedPlansConfig = {
    blackFriday: "ouro",
    normal: "avulso",
};
```

- [ ] **Step 4: Adicionar helper para classes de tema**

```ts
export const getPlanThemeClasses = (planId: string, isBlackFriday: boolean, hasPremiumFocus: boolean) => {
    const themeKey = getPlanTheme(planId, isBlackFriday);
    const base = themeClassesConfig[themeKey] || themeClassesConfig.gray;

    if (!isBlackFriday && hasPremiumFocus) {
        if (planId === "ouro") {
            return { ...base, cardBorder: "border-yellow-300/75" };
        }
        if (planId === "avulso") {
            return { ...base, cardBorder: "border-green-400/75" };
        }
    }

    return base;
};
```

- [ ] **Step 5: Commit**

```bash
git add src/config/plans.config.ts
git commit -m "refactor: centralize planos config"
```

---

### Task 2: Usar plans.config.ts no PricingSection

**Files:**
- Modify: `src/components/PricingSection.tsx`

- [ ] **Step 1: Atualizar imports e remover consts locais**

```ts
import {
    plansConfig,
    getPlanOrder,
    getPlanBadge,
    getWhatsAppLink,
    getPaymentLink,
    isPlanHighlighted,
    getPlanThemeClasses,
} from "@/config/plans.config";
```

- [ ] **Step 2: Montar array de planos com ordem configurada**

```ts
const getPlans = (): Plan[] => {
    const order = getPlanOrder(isBlackFriday);
    return order.map((planId) => {
        const plan = plansConfig[planId];
        const priceKey = planId === "avulso" ? "protocolo" : planId;

        return {
            id: plan.id as Plan["id"],
            name: plan.name,
            badge: getPlanBadge(planId, isBlackFriday),
            price: isBlackFriday ? prices[priceKey] : null,
            priceVista: isBlackFriday ? null : prices[`${priceKey}Vista`],
            priceCredito: isBlackFriday ? null : prices[`${priceKey}Credito`],
            originalPrice: isBlackFriday ? prices[`${priceKey}Original`] : null,
            savings: isBlackFriday ? savings?.[priceKey] : null,
            description: plan.description,
            features: plan.features,
            paymentLink: getPaymentLink(planId),
            whatsappLink: getWhatsAppLink(planId, isBlackFriday),
            highlighted: isPlanHighlighted(planId, isBlackFriday),
            isBlackFriday,
        };
    });
};
```

- [ ] **Step 3: Ajustar badge dinamico do avulso (promocao)**

```ts
const plans = getPlans().map((plan) => {
    if (plan.id === "avulso" && isProtocoloAvulsoPromo) {
        return { ...plan, badge: protocoloAvulsoMessage };
    }
    return plan;
});
```

- [ ] **Step 4: Usar tema do config**

```ts
const theme = getPlanThemeClasses(plan.id, plan.isBlackFriday, hasPremiumFocus);
```

- [ ] **Step 5: Commit**

```bash
git add src/components/PricingSection.tsx
git commit -m "refactor: build pricing cards from config"
```

---

### Task 3: Validacao manual

**Files:**
- Modify: nenhuma

- [ ] **Step 1: Rodar e conferir ordem**

```bash
npm run dev
```

Expected: ordem dos cards `avulso, mensal, prata, ouro, platinum` em ambos os modos.
