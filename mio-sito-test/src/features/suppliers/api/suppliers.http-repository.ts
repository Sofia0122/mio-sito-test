import type { ApiClient } from '../../../lib/apiClient'
import type { SuppliersRepository } from './suppliers.repository'
import type { Supplier } from '../types/suppliers.types'

export class SuppliersHttpRepository implements SuppliersRepository {
  private readonly client: ApiClient

  constructor(client: ApiClient) {
    this.client = client
  }

  async listSuppliers() {
    return this.client.get<Supplier[]>('/suppliers')
  }
}
