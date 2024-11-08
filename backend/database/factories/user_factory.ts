import Address from '#models/address'
import User from '#models/user'
import Factory from '@adonisjs/lucid/factories'
import { DateTime } from 'luxon'

export const UserFactory = Factory.define(User, ({ faker }) => {
  return {
    id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    // birthDate: DateTime.fromJSDate(faker.date.recent()),
    password: 'test',
    phoneNumber: faker.phone.number(),
    role: 'USER',
    emailIsVerified: faker.datatype.boolean(),
    smsIsVerified: faker.datatype.boolean(),
    idIsVerified: faker.datatype.boolean(),
    createdAt: DateTime.fromJSDate(faker.date.recent()),
    updatedAt: DateTime.fromJSDate(faker.date.recent()),
  }
})
  .relation('address', () => AddressFactory)
  .build()

export const AddressFactory = Factory.define(Address, ({ faker }) => {
  return {
    id: faker.string.uuid(),
    userId: faker.string.uuid(),
    mainAddress: faker.string.alpha(20),
    country: faker.location.country(),
    city: faker.location.city(),
    zipCode: faker.location.zipCode(),
    additionalAddress: faker.string.alpha(20),
    billingAddress: faker.datatype.boolean(),
    createdAt: DateTime.fromJSDate(faker.date.recent()),
    updatedAt: DateTime.fromJSDate(faker.date.recent()),
  }
}).build()
