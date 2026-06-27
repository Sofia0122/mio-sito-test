export type RequestStatus =
  | 'PENDING'
  | 'REVIEWING'
  | 'QUOTED'
  | 'AWAITING_PAYMENT'
  | 'CONFIRMED'
  | 'IN_PROGRESS'
  | 'COMPLETED'
  | 'CANCELLED'

export type RequestStatusLog = {
  id: string
  status: RequestStatus
  label: string
  description: string
  createdAt: string
}

export type Request = {
  id: string
  reference: string
  customerName: string
  customerEmail: string
  customerPhone: string
  yachtName?: string
  categorySlug: string
  categoryName: string
  serviceDetails: string
  portId: string
  portName: string
  supplierId?: string
  supplierName?: string
  status: RequestStatus
  statusLog: RequestStatusLog[]
  requestedAt: string
  responseTimeMinutes?: number
  deliveryTimeMinutes?: number
  supplierCost?: number
  customerPrice?: number
  estimatedMargin?: number
  internalNotes?: string
  paymentIntentId?: string
  paymentStatus?: 'NOT_REQUIRED' | 'PENDING' | 'PAID' | 'FAILED'
}

export type CreateRequestInput = {
  serviceSlug: string
  customerName: string
  customerEmail: string
  customerPhone: string
  yachtName?: string
  portId: string
  serviceDetails: string
  requestedDate: string
}
