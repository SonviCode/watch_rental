import { API_WATCH, GENERIC_ERROR } from "@/constants/Constants";
import { Watch } from "@/types/watchTypes";
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

/**
 * Service to create a watch
 *
 * @param setError
 * @returns
 */
export const fetchGetWatchsByFilter = async (
  setWatchs: Dispatch<SetStateAction<Watch[]>>,
  // setError: Dispatch<SetStateAction<string>>,
  formData: FormData
) => {
  try {
    const res = await fetch(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      API_WATCH + "?" + new URLSearchParams(formData as any).toString()
    );

    const watchs = await res.json();

    if (!res.ok) {
      // setError(data.errors[0].message);
      return;
    }

    setWatchs(watchs);
  } catch (e) {
    // setError(GENERIC_ERROR);
  }
};
