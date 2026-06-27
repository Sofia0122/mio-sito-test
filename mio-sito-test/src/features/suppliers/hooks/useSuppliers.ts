import { useQuery } from '@tanstack/react-query'
import { suppliersService } from '../../../lib/repositories'

export function useSuppliers() {
  return useQuery({
    queryKey: ['suppliers'],
    queryFn: () => suppliersService.listSuppliers(),
  })
}
