import { BaseModel, beforeCreate, column, manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'
import { randomUUID } from 'node:crypto'
import Watch from './watch.js'

export default class Image extends BaseModel {
  static selfAssignPrimaryKey = true

  @beforeCreate()
  static assignUuid(image: Image) {
    image.id = randomUUID()
  }

  @manyToMany(() => Watch)
  declare watch: ManyToMany<typeof Watch>

  @column({ isPrimary: true })
  declare id: string

  @column()
  declare imageUrl: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
