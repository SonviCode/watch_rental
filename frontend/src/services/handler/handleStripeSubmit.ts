import { Subscription } from "@/types/subscriptionTypes";
import { Watch } from "@/types/watchTypes";
import { User } from "@/types/userType";
import { Stripe, StripeElements } from "@stripe/stripe-js";
import { Dispatch, FormEvent, SetStateAction } from "react";
import { NavigateFunction } from "react-router-dom";
import { fetchCreateRental } from "../api/rental";
import { Value } from "node_modules/react-date-picker/dist/esm/shared/types";

export const handleStripeCheckoutSubmit = async (
  e: FormEvent<HTMLFormElement>,
  stripe: Stripe | null,
  elements: StripeElements | null,
  user: User | undefined,
  subscription: Subscription,
  watchSelected: Watch,
  rentalStartDate: Value,
  message: string,
  setMessage: Dispatch<SetStateAction<string>>,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  navigate: NavigateFunction
) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("user_id", user!.id);
  formData.append("subscription_id", subscription.id);
  formData.append("date_start", rentalStartDate?.toString());
  formData.append("watch_id", watchSelected.id);

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
    const rental_id = await fetchCreateRental(setMessage, formData);

    if (rental_id) {
      navigate("/paiement-effectue", { state: { rental_id } });
    }
  }
  setIsLoading(false);
};
