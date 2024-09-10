import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column, hasOne } from '@adonisjs/lucid/orm'
import { randomUUID } from 'node:crypto'
import Watch from './watch.js'
import type { HasOne } from '@adonisjs/lucid/types/relations'

export default class Brand extends BaseModel {
  static selfAssignPrimaryKey = true

  @beforeCreate()
  static assignUuid(brand: Brand) {
    brand.id = randomUUID()
  }

  @hasOne(() => Watch)
  declare Watch: HasOne<typeof Watch>

  @column({ isPrimary: true })
  declare id: string

  @column()
  declare brandName: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
