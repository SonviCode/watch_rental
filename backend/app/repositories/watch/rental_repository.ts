import Rental from '#models/rental'

export default class RentalRepository {
  static async getById(rentalId: string) {
    return await Rental.query()
      .where('id', rentalId)
      .preload('watch')
      .preload('user', (userQuery) => {
        userQuery.preload('address')
      })
      .preload('subscription')
      .firstOrFail()
  }
}
