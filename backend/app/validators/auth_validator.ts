import vine, { SimpleMessagesProvider } from '@vinejs/vine'
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

signUpValidator.messagesProvider = new SimpleMessagesProvider({
  // Applicable for all fields
  'required': 'The {{ field }} field is required',
  'string': 'The value of {{ field }} field must be a string',

  // signup
  'email.unique':
    'Cette adresse email est déjà utilisée, choisissez-en une autre ou connectez-vous.',
  'password.minLength': 'Le mot de passe doit avoit au moins 8 charactères',

  // Error message for the username field
  'username.required': 'Please choose a username for your account',
})

export const loginValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string(),
  })
)
