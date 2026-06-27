import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { MobileNavigation } from './MobileNavigation'

export function PublicLayout() {
  return (
    <div className="min-h-svh bg-[#f4f8f8] pb-16 sm:pb-0">
      <Header />
      <Outlet />
      <MobileNavigation />
    </div>
  )
}
