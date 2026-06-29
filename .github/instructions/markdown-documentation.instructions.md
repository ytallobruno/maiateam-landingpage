---
description: "Rules to create or update Markdown based on real repository evidence, actual commands, and architecture without hallucination."
applyTo: "**/*.md"
---

# Rules for Markdown Documentation

When creating or updating Markdown files in this repository:

1. Document the repository as it exists now.
2. Use exact commands discovered in scripts or versioned docs.
3. Do not invent architecture, environment variables, deploy flows, or service ownership.
4. If a detail is missing, write `Not evidenced in the repository`.
5. In monorepos, always specify the relevant path of the package/app.
6. Keep sections short, stable, and easy to update later.
7. Prefer tables and repeatable templates for inventories such as:
    - apps and packages
    - Lambda functions
    - commands
    - environment variables
8. Separate facts from inferences.
9. All final output must be in Portuguese pt-BR (unless specified otherwise).

## For Lambda documentation

When documenting Lambda functions, prefer this template:

- Overview
- Goal
- Technical Structure
- Execution Flow
- Business Rules
- Contracts
- Integrations
- Error Handling
- Observability
- Practical Example
- Mermaid Flowchart
- Mermaid Sequence Diagram
- Gaps in Understanding
- Final Summary

## For repository documentation

Prefer:

- What this repository does
- Repository structure
- Applications and packages
- Stack summary
- Local development
- Scripts and commands
- Tests and validation
- Deploy or runtime notes
- Known gaps
