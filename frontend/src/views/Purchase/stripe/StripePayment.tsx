import {
  API_PURCHASE_CREATE_STRIPE_PAYMENT,
  BLACKLIGHT_COLOR,
  GRAYLIGHT_COLOR,
} from "@/constants/Constants";
import { RootState } from "@/store/store";
import { Subscription } from "@/types/subscriptionTypes";
import { Elements } from "@stripe/react-stripe-js";
import { Appearance, loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import StripeCheckoutForm from "./StripeCheckoutForm";
import { Value } from "node_modules/react-date-picker/dist/esm/shared/types";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const StripePayment = ({ rentalStartDate }: { rentalStartDate: Value }) => {
  const [clientSecret, setClientSecret] = useState("");
  // const [dpmCheckerLink, setDpmCheckerLink] = useState("");

  const subscription: Subscription = useSelector(
    (state: RootState) => state.subscription.value
  );

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(API_PURCHASE_CREATE_STRIPE_PAYMENT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: [
          {
            id: subscription.id,
            amount: subscription.price * 100,
          },
        ],
      }),
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
        // [DEV] For demo purposes only
        // setDpmCheckerLink(data.dpmCheckerLink);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const appearance: Appearance = {
    theme: "night",
    variables: {
      colorPrimary: GRAYLIGHT_COLOR,
      colorBackground: BLACKLIGHT_COLOR,

      // colorText: GRALIGHT_COLOR,
    },
  };
  // Enable the skeleton loader UI for optimal loading.
  const loader = "auto";
  return (
    <>
      {clientSecret && (
        <Elements
          options={{ clientSecret, appearance, loader }}
          stripe={stripePromise}
        >
          <StripeCheckoutForm rentalStartDate={rentalStartDate} />
        </Elements>
      )}
    </>
  );
};

export default StripePayment;
