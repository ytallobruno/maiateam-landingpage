# GitHub Copilot Instructions

## Priority Guidelines

Ao gerar código para este repositório, siga esta prioridade:

1. **Compatibilidade de versão**: respeite estritamente as versões detectadas no projeto.
2. **Contexto local primeiro**: priorize instruções em `.github/copilot/` (quando existirem) e `.github/copilot-instructions.md`.
3. **Padrões já existentes**: replique padrões reais do código antes de propor alternativas.
4. **Consistência arquitetural**: mantenha o estilo atual (monolítico frontend com App Router e organização por domínio em `src/`).
5. **Qualidade de código**: priorize maintainability, performance, accessibility, security e testability sem inventar práticas não evidenciadas.

## Technology Version Detection (evidência direta)

Use as versões abaixo como referência de compatibilidade:

| Tecnologia    | Versão/Evidência             |
| ------------- | ---------------------------- |
| Next.js       | `^16.2.3` (`package.json`)   |
| React         | `19.1.0` (`package.json`)    |
| React DOM     | `19.1.0` (`package.json`)    |
| TypeScript    | `^5` (`package.json`)        |
| ESLint        | `^9` (`package.json`)        |
| Prettier      | `^3.6.2` (`package.json`)    |
| Tailwind CSS  | `^3.4.17` (`package.json`)   |
| Framer Motion | `^12.23.12` (`package.json`) |
| Swiper        | `^12.1.2` (`package.json`)   |
| next-seo      | `^6.8.0` (`package.json`)    |

Regras de compatibilidade:

- Não use APIs/funções que dependam de versões superiores às listadas.
- Em dúvida, prefira o padrão já utilizado nos arquivos existentes.
- Versão exata de Node.js: **Não evidenciado no repositório**.

## Context Files

Se houver conflito de orientação, siga esta ordem:

1. `.github/copilot/copilot-instructions.md` (este arquivo)
2. `.github/copilot-instructions.md`
3. `.github/instructions/error-history.instructions.md`
4. `.github/instructions/manifest-discovery.instructions.md`
5. `.github/instructions/markdown-documentation.instructions.md`
6. Código existente em `src/`

Arquivos como `architecture.md`, `tech-stack.md`, `coding-standards.md`, `folder-structure.md` e `exemplars.md` em `.github/copilot/`: **Não evidenciado no repositório**.

## Arquitetura e Estrutura Observadas

- Projeto **single package** (sem monorepo) com `package.json` na raiz.
- Frontend em Next.js App Router (`src/app/**`).
- Organização principal:
    - `src/app`: rotas, layout global, metadata routes (`robots.ts`, `sitemap.ts`)
    - `src/components`: componentes visuais da landing e seções
    - `src/hooks`: hooks de estado/efeitos (`usePromotion`)
    - `src/config`: configurações centralizadas (preços, promoções, SEO)
- Alias de import: `@/* -> ./src/*` (`tsconfig.json`).

## Codebase Scanning Instructions

Antes de criar/alterar código:

1. Encontre arquivos similares no mesmo domínio (rota, componente, hook, config).
2. Reaplique padrões de:
    - naming (`PascalCase` em componentes, `camelCase` em funções/constantes)
    - imports com aspas duplas e alias `@/`
    - tipagem explícita em TypeScript
    - tratamento de estado com hooks React
    - classes utilitárias Tailwind inline no JSX
3. Quando houver múltiplos padrões, prefira os arquivos mais recentes do próprio módulo.
4. Não introduza bibliotecas novas sem evidência ou pedido explícito.

## Convenções de Código Observadas

### TypeScript/React/Next

- Use `export default function NomeComponente()` para componentes de página/seção.
- Use `export const metadata: Metadata` em páginas/layout server-side.
- Use `"use client"` apenas em componentes com hooks/eventos do cliente.
- Use `next/link` para navegação interna e `<a>` para links externos.
- Em links externos, mantenha `target="_blank"` + `rel="noopener noreferrer"`.

### Estilo e Formatação

- Formatação gerida por Prettier (`npm run format`).
- Lint com ESLint + `eslint-plugin-prettier` (`npm run lint`).
- Indentação e quebras devem seguir o padrão já aplicado no repositório.

### Organização de Configuração

- Centralize constantes de negócio em `src/config/` (ex.: `pricing.config.ts`, `promotions.config.ts`, `seo.config.ts`).
- Prefira funções auxiliares de config em vez de duplicar lógica em componentes.

### Acessibilidade

- Preserve/adicione `aria-label` em controles interativos quando necessário.
- Mantenha hierarquia semântica de headings (`h1` único por página, seguido de `h2/h3`).
- Use `alt` descritivo em imagens relevantes.

## Code Quality Standards

### Maintainability

- Priorize funções e componentes coesos.
- Evite duplicação de texto/configuração quando já houver fonte central.
- Mantenha nomes claros e contextuais ao domínio fitness/consultoria.

### Performance

- Siga padrões existentes de `next/image` e uso cuidadoso de `priority`.
- Evite efeitos/intervalos desnecessários; use lógica condicional como em `usePromotion`.
- Não aumente complexidade de render sem necessidade funcional.

### Security

- Não introduza secrets no código.
- Preserve padrões de links externos seguros (`noopener noreferrer`).
- Valide e normalize URLs de ambiente quando aplicável (como em `siteUrl`).

### Accessibility

- Preserve atributos ARIA já existentes.
- Mantenha textos de CTA compreensíveis e contraste visual consistente com padrão atual.

### Testability

- Framework de testes automatizados: **Não evidenciado no repositório**.
- Escreva código com responsabilidades separadas para facilitar testes futuros.
- Não adicione ferramenta de teste sem solicitação explícita.

## Testing and Validation Commands (scripts reais)

Use apenas comandos existentes na raiz:

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`
- `npm run lint:fix`
- `npm run format`
- `npm run format:check`

Quando alterar código, priorize o fluxo:

1. `npm run format`
2. `npm run lint`
3. `npm run build`

## Versioning Guidelines

- O projeto usa versionamento em `package.json` (`2.0.0`) compatível com estilo semântico.
- Estratégia formal de release/tag: **Não evidenciado no repositório**.

## Regras de Geração para Copilot

- Sempre prefira consistência com o código existente sobre “best practices” genéricas.
- Não assumir CI/CD, testes E2E, backend, banco de dados ou infraestrutura externa quando não houver evidência.
- Em tarefas de SEO, seguir padrão já adotado: metadata do Next, JSON-LD, `robots.ts`, `sitemap.ts`, links internos relevantes.
- Em tarefas de UI, manter stack atual: Tailwind + Framer Motion + componentes em `src/components`.
- Em tarefas de conteúdo, manter português pt-BR como padrão textual do produto.
- **SEMPRE** que um erro for corrigido, atualizar incrementalmente o arquivo `.github/instructions/error-history.instructions.md` com contexto, causa raiz, correção e prevenção para manter o histórico do que não fazer e como resolver reincidências.
