import vine from '@vinejs/vine'

export const createWatchValidator = vine.compile(
  vine.object({
    name: vine.string().minLength(3).maxLength(64),
    brand_id: vine.string(),
    material_id: vine.string(),
    subscription_id: vine.string(),
    description: vine.string(),
  })
)

export const createBrandValidator = vine.compile(
  vine.object({
    brandName: vine.string().minLength(3).maxLength(64),
    logoImgUrl: vine.any(),
  })
)

export const createMaterialValidator = vine.compile(
  vine.object({
    materialName: vine.string(),
  })
)

export const createImageValidator = vine.compile(
  vine.object({
    imageUrl: vine.string(),
  })
)
