import { EmptyState } from '../../components/ui/EmptyState'
import { LoadingState } from '../../components/ui/LoadingState'
import { ServiceCategoryGrid } from '../../features/services-catalog/components/ServiceCategoryGrid'
import { useServicesCatalog } from '../../features/services-catalog/hooks/useServicesCatalog'

export function ServicesPage() {
  const services = useServicesCatalog()

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-5">
        <h1 className="text-3xl font-semibold text-[#172126]">Services</h1>
        <p className="mt-2 text-[#607177]">Choose a category and start a concierge request.</p>
      </div>
      {services.isLoading ? <LoadingState label="Loading services" /> : null}
      {services.isError ? <EmptyState title="Services unavailable" description="The services catalog could not be loaded." /> : null}
      {services.data ? <ServiceCategoryGrid services={services.data} /> : null}
    </main>
  )
}
