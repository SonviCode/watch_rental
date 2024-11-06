import vine from '@vinejs/vine'

export const createSubscriptionValidator = vine.compile(
  vine.object({
    title: vine.string().minLength(3).maxLength(64),
    price: vine.number(),
    watch_max_price: vine.number(),
    switch_text: vine.string(),
    description: vine.string(),
  })
)
