export type AnalyticsSummary = {
  totalRequests: number
  averageResponseMinutes: number
  averageDeliveryMinutes: number
  estimatedMargin: number
  requestsByStatus: Array<{ status: string; count: number }>
  requestsByCategory: Array<{ category: string; count: number }>
  marginByService: Array<{ service: string; margin: number }>
  supplierUsage: Array<{ supplier: string; requests: number }>
}
