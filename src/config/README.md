# 📁 Configurações do Projeto

Esta pasta contém todas as configurações centralizadas do projeto, organizadas por domínio.

---

## 📂 Estrutura

```
src/config/
├── promotions.config.ts   # Configurações de promoções (Black Friday, Price Countdown)
├── pricing.config.ts      # Preços normais e promocionais
├── plans.config.ts        # Estrutura e conteúdo dos planos
└── index.ts              # Barrel export (facilita imports)
```

---

## 🎯 Guia de Uso

### 1️⃣ **promotions.config.ts**

**Responsabilidade:** Controla Black Friday, Price Countdown e outras promoções.

**Como ativar/desativar promoções:**

```typescript
export const promotionsConfig = {
    blackFriday: {
        enabled: true, // ← Liga Black Friday
        startDate: new Date("2025-11-25T00:00:00"),
        endDate: new Date("2025-12-01T23:59:59"), // data que desabilita automaticamente
    },
    priceCountdown: {
        enabled: false, // ← Liga countdown de preços
        endDate: new Date("2025-12-31T23:59:59"), // data que desabilita automaticamente
        message: "Preços sobem em:",
    },
};
```

**Funções disponíveis:**

- `isBlackFridayActive()` - Verifica se Black Friday está ativa
- `isPriceCountdownActive()` - Verifica se countdown está ativo
- `getPromotionDates()` - Retorna datas formatadas

**Comportamento do Hook `usePromotion`:**

- **Verificação Automática:**
    - O hook verifica automaticamente o status das promoções ao ser inicializado.
    - Caso nenhuma promoção esteja ativa, não há verificações adicionais para evitar overhead.
- **Countdown Preciso:**
    - Quando faltam 5 minutos ou menos para o término de uma promoção, o hook realiza verificações a cada 1 segundo.
    - Caso falte mais de 5 minutos, o hook agenda uma verificação para o momento em que restarem 5 minutos.
- **Desativação Automática:**
    - Promoções são desativadas automaticamente ao atingir a data de término configurada.

---

### 2️⃣ **pricing.config.ts**

**Responsabilidade:** Define todos os preços (normais e promocionais).

**Como alterar preços:**

```typescript
export const pricingConfig = {
    blackFriday: {
        prata: {
            original: 329.9, // ← Preço "de"
            discount: 295.0, // ← Preço "por"
        },
        // ...
    },
    normal: {
        prata: {
            vista: 295.9, // ← Preço PIX
            credito: 329.9, // ← Preço parcelado
        },
        // ...
    },
};
```

**Funções disponíveis:**

- `getCurrentPrices(isBlackFriday)` - Retorna preços baseado no modo ativo
- `getBlackFridaySavings()` - Calcula economias da Black Friday

---

### 3️⃣ **plans.config.ts**

**Responsabilidade:** Define estrutura e conteúdo dos planos.

**Como editar planos:**

```typescript
export const plansConfig = {
    prata: {
        id: "prata",
        name: "PLANO PRATA",
        description: "...",
        features: ["Feature 1", "Feature 2"],
        whatsappMessage: "...",
        theme: {
            normal: "gray",
            blackFriday: "gold",
        },
    },
    // ...
};
```

**Configurações adicionais:**

- `badgesConfig` - Badges dos planos (Black Friday e Normal)
- `planOrderConfig` - Ordem de exibição dos planos
- `highlightedPlansConfig` - Planos destacados

**Funções disponíveis:**

- `getWhatsAppLink(planId, isBlackFriday)` - Gera link do WhatsApp
- `getPaymentLink(planId)` - Retorna link de pagamento
- `getPlanBadge(planId, isBlackFriday)` - Retorna badge do plano
- `getPlanTheme(planId, isBlackFriday)` - Retorna tema do plano
- `isPlanHighlighted(planId, isBlackFriday)` - Verifica se plano é destacado
- `getPlanOrder(isBlackFriday)` - Retorna ordem dos planos

---

## 🔄 Como Importar

### Import Individual (quando precisa de poucas coisas)

```typescript
import { promotionsConfig } from "@/config/promotions.config";
import { pricingConfig } from "@/config/pricing.config";
import { plansConfig } from "@/config/plans.config";
```

### Barrel Import (quando precisa de várias coisas)

```typescript
import { promotionsConfig, pricingConfig, plansConfig, isBlackFridayActive, getCurrentPrices } from "@/config";
```

---

## 📝 Exemplos Práticos

### Exemplo 1: Ativar Black Friday

```typescript
// 1. Ir em promotions.config.ts
blackFriday: {
    enabled: true, // ← Mudar para true
    startDate: new Date("2025-11-25T00:00:00"),
    endDate: new Date("2025-11-30T23:59:59"),
}

// 2. Ajustar preços em pricing.config.ts (se necessário)
blackFriday: {
    prata: {
        original: 329.9,
        discount: 249.0, // ← Novo preço
    },
}
```

### Exemplo 2: Adicionar novo plano

```typescript
// Em plans.config.ts
export const plansConfig = {
    // ... planos existentes

    diamante: {
        id: "diamante",
        name: "PLANO DIAMANTE",
        description: "Plano VIP completo",
        features: [
            "Todos os benefícios anteriores",
            "Suporte 24/7",
            "Consultoria individual",
        ],
        whatsappMessage: "Oii%20Lucas%21%20Gostaria%20do%20Plano%20Diamante",
        theme: {
            normal: "blue",
            blackFriday: "gold",
        },
    },
}

// Adicionar preços em pricing.config.ts
normal: {
    // ...
    diamante: {
        vista: 799.9,
        credito: 899.9,
    },
}

// Adicionar à ordem de exibição
export const planOrderConfig = {
    blackFriday: ["prata", "ouro", "platinum", "diamante", "protocolo"],
    normal: ["prata", "protocolo", "ouro", "platinum", "diamante"],
}
```

### Exemplo 3: Mudar plano destacado

```typescript
// Em plans.config.ts
export const highlightedPlansConfig = {
    blackFriday: "platinum", // ← Mudar de "ouro" para "platinum"
    normal: "ouro", // ← Mudar de "protocolo" para "ouro"
};
```

## 🎨 Temas Disponíveis

Os planos podem usar os seguintes temas:

- `gray` - Cinza (plano básico)
- `green` - Verde (destaque médio)
- `yellow` - Amarelo (destaque alto)
- `purple` - Roxo (premium)
- `gold` - Dourado (Black Friday)

---

## 📞 Dúvidas?

Se tiver dúvidas sobre como usar as configurações, consulte:

1. Este README
2. Os comentários nos próprios arquivos de config
3. O hook `usePromotion.ts` para ver exemplos de uso
