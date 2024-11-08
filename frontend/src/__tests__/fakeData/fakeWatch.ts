import { Watch } from "@/types/watchTypes";
import { faker } from "@faker-js/faker";
import { generateFakeImages } from "./fakeImage";
import { generateFakeMaterial } from "./fakeMaterial";
import { generateFakeSubscription } from "./fakeSubscription";
import { generateFakeBrand } from "./fakeBrand";

export const generateFakeWatch = (): Watch => ({
  id: faker.string.uuid(),
  brand: generateFakeBrand(),
  name: faker.string.alpha(10),
  material: generateFakeMaterial(),
  images: generateFakeImages(3),
  subscription: generateFakeSubscription(),
  isAvailable: faker.datatype.boolean(),
  description: faker.string.alpha(250),
  createdAt: faker.date.anytime(),
  updatedAt: faker.date.anytime(),
});

export const generateFakeWatches = (count: number): Watch[] =>
  Array.from({ length: count }, generateFakeWatch);
