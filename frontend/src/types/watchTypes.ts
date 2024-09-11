export type Watch = {
  id: string;
  brand: Brand;
  name: string;
  material: Material;
  isAvailable: boolean;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Brand = {
  id: string;
  brandName: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Material = {
  id: string;
  materialName: string;
  createdAt: Date;
  updatedAt: Date;
}
