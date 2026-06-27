export const routes = {
  home: '/',
  services: '/services',
  request: (serviceSlug: string) => `/request/${serviceSlug}`,
  requestConfirmation: (reference: string) => `/request-confirmation/${reference}`,
  track: (reference: string) => `/track/${reference}`,
  admin: '/admin',
  adminRequests: '/admin/requests',
  adminRequestDetail: (requestId: string) => `/admin/requests/${requestId}`,
  adminSuppliers: '/admin/suppliers',
  adminServices: '/admin/services',
  adminAnalytics: '/admin/analytics',
} as const
