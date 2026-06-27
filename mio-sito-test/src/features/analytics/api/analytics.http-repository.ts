import type { ApiClient } from '../../../lib/apiClient'
import type { AnalyticsRepository } from './analytics.repository'
import type { AnalyticsSummary } from '../types/analytics.types'

export class AnalyticsHttpRepository implements AnalyticsRepository {
  private readonly client: ApiClient

  constructor(client: ApiClient) {
    this.client = client
  }

  async getSummary() {
    return this.client.get<AnalyticsSummary>('/analytics/summary')
  }
}
