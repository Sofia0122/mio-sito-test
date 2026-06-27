# Harbourly WebSite

Harbourly WebSite is a frontend application for managing harbour and marina service requests. It provides a public customer experience for browsing services, submitting requests and tracking request status, plus an admin workspace for handling operations, suppliers, services and analytics.

The project is built as a modern React application with a feature-based architecture. It currently runs with mock repositories for local development, while the data layer is already prepared for future REST/API integration.

## High-Level Overview

```text
Harbourly WebSite
├── Public customer area
│   ├── Service discovery
│   ├── Service request form
│   ├── Request confirmation
│   └── Request tracking
│
├── Admin operations area
│   ├── Dashboard
│   ├── Request management
│   ├── Supplier management
│   ├── Services catalog
│   └── Analytics
│
└── Data architecture
    ├── Feature services
    ├── Repository interfaces
    ├── Mock repositories for local development
    └── HTTP repositories ready for backend integration
```

At a high level, Harbourly is designed around one core idea: keep user-facing pages simple, keep business logic inside feature modules, and keep the data source replaceable. This makes it possible to develop the product locally with realistic mock data today and connect it to a real backend later without rewriting the UI.

## Product Goals

Harbourly aims to support two main workflows:

- Customers can browse available harbour services, request assistance and track the state of their request.
- Admin users can monitor incoming requests, manage operational information and review service activity.

The application is intentionally split between public and admin experiences. Public flows are mobile-first and optimized for clarity. Admin flows are more operational, with layouts designed for scanning, filtering and repeated use.

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router
- TanStack Query
- Tailwind CSS
- React Hook Form
- Zod
- Recharts
- Lucide React

## Core Architecture

The application follows a feature-based frontend architecture:

```text
Page
-> feature component
-> feature hook
-> feature service
-> repository
-> apiClient
```

This keeps route-level pages thin and prevents business logic from leaking into shared UI components.

### Main Rules

- Pages compose layouts and features, but should not own business logic.
- Shared UI primitives live in `src/components`.
- Business-specific logic lives in `src/features`.
- Data-source selection is centralized in `src/lib/repositories.ts`.
- Mock data lives in `src/mocks` and should be consumed through mock repositories.
- Direct `fetch` calls should not be made from pages, UI components or feature components.
- Feature-specific types belong inside the relevant feature.
- Cross-feature types belong in `src/types`.

## Project Structure

```text
src/
  app/                   Application bootstrap, router, providers and route constants
  assets/                Images and assets imported by the frontend
  components/            Shared UI primitives and layout components
    layout/              Public/admin layout shells, header, sidebar and navigation
    ui/                  Generic UI components such as Button, Card, Input and Table
  features/              Business modules
    analytics/           Admin analytics feature
    requests/            Service requests, forms, tables, details and tracking
    services-catalog/    Service catalog and service categories
    suppliers/           Supplier management
  lib/                   Shared infrastructure, API client, query client and utilities
  mocks/                 Temporary local data for mock repositories
  pages/                 Route-level page components
    admin/               Admin pages
    public/              Public customer pages
  styles/                Global CSS and design tokens
  types/                 Cross-feature TypeScript types
```

## Current Features

### Public Area

- Home page for the harbour service experience.
- Services page for browsing available service categories.
- Request form for submitting a service request.
- Confirmation page with request reference.
- Tracking page for checking request status.

### Admin Area

- Admin dashboard.
- Requests list and request detail pages.
- Supplier management page.
- Services catalog management page.
- Analytics page.

### Data Layer

- Repository contracts for each data feature.
- Mock repository implementations for local development.
- HTTP repository placeholders for future backend integration.
- Central repository selection through `src/lib/repositories.ts`.

## Routing

Public routes:

```text
/
/services
/request/:serviceSlug
/request-confirmation/:reference
/track/:reference
```

Admin routes:

```text
/admin
/admin/requests
/admin/requests/:requestId
/admin/suppliers
/admin/services
/admin/analytics
```

`AdminRouteGuard` is currently a placeholder and is ready to be connected to a future authentication and authorization flow.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

Run linting:

```bash
npm run lint
```

Preview the production build:

```bash
npm run preview
```

## Environment Configuration

The application uses mock repositories by default.

For future backend integration:

```env
VITE_REPOSITORY_MODE=http
VITE_API_BASE_URL=https://your-api.example.com
```

Expected repository modes:

- default/mock mode: local mock repositories
- `http`: HTTP repositories using the shared API client

## Backend Integration Strategy

The UI should not need major rewrites when backend endpoints become available. The intended path is:

1. Keep repository interfaces stable.
2. Complete the HTTP repository implementation for each feature.
3. Configure `VITE_API_BASE_URL`.
4. Set `VITE_REPOSITORY_MODE=http`.
5. Keep pages, feature hooks and feature services unchanged where possible.

This approach isolates backend changes inside the repository layer and shared API client.

## Documentation

Project documentation is split into English and Italian folders:

```text
docs/       English project documentation
docs-ita/   Italian project documentation and Codex session context
```

Useful documentation entry points:

- `docs-ita/context/project-brief.md`
- `docs-ita/context/project-map.md`
- `docs-ita/context/session-start.md`
- `docs-ita/context/iteration-rules.md`
- `docs-ita/folders/*.md`

The context files are designed to help future AI-assisted development sessions understand the project quickly without rereading the full codebase.

## Development Guidelines

When adding or changing functionality:

- Keep pages thin.
- Put business components inside the owning feature.
- Use shared UI components only for generic, reusable UI.
- Add or update feature types close to the feature.
- Update both mock and HTTP repository implementations when repository contracts change.
- Keep mock data realistic enough to test UI states.
- Run `npm run build` before considering substantial implementation work complete.

When closing a meaningful problem or feature, update context and documentation files if the change affects future work. Documentation should not be updated after every small message, but it should be updated when a stable decision, feature or convention has been introduced.

## Design Direction

The public experience should feel clear, trustworthy and mobile-first. The admin experience should feel practical, structured and efficient for repeated operational use.

General UI principles:

- Use accessible labels and focus states.
- Prefer reusable primitives for common controls.
- Keep business-specific UI inside features.
- Avoid hiding important operational information behind decorative layout.
- Use the design system and Figma references as source of truth when available.

## Status

The project currently has:

- A working frontend structure.
- Public and admin route coverage.
- Mock-backed data flows.
- Repository interfaces prepared for future backend integration.
- Documentation and context files for continued development.

Next likely milestones:

- Connect real authentication for the admin area.
- Complete HTTP repositories against real backend endpoints.
- Replace or refine mock data as API contracts stabilize.
- Continue aligning UI with final design references.
