import Address from '#models/address'
import User from '#models/user'
import Factory from '@adonisjs/lucid/factories'
import { DateTime } from 'luxon'

export const UserFactory = Factory.define(User, ({ faker }) => {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    birthDate: DateTime.fromJSDate(faker.date.anytime()), //to fix with birthdate
    password: 'test',
    phoneNumber: faker.phone.number(),
  }
})
  .relation('address', () => AddressFactory)
  .build()

export const AddressFactory = Factory.define(Address, ({ faker }) => {
  return {
    userId: faker.string.uuid(),
    mainAddress: faker.string.alpha(20),
    country: faker.location.country(),
    city: faker.location.city(),
    zipCode: faker.location.zipCode(),
    additionalAddress: faker.string.alpha(20),
    billingAddress: faker.datatype.boolean(),
  }
}).build()
