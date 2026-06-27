import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { routes } from '../../../app/routes'
import { Button } from '../../../components/ui/Button'
import { Card } from '../../../components/ui/Card'
import { Input } from '../../../components/ui/Input'
import { Select } from '../../../components/ui/Select'
import { Textarea } from '../../../components/ui/Textarea'
import { listPorts } from '../../../lib/ports'
import { requestFormSchema, type RequestFormValues } from '../schemas/request.schema'
import { useCreateRequest } from '../hooks/useRequests'
import type { ServiceCategory } from '../../services-catalog/types/services-catalog.types'
import type { Port } from '../../../types/common.types'

type RequestFormProps = {
  service: ServiceCategory
}

export function RequestForm({ service }: RequestFormProps) {
  const navigate = useNavigate()
  const createRequest = useCreateRequest()
  const [ports, setPorts] = useState<Port[]>([])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestFormValues>({
    resolver: zodResolver(requestFormSchema),
    defaultValues: {
      customerName: '',
      customerEmail: '',
      customerPhone: '',
      yachtName: '',
      portId: '',
      requestedDate: '',
      serviceDetails: '',
    },
  })

  useEffect(() => {
    void listPorts().then(setPorts)
  }, [])

  const onSubmit = handleSubmit(async (values) => {
    const request = await createRequest.mutateAsync({
      serviceSlug: service.slug,
      ...values,
    })
    navigate(routes.requestConfirmation(request.reference))
  })

  return (
    <Card>
      <form className="grid gap-4" onSubmit={onSubmit}>
        <div>
          <h2 className="text-xl font-semibold text-[#172126]">{service.name} request</h2>
          <p className="mt-1 text-sm text-[#607177]">Share the essentials and Harbourly will coordinate the next step.</p>
        </div>
        <Input label="Full name" error={errors.customerName?.message} {...register('customerName')} />
        <Input label="Email" type="email" error={errors.customerEmail?.message} {...register('customerEmail')} />
        <Input label="Phone" error={errors.customerPhone?.message} {...register('customerPhone')} />
        <Input label="Yacht name" error={errors.yachtName?.message} {...register('yachtName')} />
        <Select
          label="Port"
          error={errors.portId?.message}
          options={[
            { label: 'Choose a port', value: '' },
            ...ports.map((port) => ({ label: port.name, value: port.id })),
          ]}
          {...register('portId')}
        />
        <Input label="Preferred date" type="date" error={errors.requestedDate?.message} {...register('requestedDate')} />
        <Textarea
          label={service.fields[0]?.label ?? 'Service details'}
          error={errors.serviceDetails?.message}
          {...register('serviceDetails')}
        />
        {createRequest.isError ? (
          <p className="rounded-md bg-red-50 p-3 text-sm text-red-700">The request could not be submitted. Try again.</p>
        ) : null}
        <Button disabled={createRequest.isPending} type="submit">
          {createRequest.isPending ? 'Submitting...' : 'Submit request'}
        </Button>
      </form>
    </Card>
  )
}
