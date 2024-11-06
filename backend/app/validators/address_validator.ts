import vine from '@vinejs/vine'

export const createAddressValidator = vine.compile(
  vine.object({
    user_id: vine.string(),
    main_address: vine.string(),
    country: vine.string(),
    additional_address: vine.string().optional(),
    city: vine.string(),
    zip_code: vine.string().maxLength(6),
    billing_address: vine.boolean().optional(),
  })
)
