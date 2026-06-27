import { Badge } from '../../../components/ui/Badge'
import { formatDateTime } from '../../../lib/date'
import type { RequestStatusLog } from '../types/requests.types'

type RequestTimelineProps = {
  items: RequestStatusLog[]
}

export function RequestTimeline({ items }: RequestTimelineProps) {
  return (
    <ol className="grid gap-3">
      {items.map((item) => (
        <li className="rounded-lg border border-[#d9e4e5] bg-white p-4" key={item.id}>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-semibold text-[#172126]">{item.label}</h3>
            <Badge tone="info">{item.status}</Badge>
          </div>
          <p className="mt-2 text-sm text-[#607177]">{item.description}</p>
          <p className="mt-2 text-xs font-medium text-[#607177]">{formatDateTime(item.createdAt)}</p>
        </li>
      ))}
    </ol>
  )
}
