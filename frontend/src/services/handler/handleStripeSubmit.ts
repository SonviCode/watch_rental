import { Subscription } from "@/types/subscriptionTypes";
import { Watch } from "@/types/watchTypes";
import { User } from "@/types/userType";
import { Stripe, StripeElements } from "@stripe/stripe-js";
import { Dispatch, FormEvent, SetStateAction } from "react";
import { NavigateFunction } from "react-router-dom";
import { fetchCreateRental } from "../api/rental";
import { Value } from "node_modules/react-date-picker/dist/esm/shared/types";
import { fetchCreateInvoice } from "../api/invoice";
import { FetchCreateInvoiceData } from "@/types/invoiceTypes";
import { FetchCreateRentalData } from "@/types/rentalTypes";

export const handleStripeCheckoutSubmit = async (
  e: FormEvent<HTMLFormElement>,
  stripe: Stripe | null,
  elements: StripeElements | null,
  user: User | undefined,
  subscription: Subscription,
  watchSelected: Watch,
  rentalStartDate: Value,
  setMessage: Dispatch<SetStateAction<string>>,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  navigate: NavigateFunction
) => {
  e.preventDefault();

  if (!stripe || !elements) {
    return;
  }

  setIsLoading(true);

  const { error } = await stripe.confirmPayment({
    elements,
    confirmParams: {
      payment_method_data: {
        billing_details: {
          name: user!.lastName + user!.firstName,
        },
      },
      return_url: "",
    },
    redirect: "if_required",
  });

  if (error) {
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message!);
    } else {
      setMessage("An unexpected error occurred.");
    }
  } else {
    const createRentalData: FetchCreateRentalData = {
      user_id: user!.id,
      subscription: subscription,
      date_start: rentalStartDate,
      watch_id: watchSelected.id,
    };

    const rental = await fetchCreateRental(setMessage, createRentalData);

    const createInvoiceData: FetchCreateInvoiceData = {
      rental_id: rental.id,
      amount: subscription.price,
      date_start: new Date(rental.dateStart),
      subscription,
    };
    const invoice_id = await fetchCreateInvoice(setMessage, createInvoiceData);

    if (rental) {
      navigate("/paiement-effectue", {
        state: { rental_id: rental.id, invoice_id },
      });
    }
  }
  setIsLoading(false);
};
