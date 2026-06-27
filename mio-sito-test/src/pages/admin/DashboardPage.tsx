import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { Card } from '../../components/ui/Card'
import { LoadingState } from '../../components/ui/LoadingState'
import { useAnalytics } from '../../features/analytics/hooks/useAnalytics'
import { useRequests } from '../../features/requests/hooks/useRequests'
import { RequestsTable } from '../../features/requests/components/RequestsTable'
import { formatCurrency, formatMinutes } from '../../lib/formatters'

export function DashboardPage() {
  const analytics = useAnalytics()
  const requests = useRequests()

  return (
    <div className="grid gap-5">
      <div>
        <h1 className="text-3xl font-semibold text-[#172126]">Dashboard</h1>
        <p className="mt-1 text-[#607177]">Operational overview for concierge requests.</p>
      </div>
      {analytics.isLoading ? <LoadingState label="Loading dashboard" /> : null}
      {analytics.data ? (
        <>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <Metric title="Total requests" value={String(analytics.data.totalRequests)} />
            <Metric title="Avg response" value={formatMinutes(analytics.data.averageResponseMinutes)} />
            <Metric title="Avg delivery" value={formatMinutes(analytics.data.averageDeliveryMinutes)} />
            <Metric title="Estimated margin" value={formatCurrency(analytics.data.estimatedMargin)} />
          </div>
          <div className="grid gap-4 xl:grid-cols-2">
            <Card>
              <h2 className="mb-4 font-semibold text-[#172126]">Requests by category</h2>
              <div className="h-72">
                <ResponsiveContainer height="100%" width="100%">
                  <BarChart data={analytics.data.requestsByCategory}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Bar dataKey="count" fill="#1f6f78" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
            <Card>
              <h2 className="mb-4 font-semibold text-[#172126]">Requests by status</h2>
              <div className="h-72">
                <ResponsiveContainer height="100%" width="100%">
                  <BarChart data={analytics.data.requestsByStatus}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="status" />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Bar dataKey="count" fill="#f3b35b" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>
        </>
      ) : null}
      {requests.data ? (
        <section className="hidden lg:block">
          <h2 className="mb-3 text-xl font-semibold text-[#172126]">Latest requests</h2>
          <RequestsTable requests={requests.data.slice(0, 5)} />
        </section>
      ) : null}
    </div>
  )
}

function Metric({ title, value }: { title: string; value: string }) {
  return (
    <Card>
      <p className="text-sm text-[#607177]">{title}</p>
      <p className="mt-2 text-2xl font-semibold text-[#172126]">{value}</p>
    </Card>
  )
}
