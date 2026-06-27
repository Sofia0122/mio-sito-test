import { createBrowserRouter, Navigate } from 'react-router-dom'
import { App } from './App'
import { PublicLayout } from '../components/layout/PublicLayout'
import { AdminLayout } from '../components/layout/AdminLayout'
import { AdminRouteGuard } from '../components/layout/AdminRouteGuard'
import { HomePage } from '../pages/public/HomePage'
import { ServicesPage } from '../pages/public/ServicesPage'
import { RequestServicePage } from '../pages/public/RequestServicePage'
import { RequestConfirmationPage } from '../pages/public/RequestConfirmationPage'
import { TrackRequestPage } from '../pages/public/TrackRequestPage'
import { DashboardPage } from '../pages/admin/DashboardPage'
import { RequestsPage } from '../pages/admin/RequestsPage'
import { RequestDetailPage } from '../pages/admin/RequestDetailPage'
import { SuppliersPage } from '../pages/admin/SuppliersPage'
import { ServicesCatalogPage } from '../pages/admin/ServicesCatalogPage'
import { AnalyticsPage } from '../pages/admin/AnalyticsPage'

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <PublicLayout />,
        children: [
          { path: '/', element: <HomePage /> },
          { path: '/services', element: <ServicesPage /> },
          { path: '/request/:serviceSlug', element: <RequestServicePage /> },
          { path: '/request-confirmation/:reference', element: <RequestConfirmationPage /> },
          { path: '/track/:reference', element: <TrackRequestPage /> },
        ],
      },
      {
        path: '/admin',
        element: (
          <AdminRouteGuard>
            <AdminLayout />
          </AdminRouteGuard>
        ),
        children: [
          { index: true, element: <DashboardPage /> },
          { path: 'requests', element: <RequestsPage /> },
          { path: 'requests/:requestId', element: <RequestDetailPage /> },
          { path: 'suppliers', element: <SuppliersPage /> },
          { path: 'services', element: <ServicesCatalogPage /> },
          { path: 'analytics', element: <AnalyticsPage /> },
        ],
      },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
])
