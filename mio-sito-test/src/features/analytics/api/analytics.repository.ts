import type { AnalyticsSummary } from '../types/analytics.types'

export interface AnalyticsRepository {
  getSummary(): Promise<AnalyticsSummary>
}
