---
description: "Regras para criar ou atualizar Markdown baseado em evidências reais do repositório, comandos reais e arquitetura sem alucinação."
applyTo: "**/*.md"
---

# Regras para Documentação em Markdown

Ao criar ou atualizar arquivos Markdown neste repositório:

1. Documente o repositório como ele existe agora.
2. Use comandos exatos descobertos em scripts ou em docs versionados.
3. Não invente arquitetura, variáveis de ambiente, fluxos de deploy nem ownership de serviços.
4. Se faltar um detalhe, escreva `Não evidenciado no repositório`.
5. Em monorepos, sempre especifique o path relevante do package/app.
6. Mantenha as seções curtas, estáveis e fáceis de atualizar depois.
7. Prefira tabelas e templates repetíveis para inventários como:
    - apps e packages
    - funções Lambda
    - comandos
    - variáveis de ambiente
8. Separe fatos de inferências.
9. Todo output final deve ser em português pt-BR.

## Para documentação de Lambda

Ao documentar funções Lambda, prefira este template:

- Visão Geral
- Objetivo
- Estrutura Técnica
- Fluxo de Execução
- Regras de Negócio
- Contratos
- Integrações
- Tratamento de Erros
- Observabilidade
- Exemplo Prático
- Flowchart Mermaid
- Sequence Diagram Mermaid
- Lacunas de Entendimento
- Resumo Final

## Para documentação do repositório

Prefira:

- O que este repositório faz
- Estrutura do repositório
- Aplicações e packages
- Resumo da stack
- Desenvolvimento local
- Scripts e comandos
- Testes e validação
- Notas de deploy ou runtime
- Lacunas conhecidas
