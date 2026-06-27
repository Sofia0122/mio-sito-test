# API Integration

Use `VITE_API_BASE_URL` for future REST endpoints and `VITE_REPOSITORY_MODE=http` to select HTTP repositories.

Do not call `fetch` from pages, UI components or feature components. HTTP calls belong behind repository implementations and the shared `apiClient`.

When backend endpoints are ready, complete the HTTP repository methods while preserving the repository interfaces.
