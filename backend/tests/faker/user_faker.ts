import User from '#models/user'
import { faker } from '@faker-js/faker'

export const createRandomUser = (): User => {
  const user = new User()

  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()
  const email = faker.internet.email()
  const birthDate = faker.date.anytime()
  const phoneNumber = faker.phone.number()
  const location = {
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    postal_code: faker.location.city(),
  }

  Object.assign(user, { firstName, lastName, birthDate, email, phoneNumber, location })

  return user
}
