# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

- **Convites Canva** (`artifacts/convites-canva`) — React/Vite landing page at `/` for selling +1000 editable Canva invitation templates, using the user's provided mockup image and Portuguese sales copy.

## Vercel Static Frontend Build

- The project is configured for Vercel as a static Vite frontend.
- Root `npm run build` builds only `@workspace/convites-canva` and copies the static output to root `dist/`.
- `artifacts/convites-canva/vite.config.ts` does not require `PORT`, does not configure `server.port`, and outputs to `artifacts/convites-canva/dist`.
- The API server entry files are inert so no Express server is started for static deployment.

## Key Commands

- `npm run build` — build the Convites Canva static frontend and create root `dist/` for Vercel
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — same static frontend build as `npm run build`
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally
- `pnpm --filter @workspace/convites-canva run dev` — run the Convites Canva landing page locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
