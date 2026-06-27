import type { ReactNode } from 'react'
import { useId } from 'react'
import { Button } from './Button'

type ModalProps = {
  title: string
  open: boolean
  children: ReactNode
  onClose: () => void
}

export function Modal({ title, open, children, onClose }: ModalProps) {
  const titleId = useId()

  if (!open) {
    return null
  }

  return (
    <div
      aria-labelledby={titleId}
      aria-modal="true"
      className="fixed inset-0 z-50 grid place-items-center bg-slate-950/45 p-4"
      role="dialog"
    >
      <div className="w-full max-w-lg rounded-lg bg-white p-5 shadow-xl">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="text-lg font-semibold text-[#172126]" id={titleId}>
            {title}
          </h2>
          <Button type="button" variant="ghost" onClick={onClose}>
            Close
          </Button>
        </div>
        {children}
      </div>
    </div>
  )
}
