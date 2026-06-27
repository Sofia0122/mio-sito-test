import type { SuppliersRepository } from '../api/suppliers.repository'

export class SuppliersService {
  private readonly repository: SuppliersRepository

  constructor(repository: SuppliersRepository) {
    this.repository = repository
  }

  listSuppliers() {
    return this.repository.listSuppliers()
  }
}
