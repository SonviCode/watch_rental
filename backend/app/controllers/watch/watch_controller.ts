import Watch from '#models/watch/watch'
import ImageService from '#services/image_service'
import { createWatchValidator } from '#validators/watch'
import { cuid } from '@adonisjs/core/helpers'
import type { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'

export default class WatchController {
  async getAllWatches({ response }: HttpContext) {
    const watches = await Watch.query().preload('brand').preload('material')

    return response.ok(watches)
  }

  async getWatchById({ request, response }: HttpContext) {
    const watchId = request.param('id')

    const watch = await Watch.find(watchId)

    return response.ok(watch)
  }

  async addWatch({ request, response }: HttpContext) {
    const images = request.files('imageUrl')
    const body = await request.validateUsing(createWatchValidator)
    const watch = await Watch.create(body)

    ImageService.createImagesWatch(images, watch)

    return response.ok(watch)
  }

  //   async updateSubscription({ request, response }: HttpContext) {
  //     const body = await request.validateUsing(createSubscriptionValidator)

  //     const subscription = await Subscription.create(body)

  //     return response.ok(subscription)
  //   }
}
