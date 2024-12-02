import {
  API_ADD_WATCH_RENTAL,
  API_RENTAL,
  API_RENTALS_BY_USER,
  API_UNSUBSCRIBE_RENTAL,
  GENERIC_ERROR,
} from "@/constants/Constants";
import { FetchCreateRentalData, Rental } from "@/types/rentalTypes";
import { Watch } from "@/types/watchTypes";
import { Value } from "node_modules/react-date-picker/dist/esm/shared/types";
import { Dispatch, SetStateAction } from "react";

/**
 * Service to create a watch
 *
 * @param setError
 * @returns
 */
export const fetchCreateRental = async (
  setError: Dispatch<SetStateAction<string>>,
  createRentalData: FetchCreateRentalData
) => {
  try {
    const res = await fetch(API_RENTAL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createRentalData),
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

/**
 *
 * @param rentalId
 * @returns
 */
export const fetchUpdateWatchesOfRental = async (
  setError: Dispatch<SetStateAction<string>>,
  rental: Rental,
  rentalId: string,
  setRentals: Dispatch<SetStateAction<Rental[]>>,
  setWatchSelected: Dispatch<SetStateAction<Watch | undefined>>,
  setIsFullScreen: Dispatch<SetStateAction<boolean>>,
  userId: string,
  watchSelected: Watch,
  newWatchStartDate: Value
) => {
  const rentalData = {
    subscription_id: rental.subscription.id,
    watch_id: watchSelected.id,
    date_start_of_new_watch: newWatchStartDate,
  };

  try {
    const res = await fetch(API_ADD_WATCH_RENTAL + rentalId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rentalData),
      credentials: "include",
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.errors[0].message);
      return;
    }

    setError("");

    await fetchRentalsByUserId(setRentals, userId);
    setWatchSelected(undefined);
    setIsFullScreen(false);

    return data;
  } catch (e) {
    setError(GENERIC_ERROR);
  }
};
