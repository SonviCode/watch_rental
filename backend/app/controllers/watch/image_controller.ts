import Image from '#models/watch/image'
import { createImageValidator } from '#validators/watch_validator'
import type { HttpContext } from '@adonisjs/core/http'

export default class ImageController {
  async getAllImages({ response }: HttpContext) {
    const images = await Image.all()

    return response.ok(images)
  }

  async getImageById({ request, response }: HttpContext) {
    const imageId = request.param('id')

    const image = await Image.find(imageId)

    return response.ok(image)
  }

  async createImage({ request, response }: HttpContext) {
    const body = await request.validateUsing(createImageValidator)

    const image = await Image.create(body)

    return response.ok(image)
  }

  //   async updateSubscription({ request, response }: HttpContext) {
  //     const body = await request.validateUsing(createSubscriptionValidator)

  //     const subscription = await Subscription.create(body)

  //     return response.ok(subscription)
  //   }
}
