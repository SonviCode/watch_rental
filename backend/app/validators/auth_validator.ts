import vine from '@vinejs/vine'
import { DateTime } from 'luxon'

export const signUpValidator = vine.compile(
  vine.object({
    first_name: vine.string().minLength(3).maxLength(64),
    last_name: vine.string().minLength(3).maxLength(64),
    email: vine
      .string()
      .email()
      .unique(async (query, field) => {
        const user = await query.from('users').where('email', field).first()
        return !user
      }),
    password: vine.string().minLength(8).maxLength(32),
    phone_number: vine.string().trim().maxLength(10),
    birth_date: vine
      .date({ formats: { utc: true } })
      .transform((date) => DateTime.fromJSDate(date)),
  })
)

export const loginValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string(),
  })
)

// vine.errorReporter = () => new JSONAPIErrorReporter()
