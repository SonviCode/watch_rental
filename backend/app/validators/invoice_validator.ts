import vine from '@vinejs/vine'

export const createInvoiceValidator = vine.compile(
  vine.object({
    rental_id: vine.string(),
    amount: vine.number(),
    // status: vine.string(),
    date_start: vine.string(),
    subscription: vine.any(),
  })
)
