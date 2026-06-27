import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'

export function AdminLayout() {
  return (
    <div className="min-h-svh bg-[#f4f8f8] lg:flex">
      <Sidebar />
      <main className="mx-auto w-full max-w-7xl px-4 py-5 lg:px-8">
        <Outlet />
      </main>
    </div>
  )
}
