import { User } from "@/types/userType";
import { faker } from "@faker-js/faker";

// Fonction pour générer un utilisateur factice
export const generateFakeUser = (): User => ({
  id: faker.string.uuid(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  phoneNumber: Number(faker.phone.number()),
  role: "USER",
  password: "password123",
  emailIsVerified: false,
  smsIsVerified: false,
  idIsVerified: false,
  createdAt: faker.date.recent(),
  updatedAt: faker.date.recent(),
  birthday: faker.date.recent(),
  address: [
    {
      mainAddress: faker.location.streetAddress(),
      city: faker.location.city(),
      country: faker.location.country(),
      zipCode: faker.location.zipCode(),
    },
  ],
});

// Exemple d'utilisation
const fakeUser = generateFakeUser();
console.log(fakeUser);
