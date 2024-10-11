export type User = {
  role?: string;
  id: number;
  lastName: string;
  firstName: string;
  email: string;
  password?: string;
  birthday: Date;
  phoneNumber: number;
  location: Address;
  emailIsVerified: boolean;
  smsIsVerified: boolean;
  idIsVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export interface userState {
  value: User | undefined;
}

export type Address = { 
  additional_address?: string;
  address: string;
  city: string;
  postal_code: string;
};
