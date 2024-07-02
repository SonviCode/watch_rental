import { withAuthFinder } from '@adonisjs/auth'
import { compose } from '@adonisjs/core/helpers'
import hash from '@adonisjs/core/services/hash'
import { BaseModel, beforeCreate, column, hasOne } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import type { Location } from '../../types/user_types.js'
import UserOtpVerification from './user_otp_verification.js'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import { randomUUID } from 'node:crypto'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  static selfAssignPrimaryKey = true

  @beforeCreate()
  static assignUuid(user: User) {
    user.id = randomUUID()
  }

  @hasOne(() => UserOtpVerification)
  declare userOtpVerification: HasOne<typeof UserOtpVerification>

  @column({ isPrimary: true })
  declare id: string

  @column()
  declare firstName: string

  @column()
  declare lastName: string

  @column()
  declare email: string

  @column()
  declare phoneNumber: string

  @column({ serializeAs: null })
  declare password: string

  @column()
  declare role: string

  @column()
  declare birthDate: DateTime

  @column()
  declare location: Location

  @column()
  declare emailIsVerified: boolean

  @column()
  declare smsIsVerified: boolean

  @column()
  declare idIsVerified: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}
