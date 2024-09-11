import Watch from '#models/watch/watch'
import { createWatchValidator } from '#validators/watch'
import type { HttpContext } from '@adonisjs/core/http'

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
    const body = await request.validateUsing(createWatchValidator)

    const watch = await Watch.create(body)

    return response.ok(watch)
  }

  //   async updateSubscription({ request, response }: HttpContext) {
  //     const body = await request.validateUsing(createSubscriptionValidator)

  //     const subscription = await Subscription.create(body)

  //     return response.ok(subscription)
  //   }
}
