# Routing

Route pubbliche:

- `/`
- `/services`
- `/request/:serviceSlug`
- `/request-confirmation/:reference`
- `/track/:reference`

Route admin:

- `/admin`
- `/admin/requests`
- `/admin/requests/:requestId`
- `/admin/suppliers`
- `/admin/services`
- `/admin/analytics`

`AdminRouteGuard` e intenzionalmente un placeholder finche non esistera l'autenticazione.
