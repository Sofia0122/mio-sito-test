import type { CreateRequestInput, Request } from '../types/requests.types'

export interface RequestsRepository {
  listRequests(): Promise<Request[]>
  getRequestById(requestId: string): Promise<Request | null>
  getRequestByReference(reference: string): Promise<Request | null>
  createRequest(input: CreateRequestInput): Promise<Request>
}
