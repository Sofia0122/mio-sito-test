# Architecture

Harbourly uses a feature-based frontend architecture rather than MVC.

Data flow:

```text
Page -> feature component -> feature hook -> feature service -> repository -> apiClient
```

Each data feature exposes a repository interface plus mock and HTTP implementations. Types are defined once in the feature `types/` folder and shared by both implementations.

Repository selection is centralized in `src/lib/repositories.ts`. Mock repositories are the default. HTTP repositories are prepared for future REST/AWS endpoints.
