import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, belongsTo, column, manyToMany } from '@adonisjs/lucid/orm'
import { randomUUID } from 'node:crypto'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import Watch from './watch/watch.js'
import Subscription from './subscription.js'
import User from './user.js'

export default class Rental extends BaseModel {
  static selfAssignPrimaryKey = true

  @beforeCreate()
  static assignUuid(rental: Rental) {
    rental.id = randomUUID()
  }

  @manyToMany(() => Watch)
  declare watch: ManyToMany<typeof Watch>

  @column({ isPrimary: true })
  declare id: string

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @column({ serializeAs: null })
  declare userId: string

  @belongsTo(() => Subscription)
  declare subscription: BelongsTo<typeof Subscription>

  @column({ serializeAs: null })
  declare subscriptionId: string

  @column.dateTime()
  declare dateStart: DateTime

  @column.dateTime()
  declare dateEnd: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
