import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column, hasOne } from '@adonisjs/lucid/orm'
import { randomUUID } from 'node:crypto'

import type { HasOne } from '@adonisjs/lucid/types/relations'
import Rental from './rental.js'
import Invoice from './invoice.js'

export default class Status extends BaseModel {
  static selfAssignPrimaryKey = true

  @beforeCreate()
  static assignUuid(status: Status) {
    status.id = randomUUID()
  }

  @hasOne(() => Rental)
  declare rental: HasOne<typeof Rental>

  @hasOne(() => Invoice)
  declare invoice: HasOne<typeof Invoice>

  @column({ isPrimary: true })
  declare id: string

  @column()
  declare statusName: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
