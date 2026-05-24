---
description: "Instrução incremental para registrar erros corrigidos, causas e prevenção."
applyTo: "**/*"
---

# Histórico Incremental de Erros Corrigidos

Sempre que um erro for identificado e corrigido no repositório, registre de forma incremental:

1. **Contexto do erro**
    - arquivo(s) afetado(s)
    - sintoma observado
2. **Causa raiz**
    - motivo técnico confirmado após investigação
3. **Correção aplicada**
    - o que foi alterado para resolver
4. **Como evitar recorrência**
    - checklist curto e acionável
    - comando(s) de validação usados no repositório (quando existirem)

## Formato recomendado de entrada incremental

```md
## [YYYY-MM-DD] Título curto do erro

### Evidências

- ...

### Causa raiz

- ...

### Correção

- ...

### Prevenção

- ...
```

## Regras

- Não remover histórico anterior.
- Acrescentar novos registros no final do arquivo.
- Separar fato observado de inferência quando necessário.
- Quando faltar evidência, escrever: `Não evidenciado no repositório`.

## [2026-05-24] Cards de preço espremidos no breakpoint de laptop (1024px)

### Evidências

- `src/components/PricingSection.tsx` estava utilizando `lg:grid-cols-4`, o que causava a renderização de 4 colunas com pouca largura útil por card em larguras a partir de 1024px.

### Causa raiz

- O uso do breakpoint `lg:grid-cols-4` limitava a largura de cada card a ~220px, dificultando a legibilidade e espremendo o conteúdo interno dos cards em telas de 1024px (tamanho laptop padrão).

### Correção

- Alterado de `lg:grid-cols-4` para `lg:grid-cols-3` em `src/components/PricingSection.tsx` para apresentar no máximo 3 cards por linha nos formatos desktop e laptop (lg e superiores), proporcionando uma largura confortável de ~309px por card.

### Prevenção

- Validar a responsividade e legibilidade de seções com muitos cards em larguras limítrofes como 1024px (laptop) antes de finalizar alterações de layout ou grid.
