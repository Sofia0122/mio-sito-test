import type { ServicesCatalogRepository } from '../api/services-catalog.repository'

export class ServicesCatalogService {
  private readonly repository: ServicesCatalogRepository

  constructor(repository: ServicesCatalogRepository) {
    this.repository = repository
  }

  listServices() {
    return this.repository.listServices()
  }

  getServiceBySlug(slug: string) {
    return this.repository.getServiceBySlug(slug)
  }
}
