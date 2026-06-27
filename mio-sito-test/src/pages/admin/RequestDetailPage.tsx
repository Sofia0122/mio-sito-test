import { useParams } from 'react-router-dom'
import { Badge } from '../../components/ui/Badge'
import { Card } from '../../components/ui/Card'
import { EmptyState } from '../../components/ui/EmptyState'
import { LoadingState } from '../../components/ui/LoadingState'
import { RequestTimeline } from '../../features/requests/components/RequestTimeline'
import { useRequest } from '../../features/requests/hooks/useRequests'
import { formatCurrency, formatMinutes } from '../../lib/formatters'

export function RequestDetailPage() {
  const { requestId } = useParams()
  const request = useRequest(requestId)

  if (request.isLoading) {
    return <LoadingState label="Loading request detail" />
  }

  if (!request.data) {
    return <EmptyState title="Request not found" description="Open another request from the list." />
  }

  return (
    <div className="grid gap-5">
      <Card>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f6f78]">{request.data.reference}</p>
            <h1 className="mt-2 text-3xl font-semibold text-[#172126]">{request.data.customerName}</h1>
            <p className="mt-1 text-[#607177]">{request.data.categoryName} at {request.data.portName}</p>
          </div>
          <Badge tone="info">{request.data.status}</Badge>
        </div>
      </Card>
      <div className="grid gap-4 xl:grid-cols-3">
        <Card>
          <h2 className="font-semibold text-[#172126]">Customer</h2>
          <p className="mt-3 text-sm text-[#607177]">{request.data.customerEmail}</p>
          <p className="text-sm text-[#607177]">{request.data.customerPhone}</p>
          <p className="text-sm text-[#607177]">{request.data.yachtName ?? 'No yacht name'}</p>
        </Card>
        <Card>
          <h2 className="font-semibold text-[#172126]">Supplier</h2>
          <p className="mt-3 text-sm text-[#607177]">{request.data.supplierName ?? 'Not assigned'}</p>
          <p className="text-sm text-[#607177]">Response {formatMinutes(request.data.responseTimeMinutes ?? 0)}</p>
          <p className="text-sm text-[#607177]">Delivery {formatMinutes(request.data.deliveryTimeMinutes ?? 0)}</p>
        </Card>
        <Card>
          <h2 className="font-semibold text-[#172126]">Commercials</h2>
          <p className="mt-3 text-sm text-[#607177]">Supplier {formatCurrency(request.data.supplierCost ?? 0)}</p>
          <p className="text-sm text-[#607177]">Client {formatCurrency(request.data.customerPrice ?? 0)}</p>
          <p className="text-sm font-semibold text-[#172126]">Margin {formatCurrency(request.data.estimatedMargin ?? 0)}</p>
        </Card>
      </div>
      <Card>
        <h2 className="font-semibold text-[#172126]">Service details</h2>
        <p className="mt-3 text-sm text-[#607177]">{request.data.serviceDetails}</p>
        <p className="mt-4 rounded-md bg-[#f4f8f8] p-3 text-sm text-[#607177]">{request.data.internalNotes ?? 'No internal notes.'}</p>
      </Card>
      <RequestTimeline items={request.data.statusLog} />
    </div>
  )
}
