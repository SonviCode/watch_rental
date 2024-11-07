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
