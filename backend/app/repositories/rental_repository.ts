import { STATUS_ID_ACTIVE_RENTAL } from '#constants/constants'
import Rental from '#models/rental'
import { generateRentalNumber } from '../utils/generation_utils.js'
import WatchRepository from './watch/watch_repository.js'

/**
 * Repository class for Rental
 */
export default class RentalRepository {
  /**
   * create a new rental
   *
   * @param body data to create the rental
   * @returns the new rental
   */
  static async addRental(body: any) {
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
    await rental.load('watch')

    await WatchRepository.setWatchAvailibityToFalse(body.watch_id)

    return rental
  }
  /**
   * get all rentals - only for admin
   *
   * @returns all rentals
   */
  static async getAll() {
    return await Rental.query()
      .preload('status')
      .orderBy('created_at', 'desc')
      .preload('watch', (watchQuery) => {
        watchQuery
          .pivotColumns(['id', 'date_start', 'date_end'])
          .preload('brand')
          .preload('material')
          .preload('subscription')
          .preload('images')
      })
      .preload('user', (userQuery) => {
        userQuery.preload('address')
      })
      .preload('subscription')
  }

  /**
   * get rental by id
   *
   * @param rentalId
   * @returns rental
   */
  static async getById(rentalId: string) {
    return await Rental.query()
      .where('id', rentalId)
      .preload('status')
      .preload('watch', (watchQuery) => {
        watchQuery
          .pivotColumns(['id', 'date_start', 'date_end'])
          .orderBy('date_start')
          .preload('brand')
          .preload('material')
          .preload('subscription')
          .preload('images')
      })
      .preload('user', (userQuery) => {
        userQuery.preload('address')
      })
      .preload('subscription')
      .firstOrFail()
  }

  /**
   * get rental by user id
   *
   * @param userId
   * @returns rental
   */
  static async getByUserId(userId: string) {
    return await Rental.query()
      .preload('status')
      .where('user_id', userId)
      .orderBy('created_at', 'desc')
      .preload('watch', (watchQuery) => {
        watchQuery
          .pivotColumns(['id', 'date_start', 'date_end'])
          .preload('brand')
          .preload('material')
          .preload('subscription')
          .preload('images')
      })
      .preload('user', (userQuery) => {
        userQuery.preload('address')
      })
      .preload('subscription')
  }

  /**
   * update the watch currently in rent
   *
   * @param rental rental
   * @param nextWatchStartDate start date of next watch
   */
  static async updateCurrentWatchOnRental(rental: Rental, nextWatchStartDate: string) {
    const idPivotOfLastWatch = rental.watch.slice(-1).pop()!.$extras.pivot_id
    const idOfLastWatch = rental.watch.slice(-1).pop()!.id

    console.log(idPivotOfLastWatch)
    console.log(idOfLastWatch)

    rental.numberWatchesRemaining = rental.numberWatchesRemaining - 1

    rental
      .related('watch')
      .sync({ [idOfLastWatch]: { date_end: new Date(nextWatchStartDate) } }, false)
  }

  /**
   * add the next watch in rent
   *
   * @param rental
   * @param nextWatchId
   * @param nextWatchStartDate start date of next watch
   */
  static async createNextWatchOnRental(
    rental: Rental,
    nextWatchId: string,
    nextWatchStartDate: string
  ) {
    rental.related('watch').attach({ [nextWatchId]: { date_start: new Date(nextWatchStartDate) } })
  }
}
