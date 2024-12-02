/**
 *
 * @param date : current date
 * @param year : year to add
 * @returns new date with year added
 */
export function addYear(date: Date, year: number) {
  date.setFullYear(date.getFullYear() + year);

  return date;
}

/**
 *
 * @param date : current date
 * @param year : month to add
 * @returns new date with month added
 */
export function addMonth(date: Date, month: number) {
  date.setMonth(date.getMonth() + month);

  return date;
}

/**
 *
 * @param date : current date
 * @param days : days to add
 * @returns new date with days added
 */
export function addDays(date: Date, days: number) {
  date.setDate(date.getDate() + days);

  return date;
}
