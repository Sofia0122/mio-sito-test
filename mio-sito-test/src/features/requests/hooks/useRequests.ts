import { useMutation, useQuery } from '@tanstack/react-query'
import { requestsService } from '../../../lib/repositories'
import type { CreateRequestInput } from '../types/requests.types'

export function useRequests() {
  return useQuery({
    queryKey: ['requests'],
    queryFn: () => requestsService.listRequests(),
  })
}

export function useRequest(requestId: string | undefined) {
  return useQuery({
    queryKey: ['requests', requestId],
    queryFn: () => requestsService.getRequestById(requestId ?? ''),
    enabled: Boolean(requestId),
  })
}

export function useRequestByReference(reference: string | undefined) {
  return useQuery({
    queryKey: ['requests', 'reference', reference],
    queryFn: () => requestsService.getRequestByReference(reference ?? ''),
    enabled: Boolean(reference),
  })
}

export function useCreateRequest() {
  return useMutation({
    mutationFn: (input: CreateRequestInput) => requestsService.createRequest(input),
  })
}
