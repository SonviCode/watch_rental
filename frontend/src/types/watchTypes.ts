import { Subscription } from "./subscriptionTypes";

export type Watch = {
  id: string;
  brand: Brand;
  name: string;
  material: Material;
  images: Image[];
  subscription: Subscription;
  isAvailable: boolean;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Brand = {
  id: string;
  brandName: string;
  logoImgUrl: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Material = {
  id: string;
  materialName: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Image = {
  id: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
};

export interface watchState {
  value: Watch[];
}
