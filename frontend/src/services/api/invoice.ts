import { API_INVOICE, GENERIC_ERROR } from "@/constants/Constants";
import { FetchCreateInvoiceData } from "@/types/invoiceTypes";
import { Dispatch, SetStateAction } from "react";

/**
 * Service to create a watch
 *
 * @param setError
 * @returns
 */
export const fetchCreateInvoice = async (
  setError: Dispatch<SetStateAction<string>>,
  invoiceData: FetchCreateInvoiceData
) => {
  try {
    const res = await fetch(API_INVOICE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(invoiceData),
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
