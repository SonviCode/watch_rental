import { Rental } from "./rentalTypes";
import { Subscription, SubscriptionState } from "./subscriptionTypes";

export type Watch =
  | {
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
      pivotDateStart?: Date;
      pivotDateEnd?: Date;
      rental?: Rental[];
    }
  | Record<string, never>;

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

export type WatchFilter = {
  keyRequest: string;
  category: Material[] | Brand[] | SubscriptionState[];
  name: string;
};

export interface purchaseSelectedWatchState {
  value: Watch | Record<string, never>;
}
