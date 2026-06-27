import type { ServiceCategory } from '../features/services-catalog/types/services-catalog.types'

export const servicesMock: ServiceCategory[] = [
  {
    id: 'service-transport',
    slug: 'transport',
    name: 'Transport',
    description: 'Private transfers, airport pickups and local marina mobility.',
    iconName: 'Car',
    active: true,
    fields: [
      { name: 'pickup', label: 'Pickup location', type: 'text', required: true },
      { name: 'passengers', label: 'Passengers', type: 'text', required: true },
    ],
  },
  {
    id: 'service-provisioning',
    slug: 'provisioning',
    name: 'Provisioning',
    description: 'Fresh groceries, beverages and onboard essentials delivered to berth.',
    iconName: 'ShoppingBasket',
    active: true,
    fields: [
      { name: 'list', label: 'Provisioning list', type: 'textarea', required: true },
      { name: 'deliveryWindow', label: 'Preferred delivery window', type: 'text', required: true },
    ],
  },
  {
    id: 'service-laundry-cleaning',
    slug: 'laundry-cleaning',
    name: 'Laundry & Cleaning',
    description: 'Laundry pickup, cabin cleaning and turnaround support.',
    iconName: 'Sparkles',
    active: true,
    fields: [{ name: 'scope', label: 'Requested scope', type: 'textarea', required: true }],
  },
  {
    id: 'service-technical-support',
    slug: 'technical-support',
    name: 'Technical Support',
    description: 'Qualified marine technicians for urgent checks and planned work.',
    iconName: 'Wrench',
    active: true,
    fields: [{ name: 'issue', label: 'Technical issue', type: 'textarea', required: true }],
  },
  {
    id: 'service-experiences',
    slug: 'experiences',
    name: 'Experiences',
    description: 'Local restaurants, day trips, guides and premium itinerary support.',
    iconName: 'Compass',
    active: true,
    fields: [{ name: 'preferences', label: 'Experience preferences', type: 'textarea', required: true }],
  },
]
