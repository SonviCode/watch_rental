import Invoice from '#models/invoice'

export default class InvoiceRepository {
  static async getAll() {
    return await Invoice.query().preload('rental', (rentalQuery) => {
      rentalQuery
        .preload('watch')
        .preload('user', (userQuery) => {
          userQuery.preload('address')
        })
        .preload('subscription')
    })
  }

  static async getById(invoiceId: string) {
    return await Invoice.query()
      .where('id', invoiceId)
      .preload('rental', (rentalQuery) => {
        rentalQuery
          .preload('watch')
          .preload('user', (userQuery) => {
            userQuery.preload('address')
          })
          .preload('subscription')
      })
      .firstOrFail()
  }

  static async getByUserId(userId: string) {
    return await Invoice.query().preload('rental', (rentalQuery) => {
      rentalQuery
        .preload('watch')
        .preload('user', (userQuery) => {
          userQuery.preload('address')
        })
        .where('user_id', userId)
        .preload('subscription')
    })
  }
}
