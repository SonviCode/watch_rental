import { DateTime } from "luxon";

export type userPayload =  {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    phone_number: string;
    birth_date: DateTime<true> | DateTime<false>;
}