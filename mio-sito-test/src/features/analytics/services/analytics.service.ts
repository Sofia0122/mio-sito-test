import type { AnalyticsRepository } from '../api/analytics.repository'

export class AnalyticsService {
  private readonly repository: AnalyticsRepository

  constructor(repository: AnalyticsRepository) {
    this.repository = repository
  }

  getSummary() {
    return this.repository.getSummary()
  }
}
