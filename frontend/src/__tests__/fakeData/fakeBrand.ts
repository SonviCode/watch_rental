import { Brand } from "@/types/watchTypes";
import { faker } from "@faker-js/faker";

export const generateFakeBrand = (): Brand => ({
  id: faker.string.uuid(),
  brandName: faker.string.alpha(10),
  logoImgUrl: faker.image.url(),
  createdAt: faker.date.anytime(),
  updatedAt: faker.date.anytime(),
});
