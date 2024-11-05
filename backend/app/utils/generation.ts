export const generateInvoiceNumber = (subscriptionName: string) => {
  const prefix = subscriptionName.slice(0, 2).toUpperCase()

  const now = new Date()
  const year = now.getFullYear().toString().slice(-2)
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')

  const randomPart = Math.floor(100 + Math.random() * 900)

  return `${prefix}${year}${month}${day}${randomPart}`
}
