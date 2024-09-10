import vine from '@vinejs/vine'

export const createBrandValidator = vine.compile(
  vine.object({
    brandName: vine.string().minLength(3).maxLength(64),
  })
)
