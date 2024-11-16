import { faker } from '@faker-js/faker'
import { test } from '@japa/runner'

test.group('AuthController.signup', (group) => {
  group.teardown(async () => {
    await () // Nettoyer uniquement la table `users`
  })
  test('it should create a new user and return 201', async ({ client }) => {
    const userData = {
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: faker.internet.email(),
      birth_date: faker.date.anytime(), //to fix with birthdate
      password: faker.string.alpha(10),
      phone_number: faker.string.alpha(10),
    }

    const response = await client.post('api/v1/auth/signup').json(userData)

    response.assertStatus(201)
  })

  test('it should return a validation error if email is missing', async ({ client }) => {
    const userDataWithoutEmail = {
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      birth_date: faker.date.anytime(), //to fix with birthdate
      password: faker.string.alpha(10),
      phone_number: faker.string.alpha(10),
    }

    const response = await client.post('api/v1/auth/signup').json(userDataWithoutEmail)

    response.assertStatus(422)
    response.assertBodyContains({
      errors: [{ field: 'email', message: 'The email field must be defined' }],
    })
  })
})
