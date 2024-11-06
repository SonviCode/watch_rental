import Rental from '#models/rental'

export default class RentalRepository {
  static async getById(rentalId: string) {
    return await Rental.query()
      .where('id', rentalId)
      .preload('status')
      .preload('watch', (watchQuery) => {
        watchQuery.preload('brand').preload('material').preload('subscription').preload('images')
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
        watchQuery.preload('brand').preload('material').preload('subscription').preload('images')
      })
      .preload('user', (userQuery) => {
        userQuery.preload('address')
      })
      .preload('subscription')
  }
}
