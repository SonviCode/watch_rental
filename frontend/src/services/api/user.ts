import { API_USER, GENERIC_ERROR } from "@/constants/Constants";
import { User } from "@/types/userType";
import { Dispatch, SetStateAction } from "react";

/**
 * service to sign up and add user
 *
 * @param formData content of article to add
 * @param setError to display error message if needed
 */
export const fetchUserInfo = async (
  setError: Dispatch<SetStateAction<string>>,
  setUser: Dispatch<SetStateAction<User | undefined>>
) => {
  try {
    const res = await fetch(API_USER, {
      credentials: "include",
    });
    const data = await res.json();

    if (!res.ok) {
      setError(data.errors[0].message);
      return;
    }

    setUser(data);
  } catch (e) {
    setError(GENERIC_ERROR);
  }
};
