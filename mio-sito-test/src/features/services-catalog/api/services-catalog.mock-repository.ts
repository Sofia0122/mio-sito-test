import { servicesMock } from '../../../mocks/services.mock'
import type { ServicesCatalogRepository } from './services-catalog.repository'

export class ServicesCatalogMockRepository implements ServicesCatalogRepository {
  async listServices() {
    return [...servicesMock]
  }

  async getServiceBySlug(slug: string) {
    return servicesMock.find((service) => service.slug === slug) ?? null
  }
}
