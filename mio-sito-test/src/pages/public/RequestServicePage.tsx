import { useParams } from 'react-router-dom'
import { EmptyState } from '../../components/ui/EmptyState'
import { LoadingState } from '../../components/ui/LoadingState'
import { RequestForm } from '../../features/requests/components/RequestForm'
import { useServiceCategory } from '../../features/services-catalog/hooks/useServicesCatalog'

export function RequestServicePage() {
  const { serviceSlug } = useParams()
  const service = useServiceCategory(serviceSlug)

  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      {service.isLoading ? <LoadingState label="Loading request form" /> : null}
      {service.data ? <RequestForm service={service.data} /> : null}
      {!service.isLoading && !service.data ? (
        <EmptyState title="Service not found" description="Choose another service category to start a request." />
      ) : null}
    </main>
  )
}
