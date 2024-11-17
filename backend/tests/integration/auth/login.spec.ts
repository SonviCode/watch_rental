import { faker } from '@faker-js/faker'
import { test } from '@japa/runner'

test.group('AuthController.login', () => {
  test('a user correctly created can connect', async ({ client }) => {
    const userData = {
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: 'user@example.com',
      birth_date: faker.date.anytime(), //to fix with birthdate
      password: 'password123',
      phone_number: faker.string.alpha(10),
    }

    await client.post('api/v1/auth/signup').json(userData)
    const response = await client.post('api/v1/auth/login').json({
      email: 'user@example.com',
      password: 'password123',
    })

    // console.log(response)

    response.assertStatus(200)
  })

  //   test('it should return a validation error if email is missing', async ({ client }) => {
  //     const userDataWithoutEmail = {
  //       first_name: faker.person.firstName(),
  //       last_name: faker.person.lastName(),
  //       birth_date: faker.date.anytime(), //to fix with birthdate
  //       password: faker.string.alpha(10),
  //       phone_number: faker.string.alpha(10),
  //     }

  //     const response = await client.post('api/v1/auth/signup').json(userDataWithoutEmail)

  //     response.assertStatus(422)
  //     response.assertBodyContains({
  //       errors: [{ field: 'email', message: 'The email field must be defined' }],
  //     })
  //   })
})
