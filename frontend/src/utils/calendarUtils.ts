/**
 *
 * @param a first value select on the calendar
 * @param b second value select on the calendar
 * @returns the number of days between the two dates
 */
export const NumberOfDaysSelected = (a: Date, b: Date): number => {
  const MS_PER_DAY = 1000 * 60 * 60 * 24;

  let startOfRental;
  let endOfRental;
  a.getTime() < b.getTime()
    ? ((startOfRental = b.getTime()), (endOfRental = a.getTime()))
    : ((startOfRental = a.getTime()), (endOfRental = b.getTime()));

  return Math.round((startOfRental - endOfRental) / MS_PER_DAY);
};

/**
 *
 * @param from first value select on the calendar
 * @param to second value select on the calendar
 * @param disabledDates the disabled dates (already rented, under repair...)
 * @returns
 */
export const disbaledDateIsSelected = (
  from: Date,
  to: Date,
  disabledDates: Date[]
): boolean => {
  let result = false;
  disabledDates.forEach((disabled: Date) => {
    if (
      disabled.getTime() <= to.getTime() &&
      disabled.getTime() >= from.getTime()
    ) {
      result = true;
    }
  });

  return result;
};

/**
 *
 * @param disabledDates the disabled dates (already rented, under repair...)
 * @param date every day of the calendar
 * @returns
 */
export const checkDisabledDates = (
  disabledDates: Date[],
  date: Date
): boolean => {
  return disabledDates
    .map((disabled) => disabled.getTime())
    .includes(date.getTime());
};

/**
 *
 * @param date date not formatted
 * @returns formatted date in "DD/MM/YYYY" and return a string
 */
export const formatDate = (date: Date): string => {
  const formattedDate = date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return formattedDate;
};
