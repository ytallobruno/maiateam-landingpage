# Copilot Instructions - Maiateam Landing Page

A Next.js (App Router) landing page for fitness/personal training consulting, focused on conversion, SEO, and Portuguese pt-BR content.

> ℹ️ **Detailed reference**: See `AGENTS.md` for development philosophy.

## Build, Test & Lint Commands

All commands use **npm** (evidence: `package-lock.json`).

```bash
# Development
npm run dev              # Dev server at http://localhost:3001

# Code validation
npm run format           # Prettier: write formatted code
npm run format:check     # Prettier: check (without writing)
npm run lint             # ESLint: check
npm run lint:fix         # ESLint: auto-fix

# Build & production
npm run build            # Static build/prerender (Next.js managed)
npm run start            # Start production server
```

**Recommended workflow before completing changes**:

```bash
npm run format && npm run lint && npm run build
```

**No automated test framework is evidenced in the repository.** Validation is via lint/build.

## Architecture & Technical Stack

| Aspect    | Evidence                        |
| --------- | ------------------------------- |
| Framework | Next.js `^16.2.3` (App Router)  |
| Language  | TypeScript `^5`, React `19.1.0` |
| Styling   | Tailwind CSS `^3.4.17`          |
| Animation | Framer Motion `^12.23.12`       |
| Carousel  | Swiper `^12.1.2`                |
| SEO       | next-seo `^6.8.0`               |
| Linting   | ESLint `^9` + Prettier `^3.6.2` |

**Folder structure**:

```
src/
  ├── app/              # Routes (App Router), global layout, metadata (robots.ts, sitemap.ts)
  ├── components/       # Landing visual components (sections, cards, headers)
  ├── config/           # Centralized configuration (pricing, promotions, SEO)
  ├── hooks/            # Reusable React hooks (usePromotion)
```

**Import alias**: `@/*` → `./src/*` (configured in `tsconfig.json`)

## Code Patterns & Conventions

### TypeScript/React/Next

- Components: `export default function ComponentName()` (PascalCase)
- Functions/constants: `camelCase` (named export when auxiliary)
- Metadata on pages: `export const metadata: Metadata = {...}`
- `"use client"` only with client hooks/events
- Internal links: `<Link href="..." />`; External links: `<a href="..." target="_blank" rel="noopener noreferrer" />`

### Styling & Tailwind

- Utility classes inline in JSX (do not use separate CSS files for components)
- Reuse existing components and visual patterns
- Preserve breakpoints and class names already in use

### Accessibility & SEO

- Preserve/add `aria-*` attributes and heading hierarchy (`h1` unique, followed by `h2/h3`)
- Images with descriptive `alt` text and careful use of `next/image` with `priority`
- SEO: Next.js metadata + JSON-LD + `robots.ts` + `sitemap.ts` (project standard)

### Formatting

- Indentation: 4 spaces (Prettier `tabWidth: 4`)
- Double quotes for strings
- Prettier auto-manages formatting → run `npm run format` before completing work

## Development Workflow

1. **Before making changes**: locate similar files in the domain (route, component, hook, config)
2. **Make surgical changes**: only touch what's necessary, maintain contracts and behavior
3. **Replicate patterns**: naming, imports, typing, hook usage, Tailwind classes
4. **Validate**:
    ```bash
    npm run format && npm run lint && npm run build
    ```
5. **If bugs are fixed**: incrementally update `.github/instructions/error-history.instructions.md` with context, root cause, fix, and prevention

## Non-Negotiable Rules

1. **Do not assume** stack, commands, architecture, or patterns without repository evidence
2. **Treat as primary sources**: `package.json`, lockfiles, versioned code
3. **Never invent commands** — only use those listed above
4. **Prioritize consistency** with existing code over generic "best practices"
5. **Portuguese pt-BR** for all final output (content, project context comments)
6. **Do not introduce new libraries** without evidence or explicit request

## Related Contexts

If there is conflicting guidance, follow this order:

1. `.github/copilot-instructions.md` ← **you are here**
2. `AGENTS.md` (behavior & philosophy)
3. `.github/instructions/error-history.instructions.md` (error history)
4. Existing code in `src/`

## Project Customizations

- **Specialized agents** in `.github/agents/`: frontend-next-tailwind-engineer, code-refactor-engineer, etc.
- **Skills** in `.github/skills/`: Emil design philosophy, Karpathy guidelines, etc.
- **Business configuration**: `src/config/` centralizes pricing, promotions, SEO, plans

Prefer using the `frontend-next-tailwind-engineer` agent for UI/frontend tasks in Next.js and the `frontend-design` skill when you need help with the design system.
