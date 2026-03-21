---
description: "Regras para descoberta de stack e tooling a partir de manifests, lockfiles, configs e infraestrutura versionada."
applyTo: "**/{package.json,package-lock.json,pnpm-lock.yaml,yarn.lock,bun.lock,bun.lockb,tsconfig*.json,next.config.*,vite.config.*,vitest.config.*,jest.config.*,eslint.config.*,.eslintrc*,.prettierrc*,prettier.config.*,serverless*.yml,template*.yml,template*.yaml,samconfig.toml,cdk.json,Dockerfile*,.github/workflows/*}"
---

# Regras de Descoberta por Manifest

Ao analisar manifests e configs neste repositório:

1. Trate os arquivos versionados como fonte primária de verdade.
2. Em monorepos, faça descoberta recursiva em todos os `package.json` relevantes.
3. Extraia stack, tooling e comandos a partir de evidência direta.
4. Diferencie claramente evidência direta de inferência.
5. Não reporte tecnologia baseada apenas em dependências transitivas.
6. Quando faltar evidência, escreva `Não evidenciado no repositório`.
7. Todo output final deve ser em português pt-BR.

## O que levantar a partir destes arquivos

- package manager
- workspaces/packages/apps
- linguagem e runtime
- frameworks
- tooling de testes
- tooling de lint e formatting
- tooling de build/bundling
- tooling serverless ou de infraestrutura
- comandos definidos em `scripts`
- sinais de observabilidade e automação operacional, quando existirem

## Regras para scripts e comandos

- copie os scripts exatamente como definidos
- preserve o escopo correto (raiz ou package)
- não normalize para comandos inventados
- não assuma que um config implica automaticamente um script correspondente

## Regras para confiança

Use apenas:

- `direto` para evidência explicitamente presente
- `inferência de alta confiança` quando múltiplas evidências convergirem
- `inferência de baixa confiança` quando houver sinal fraco
