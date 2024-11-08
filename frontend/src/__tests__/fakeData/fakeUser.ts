import { User } from "@/types/userType";
import { faker } from "@faker-js/faker";

// Fonction pour générer un utilisateur factice
const generateFakeUser = (): User => ({
  id: faker.datatype.uuid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  phoneNumber: faker.phone.number(),
  address: {
    street: faker.address.streetAddress(),
    city: faker.address.city(),
    country: faker.address.country(),
  },
});

// Exemple d'utilisation
const fakeUser = generateFakeUser();
console.log(fakeUser);
