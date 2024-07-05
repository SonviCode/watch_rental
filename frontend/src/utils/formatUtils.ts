/**
 *
 * @param value string
 * @returns formatted phone number
 */
export const formatPhoneNumber = (value: string): string => {
  if (!value) return value;

  const phoneNumber = value.replace(/[^\d]/g, "");

  const formattedNumber: string[] = [
    phoneNumber.slice(0, 2),
    phoneNumber.slice(2, 4),
    phoneNumber.slice(4, 6),
    phoneNumber.slice(6, 8),
    phoneNumber.slice(8, 10),
  ];

  return formattedNumber.join(" ").trim();
};

/**
 *
 * @param value string
 * @returns formatted euros in this format : "XXX XXX XXX"
 */
export const formatEuros = (value: number): string => {
  if (!value) return value.toString();

  return value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};
