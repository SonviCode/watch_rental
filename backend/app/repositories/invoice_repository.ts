import Invoice from '#models/invoice'

export default class InvoiceRepository {
  /**
   * get all invoices
   * 
   * @returns all invoices
   */
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

  /**
   * get invoice by invoice id
   * 
   * @param invoiceId 
   * @returns invoice
   */
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

  /**
   * get invoice by user id
   * 
   * @param userId 
   * @returns invoice
   */
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
