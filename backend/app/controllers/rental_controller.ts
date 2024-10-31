import Rental from '#models/rental'
import { createRentalValidator } from '#validators/rental'
import type { HttpContext } from '@adonisjs/core/http'

export default class RentalController {
  async getRentals({ request, response }: HttpContext) {}

  async getRental({ request, response }: HttpContext) {}

  async createRental({ request, response }: HttpContext) {
    const body = await request.validateUsing(createRentalValidator)
    console.log(body)
    const rental = await Rental.create(body)

    return response.ok(rental)
  }
}
