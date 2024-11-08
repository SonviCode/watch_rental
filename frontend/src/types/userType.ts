export type User =
  | {
      role?: string;
      id: string;
      lastName: string;
      firstName: string;
      email: string;
      password?: string;
      birthday: Date;
      phoneNumber: number;
      address: Address[];
      emailIsVerified: boolean;
      smsIsVerified: boolean;
      idIsVerified: boolean;
      createdAt: Date;
      updatedAt: Date;
    }
  | Record<string, never>;

export interface userState {
  value: User | Record<string, never>;
}

export type Address = {
  mainAddress: string;
  country: string;
  additionalAddress?: string;
  city: string;
  zipCode: string;
  billingAddress?: boolean;
};
