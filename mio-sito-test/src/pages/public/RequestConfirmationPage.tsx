import { Link, useParams } from 'react-router-dom'
import { routes } from '../../app/routes'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'

export function RequestConfirmationPage() {
  const { reference } = useParams()
  const safeReference = reference ?? 'HB-REFERENCE'

  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <Card className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f6f78]">Request submitted</p>
        <h1 className="mt-3 text-3xl font-semibold text-[#172126]">{safeReference}</h1>
        <p className="mt-3 text-[#607177]">
          Harbourly has received your request. A concierge team member will review the details and update the status.
        </p>
        <Link className="mt-6 inline-flex" to={routes.track(safeReference)}>
          <Button type="button">Track request</Button>
        </Link>
      </Card>
    </main>
  )
}
