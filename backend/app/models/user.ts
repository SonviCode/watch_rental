import { withAuthFinder } from '@adonisjs/auth'
import { compose } from '@adonisjs/core/helpers'
import hash from '@adonisjs/core/services/hash'
import { BaseModel, beforeCreate, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import type { HasMany, HasOne } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'
import { randomUUID } from 'node:crypto'
import Address from './address.js'
import Rental from './rental.js'
import UserOtpVerification from './user_otp_verification.js'

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

  @hasOne(() => Rental)
  declare rental: HasOne<typeof Rental>

  @hasOne(() => UserOtpVerification)
  declare userOtpVerification: HasOne<typeof UserOtpVerification>

  @hasMany(() => Address)
  declare address: HasMany<typeof Address>

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
