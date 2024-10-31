import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column, hasOne } from '@adonisjs/lucid/orm'
import { randomUUID } from 'node:crypto'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import User from './user.js'

export default class Address extends BaseModel {
  static selfAssignPrimaryKey = true

  @beforeCreate()
  static assignUuid(subscription: Address) {
    subscription.id = randomUUID()
  }

  @hasOne(() => User)
  declare User: HasOne<typeof User>

  declare userId: string

  @column({ isPrimary: true })
  declare id: string

  @column()
  declare mainAddress: string

  @column()
  declare additionalAddress: string

  @column()
  declare city: string

  @column()
  declare country: string

  @column()
  declare zipCode: string

  @column()
  declare billingAddress: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
