import type { SelectHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string
  error?: string
  options: Array<{ label: string; value: string }>
}

export function Select({ label, id, error, options, className, ...props }: SelectProps) {
  const selectId = id ?? props.name

  return (
    <label className="grid gap-2 text-sm font-medium text-[#172126]" htmlFor={selectId}>
      <span>{label}</span>
      <select
        id={selectId}
        className={cn(
          'min-h-11 rounded-md border border-[#d9e4e5] bg-white px-3 text-base text-[#172126] shadow-sm',
          error && 'border-red-500',
          className,
        )}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error ? <span className="text-sm font-normal text-red-600">{error}</span> : null}
    </label>
  )
}
