import type { ServiceCategory } from '../types/services-catalog.types'

export interface ServicesCatalogRepository {
  listServices(): Promise<ServiceCategory[]>
  getServiceBySlug(slug: string): Promise<ServiceCategory | null>
}
