import Subscription from '#models/subscription'
import { createSubscriptionValidator } from '#validators/subscription'
import type { HttpContext } from '@adonisjs/core/http'

export default class SubscriptionController {
  async getAllSubscriptions({ response }: HttpContext) {
    const users = await Subscription.all()

    return response.ok(users)
  }

  async getSubscriptionById({ request, response }: HttpContext) {
    const subscriptionId = request.param('id')

    const user = await Subscription.find(subscriptionId)

    return response.ok(user)
  }

  async createSubscription({ request, response }: HttpContext) {
    const body = await request.validateUsing(createSubscriptionValidator)

    const subscription = await Subscription.create(body)

    return response.ok(subscription)
  }

  async updateSubscription({ request, response }: HttpContext) {
    const body = await request.validateUsing(createSubscriptionValidator)

    const subscription = await Subscription.create(body)

    return response.ok(subscription)
  }
}
