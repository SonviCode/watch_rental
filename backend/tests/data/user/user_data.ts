import { faker } from '@faker-js/faker'

export const userDataWithKnownEmailAndPassword = {
  first_name: faker.person.firstName(),
  last_name: faker.person.lastName(),
  email: 'user@example.com',
  birth_date: faker.date.anytime(), //to fix with birthdate
  password: 'password123',
  phone_number: faker.string.alpha(10),
}

export const userDataFullRandom = {
  first_name: faker.person.firstName(),
  last_name: faker.person.lastName(),
  email: faker.internet.email(),
  birth_date: faker.date.anytime(), //to fix with birthdate
  password: faker.string.alpha(10),
  phone_number: faker.string.alpha(10),
}

export const userDataWithoutEmail = {
  first_name: faker.person.firstName(),
  last_name: faker.person.lastName(),
  birth_date: faker.date.anytime(), //to fix with birthdate
  password: faker.string.alpha(10),
  phone_number: faker.string.alpha(10),
}
