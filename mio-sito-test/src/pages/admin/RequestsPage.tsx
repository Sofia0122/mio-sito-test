import { useMemo, useState } from 'react'
import { EmptyState } from '../../components/ui/EmptyState'
import { Input } from '../../components/ui/Input'
import { LoadingState } from '../../components/ui/LoadingState'
import { Select } from '../../components/ui/Select'
import { RequestMobileCards } from '../../features/requests/components/RequestMobileCards'
import { RequestsTable } from '../../features/requests/components/RequestsTable'
import { useRequests } from '../../features/requests/hooks/useRequests'

export function RequestsPage() {
  const requests = useRequests()
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('')

  const filtered = useMemo(() => {
    return (requests.data ?? []).filter((request) => {
      const matchesQuery =
        request.reference.toLowerCase().includes(query.toLowerCase()) ||
        request.customerName.toLowerCase().includes(query.toLowerCase())
      const matchesStatus = status ? request.status === status : true
      return matchesQuery && matchesStatus
    })
  }, [query, requests.data, status])

  return (
    <div className="grid gap-5">
      <div>
        <h1 className="text-3xl font-semibold text-[#172126]">Requests</h1>
        <p className="mt-1 text-[#607177]">Search, filter and open service requests.</p>
      </div>
      <div className="grid gap-3 rounded-lg border border-[#d9e4e5] bg-white p-4 md:grid-cols-2">
        <Input label="Search" value={query} onChange={(event) => setQuery(event.target.value)} />
        <Select
          label="Status"
          value={status}
          onChange={(event) => setStatus(event.target.value)}
          options={[
            { label: 'All statuses', value: '' },
            { label: 'Reviewing', value: 'REVIEWING' },
            { label: 'Confirmed', value: 'CONFIRMED' },
            { label: 'In progress', value: 'IN_PROGRESS' },
          ]}
        />
      </div>
      {requests.isLoading ? <LoadingState label="Loading requests" /> : null}
      {!requests.isLoading && filtered.length === 0 ? <EmptyState title="No requests" description="No request matches the current filters." /> : null}
      {filtered.length > 0 ? (
        <>
          <div className="hidden lg:block">
            <RequestsTable requests={filtered} />
          </div>
          <RequestMobileCards requests={filtered} />
        </>
      ) : null}
    </div>
  )
}
