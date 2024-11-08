import { Subscription } from "@/types/subscriptionTypes";
import { faker } from "@faker-js/faker";

export const generateFakeSubscription = (): Subscription => ({
  id: faker.string.uuid(),
  title: faker.string.alpha(10),
  switchText: faker.string.alpha(10),
  description: faker.string.alpha(10),
  price: faker.number.int(500),
  watchMaxPrice: faker.number.int(20000),
  numberMaxWatches: faker.number.int(4),
  createdAt: faker.date.anytime(),
  updatedAt: faker.date.anytime(),
});
