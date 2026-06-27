type LoadingStateProps = {
  label?: string
}

export function LoadingState({ label = 'Loading' }: LoadingStateProps) {
  return (
    <div className="rounded-lg border border-[#d9e4e5] bg-white p-6 text-sm text-[#607177]" role="status">
      {label}...
    </div>
  )
}
