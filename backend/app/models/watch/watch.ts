import Image from '#models/watch/image'
import { BaseModel, beforeCreate, belongsTo, column, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'
import { randomUUID } from 'node:crypto'
import Brand from './brand.js'
import Material from './material.js'
import Subscription from '#models/subscription'
import Rental from '#models/rental'

export default class Watch extends BaseModel {
  static selfAssignPrimaryKey = true

  serializeExtras() {
    return {
      pivotId: this.$extras.pivot_id,
      pivotDateStart: this.$extras.pivot_date_start,
      pivotDateEnd: this.$extras.pivot_date_end,
    }
  }

  @beforeCreate()
  static assignUuid(watch: Watch) {
    watch.id = randomUUID()
  }

  @column({ isPrimary: true })
  declare id: string

  @belongsTo(() => Brand)
  declare brand: BelongsTo<typeof Brand>

  @column({ serializeAs: null })
  declare brandId: string

  @belongsTo(() => Material)
  declare material: BelongsTo<typeof Material>

  @column({ serializeAs: null })
  declare materialId: string

  @belongsTo(() => Subscription)
  declare subscription: BelongsTo<typeof Subscription>

  @column({ serializeAs: null })
  declare subscriptionId: string

  @manyToMany(() => Rental, {
    pivotColumns: ['date_start', 'date_end'],
    pivotTimestamps: true,
  })
  declare rental: ManyToMany<typeof Rental>

  @manyToMany(() => Image, {
    pivotTimestamps: true,
  })
  declare images: ManyToMany<typeof Image>

  @column()
  declare name: string

  @column()
  declare isAvailable: boolean

  @column()
  declare description: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
