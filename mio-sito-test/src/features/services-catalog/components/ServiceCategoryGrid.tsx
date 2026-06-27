import { Car, Compass, ShoppingBasket, Sparkles, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'
import { routes } from '../../../app/routes'
import { Card } from '../../../components/ui/Card'
import { Button } from '../../../components/ui/Button'
import type { ServiceCategory } from '../types/services-catalog.types'

const iconMap = {
  Car,
  Compass,
  ShoppingBasket,
  Sparkles,
  Wrench,
}

type ServiceCategoryGridProps = {
  services: ServiceCategory[]
}

export function ServiceCategoryGrid({ services }: ServiceCategoryGridProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => {
        const Icon = iconMap[service.iconName as keyof typeof iconMap] ?? Compass

        return (
          <Card className="grid gap-4" key={service.id}>
            <div className="flex items-start gap-3">
              <span className="grid size-11 shrink-0 place-items-center rounded-md bg-[#e8f3f3] text-[#1f6f78]">
                <Icon aria-hidden="true" size={22} />
              </span>
              <div>
                <h2 className="text-lg font-semibold text-[#172126]">{service.name}</h2>
                <p className="mt-1 text-sm text-[#607177]">{service.description}</p>
              </div>
            </div>
            <Link to={routes.request(service.slug)}>
              <Button className="w-full" type="button">
                Start request
              </Button>
            </Link>
          </Card>
        )
      })}
    </div>
  )
}
