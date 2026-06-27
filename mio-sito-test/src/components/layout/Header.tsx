import { Anchor, Menu } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { routes } from '../../app/routes'

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#d9e4e5] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <NavLink className="flex items-center gap-2 font-semibold text-[#102a2f]" to={routes.home}>
          <Anchor aria-hidden="true" size={24} />
          Harbourly
        </NavLink>
        <nav className="hidden items-center gap-5 text-sm font-medium text-[#607177] sm:flex" aria-label="Public">
          <NavLink to={routes.services}>Services</NavLink>
          <NavLink to={routes.track('HB-2026-001')}>Track</NavLink>
          <NavLink to={routes.admin}>Admin</NavLink>
        </nav>
        <Menu className="sm:hidden" aria-hidden="true" size={22} />
      </div>
    </header>
  )
}
