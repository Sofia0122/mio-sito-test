import type { ReactNode } from 'react'

type AdminRouteGuardProps = {
  children: ReactNode
}

export function AdminRouteGuard({ children }: AdminRouteGuardProps) {
  // TODO: Replace this placeholder with real auth and authorization when backend auth exists.
  return children
}
