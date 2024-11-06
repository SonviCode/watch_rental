import { API_STATUS, GENERIC_ERROR } from "@/constants/Constants";
import { Dispatch, SetStateAction } from "react";

/**
 * Service to create a status
 *
 * @param setError
 * @returns
 */
export const fetchAddStatus = async (
  setError: Dispatch<SetStateAction<string>>,
  formData: FormData
) => {
  try {
    await fetch(API_STATUS, {
      method: "POST",
      body: formData,
      credentials: "include",
    });
  } catch (e) {
    setError(GENERIC_ERROR);
  }
};
