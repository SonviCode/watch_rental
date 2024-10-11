import { CLIENT_URL } from "@/constants/Constants";
import "@/style/custom/stripe.css";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { StripePaymentElementOptions } from "@stripe/stripe-js";
import { FormEvent, useState } from "react";

export default function StripeCheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleStripeCheckoutSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        payment_method_data: {
          billing_details: {
            name: "Jenny Rosen",
          },
        },
        return_url: CLIENT_URL + "paiement-effectue",
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message!);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions: StripePaymentElementOptions = {
    layout: "tabs",
  };

  return (
    <>
      <form
        id="payment-form"
        className="p-10 flex flex-col gap-5"
        onSubmit={(e) => handleStripeCheckoutSubmit(e)}
      >
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <div className="">
          <input
            // onClick={(e) => getFilterProduct(e, el, key.keyRequest)}
            id="generalConditionsOfSale"
            name="generalConditionsOfSale"
            type="checkbox"
            className="cursor-pointer accent-greenfluo "
          />
          <label
            htmlFor="generalConditionsOfSale"
            className="grow pl-2 cursor-pointer first-letter:uppercase text-sm"
          >
            J'ai lu les{" "}
            <span className="underline">conditions générales de vente</span> et
            j'y adhère sans réserve.
          </label>
        </div>
        <button
          className=" flex w-fit self-end"
          disabled={isLoading || !stripe || !elements}
          id="submit"
        >
          <span id="button-text">
            {isLoading ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              <div className="py-2 px-14 my-4 bg-greenfluo text-black  font-bold rounded-md text-end">
                S'abonner
              </div>
            )}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && (
          <div
            className="text-lg text-graylight text-center"
            id="payment-message"
          >
            {message}
          </div>
        )}
      </form>
      {/* [DEV]: Display dynamic payment methods annotation and integration checker */}
      {/* <div id="dpm-annotation">
        <p>
        Payment methods are dynamically displayed based on customer location,
        order amount, and currency.&nbsp;
        <a
        href={dpmCheckerLink}
        target="_blank"
        rel="noopener noreferrer"
        id="dpm-integration-checker"
        >
        Preview payment methods by transaction
        </a>
        </p>
        </div> */}
    </>
  );
}
