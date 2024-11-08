import { Image } from "@/types/watchTypes";
import { faker } from "@faker-js/faker";

export const generateFakeImage = (): Image => ({
  id: faker.string.uuid(),
  imageUrl: faker.image.url(),
  createdAt: faker.date.anytime(),
  updatedAt: faker.date.anytime(),
});

export const generateFakeImages = (count: number): Image[] =>
    Array.from({ length: count }, generateFakeImage);
