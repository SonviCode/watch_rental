import Brand from '#models/watch/brand'
import ImageService from '#services/image_service'
import { createBrandValidator } from '#validators/watch'
import type { HttpContext } from '@adonisjs/core/http'

export default class BrandController {
  async getAllBrands({ response }: HttpContext) {
    const brands = await Brand.all()

    return response.ok(brands)
  }

  async getBrandById({ request, response }: HttpContext) {
    const brandId = request.param('id')

    const brand = await Brand.find(brandId)

    return response.ok(brand)
  }

  async createBrand({ request, response }: HttpContext) {
    const image = request.file('logoImgUrl')
    const body = await request.validateUsing(createBrandValidator)

    const logoImgUrl = await ImageService.createImageBrand(image!)

    body.logoImgUrl = logoImgUrl

    const brand = await Brand.create(body)

    return response.ok(brand)
  }

  //   async updateSubscription({ request, response }: HttpContext) {
  //     const body = await request.validateUsing(createSubscriptionValidator)

  //     const subscription = await Subscription.create(body)

  //     return response.ok(subscription)
  //   }
}
