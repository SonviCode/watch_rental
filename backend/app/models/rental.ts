import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, belongsTo, column, hasOne, manyToMany } from '@adonisjs/lucid/orm'
import { randomUUID } from 'node:crypto'
import type { BelongsTo, HasOne, ManyToMany } from '@adonisjs/lucid/types/relations'
import Watch from './watch/watch.js'
import Subscription from './subscription.js'
import User from './user.js'
import Invoice from './invoice.js'
import Status from './status.js'

export default class Rental extends BaseModel {
  static selfAssignPrimaryKey = true

  @beforeCreate()
  static assignUuid(rental: Rental) {
    rental.id = randomUUID()
  }

  @hasOne(() => Invoice)
  declare invoice: HasOne<typeof Invoice>

  @manyToMany(() => Watch, {
    pivotTimestamps: true,
  })
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

  @belongsTo(() => Status)
  declare status: BelongsTo<typeof Status>

  @column({ serializeAs: null })
  declare statusId: string

  @column()
  declare rentalNumber: string

  @column()
  declare numberWatchesRemaining: number

  @column()
  declare dateStart: Date

  @column()
  declare dateEnd: Date

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
