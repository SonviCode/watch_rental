import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@adonisjs/lucid/orm'
import { randomUUID } from 'node:crypto'

export default class Subscription extends BaseModel {
  static selfAssignPrimaryKey = true

  @beforeCreate()
  static assignUuid(subscription: Subscription) {
    subscription.id = randomUUID()
  }

  @column({ isPrimary: true })
  declare id: string

  @column()
  declare name: string

  @column()
  declare brand: string

  @column()
  declare material: string

  @column()
  declare isAvailable: boolean

  @column()
  declare description: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
