import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'watches'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().notNullable()
      table.uuid('brand_id').references('brands.id')
      table.uuid('material_id').references('materials.id')
      table.uuid('subscription_id').references('subscriptions.id')
      table.string('name').notNullable()
      table.boolean('is_available').notNullable().defaultTo(true)
      table.text('description').notNullable()

      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
