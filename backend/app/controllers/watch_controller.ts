import Watch from '#models/watch/watch'
import type { HttpContext } from '@adonisjs/core/http'

export default class WatchController {
  async getAllWatches({ response }: HttpContext) {
    const watches = await Watch.all()

    return response.ok(watches)
  }

  async getWatchById({ request, response }: HttpContext) {
    const watchId = request.param('id')

    const watch = await Watch.find(watchId)

    return response.ok(watch)
  }

  //   async createWatch({ request, response }: HttpContext) {
  //     const body = await request.validateUsing(createSubscriptionValidator)

  //     const subscription = await Subscription.create(body)

  //     return response.ok(subscription)
  //   }

  //   async updateSubscription({ request, response }: HttpContext) {
  //     const body = await request.validateUsing(createSubscriptionValidator)

  //     const subscription = await Subscription.create(body)

  //     return response.ok(subscription)
  //   }
}
