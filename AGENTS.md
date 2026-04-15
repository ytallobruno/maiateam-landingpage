# AGENTS.md

## Visão Geral do Projeto

Landing page em Next.js (App Router) para consultoria fitness/personal trainer, com foco em conversão, SEO e conteúdo em português pt-BR.

Arquitetura observada (evidência direta):

- `src/app`: rotas, layout e metadata routes (`robots.ts`, `sitemap.ts`)
- `src/components`: seções visuais da landing
- `src/config`: configuração de preços, promoções e SEO
- `src/hooks`: lógica de estado reutilizável (ex.: `usePromotion`)

## Regras Inegociáveis

1. Não assuma stack, comandos, arquitetura ou padrões sem evidência no repositório.
2. Trate `package.json`, lockfiles, configs e código versionado como fonte primária de verdade.
3. Nunca invente comandos.
4. Quando faltar evidência, declare: `Não evidenciado no repositório`.
5. Priorize consistência com o código existente em vez de best practices genéricas.
6. Todo output final deve ser escrito em português pt-BR.

## Setup e Comandos

Use npm (evidência: `package-lock.json` e scripts da raiz).

- Instalar dependências: `npm install`
- Dev server: `npm run dev`
- Build: `npm run build`
- Start produção: `npm run start`
- Lint: `npm run lint`
- Lint com correção: `npm run lint:fix`
- Format: `npm run format`
- Verificar formato: `npm run format:check`

## Workflow de Desenvolvimento

1. Leia contexto em:
   - `.github/copilot/copilot-instructions.md`
   - `.github/copilot-instructions.md`
   - `.github/instructions/*.instructions.md`
2. Localize arquivos similares antes de alterar.
3. Aplique mudanças cirúrgicas mantendo contratos e comportamento.
4. Execute, quando relevante:
   1. `npm run format`
   2. `npm run lint`
   3. `npm run build`

## Instruções de Testes

- Framework de testes automatizados: **Não evidenciado no repositório**.
- Não adicionar ferramenta de teste sem solicitação explícita.
- Validar mudanças com lint/build e, se aplicável, testes já existentes.

## Convenções de Código

### TypeScript / React / Next

- `PascalCase` para componentes e `camelCase` para funções/constantes.
- Preferir alias `@/` para imports internos (`tsconfig.json`).
- Usar `export default function NomeComponente()` em componentes/páginas.
- Usar `export const metadata: Metadata` em páginas/layout server-side.
- Usar `"use client"` apenas quando necessário (hooks/eventos do cliente).

### UI / Tailwind

- Reutilizar componentes e padrões visuais existentes.
- Manter classes Tailwind inline no JSX conforme padrão atual.
- Não introduzir novas libs de UI/estado sem pedido explícito.

### Acessibilidade e SEO

- Preservar `aria-*`, hierarchy de headings e `alt` descritivo.
- Em links externos, manter `target="_blank"` com `rel="noopener noreferrer"`.
- Em SEO, seguir padrão do projeto: metadata Next, JSON-LD, `robots.ts`, `sitemap.ts`.

## Build e Deploy

- Build oficial: `npm run build` (output estático/prerender gerenciado pelo Next).
- Pipeline de CI/CD: **Não evidenciado no repositório**.
- Processo formal de deploy: **Não evidenciado no repositório**.

## Segurança

- Nunca adicionar secrets no código.
- Variáveis de ambiente só quando houver necessidade comprovada; ex.: `NEXT_PUBLIC_SITE_URL`.
- Tratar URLs externas com validação/normalização quando já houver helper para isso.

## Pull Requests e Commits

- Convenção obrigatória de título de PR: **Não evidenciado no repositório**.
- Antes de concluir mudanças de código, garantir que lint/build não foram quebrados.
- Para refatorações, explicitar quando houver qualquer mudança funcional.

## Refatoração e Frontend (regras específicas)

Ao refatorar:

1. Preserve regra de negócio, lógica e contratos existentes.
2. Não misture refatoração com alteração funcional sem explicitar.
3. Preserve tipagem, aliases e padrão de imports/exports atuais.

Ao implementar frontend Next.js + TypeScript + Tailwind:

1. Confirmar uso de App Router/Pages Router antes de alterar rotas.
2. Reaproveitar componentes/layouts/utilitários já existentes.
3. Preservar semântica, responsividade e acessibilidade.

## Histórico Incremental de Erros (obrigatório)

Sempre que um erro for descoberto e corrigido, atualizar:

- `.github/instructions/error-history.instructions.md`

Objetivo: manter histórico de recorrências, causa raiz, correção e prevenção (o que não fazer novamente).

## Troubleshooting

- Se lint falhar por estilo, executar `npm run format` e repetir lint.
- Se build falhar por tipagem, corrigir no arquivo afetado sem usar cast amplo (`any`) sem necessidade.
- Se houver divergência entre instruções, priorizar as de `.github/instructions/` e arquivos de contexto mais próximos da mudança.
