import { useQuery } from '@tanstack/react-query'
import { servicesCatalogService } from '../../../lib/repositories'

export function useServicesCatalog() {
  return useQuery({
    queryKey: ['services-catalog'],
    queryFn: () => servicesCatalogService.listServices(),
  })
}

export function useServiceCategory(slug: string | undefined) {
  return useQuery({
    queryKey: ['services-catalog', slug],
    queryFn: () => servicesCatalogService.getServiceBySlug(slug ?? ''),
    enabled: Boolean(slug),
  })
}
