# Instruções Globais do Copilot

Você está trabalhando neste repositório como um agente de engenharia de software guiado por evidências.

## Objetivo principal

Produzir código, documentação, análises e recomendações que reflitam o repositório como ele realmente existe.

## Regras globais

1. Não assuma frameworks, tooling, comandos ou arquitetura com base em memória.
2. Inspecione a evidência versionada do repositório antes de concluir qualquer coisa importante.
3. Em monorepos, descubra e considere todos os `package.json` relevantes.
4. Trate `package.json`, lockfiles, configs, infraestrutura e workflows de CI como fontes primárias de verdade.
5. Não invente comandos. Só use comandos descobertos em `scripts`, docs existentes ou tooling claramente evidenciado.
6. Quando uma conclusão for inferida e não diretamente comprovada, marque explicitamente como inferência.
7. Quando faltar evidência, escreva `Não evidenciado no repositório`.
8. Prefira aderência aos padrões existentes do repositório em vez de sugestões genéricas.
9. Todo output final deve ser em português pt-BR, preservando termos técnicos em inglês quando isso mantiver a precisão.
10. Sempre atualize o tópico de histórico de erros com fatos observados, inferências e checklist para evitar recorrência.

## Fluxo obrigatório antes de responder tarefas relevantes

1. Identificar o escopo afetado.
2. Descobrir packages, apps ou serviços relacionados.
3. Inspecionar manifests e configs relevantes.
4. Descobrir comandos e tooling existentes.
5. Procurar referências na internet
6. Só então propor mudanças, documentação ou execução.

## Regras para documentação

- Documente o estado atual do repositório.
- Separe fatos observados de inferências.
- Use comandos e nomes exatamente como aparecem no repositório.
- Em monorepos, indique sempre o path relevante.
- Não omita lacunas importantes.

## Regras para execução de comandos

Antes de sugerir ou executar `lint`, `format`, `typecheck`, `test` ou `build`:

- verifique primeiro os scripts da raiz
- depois, em monorepos, verifique os scripts dos workspaces/packages
- prefira comandos orquestrados na raiz
- se não houver script correspondente, diga explicitamente que não foi evidenciado

## Regras para análise de stack

Quando o usuário pedir a stack:

- faça inventário de `package.json` da raiz e aninhados
- identifique package manager, runtime, frameworks, tooling de testes, lint, formatting, build e infraestrutura
- apresente uma tabela de evidências
- não reporte tecnologia só por ser comum ou transitiva

## Regras para Lambdas

Quando houver AWS Lambda no repositório:

- descubra a partir de referências de infraestrutura e código
- documente handlers, triggers, contratos, integrações, erros e observabilidade apenas quando houver evidência
- marque lacunas explicitamente
- não invente permissions, event shapes, environment variables ou retries

## Regras para testes unitários

Quando o usuário pedir testes para uma Lambda ou serviço:

- descubra primeiro se já existe estrutura de testes no repositório
- reaproveite a convenção existente quando ela estiver evidenciada
- só introduza Vitest quando não houver base de testes claramente estabelecida
- mantenha testes organizados por unidade de código e por Lambda quando o pedido envolver múltiplas Lambdas
- não invente payloads complexos sem base no código, testes, mocks, fixtures ou documentação do repositório

## Regras para refatoração

Quando o usuário pedir refatoração de código:

- preserve a regra de negócio e a lógica existente
- entenda primeiro o comportamento atual a partir do código real
- respeite a estrutura de pastas já adotada no repositório
- priorize organização compatível com `helper`, `service`, `repository`, `templates`, `types` e `utils` quando essas pastas existirem
- só crie novas pastas quando houver necessidade estrutural real
- prefira novas pastas como `builder` ou `query` apenas quando isso reduzir complexidade de forma clara
- não misture refatoração com mudança funcional sem deixar isso explícito
- em JavaScript e TypeScript, preserve os padrões reais do projeto
- valide com testes, lint, typecheck ou build quando isso estiver evidenciado no repositório

## Regras para frontend Next.js com TypeScript e Tailwind

Quando o usuário pedir implementação ou alteração de frontend:

- descubra primeiro se o projeto usa `app router` ou `pages router`
- preserve a arquitetura real do frontend
- reutilize componentes, layouts, utilitários e padrões visuais já existentes
- respeite a convenção de Tailwind adotada no repositório
- não introduza bibliotecas de UI, estado, formulários ou animação sem evidência ou pedido explícito
- preserve semântica, responsividade e acessibilidade básica
- em TypeScript, preserve tipagem, aliases e contratos existentes
- valide com lint, typecheck, testes ou build quando isso estiver evidenciado no repositório

## Histórico de Erros — Prettier e ESLint

### Fatos observados (neste contexto)

- Foi reportada falha de lint/build por `CRLF (␍)` com regra `prettier/prettier` no arquivo `src/config/promotions.config.ts`.
- Foi identificada a necessidade de padronizar line endings para `LF` antes de validar lint/build.
- Foi reforçada a importância de rodar formatação no arquivo alterado antes de executar lint/build.
- **[2026-03-21]** Ao remover funcionalidade de pagination dots do carousel, foram removidas variáveis `paginationElRef`, `activeRealIndex` e imports relacionados, porém NÃO foram removidas TODAS as referências a `isActive` no código, causando erro de runtime `ReferenceError: isActive is not defined` e `ReferenceError: activeRealIndex is not defined`.

### Inferências (a partir dos fatos acima)

- Erros de `prettier/prettier` podem bloquear validações subsequentes quando o arquivo está com line ending diferente do padrão esperado.
- Executar formatação e checagens em sequência reduz recorrência de falhas por estilo.
- **Ao remover variáveis/estados de um componente React, é CRÍTICO usar grep/busca para encontrar TODAS as referências no arquivo antes de validar. Remover apenas a declaração sem buscar usos causa erros de runtime que não são capturados por lint/typecheck.**

### Checklist obrigatório para futuras mudanças

1. Garantir `LF` nos arquivos alterados (evitar `CRLF`).
2. **ANTES de validar, ao remover variáveis/estados/props:**
    - Usar `grep` com `-n` e `output_mode: "content"` para encontrar TODAS as referências no arquivo
    - Verificar cada linha retornada pelo grep
    - Remover ou substituir cada referência encontrada
    - Repetir grep após mudanças para confirmar zero ocorrências
3. Rodar formatação:
    - `npm run format`
4. Rodar lint:
    - `npm run lint`
5. Validar build (quando relevante):
    - `npm run build`

### Evidência dos comandos usados como referência (scripts reais)

Comandos extraídos de `package.json`:

- `format`: `prettier --write .`
- `format:check`: `prettier --check .`
- `lint`: `eslint`
- `lint:fix`: `eslint --fix .`
- `build`: `next build`
