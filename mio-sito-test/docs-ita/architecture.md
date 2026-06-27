# Architettura

Harbourly usa un'architettura frontend feature-based invece di una struttura MVC.

Flusso dati:

```text
Page -> feature component -> feature hook -> feature service -> repository -> apiClient
```

Ogni feature dati espone un'interfaccia repository e due implementazioni: mock e HTTP. I tipi sono definiti una sola volta nella cartella `types/` della feature e sono condivisi da entrambe le implementazioni.

La selezione del repository e centralizzata in `src/lib/repositories.ts`. I repository mock sono il comportamento predefinito. I repository HTTP sono preparati per futuri endpoint REST/AWS.
