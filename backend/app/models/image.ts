import { BaseModel, beforeCreate, column, hasOne } from '@adonisjs/lucid/orm'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'
import { randomUUID } from 'node:crypto'
import Watch from './watch/watch.js'

export default class Image extends BaseModel {
  static selfAssignPrimaryKey = true

  @beforeCreate()
  static assignUuid(image: Image) {
    image.id = randomUUID()
  }

  @hasOne(() => Watch)
  declare Watch: HasOne<typeof Watch>

  @column({ isPrimary: true })
  declare id: string

  @column()
  declare imageUrl: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
