import type { ApiClient } from '../../../lib/apiClient'
import type { RequestsRepository } from './requests.repository'
import type { CreateRequestInput, Request } from '../types/requests.types'

export class RequestsHttpRepository implements RequestsRepository {
  private readonly client: ApiClient

  constructor(client: ApiClient) {
    this.client = client
  }

  async listRequests() {
    return this.client.get<Request[]>('/requests')
  }

  async getRequestById(requestId: string) {
    return this.client.get<Request | null>(`/requests/${requestId}`)
  }

  async getRequestByReference(reference: string) {
    return this.client.get<Request | null>(`/requests/by-reference/${reference}`)
  }

  async createRequest(input: CreateRequestInput) {
    return this.client.post<Request, CreateRequestInput>('/requests', input)
  }
}
