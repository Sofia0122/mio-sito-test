import type { Supplier } from '../types/suppliers.types'

export interface SuppliersRepository {
  listSuppliers(): Promise<Supplier[]>
}
