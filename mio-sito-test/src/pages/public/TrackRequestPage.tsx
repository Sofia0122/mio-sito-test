import { useParams } from 'react-router-dom'
import { Badge } from '../../components/ui/Badge'
import { Card } from '../../components/ui/Card'
import { EmptyState } from '../../components/ui/EmptyState'
import { LoadingState } from '../../components/ui/LoadingState'
import { RequestTimeline } from '../../features/requests/components/RequestTimeline'
import { useRequestByReference } from '../../features/requests/hooks/useRequests'

export function TrackRequestPage() {
  const { reference } = useParams()
  const request = useRequestByReference(reference)

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      {request.isLoading ? <LoadingState label="Loading request" /> : null}
      {request.data ? (
        <div className="grid gap-4">
          <Card>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f6f78]">Tracking</p>
                <h1 className="mt-2 text-3xl font-semibold text-[#172126]">{request.data.reference}</h1>
                <p className="mt-2 text-[#607177]">{request.data.categoryName} at {request.data.portName}</p>
              </div>
              <Badge tone="info">{request.data.status}</Badge>
            </div>
          </Card>
          <RequestTimeline items={request.data.statusLog} />
        </div>
      ) : null}
      {!request.isLoading && !request.data ? (
        <EmptyState title="Request not found" description="Check the reference and try again." />
      ) : null}
    </main>
  )
}
