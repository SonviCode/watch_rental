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

    const rental = await RentalRepository.addRental(body)

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

    rental.watch.map((el) => console.log(el.name))
    // console.log(rental.watch)

    console.log(body.date_start_of_new_watch)
    console.log(new Date(rental.watch[rental.watch.length - 1].$extras.pivot_date_start), 1)

    if (
      new Date(body.date_start_of_new_watch).getTime() <
      addMonth(
        new Date(rental.watch[rental.watch.length - 1].$extras.pivot_date_start),
        1
      ).getTime()
    )
      return response
        .status(400)
        .send('La date doit être au minimum 1 mois après le dernier changement de montre')

    await RentalRepository.updateCurrentWatchOnRental(rental, body.date_start_of_new_watch)
    await RentalRepository.createNextWatchOnRental(
      rental,
      body.watch_id,
      body.date_start_of_new_watch
    )

    await rental.save()

    return response.ok(rental)
  }
}
