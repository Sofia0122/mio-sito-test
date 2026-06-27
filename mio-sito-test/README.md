# Harbourly Frontend

Harbourly is a mobile-first React frontend for marina concierge services. It supports public service requests, request tracking and an admin workspace using mock data today and REST/AWS-ready repositories tomorrow.

## Stack

React, TypeScript strict mode, Vite, React Router, Tailwind CSS, React Hook Form, Zod, TanStack Query, Recharts and Lucide React.

## Setup

```bash
npm install
npm run dev
npm run build
```

Copy `.env.example` when API integration starts. Mock repositories are used by default.

## Structure

`src/app` owns app bootstrap, routes and providers. `src/pages` contains thin route components. `src/features` contains business UI, hooks, services, repository contracts and repository implementations. `src/components` contains reusable UI and layout primitives. `src/mocks` contains temporary data only. `src/lib` contains shared infrastructure such as `apiClient`, query client and repository factory.

## Data Flow

```text
Page
-> feature component
-> feature hook
-> feature service
-> repository
-> apiClient
```

Mock and HTTP repositories implement the same feature repository interface. Switch `VITE_REPOSITORY_MODE=http` later to wire HTTP repositories through the centralized factory in `src/lib/repositories.ts`.

## Routing

Public routes: `/`, `/services`, `/request/:serviceSlug`, `/request-confirmation/:reference`, `/track/:reference`.

Admin routes: `/admin`, `/admin/requests`, `/admin/requests/:requestId`, `/admin/suppliers`, `/admin/services`, `/admin/analytics`.

`AdminRouteGuard` is a placeholder for future authentication and authorization.

## Figma MCP

Do not use Figma MCP until a frame or Figma link is provided. When available, use it as the source of truth for tokens, spacing, typography, components and responsive behavior.

## Backend Integration

Replace mock behavior by completing the HTTP repositories and setting `VITE_API_BASE_URL`. Pages, components, forms and hooks should not need rewrites.
