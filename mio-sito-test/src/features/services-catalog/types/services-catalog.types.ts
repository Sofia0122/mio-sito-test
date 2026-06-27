export type ServiceField = {
  name: string
  label: string
  type: 'text' | 'textarea' | 'date' | 'select'
  required: boolean
}

export type ServiceCategory = {
  id: string
  slug: string
  name: string
  description: string
  iconName: string
  active: boolean
  fields: ServiceField[]
}
