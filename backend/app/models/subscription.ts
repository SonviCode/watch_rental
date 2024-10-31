import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column, hasOne } from '@adonisjs/lucid/orm'
import { randomUUID } from 'node:crypto'
import Watch from './watch/watch.js'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import Rental from './rental.js'

export default class Subscription extends BaseModel {
  static selfAssignPrimaryKey = true

  @beforeCreate()
  static assignUuid(subscription: Subscription) {
    subscription.id = randomUUID()
  }

  @hasOne(() => Watch)
  declare Watch: HasOne<typeof Watch>

  @hasOne(() => Rental)
  declare Rental: HasOne<typeof Rental>

  @column({ isPrimary: true })
  declare id: string

  @column()
  declare title: string

  @column()
  declare switchText: string

  @column()
  declare description: string

  @column()
  declare price: number

  @column()
  declare watchMaxPrice: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
