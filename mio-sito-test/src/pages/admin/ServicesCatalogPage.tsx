import { Badge } from '../../components/ui/Badge'
import { Card } from '../../components/ui/Card'
import { LoadingState } from '../../components/ui/LoadingState'
import { useServicesCatalog } from '../../features/services-catalog/hooks/useServicesCatalog'

export function ServicesCatalogPage() {
  const services = useServicesCatalog()

  return (
    <div className="grid gap-5">
      <div>
        <h1 className="text-3xl font-semibold text-[#172126]">Services catalog</h1>
        <p className="mt-1 text-[#607177]">Categories and form fields ready for backend data.</p>
      </div>
      {services.isLoading ? <LoadingState label="Loading catalog" /> : null}
      <div className="grid gap-3">
        {(services.data ?? []).map((service) => (
          <Card key={service.id}>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold text-[#172126]">{service.name}</h2>
                <p className="mt-1 text-sm text-[#607177]">{service.description}</p>
              </div>
              <Badge tone={service.active ? 'success' : 'neutral'}>{service.active ? 'Active' : 'Inactive'}</Badge>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {service.fields.map((field) => (
                <Badge key={field.name}>{field.label}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
