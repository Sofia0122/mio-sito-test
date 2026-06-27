import { Card } from '../../components/ui/Card'
import { LoadingState } from '../../components/ui/LoadingState'
import { useSuppliers } from '../../features/suppliers/hooks/useSuppliers'
import { formatMinutes } from '../../lib/formatters'

export function SuppliersPage() {
  const suppliers = useSuppliers()

  return (
    <div className="grid gap-5">
      <div>
        <h1 className="text-3xl font-semibold text-[#172126]">Suppliers</h1>
        <p className="mt-1 text-[#607177]">Placeholder supplier operations view.</p>
      </div>
      {suppliers.isLoading ? <LoadingState label="Loading suppliers" /> : null}
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {(suppliers.data ?? []).map((supplier) => (
          <Card key={supplier.id}>
            <h2 className="text-lg font-semibold text-[#172126]">{supplier.name}</h2>
            <p className="mt-1 text-sm text-[#607177]">{supplier.categorySlugs.join(', ')}</p>
            <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div><dt className="text-[#607177]">Rating</dt><dd className="font-semibold">{supplier.rating}</dd></div>
              <div><dt className="text-[#607177]">Requests</dt><dd className="font-semibold">{supplier.requestsHandled}</dd></div>
              <div><dt className="text-[#607177]">Response</dt><dd className="font-semibold">{formatMinutes(supplier.averageResponseMinutes)}</dd></div>
              <div><dt className="text-[#607177]">Contact</dt><dd className="font-semibold">{supplier.contactName}</dd></div>
            </dl>
            <p className="mt-4 text-sm text-[#607177]">{supplier.contactEmail}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}
