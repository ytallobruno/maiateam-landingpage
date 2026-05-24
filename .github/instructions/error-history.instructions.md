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
