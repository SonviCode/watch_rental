import Rental from '#models/rental'
import RentalRepository from '#repositories/watch/rental_repository'
import MailService from '#services/mail_service'
import { createRentalValidator, updateRentalValidator } from '#validators/rental_validator'
import type { HttpContext } from '@adonisjs/core/http'
import { addMonth } from '../utils/date_utils.js'
import { STATUS_ID_ACTIVE_RENTAL, STATUS_ID_CLOSED_RENTAL } from '#constants/constants'
import { generateRentalNumber } from '../utils/generation_utils.js'

export default class RentalController {
  /**
   * get all rentals : for admin only
   *
   * @param {response}
   */
  async getAllRentals({ response }: HttpContext) {
    const rentals = await RentalRepository.getAll()

    return response.ok(rentals)
  }

  /**
   * get a user's rentals
   *
   * @param {request, response}
   * @returns HTTP response status and rentals
   */
  async getRentalsByUserId({ request, response }: HttpContext) {
    const userId = request.param('user_id')

    const rental = await RentalRepository.getByUserId(userId)

    return response.ok(rental)
  }

  /**
   * get a rental by id
   *
   * @param {request, response}
   * @returns HTTP response status and rental
   */
  async getRentalById({ request, response }: HttpContext) {
    const rentalId = request.param('id')

    const rental = await RentalRepository.getById(rentalId)

    return response.ok(rental)
  }

  /**
   * create a rental
   *
   * @param {request, response}
   * @returns HTTP response status and rental
   */
  async createRental({ request, response }: HttpContext) {
    const body = await request.validateUsing(createRentalValidator)

    const rentalBody = {
      user_id: body.user_id,
      rental_number: generateRentalNumber(body.subscription.title),
      numberWatchesRemaining: body.subscription.numberMaxWatches - 1,
      subscription_id: body.subscription.id,
      date_start: new Date(body.date_start),
      status_id: STATUS_ID_ACTIVE_RENTAL,
    }

    const rental = await Rental.create(rentalBody)
    await rental
      .related('watch')
      .attach({ [body.watch_id]: { date_start: new Date(body.date_start) } })

    const rentalCreated = await RentalRepository.getById(rental.id)

    MailService.paymentSuccessful(rentalCreated)

    return response.ok(rental)
  }

  /**
   * update a rental to close it :
   * add a date for the end and change the status
   *
   * @param {request, response}
   * @returns HTTP response status and rental
   */
  async unsubscribeRental({ request, response }: HttpContext) {
    const rentalId = request.param('id')

    const rental = await RentalRepository.getById(rentalId)

    rental.dateEnd = addMonth(new Date(rental.dateStart), 1)
    rental.statusId = STATUS_ID_CLOSED_RENTAL

    await rental.save()

    return response.ok(rental)
  }

  /**
   * add a the watch in the rental if possible according the subscription
   *
   * @param {request, response}
   * @returns HTTP response status and rental
   */
  async updateWatchesOfRental({ request, response }: HttpContext) {
    const rentalId = request.param('id')
    const body = await request.validateUsing(updateRentalValidator)

    const rental = await RentalRepository.getById(rentalId)

    await RentalRepository.updateCurrentWatchOnRental(rental)
    await RentalRepository.createNextWatchOnRental(rental, body.watch_id)

    await rental.save()

    return response.ok(rental)
  }
}
