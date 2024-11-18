import { userDataWithKnownEmailAndPassword } from '#tests/data/user/user_data'
import mail from '@adonisjs/mail/services/main'
import { test } from '@japa/runner'

test.group('AuthController.login', () => {
  test('a user correctly created can retrieve his information', async ({ client }) => {
    mail.fake()

    const responseSignup = await client
      .post('api/v1/auth/signup')
      .json(userDataWithKnownEmailAndPassword)

    const responseLogin = await client.post('api/v1/auth/login').json({
      email: 'user@example.com',
      password: 'password123',
    })

    const userCookie = responseLogin.cookie('adonis-session')

    const responseGetUser = await client
      .get(`api/v1/user/${responseSignup.body().id}`)
      .withCookie('adonis-session', userCookie?.value)

    responseGetUser.assertStatus(200)
  })

  test("a user not login can't retrieve his information", async ({ client }) => {
    const responseSignup = await client
      .post('api/v1/auth/signup')
      .json(userDataWithKnownEmailAndPassword)

    const responseGetUser = await client.get(`api/v1/user/${responseSignup.body().id}`)

    responseGetUser.assertStatus(401)
  })

  test("a user can't get all users info", async ({ client }) => {
    const responseLogin = await client.post('api/v1/auth/login').json({
      email: 'user@example.com',
      password: 'password123',
    })

    const userCookie = responseLogin.cookie('adonis-session')

    const responseGetUser = await client
      .get(`api/v1/user/all-users`)
      .withCookie('adonis-session', userCookie?.value)

    responseGetUser.assertStatus(403)
  })
})
