import vine from '@vinejs/vine'

export const createRentalValidator = vine.compile(
  vine.object({
    user_id: vine.string(),
    subscription_id: vine.string(),
  })
)
