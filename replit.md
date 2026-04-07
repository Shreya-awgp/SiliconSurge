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

### The Silicon Surge (`artifacts/silicon-surge`)
- **Type**: React + Vite frontend-only website
- **URL**: `/` (root)
- **Purpose**: Lead generation website for The Silicon Surge digital marketing agency
- **Pages**: Home, Plans, Services, Case Studies, About, Contact, Privacy Policy, Terms
- **Color Scheme**: Dark brown + golden yellow neon
- **Key Features**:
  - Fully responsive, mobile-first design
  - Framer Motion animations (scroll-triggered, entrance)
  - Sticky navbar with mobile hamburger menu
  - Floating WhatsApp + call buttons (bottom right)
  - Exit intent popup with lead form
  - 8 pages with full content
  - Recharts bar chart on Case Studies page
  - Demo lead sample table
  - Lead capture forms on Contact and Exit Popup pages
- **Contact**: Phone: 9732325777, Email: shreyasinghapd07@gmail.com
- **Location**: Siliguri, West Bengal

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
