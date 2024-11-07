import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'invoices'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().notNullable()
      table.uuid('rental_id').references('rentals.id')
      table.uuid('status_id').references('statuses.id')
      table.string('invoice_number')
      table.integer('amount')
      table.string('pdf_url')
      table.timestamp('date_start').nullable()
      table.timestamp('date_end').nullable()
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
