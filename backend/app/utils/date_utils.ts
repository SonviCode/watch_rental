/**
 *
 * @param date : current date
 * @param minutes : minutes to add
 * @returns new date with minutes added
 */
export function addMinutes(date: Date, minutes: number) {
  date.setMinutes(date.getMinutes() + minutes)

  return date
}

/**
 *
 * @param date : current date
 * @param minutes : months to add
 * @returns new date with months added
 */
export function addMonth(date: Date, month: number) {
  date.setMonth(date.getMonth() + month)

  return date
}
