import { API_RENTAL, GENERIC_ERROR } from "@/constants/Constants";
import { Dispatch, SetStateAction } from "react";

/**
 * Service to create a watch
 *
 * @param setError
 * @returns
 */
export const fetchCreateRental = async (
  setError: Dispatch<SetStateAction<string>>,
  formData: FormData
) => {
  try {
    const res = await fetch(API_RENTAL, {
      method: "POST",
      body: formData,
      credentials: "include",
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.errors[0].message);
      return;
    }

    return data.id;
  } catch (e) {
    setError(GENERIC_ERROR);
  }
};
