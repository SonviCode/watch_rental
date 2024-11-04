import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'user_otp_verifications'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().notNullable()
      table.uuid('user_id').references('users.id').onDelete('CASCADE') // delete profile when user is deleted
      table.string('otp').notNullable()
      table.integer('attempt').defaultTo(1)
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
      table.timestamp('expires_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
