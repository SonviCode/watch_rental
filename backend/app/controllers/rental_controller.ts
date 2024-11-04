import Rental from '#models/rental'
import { createRentalValidator } from '#validators/rental'
import type { HttpContext } from '@adonisjs/core/http'
import { addMonth } from '../utils/date.js'
import { DateTime } from 'luxon'
import MailService from '#services/mail_service'
import RentalRepository from '#repositories/watch/rental_repository'

export default class RentalController {
  async getRentals({ request, response }: HttpContext) {}

  async getRental({ request, response }: HttpContext) {
    const rentalId = request.param('id')

    const rental = await RentalRepository.getById(rentalId)

    return response.ok(rental)
  }

  async createRental({ request, response }: HttpContext) {
    const body = await request.validateUsing(createRentalValidator)

    const rentalBody = {
      user_id: body.user_id,
      subscription_id: body.subscription_id,
      date_start: DateTime.fromJSDate(new Date(body.date_start)),
      date_end: DateTime.fromJSDate(addMonth(new Date(body.date_start), 1)),
    }

    const rental = await Rental.create(rentalBody)
    await rental.related('watch').attach([body.watch_id])

    const rentalCreated = await RentalRepository.getById(rental.id)

    MailService.paymentSuccessful(rentalCreated)

    return response.ok(rental)
  }
}
