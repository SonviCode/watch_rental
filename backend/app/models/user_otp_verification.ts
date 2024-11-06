import { BaseModel, beforeCreate, beforeSave, beforeUpdate, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import { randomUUID } from 'node:crypto'
import { addMinutes } from '../utils/date_utils.js'

export default class UserOtpVerification extends BaseModel {
  static selfAssignPrimaryKey = true

  @beforeCreate()
  static assignUuid(userOtp: UserOtpVerification) {
    userOtp.id = randomUUID()
  }

  @beforeUpdate()
  static async updateAttempt(userOtp: UserOtpVerification) {
    userOtp.attempt++
  }

  @beforeSave()
  static assignExpiresAt(userOtp: UserOtpVerification) {
    userOtp.expiresAt = addMinutes(new Date(Date.now()), 10)
  }

  @column({ isPrimary: true })
  declare id: string

  @column()
  declare user_id: string

  @column()
  declare otp: string

  @column()
  declare attempt: number

  @column()
  declare expiresAt: Date

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
