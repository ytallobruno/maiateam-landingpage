---
description: "Rules for stack and tooling discovery from manifests, lockfiles, configs, and versioned infrastructure."
applyTo: "**/{package.json,package-lock.json,pnpm-lock.yaml,yarn.lock,bun.lock,bun.lockb,tsconfig*.json,next.config.*,vite.config.*,vitest.config.*,jest.config.*,eslint.config.*,.eslintrc*,.prettierrc*,prettier.config.*,serverless*.yml,template*.yml,template*.yaml,samconfig.toml,cdk.json,Dockerfile*,.github/workflows/*}"
---

# Discovery Rules by Manifest

When analyzing manifests and configurations in this repository:

1. Treat versioned files as the primary source of truth.
2. In monorepos, perform recursive discovery in all relevant `package.json` files.
3. Extract stack, tooling, and commands from direct evidence.
4. Clearly distinguish direct evidence from inference.
5. Do not report technologies based solely on transitive dependencies.
6. When evidence is missing, write `Not evidenced in the repository`.
7. All final output must be in Portuguese pt-BR (unless specified otherwise).

## What to extract from these files

- package manager
- workspaces/packages/apps
- language and runtime
- frameworks
- testing tooling
- linting and formatting tooling
- build/bundling tooling
- serverless or infrastructure tooling
- commands defined in `scripts`
- observability signals and operational automation, when they exist

## Rules for scripts and commands

- copy scripts exactly as defined
- preserve the correct scope (root or package)
- do not normalize to invented commands
- do not assume that a configuration automatically implies a corresponding script

## Confidence Rules

Only use:

- `direct` for explicitly present evidence
- `high confidence inference` when multiple evidences converge
- `low confidence inference` when there is a weak signal
