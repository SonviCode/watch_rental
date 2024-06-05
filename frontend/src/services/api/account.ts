import {
  API_LOGIN,
  API_SIGNUP,
  GENERIC_ERROR,
  INVALID_CREDENTIALS,
} from "@/constants/Constants";
import { Dispatch, SetStateAction } from "react";

/**
 * service to sign up and add user
 *
 * @param formData content of article to add
 * @param setError to display error message if needed
 */
export const fetchSignUp = async (
  formData: FormData,
  setError: Dispatch<SetStateAction<string>>
) => {
  try {
    const res = await fetch(API_SIGNUP, {
      method: "POST",
      body: formData,
      credentials: "include",
    });
    const data = await res.json();

    if (!res.ok) {
      setError(data.errors[0].message);
      return;
    }

    fetchLogin(data.email, formData.get('password') as string, setError);
  } catch (e) {
    setError(GENERIC_ERROR);
  }
};

/**
 * Service to fetch data for login and call the fetch user function
 *
 * @param email
 * @param password
 * @param setError
 * @returns
 */
export const fetchLogin = async (
  email: string,
  password: string,
  setError: Dispatch<SetStateAction<string>>
) => {
  try {
    const res = await fetch(API_LOGIN, {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();

    if (!res.ok) {
      setError(INVALID_CREDENTIALS);
      return;
    }

    // fetchUser(data.id);
  } catch (e) {
    setError(GENERIC_ERROR);
  }
};
