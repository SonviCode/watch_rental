import { userDataFullRandom, userDataWithoutEmail } from '#tests/data/user/user_data'
import mail from '@adonisjs/mail/services/main'
import { test } from '@japa/runner'

test.group('AuthController.signup', () => {
  test('it should create a new user and return 201', async ({ client }) => {
    const response = await client.post('api/v1/auth/signup').json(userDataFullRandom)

    response.assertStatus(201)
  })

  test('it should return a validation error if email is missing', async ({ client }) => {
    mail.fake()

    const response = await client.post('api/v1/auth/signup').json(userDataWithoutEmail)

    response.assertStatus(422)
    response.assertBodyContains({
      errors: [{ field: 'email', message: 'The email field must be defined' }],
    })
  })
})
