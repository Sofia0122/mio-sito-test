import { apiClient } from './apiClient'
import { repositoryMode } from './constants'
import { RequestsHttpRepository } from '../features/requests/api/requests.http-repository'
import { RequestsMockRepository } from '../features/requests/api/requests.mock-repository'
import { RequestsService } from '../features/requests/services/requests.service'
import { ServicesCatalogHttpRepository } from '../features/services-catalog/api/services-catalog.http-repository'
import { ServicesCatalogMockRepository } from '../features/services-catalog/api/services-catalog.mock-repository'
import { ServicesCatalogService } from '../features/services-catalog/services/services-catalog.service'
import { SuppliersHttpRepository } from '../features/suppliers/api/suppliers.http-repository'
import { SuppliersMockRepository } from '../features/suppliers/api/suppliers.mock-repository'
import { SuppliersService } from '../features/suppliers/services/suppliers.service'
import { AnalyticsHttpRepository } from '../features/analytics/api/analytics.http-repository'
import { AnalyticsMockRepository } from '../features/analytics/api/analytics.mock-repository'
import { AnalyticsService } from '../features/analytics/services/analytics.service'

const useHttp = repositoryMode === 'http'

const requestsRepository = useHttp ? new RequestsHttpRepository(apiClient) : new RequestsMockRepository()
const servicesCatalogRepository = useHttp
  ? new ServicesCatalogHttpRepository(apiClient)
  : new ServicesCatalogMockRepository()
const suppliersRepository = useHttp ? new SuppliersHttpRepository(apiClient) : new SuppliersMockRepository()
const analyticsRepository = useHttp ? new AnalyticsHttpRepository(apiClient) : new AnalyticsMockRepository()

export const requestsService = new RequestsService(requestsRepository)
export const servicesCatalogService = new ServicesCatalogService(servicesCatalogRepository)
export const suppliersService = new SuppliersService(suppliersRepository)
export const analyticsService = new AnalyticsService(analyticsRepository)
