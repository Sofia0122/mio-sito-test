import type { TextareaHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string
  error?: string
}

export function Textarea({ label, id, error, className, ...props }: TextareaProps) {
  const textareaId = id ?? props.name

  return (
    <label className="grid gap-2 text-sm font-medium text-[#172126]" htmlFor={textareaId}>
      <span>{label}</span>
      <textarea
        id={textareaId}
        className={cn(
          'min-h-28 rounded-md border border-[#d9e4e5] bg-white px-3 py-2 text-base text-[#172126] shadow-sm',
          error && 'border-red-500',
          className,
        )}
        {...props}
      />
      {error ? <span className="text-sm font-normal text-red-600">{error}</span> : null}
    </label>
  )
}
