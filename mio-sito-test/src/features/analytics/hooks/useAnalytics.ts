import { useQuery } from '@tanstack/react-query'
import { analyticsService } from '../../../lib/repositories'

export function useAnalytics() {
  return useQuery({
    queryKey: ['analytics-summary'],
    queryFn: () => analyticsService.getSummary(),
  })
}
