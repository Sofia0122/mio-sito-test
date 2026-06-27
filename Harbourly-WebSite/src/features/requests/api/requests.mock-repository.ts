import { requestsMock } from '../../../mocks/requests.mock'
import { servicesMock } from '../../../mocks/services.mock'
import { portsMock } from '../../../mocks/ports.mock'
import type { RequestsRepository } from './requests.repository'
import type { CreateRequestInput, Request } from '../types/requests.types'

const requestsStore: Request[] = [...requestsMock]

export class RequestsMockRepository implements RequestsRepository {
  async listRequests() {
    return [...requestsStore]
  }

  async getRequestById(requestId: string) {
    return requestsStore.find((request) => request.id === requestId) ?? null
  }

  async getRequestByReference(reference: string) {
    return requestsStore.find((request) => request.reference === reference) ?? null
  }

  async createRequest(input: CreateRequestInput): Promise<Request> {
    const category = servicesMock.find((service) => service.slug === input.serviceSlug)
    const port = portsMock.find((item) => item.id === input.portId)
    const reference = `HB-${new Date().getFullYear()}-${String(requestsStore.length + 1).padStart(3, '0')}`

    const request: Request = {
      id: `req-${crypto.randomUUID()}`,
      reference,
      customerName: input.customerName,
      customerEmail: input.customerEmail,
      customerPhone: input.customerPhone,
      yachtName: input.yachtName,
      categorySlug: input.serviceSlug,
      categoryName: category?.name ?? 'Service',
      serviceDetails: input.serviceDetails,
      portId: input.portId,
      portName: port?.name ?? 'Selected port',
      status: 'PENDING',
      requestedAt: new Date().toISOString(),
      paymentStatus: 'NOT_REQUIRED',
      statusLog: [
        {
          id: `log-${crypto.randomUUID()}`,
          status: 'PENDING',
          label: 'Request received',
          description: 'Harbourly received your request and will review it shortly.',
          createdAt: new Date().toISOString(),
        },
      ],
    }

    requestsStore.unshift(request)
    return request
  }
}
