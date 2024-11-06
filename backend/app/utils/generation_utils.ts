/**
 * Function to generate a custom invoice number
 *
 * @param subscriptionName : the subscription used for the prefix
 * @returns the custom invoice number
 */
export const generateInvoiceNumber = (subscriptionName: string) => {
  const prefix = subscriptionName.slice(0, 2).toUpperCase()

  const now = new Date()
  const year = now.getFullYear().toString().slice(-2)
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')

  const randomPart = Math.floor(100 + Math.random() * 900)

  return `${prefix}${year}${month}${day}${randomPart}`
}

/**
 * Function to generate a custom rental number
 *
 * @param subscriptionName : the subscription used for the prefix
 * @returns the custom rental number
 */
export const generateRentalNumber = (subscriptionName: string) => {
  const prefix = subscriptionName.slice(0, 2).toUpperCase()

  const now = new Date()
  const year = now.getFullYear().toString().slice(-2)
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')

  const randomPart = Math.floor(100 + Math.random() * 900)

  return `${prefix}${year}${month}${day}${randomPart}`
}
