# AGENTS.md

## Propósito

Este arquivo é o guia operacional para agentes de código que trabalham neste repositório.

## Regras inegociáveis

1. Não assuma a stack de tecnologia com base em memória ou defaults genéricos.
2. Inspecione evidências do repositório antes de propor código, comandos, arquitetura ou documentação.
3. Em monorepos, inspecione **todos** os `package.json` antes de descrever a stack.
4. Trate docs explícitos, `package.json`, lockfiles, configs, infraestrutura e padrões existentes no código como fontes de verdade.
5. Nunca invente comandos.
6. Quando faltar evidência, diga isso explicitamente.
7. Prefira consistência com o repositório existente em vez de best practices genéricas.
8. Todo output final deve ser escrito em português pt-BR, preservando termos técnicos em inglês quando isso mantiver a precisão.

## Regras para documentação de Lambda

Ao documentar funções AWS Lambda:

1. Descubra as Lambdas a partir do código e das referências de infraestrutura.
2. Para cada Lambda, capture nome lógico, path, handler, trigger, contratos, efeitos colaterais, dependências e testes relacionados quando houver evidência.
3. Marque informações ausentes como `Não evidenciado no repositório`.
4. Não invente permissões IAM, event shapes nem variáveis de ambiente.

## Regras para testes unitários

Ao criar ou atualizar testes unitários:

1. Descubra primeiro se já existe estrutura de testes no repositório.
2. Reaproveite o runner, convenções, helpers e padrões já existentes quando estiverem evidenciados.
3. Só introduza Vitest quando não houver base de testes claramente estabelecida.
4. Em pedidos com múltiplas Lambdas, mantenha as suítes organizadas por Lambda.
5. Não invente payloads, fixtures ou branches de negócio sem base no código, testes ou documentação do repositório.
6. Prefira mockar bordas externas e manter a regra de negócio real sempre que possível.

## Regras para refatoração

Ao refatorar código:

1. Preserve regra de negócio, lógica e contratos existentes.
2. Entenda o comportamento atual antes de mover responsabilidades.
3. Respeite a estrutura de pastas já existente no repositório.
4. Priorize organização compatível com `helper`, `service`, `repository`, `templates`, `types` e `utils` quando essas pastas existirem.
5. Só crie novas pastas quando houver ganho estrutural claro.
6. As novas pastas preferenciais permitidas são `builder`, `builders`, `query` e `queries`, quando fizerem sentido.
7. Não misture refatoração com alteração funcional sem sinalizar explicitamente.
8. Em TypeScript, preserve tipagem, contratos e aliases.
9. Em JavaScript, preserve module system e padrão de imports/exports já adotado.
10. Sempre que possível, valide a refatoração com testes, lint, typecheck ou build reais do repositório.

## Regras para frontend Next.js com TypeScript e Tailwind

Ao implementar ou alterar frontend:

1. Descubra primeiro a arquitetura real do frontend.
2. Confirme se o projeto usa `app router`, `pages router` ou ambos.
3. Reaproveite componentes, layouts, utilitários e padrões visuais já existentes.
4. Respeite a convenção de Tailwind adotada no repositório.
5. Não introduza bibliotecas novas de UI, estado, formulários ou animação sem evidência ou pedido explícito.
6. Preserve semântica, responsividade e acessibilidade básica.
7. Em TypeScript, preserve tipagem, aliases e contratos existentes.
8. Não misture refatoração visual com mudança funcional sem deixar isso explícito.
9. Sempre que possível, valide a mudança com lint, typecheck, testes ou build reais do repositório.

## Formato preferido de resposta

```md
## Resumo

## Evidências

- ...

## Comandos Descobertos

- ...

## Riscos / Lacunas

- ...

## Próximo Passo Recomendado
```

## Quando as tarefas forem amplas

Se a tarefa cobrir múltiplas frentes, divida o trabalho em trilhas separadas:

- descoberta de stack
- documentação geral
- documentação Lambda por Lambda
- testes unitários por Lambda
- refatoração por módulo ou por Lambda
- implementação ou evolução de frontend
- higiene e validação do repositório

Se o ambiente suportar agentes especializados ou subagentes, delegue para eles.
Se não suportar, emule o mesmo fluxo de forma sequencial e mantenha as saídas separadas.

## Uso com `/fleet`

```bash
copilot /fleet "Use o agente swarm-orchestrator para analisar a stack, documentar o projeto e documentar as Lambdas."
copilot /fleet "Use o agente swarm-orchestrator para revisar o repositório, descobrir scripts reais e executar lint/format/test se existirem."
copilot /fleet "Use o agente swarm-orchestrator para analisar a Lambda selecionada, propor uma refatoração segura preservando a regra de negócio e validar o resultado com os comandos reais do repositório."
copilot /fleet "Use o agente swarm-orchestrator para analisar o frontend atual, delegar a implementação para o frontend-next-tailwind-engineer e validar a segurança da mudança com os comandos reais do repositório."
```
