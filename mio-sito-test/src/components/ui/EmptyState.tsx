type EmptyStateProps = {
  title: string
  description: string
}

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="rounded-lg border border-dashed border-[#d9e4e5] bg-white p-8 text-center">
      <h2 className="text-lg font-semibold text-[#172126]">{title}</h2>
      <p className="mt-2 text-sm text-[#607177]">{description}</p>
    </div>
  )
}
