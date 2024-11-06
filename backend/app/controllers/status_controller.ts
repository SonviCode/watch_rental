import Status from '#models/status'
import { createStatusValidator } from '#validators/rental_validator'
import type { HttpContext } from '@adonisjs/core/http'

export default class StatusController {
  async getAllStatus({ response }: HttpContext) {
    console.log('1')
    const status = await Status.all()
    console.log('2')

    return response.ok(status)
  }

  async getStatusById({ request, response }: HttpContext) {
    const statusId = request.param('id')

    const status = await Status.find(statusId)

    return response.ok(status)
  }

  async createStatus({ request, response }: HttpContext) {
    const body = await request.validateUsing(createStatusValidator)

    const status = await Status.create(body)

    return response.ok(status)
  }

  //   async updateSubscription({ request, response }: HttpContext) {
  //     const body = await request.validateUsing(createSubscriptionValidator)

  //     const subscription = await Subscription.create(body)

  //     return response.ok(subscription)
  //   }
}
