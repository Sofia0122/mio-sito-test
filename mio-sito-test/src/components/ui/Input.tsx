import type { InputHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
}

export function Input({ label, id, error, className, ...props }: InputProps) {
  const inputId = id ?? props.name

  return (
    <label className="grid gap-2 text-sm font-medium text-[#172126]" htmlFor={inputId}>
      <span>{label}</span>
      <input
        id={inputId}
        className={cn(
          'min-h-11 rounded-md border border-[#d9e4e5] bg-white px-3 text-base text-[#172126] shadow-sm',
          error && 'border-red-500',
          className,
        )}
        {...props}
      />
      {error ? <span className="text-sm font-normal text-red-600">{error}</span> : null}
    </label>
  )
}
