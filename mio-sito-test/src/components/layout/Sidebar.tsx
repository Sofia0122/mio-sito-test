import { BarChart3, ClipboardList, LayoutDashboard, ShipWheel, Users } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { routes } from '../../app/routes'

const adminLinks = [
  { label: 'Dashboard', to: routes.admin, icon: LayoutDashboard },
  { label: 'Requests', to: routes.adminRequests, icon: ClipboardList },
  { label: 'Suppliers', to: routes.adminSuppliers, icon: Users },
  { label: 'Services', to: routes.adminServices, icon: ShipWheel },
  { label: 'Analytics', to: routes.adminAnalytics, icon: BarChart3 },
]

export function Sidebar() {
  return (
    <aside className="hidden min-h-svh w-64 border-r border-[#d9e4e5] bg-white p-4 lg:block">
      <div className="mb-6 text-lg font-semibold text-[#102a2f]">Harbourly Admin</div>
      <nav className="grid gap-1" aria-label="Admin">
        {adminLinks.map(({ label, to, icon: Icon }) => (
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
                isActive ? 'bg-[#e8f3f3] text-[#16414b]' : 'text-[#607177] hover:bg-[#f4f8f8]'
              }`
            }
            end={to === routes.admin}
            key={to}
            to={to}
          >
            <Icon aria-hidden="true" size={18} />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
