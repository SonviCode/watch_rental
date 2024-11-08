import { Material } from "@/types/watchTypes";
import { faker } from "@faker-js/faker";

export const generateFakeMaterial = (): Material => ({
  id: faker.string.uuid(),
  materialName: faker.string.alpha(10),
  createdAt: faker.date.anytime(),
  updatedAt: faker.date.anytime(),
});
