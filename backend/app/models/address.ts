import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@adonisjs/lucid/orm'
import { randomUUID } from 'node:crypto'

export default class Address extends BaseModel {
  static selfAssignPrimaryKey = true

  @beforeCreate()
  static assignUuid(subscription: Address) {
    subscription.id = randomUUID()
  }

  @column({ isPrimary: true })
  declare id: string

  @column()
  declare mainAddress: string

  @column()
  declare additionalAddress: string

  @column()
  declare city: string

  @column()
  declare zipCode: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
