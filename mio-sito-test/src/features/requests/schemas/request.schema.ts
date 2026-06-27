import { z } from 'zod'

export const requestFormSchema = z.object({
  customerName: z.string().min(2, 'Enter your name'),
  customerEmail: z.email('Enter a valid email'),
  customerPhone: z.string().min(6, 'Enter a phone number'),
  yachtName: z.string().optional(),
  portId: z.string().min(1, 'Choose a port'),
  requestedDate: z.string().min(1, 'Choose a date'),
  serviceDetails: z.string().min(12, 'Add a few details so the concierge can help'),
})

export type RequestFormValues = z.infer<typeof requestFormSchema>
