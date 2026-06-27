import { suppliersMock } from '../../../mocks/suppliers.mock'
import type { SuppliersRepository } from './suppliers.repository'

export class SuppliersMockRepository implements SuppliersRepository {
  async listSuppliers() {
    return [...suppliersMock]
  }
}
