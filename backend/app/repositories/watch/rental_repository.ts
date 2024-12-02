import Rental from '#models/rental'

/**
 * Repository class for Rental
 */
export default class RentalRepository {
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
