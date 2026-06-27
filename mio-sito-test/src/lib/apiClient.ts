type ApiClientOptions = {
  baseUrl?: string
}

export class ApiClient {
  private readonly baseUrl: string

  constructor(options: ApiClientOptions = {}) {
    this.baseUrl = options.baseUrl ?? import.meta.env.VITE_API_BASE_URL ?? ''
  }

  async get<TResponse>(path: string): Promise<TResponse> {
    const response = await fetch(`${this.baseUrl}${path}`)
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`)
    }
    return response.json() as Promise<TResponse>
  }

  async post<TResponse, TBody>(path: string, body: TBody): Promise<TResponse> {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`)
    }
    return response.json() as Promise<TResponse>
  }
}

export const apiClient = new ApiClient()
