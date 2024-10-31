import Address from '#models/address'
import { createAddressValidator } from '#validators/address'
import type { HttpContext } from '@adonisjs/core/http'

export default class RentalController {
  async getAddresses({ request, response }: HttpContext) {}

  async getAddress({ request, response }: HttpContext) {}

  async createAddress({ request, response }: HttpContext) {
    const body = await request.validateUsing(createAddressValidator)
    const address = await Address.create(body)

    return response.ok(address)
  }
}
