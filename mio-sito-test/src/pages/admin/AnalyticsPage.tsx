import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { Card } from '../../components/ui/Card'
import { Select } from '../../components/ui/Select'
import { LoadingState } from '../../components/ui/LoadingState'
import { useAnalytics } from '../../features/analytics/hooks/useAnalytics'

export function AnalyticsPage() {
  const analytics = useAnalytics()

  return (
    <div className="grid gap-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-3xl font-semibold text-[#172126]">Analytics</h1>
          <p className="mt-1 text-[#607177]">Mock reporting view for request volume and margin.</p>
        </div>
        <Select
          label="Period"
          options={[
            { label: 'Last 7 days', value: '7d' },
            { label: 'Last 30 days', value: '30d' },
          ]}
        />
      </div>
      {analytics.isLoading ? <LoadingState label="Loading analytics" /> : null}
      {analytics.data ? (
        <div className="grid gap-4 xl:grid-cols-2">
          <ChartCard title="Volume by service" data={analytics.data.requestsByCategory} dataKey="count" nameKey="category" fill="#1f6f78" />
          <ChartCard title="Margin by service" data={analytics.data.marginByService} dataKey="margin" nameKey="service" fill="#f3b35b" />
          <ChartCard title="Supplier usage" data={analytics.data.supplierUsage} dataKey="requests" nameKey="supplier" fill="#2aa7a5" />
          <ChartCard title="Requests by status" data={analytics.data.requestsByStatus} dataKey="count" nameKey="status" fill="#16414b" />
        </div>
      ) : null}
    </div>
  )
}

function ChartCard({
  title,
  data,
  dataKey,
  nameKey,
  fill,
}: {
  title: string
  data: Array<Record<string, string | number>>
  dataKey: string
  nameKey: string
  fill: string
}) {
  return (
    <Card>
      <h2 className="mb-4 font-semibold text-[#172126]">{title}</h2>
      <div className="h-72">
        <ResponsiveContainer height="100%" width="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={nameKey} />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey={dataKey} fill={fill} radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
