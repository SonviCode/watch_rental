import vine from '@vinejs/vine'

export const createRentalValidator = vine.compile(
  vine.object({
    user_id: vine.string(),
    subscription: vine.any(),
    date_start: vine.string(),
    watch_id: vine.string(),
  })
)

export const updateRentalValidator = vine.compile(
  vine.object({
    subscription_id: vine.string(),
    // date_start: vine.string(),
    watch_id: vine.string(),
  })
)

export const createStatusValidator = vine.compile(
  vine.object({
    statusName: vine.string(),
  })
)
