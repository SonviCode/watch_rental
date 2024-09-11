import { API_WATCH, GENERIC_ERROR } from "@/constants/Constants";
import { Dispatch, SetStateAction } from "react";

/**
 * Service to create a watch
 *
 * @param setError
 * @returns
 */
export const fetchAddWatch = async (
  setError: Dispatch<SetStateAction<string>>,
  formData: FormData
) => {
  try {
    await fetch(API_WATCH, {
      method: "POST",
      body: formData,
      credentials: "include",
    });
  } catch (e) {
    setError(GENERIC_ERROR);
  }
};
