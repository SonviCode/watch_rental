import { userDataWithKnownEmailAndPassword } from '#tests/data/user/user_data'
import mail from '@adonisjs/mail/services/main'
import { test } from '@japa/runner'

test.group('AuthController.login', () => {
  test('a user correctly created can connect', async ({ client }) => {
    mail.fake()

    await client.post('api/v1/auth/signup').json(userDataWithKnownEmailAndPassword)
    const response = await client.post('api/v1/auth/login').json({
      email: 'user@example.com',
      password: 'password123',
    })

    response.assertStatus(200)
  })

  test("a user not created can't connect", async ({ client }) => {
    mail.fake()

    const response = await client.post('api/v1/auth/login').json({
      email: 'notcreated@example.com',
      password: 'password123',
    })

    response.assertStatus(400)
  })
})
