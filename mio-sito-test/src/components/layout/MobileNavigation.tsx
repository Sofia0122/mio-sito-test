import { ClipboardList, Home, Search, ShipWheel } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { routes } from '../../app/routes'

const links = [
  { label: 'Home', to: routes.home, icon: Home },
  { label: 'Services', to: routes.services, icon: ShipWheel },
  { label: 'Track', to: routes.track('HB-2026-001'), icon: Search },
  { label: 'Admin', to: routes.adminRequests, icon: ClipboardList },
]

export function MobileNavigation() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-4 border-t border-[#d9e4e5] bg-white sm:hidden" aria-label="Mobile">
      {links.map(({ label, to, icon: Icon }) => (
        <NavLink className="grid place-items-center gap-1 px-2 py-2 text-xs text-[#607177]" key={to} to={to}>
          <Icon aria-hidden="true" size={19} />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
