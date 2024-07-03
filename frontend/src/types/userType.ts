export type User = {
  role?: string;
  id: number;
  lastName: string;
  firstName: string;
  email: string;
  password?: string;
  birthday: Date;
  phonenumber: number;
  location: {
    additional_address?: string;
    address: string;
    city: string;
    postal_code: string;
  };
  emailIsVerified: boolean;
  smsIsVerified: boolean;
  idIsVerified: boolean;
};

export interface userState {
  value: User | undefined;
}
