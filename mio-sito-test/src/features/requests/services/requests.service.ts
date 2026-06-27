import type { RequestsRepository } from '../api/requests.repository'
import type { CreateRequestInput } from '../types/requests.types'

export class RequestsService {
  private readonly repository: RequestsRepository

  constructor(repository: RequestsRepository) {
    this.repository = repository
  }

  listRequests() {
    return this.repository.listRequests()
  }

  getRequestById(requestId: string) {
    return this.repository.getRequestById(requestId)
  }

  getRequestByReference(reference: string) {
    return this.repository.getRequestByReference(reference)
  }

  createRequest(input: CreateRequestInput) {
    return this.repository.createRequest(input)
  }
}
