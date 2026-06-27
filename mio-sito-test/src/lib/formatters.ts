export function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-EU', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(value)
}

export function formatMinutes(minutes: number) {
  if (minutes < 60) {
    return `${minutes} min`
  }
  return `${Math.round(minutes / 60)} h`
}
