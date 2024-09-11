import { API_MATERIAL, GENERIC_ERROR } from "@/constants/Constants";
import { Dispatch, SetStateAction } from "react";

/**
 * Service to create a material
 *
 * @param setError
 * @returns
 */
export const fetchAddMaterial = async (
  setError: Dispatch<SetStateAction<string>>,
  formData: FormData
) => {
  try {
    await fetch(API_MATERIAL, {
      method: "POST",
      body: formData,
      credentials: "include",
    });
  } catch (e) {
    setError(GENERIC_ERROR);
  }
};
