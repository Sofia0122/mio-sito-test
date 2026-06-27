import { Link } from 'react-router-dom'
import { routes } from '../../../app/routes'
import { Badge } from '../../../components/ui/Badge'
import { Table } from '../../../components/ui/Table'
import { formatCurrency, formatMinutes } from '../../../lib/formatters'
import type { Request } from '../types/requests.types'

type RequestsTableProps = {
  requests: Request[]
}

export function RequestsTable({ requests }: RequestsTableProps) {
  return (
    <Table
      columns={[
        {
          key: 'reference',
          header: 'Reference',
          render: (request) => <Link className="font-semibold text-[#1f6f78]" to={routes.adminRequestDetail(request.id)}>{request.reference}</Link>,
        },
        { key: 'customer', header: 'Customer', render: (request) => request.customerName },
        { key: 'category', header: 'Category', render: (request) => request.categoryName },
        { key: 'port', header: 'Port', render: (request) => request.portName },
        { key: 'status', header: 'Status', render: (request) => <Badge tone="info">{request.status}</Badge> },
        {
          key: 'response',
          header: 'Response',
          render: (request) => formatMinutes(request.responseTimeMinutes ?? 0),
        },
        {
          key: 'margin',
          header: 'Margin',
          render: (request) => formatCurrency(request.estimatedMargin ?? 0),
        },
      ]}
      data={requests}
      getRowKey={(request) => request.id}
    />
  )
}
