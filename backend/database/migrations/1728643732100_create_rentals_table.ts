import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'rentals'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().notNullable()
      table.string('rental_number')
      table.uuid('user_id').references('users.id')
      table.uuid('subscription_id').references('subscriptions.id')
      table.uuid('status_id').references('status.id')
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
