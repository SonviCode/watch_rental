import Rental from '#models/rental'
import RentalRepository from '#repositories/watch/rental_repository'
import MailService from '#services/mail_service'
import { createRentalValidator } from '#validators/rental'
import type { HttpContext } from '@adonisjs/core/http'
import { addMonth } from '../utils/date.js'

export default class RentalController {
  async getRentals({ request, response }: HttpContext) {}

  async getRentalsByUserId({ request, response }: HttpContext) {
    const userId = request.param('user_id')

    const rental = await RentalRepository.getByUserId(userId)

    return response.ok(rental)
  }

  async getRentalById({ request, response }: HttpContext) {
    const rentalId = request.param('id')

    const rental = await RentalRepository.getById(rentalId)

    return response.ok(rental)
  }

  async createRental({ request, response }: HttpContext) {
    const body = await request.validateUsing(createRentalValidator)

    const rentalBody = {
      user_id: body.user_id,
      subscription_id: body.subscription_id,
      date_start: new Date(body.date_start),
      date_end: addMonth(new Date(body.date_start), 1),
    }

    const rental = await Rental.create(rentalBody)
    await rental.related('watch').attach([body.watch_id])

    const rentalCreated = await RentalRepository.getById(rental.id)

    MailService.paymentSuccessful(rentalCreated)

    return response.ok(rental)
  }
}
