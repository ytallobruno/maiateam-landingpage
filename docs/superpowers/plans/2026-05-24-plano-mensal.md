# Plano Mensal Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** adicionar o card do Plano Mensal com preço R$ 300 (BF: R$ 250) e visual roxo, seguindo o padrão da seção de preços.

**Architecture:** o plano mensal será um novo `Plan` com `id: "mensal"`, preços configurados em `pricing.config.ts` e renderizado em `PricingSection.tsx` junto aos demais cards. O tema visual será adicionado em `getPlanTheme` com classes roxas consistentes com o padrão atual.

**Tech Stack:** Next.js (App Router), React, TypeScript, Tailwind CSS.

---

## Arquivos e Responsabilidades
- Modificar: `src/config/pricing.config.ts` — adicionar preços do mensal (normal e Black Friday) e economias.
- Modificar: `src/components/PricingSection.tsx` — incluir `mensal` no tipo, planos (normal/BF), e tema roxo.

---

### Task 1: Atualizar configuração de preços do plano mensal

**Files:**
- Modify: `src/config/pricing.config.ts`

- [ ] **Step 1: Adicionar preços do mensal (normal e Black Friday)**

```ts
export const pricingConfig = {
    blackFriday: {
        mensal: {
            original: 300.0,
            discount: 250.0,
        },
        // ...restante
    },
    normal: {
        mensal: {
            vista: 300.0,
            credito: 300.0,
        },
        // ...restante
    },
} as const;
```

- [ ] **Step 2: Atualizar economias da Black Friday**

```ts
export const getBlackFridaySavings = () => ({
    mensal: pricingConfig.blackFriday.mensal.original - pricingConfig.blackFriday.mensal.discount,
    prata: pricingConfig.blackFriday.prata.original - pricingConfig.blackFriday.prata.discount,
    ouro: pricingConfig.blackFriday.ouro.original - pricingConfig.blackFriday.ouro.discount,
    platinum: pricingConfig.blackFriday.platinum.original - pricingConfig.blackFriday.platinum.discount,
});
```

- [ ] **Step 3: Expor preços atuais do mensal**

```ts
export const getCurrentPrices = (isBlackFriday: boolean) => {
    if (isBlackFriday) {
        return {
            mensal: pricingConfig.blackFriday.mensal.discount,
            mensalOriginal: pricingConfig.blackFriday.mensal.original,
            mensalVista: null,
            mensalCredito: null,
            // ...restante
        };
    }

    return {
        mensal: pricingConfig.normal.mensal.credito,
        mensalOriginal: null,
        mensalVista: pricingConfig.normal.mensal.vista,
        mensalCredito: pricingConfig.normal.mensal.credito,
        // ...restante
    };
};
```

- [ ] **Step 4: Commit**

```bash
git add src/config/pricing.config.ts
git commit -m "feat: add plano mensal pricing config"
```

---

### Task 2: Adicionar o plano mensal nos cards (normal e Black Friday)

**Files:**
- Modify: `src/components/PricingSection.tsx`

- [ ] **Step 1: Incluir `mensal` no tipo `Plan`**

```ts
type Plan = {
    id: "mensal" | "prata" | "ouro" | "platinum" | "avulso";
    // ...restante
};
```

- [ ] **Step 2: Inserir o plano mensal antes do Prata (Black Friday)**

```ts
{
    id: "mensal",
    name: "PLANO MENSAL",
    badge: "MENSAL",
    price: prices.mensal,
    priceVista: null,
    priceCredito: null,
    originalPrice: prices.mensalOriginal,
    savings: savings?.mensal,
    description: "Plano mensal com protocolo fixo de 4 semanas, renovado todo mês",
    features: [
        "Acesso à nova plataforma de alunos",
        "Planilha com vídeos de TODOS os exercícios",
        "Planilha de controle de carga",
        "Alongamentos específicos",
        "Ajustes periódicos nos treinos",
        "Protocolo de 4 semanas (renovação mensal)",
    ],
    paymentLink: "#",
    whatsappLink: "https://wa.me/5521972179585?text=Oii%20Lucas%21%20Gostaria%20do%20Plano%20Mensal",
    highlighted: false,
    isBlackFriday: true,
},
```

- [ ] **Step 3: Inserir o plano mensal antes do Prata (normal)**

```ts
{
    id: "mensal",
    name: "PLANO MENSAL",
    badge: "MENSAL",
    price: prices.mensalCredito,
    priceVista: prices.mensalVista,
    priceCredito: prices.mensalCredito,
    originalPrice: null,
    savings: null,
    description: "Plano mensal com protocolo fixo de 4 semanas, renovado todo mês",
    features: [
        "Acesso à nova plataforma de alunos",
        "Planilha com vídeos de TODOS os exercícios",
        "Planilha de controle de carga",
        "Alongamentos específicos",
        "Ajustes periódicos nos treinos",
        "Protocolo de 4 semanas (renovação mensal)",
    ],
    paymentLink: "#",
    whatsappLink: "https://wa.me/5521972179585?text=Oii%20Lucas%21%20Gostaria%20do%20Plano%20Mensal",
    highlighted: false,
    isBlackFriday: false,
},
```

- [ ] **Step 4: Commit**

```bash
git add src/components/PricingSection.tsx
git commit -m "feat: add plano mensal card content"
```

---

### Task 3: Criar tema roxo para o plano mensal

**Files:**
- Modify: `src/components/PricingSection.tsx`

- [ ] **Step 1: Adicionar tema roxo no bloco de Black Friday**

```ts
return {
    mensal: {
        cardBorder: "border-purple-400/55",
        cardBg: "bg-gradient-to-b from-[#1b102a] to-[#0d0915]",
        badgeClass: "bg-gradient-to-r from-purple-300 to-purple-500 text-black",
        priceClass: "text-purple-200",
        iconClass: "text-purple-300",
        hoverClass: "hover:border-purple-200 hover:shadow-[0_24px_48px_rgba(168,85,247,0.2)]",
        buttonClass: "bg-gradient-to-r from-purple-300 to-purple-500 text-black hover:brightness-105",
        featureBoxClass: "border-purple-300/25 bg-purple-400/[0.06]",
        pixSavingsClass: "bg-purple-400/15 border-purple-300/45 text-purple-200",
    },
    // ...restante
}[plan.id];
```

- [ ] **Step 2: Adicionar tema roxo no bloco normal**

```ts
const themes: Record<Plan["id"], PlanTheme> = {
    mensal: {
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
    // ...restante
};
```

- [ ] **Step 3: Commit**

```bash
git add src/components/PricingSection.tsx
git commit -m "feat: add plano mensal purple theme"
```

---

### Task 4: Validação manual (sem testes automatizados evidenciados)

**Files:**
- Modify: nenhuma

- [ ] **Step 1: Rodar ambiente local e conferir o card**

```bash
npm run dev
```

Expected: servidor iniciado e card “PLANO MENSAL” visível antes do Prata, com paleta roxa.
