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
  declare imageUrl: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
