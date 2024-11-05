import { BaseModel, beforeCreate, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'
import { randomUUID } from 'node:crypto'
import Rental from './rental.js'

export default class Invoice extends BaseModel {
  static selfAssignPrimaryKey = true

  @beforeCreate()
  static assignUuid(invoice: Invoice) {
    invoice.id = randomUUID()
  }

  @belongsTo(() => Rental)
  declare rental: BelongsTo<typeof Rental>

  @column({ serializeAs: null })
  declare rentalId: string

  @column({ isPrimary: true })
  declare id: string

  @column()
  declare invoiceNumber: string

  @column()
  declare amount: number

  @column()
  declare pdfUrl: string

  @column()
  declare status: string

  @column()
  declare dateStart: Date

  @column()
  declare dateEnd: Date

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
