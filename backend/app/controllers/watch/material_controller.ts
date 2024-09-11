import Material from '#models/watch/material'
import { createMaterialValidator } from '#validators/watch'
import type { HttpContext } from '@adonisjs/core/http'

export default class MaterialController {
  async getAllMaterials({ response }: HttpContext) {
    const materials = await Material.all()

    return response.ok(materials)
  }

  async getMaterialById({ request, response }: HttpContext) {
    const materialId = request.param('id')

    const material = await Material.find(materialId)

    return response.ok(material)
  }

  async createMaterial({ request, response }: HttpContext) {
    const body = await request.validateUsing(createMaterialValidator)

    const material = await Material.create(body)

    return response.ok(material)
  }

  //   async updateSubscription({ request, response }: HttpContext) {
  //     const body = await request.validateUsing(createSubscriptionValidator)

  //     const subscription = await Subscription.create(body)

  //     return response.ok(subscription)
  //   }
}
