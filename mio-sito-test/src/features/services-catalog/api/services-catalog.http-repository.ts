import type { ApiClient } from '../../../lib/apiClient'
import type { ServicesCatalogRepository } from './services-catalog.repository'
import type { ServiceCategory } from '../types/services-catalog.types'

export class ServicesCatalogHttpRepository implements ServicesCatalogRepository {
  private readonly client: ApiClient

  constructor(client: ApiClient) {
    this.client = client
  }

  async listServices() {
    return this.client.get<ServiceCategory[]>('/services')
  }

  async getServiceBySlug(slug: string) {
    return this.client.get<ServiceCategory | null>(`/services/${slug}`)
  }
}
