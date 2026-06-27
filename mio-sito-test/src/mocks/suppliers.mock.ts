import type { Supplier } from '../features/suppliers/types/suppliers.types'

export const suppliersMock: Supplier[] = [
  {
    id: 'supplier-riviera-rides',
    name: 'Riviera Rides',
    categorySlugs: ['transport'],
    coveredPorts: ['port-monaco', 'port-antibes'],
    rating: 4.8,
    contactName: 'Alex Moreau',
    contactEmail: 'ops@rivierarides.example',
    requestsHandled: 42,
    averageResponseMinutes: 18,
  },
  {
    id: 'supplier-blue-provisions',
    name: 'Blue Provisions',
    categorySlugs: ['provisioning'],
    coveredPorts: ['port-monaco', 'port-palma'],
    rating: 4.6,
    contactName: 'Marta Silva',
    contactEmail: 'orders@blueprovisions.example',
    requestsHandled: 31,
    averageResponseMinutes: 24,
  },
  {
    id: 'supplier-dock-tech',
    name: 'DockTech Marine',
    categorySlugs: ['technical-support'],
    coveredPorts: ['port-antibes', 'port-palma'],
    rating: 4.9,
    contactName: 'Jon Carter',
    contactEmail: 'support@docktech.example',
    requestsHandled: 27,
    averageResponseMinutes: 14,
  },
]
