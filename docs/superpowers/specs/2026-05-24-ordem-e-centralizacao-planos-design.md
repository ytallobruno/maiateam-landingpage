# Spec de Design — Ordem e Centralizacao de Planos

Data: 2026-05-24

## Objetivo
- Centralizar a logica de planos em `plans.config.ts`.
- Ajustar a ordem dos cards para: avulso, mensal, prata, ouro, platinum (normal e Black Friday).

## Escopo
- Mover consts de planos de `PricingSection.tsx` para `plans.config.ts`.
- Atualizar textos, features e badges para refletir o estado atual.
- Centralizar classes de tema no config.
- Usar `plans.config.ts` como fonte unica de ordem, badges, destaques e tema.

## Fora de Escopo
- Mudancas em layout global.
- Alteracoes em pricing.config.ts (apenas mapeamento avulso -> protocolo no PricingSection).

## Decisoes de Design

### 1) plans.config.ts como fonte unica
- `plansConfig` passa a conter mensal + atualizacoes de descricao/features.
- `badgesConfig` inclui mensal e usa id `avulso` (nao `protocolo`).
- `planOrderConfig` para ambos os modos: `["avulso", "mensal", "prata", "ouro", "platinum"]`.
- `highlightedPlansConfig` mantido (BF: ouro, normal: avulso).

### 2) Temas centralizados
- Definir `PlanThemeKey` com todas as variacoes usadas: `gray`, `green`, `yellow`, `purple`, `amber`, `orange`, `cyan`.
- Adicionar `themeClassesConfig` com classes Tailwind por tema.
- Exportar helper `getPlanThemeClasses(planId, isBlackFriday, hasPremiumFocus)` que aplica as classes e preserva o ajuste de `hasPremiumFocus` (ouro e avulso no normal).

### 3) PricingSection enxuto
- `PricingSection` monta os planos via `getPlanOrder` + `plansConfig`.
- Precos seguem `usePromotion` e `pricing.config.ts`.
- Mapeamento de precos: `avulso` usa `protocolo` nas chaves de preco (sem mudar pricing.config.ts).
- Badge, whatsapp e destaque vem do config.

## Impacto Esperado
- Sem duplicacao de dados entre config e componente.
- Ordem consistente dos cards nos dois modos.
- Manutencao mais simples para textos/temas.
