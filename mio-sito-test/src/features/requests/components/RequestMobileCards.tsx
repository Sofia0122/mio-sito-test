import { Link } from 'react-router-dom'
import { routes } from '../../../app/routes'
import { Badge } from '../../../components/ui/Badge'
import { Card } from '../../../components/ui/Card'
import type { Request } from '../types/requests.types'

type RequestMobileCardsProps = {
  requests: Request[]
}

export function RequestMobileCards({ requests }: RequestMobileCardsProps) {
  return (
    <div className="grid gap-3 lg:hidden">
      {requests.map((request) => (
        <Card key={request.id}>
          <div className="flex items-start justify-between gap-3">
            <div>
              <Link className="font-semibold text-[#1f6f78]" to={routes.adminRequestDetail(request.id)}>
                {request.reference}
              </Link>
              <p className="mt-1 text-sm text-[#607177]">{request.customerName}</p>
            </div>
            <Badge tone="info">{request.status}</Badge>
          </div>
          <p className="mt-3 text-sm text-[#172126]">{request.categoryName}</p>
          <p className="text-sm text-[#607177]">{request.portName}</p>
        </Card>
      ))}
    </div>
  )
}
