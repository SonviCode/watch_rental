import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'addresses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().notNullable()
      table.uuid('user_id').references('users.id')
      table.string('main_address').notNullable()
      table.string('country').notNullable()
      table.string('additional_address').nullable()
      table.string('city').notNullable()
      table.integer('zip_code').notNullable()
      table.boolean('billing_address').defaultTo(false)
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
