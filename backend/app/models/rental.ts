import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@adonisjs/lucid/orm'
import { randomUUID } from 'crypto'

export default class Rental extends BaseModel {
  static selfAssignPrimaryKey = true

  @beforeCreate()
  static assignUuid(rental: Rental) {
    rental.id = randomUUID()
  }

  @column({ isPrimary: true })
  declare id: string

  @column.dateTime({ autoCreate: true })
  declare dateStart: DateTime

  @column.dateTime({ autoCreate: true })
  declare dateEnd: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
