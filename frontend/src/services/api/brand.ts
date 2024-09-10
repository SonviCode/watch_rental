import { API_BRAND, GENERIC_ERROR } from "@/constants/Constants";
import { Dispatch, SetStateAction } from "react";

/**
 * Service to create a brand
 *
 * @param setError
 * @returns
 */
export const fetchAddBrand = async (
  setError: Dispatch<SetStateAction<string>>,
  formData: FormData
) => {
  try {
    await fetch(API_BRAND, {
      method: "POST",
      body: formData,
      credentials: "include",
    });
  } catch (e) {
    setError(GENERIC_ERROR);
  }
};
