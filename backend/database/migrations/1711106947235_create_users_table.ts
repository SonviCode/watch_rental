import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('first_name').notNullable()
      table.string('last_name').notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('password').notNullable()
      table.string('role').defaultTo('USER').notNullable()
      table.string('phone_number').notNullable()
      table.timestamp('birth_date').notNullable()
      table.json('location').notNullable()
      table.boolean('email_is_verified').defaultTo(false)
      table.boolean('sms_is_verified').defaultTo(false)
      table.boolean('id_is_verified').defaultTo(false)

      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
