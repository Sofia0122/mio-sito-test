import { ArrowRight, CheckCircle2, Clock, ConciergeBell } from 'lucide-react'
import { Link } from 'react-router-dom'
import { routes } from '../../app/routes'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { LoadingState } from '../../components/ui/LoadingState'
import { ServiceCategoryGrid } from '../../features/services-catalog/components/ServiceCategoryGrid'
import { useServicesCatalog } from '../../features/services-catalog/hooks/useServicesCatalog'

export function HomePage() {
  const services = useServicesCatalog()

  return (
    <main>
      <section className="bg-[#102a2f] px-4 py-10 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f3b35b]">Marina concierge</p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">Harbour services, handled before you leave the deck.</h1>
            <p className="mt-4 max-w-xl text-base text-slate-200">
              Request transport, provisioning, cleaning, technical help and experiences from one mobile-first concierge flow.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link to={routes.services}>
                <Button className="w-full sm:w-auto" type="button">
                  Request a service <ArrowRight aria-hidden="true" size={18} />
                </Button>
              </Link>
              <Link to={routes.track('HB-2026-001')}>
                <Button className="w-full sm:w-auto" type="button" variant="secondary">
                  Track a request
                </Button>
              </Link>
            </div>
          </div>
          <div className="rounded-lg border border-white/15 bg-white/10 p-5">
            <div className="grid gap-4">
              {[
                ['Fast intake', 'Clean forms capture every operational detail.'],
                ['Concierge review', 'Requests move through visible status steps.'],
                ['Supplier ready', 'The backend can later route work to real suppliers.'],
              ].map(([title, description]) => (
                <div className="flex gap-3" key={title}>
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#f3b35b]" aria-hidden="true" size={20} />
                  <div>
                    <h2 className="font-semibold">{title}</h2>
                    <p className="text-sm text-slate-200">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-[#172126]">Core categories</h2>
            <p className="mt-1 text-sm text-[#607177]">Start from the service your guests need next.</p>
          </div>
          <Link className="hidden text-sm font-semibold text-[#1f6f78] sm:block" to={routes.services}>View all</Link>
        </div>
        {services.isLoading ? <LoadingState label="Loading services" /> : <ServiceCategoryGrid services={services.data?.slice(0, 3) ?? []} />}
      </section>
      <section className="mx-auto grid max-w-6xl gap-3 px-4 pb-10 sm:grid-cols-3">
        <Card>
          <ConciergeBell className="text-[#1f6f78]" aria-hidden="true" />
          <h2 className="mt-3 font-semibold">Request</h2>
          <p className="mt-1 text-sm text-[#607177]">Submit details from your phone in minutes.</p>
        </Card>
        <Card>
          <Clock className="text-[#1f6f78]" aria-hidden="true" />
          <h2 className="mt-3 font-semibold">Review</h2>
          <p className="mt-1 text-sm text-[#607177]">Concierge team checks scope and supplier fit.</p>
        </Card>
        <Card>
          <CheckCircle2 className="text-[#1f6f78]" aria-hidden="true" />
          <h2 className="mt-3 font-semibold">Confirm</h2>
          <p className="mt-1 text-sm text-[#607177]">Track the status without internal notes or pricing.</p>
        </Card>
      </section>
    </main>
  )
}
