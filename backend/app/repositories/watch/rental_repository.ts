import Rental from '#models/rental'
import { addMonth } from '../../utils/date_utils.js'

export default class RentalRepository {
  static async getAll() {
    return await Rental.query()
      .preload('status')
      .orderBy('created_at', 'desc')
      .preload('watch', (watchQuery) => {
        watchQuery
          .pivotColumns(['date_start', 'date_end'])
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

  static async getById(rentalId: string) {
    return await Rental.query()
      .where('id', rentalId)
      .preload('status')
      .preload('watch', (watchQuery) => {
        watchQuery
          // .pivotColumns(['date_start', 'date_end'])
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

  static async getByUserId(userId: string) {
    return await Rental.query()
      .preload('status')
      .where('user_id', userId)
      .orderBy('created_at', 'desc')
      .preload('watch', (watchQuery) => {
        watchQuery
          .pivotColumns(['date_start', 'date_end'])
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

  static async updateCurrentWatchOnRental(rental: Rental) {
    const idOfLastWatch = rental.watch.slice(-1).pop()!.id

    rental.numberWatchesRemaining = rental.numberWatchesRemaining - 1

    rental
      .related('watch')
      .sync({ [idOfLastWatch]: { date_end: addMonth(new Date(rental.dateStart), 1) } }, false)
  }

  static async createNextWatchOnRental(rental: Rental, nextWatchId: string) {
    rental
      .related('watch')
      .attach({ [nextWatchId]: { date_start: addMonth(new Date(rental.dateStart), 1) } })
  }
}
