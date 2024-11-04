export function addMinutes(date: Date, minutes: number) {
  date.setMinutes(date.getMinutes() + minutes)

  return date
}

export function addMonth(date: Date, month: number) {
  date.setMonth(date.getMonth() + month)

  return date
}
