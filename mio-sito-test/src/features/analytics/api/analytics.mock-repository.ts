import { requestsMock } from '../../../mocks/requests.mock'
import { suppliersMock } from '../../../mocks/suppliers.mock'
import type { AnalyticsRepository } from './analytics.repository'
import type { AnalyticsSummary } from '../types/analytics.types'

export class AnalyticsMockRepository implements AnalyticsRepository {
  async getSummary(): Promise<AnalyticsSummary> {
    const estimatedMargin = requestsMock.reduce((sum, request) => sum + (request.estimatedMargin ?? 0), 0)

    return {
      totalRequests: requestsMock.length,
      averageResponseMinutes: 19,
      averageDeliveryMinutes: 115,
      estimatedMargin,
      requestsByStatus: [
        { status: 'REVIEWING', count: 1 },
        { status: 'CONFIRMED', count: 1 },
        { status: 'IN_PROGRESS', count: 1 },
      ],
      requestsByCategory: [
        { category: 'Transport', count: 1 },
        { category: 'Provisioning', count: 1 },
        { category: 'Technical Support', count: 1 },
      ],
      marginByService: [
        { service: 'Transport', margin: 80 },
        { service: 'Provisioning', margin: 140 },
        { service: 'Technical', margin: 0 },
      ],
      supplierUsage: suppliersMock.map((supplier) => ({
        supplier: supplier.name,
        requests: supplier.requestsHandled,
      })),
    }
  }
}
