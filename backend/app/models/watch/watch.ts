import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, belongsTo, column, hasOne } from '@adonisjs/lucid/orm'
import { randomUUID } from 'node:crypto'
import type { BelongsTo, HasOne } from '@adonisjs/lucid/types/relations'
import Brand from './brand.js'
import Material from './material.js'
import Image from '#models/image'

export default class Watch extends BaseModel {
  static selfAssignPrimaryKey = true

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

  @hasOne(() => Image)
  declare Watch: HasOne<typeof Image>

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
