/**
 *
 * @param name cookie name
 * @returns the cookie with the given name or undefined if not found
 */
export const getCookie = (name: string) => {
  const cookies = document.cookie.split("; ");
  const cookie = cookies.find((cookie) => cookie.startsWith(`${name}=`));

  console.log(cookie);

  return cookie ? cookie.split("=")[1] : null;
};
