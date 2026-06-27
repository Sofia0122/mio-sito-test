# Integrazione API

Usa `VITE_API_BASE_URL` per i futuri endpoint REST e `VITE_REPOSITORY_MODE=http` per selezionare i repository HTTP.

Non chiamare `fetch` da pagine, componenti UI o feature component. Le chiamate HTTP devono restare dietro le implementazioni repository e l'`apiClient` condiviso.

Quando gli endpoint backend saranno pronti, completa i metodi dei repository HTTP mantenendo invariate le interfacce repository.
