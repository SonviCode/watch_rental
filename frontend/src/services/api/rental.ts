import {
  API_RENTAL,
  API_RENTALS_BY_USER,
  API_UNSUBSCRIBE_RENTAL,
  GENERIC_ERROR,
} from "@/constants/Constants";
import { Rental } from "@/types/rentalTypes";
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

    return data;
  } catch (e) {
    setError(GENERIC_ERROR);
  }
};

/**
 *
 * @param rentalId
 * @returns
 */
export const fetchUnsubscribeRental = async (
  // setError: Dispatch<SetStateAction<string>>,
  rentalId: string,
  setRentals: Dispatch<SetStateAction<Rental[]>>,
  userId: string
) => {
  try {
    const res = await fetch(API_UNSUBSCRIBE_RENTAL + rentalId, {
      method: "PUT",
      credentials: "include",
    });

    const data = await res.json();

    if (!res.ok) {
      // setError(data.errors[0].message);
      return;
    }

    fetchRentalsByUserId(setRentals, userId);
    return data;
  } catch (e) {
    // setError(GENERIC_ERROR);
  }
};

/**
 * Service to create a watch
 *
 * @param setError
 * @returns
 */
export const fetchRentalsByUserId = async (
  setRentals: Dispatch<SetStateAction<Rental[]>>,
  userId: string
) => {
  try {
    const res = await fetch(API_RENTALS_BY_USER + userId, {
      method: "GET",
      credentials: "include",
    });

    const data = await res.json();

    if (!res.ok) {
      return;
    }

    setRentals(data);
  } catch (e) {
    // setError(GENERIC_ERROR);
  }
};
