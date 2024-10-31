import { API_USER, paymentElementOptions } from "@/constants/Constants";
import useFetchData from "@/hooks/useFetchData";
import { handleStripeCheckoutSubmit } from "@/services/handler/handleStripeSubmit";
import { RootState } from "@/store/store";
import "@/style/custom/stripe.css";
import { Subscription } from "@/types/subscriptionTypes";
import { User } from "@/types/userType";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function StripeCheckoutForm() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User>();

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const subscription: Subscription = useSelector(
    (state: RootState) => state.subscription.value
  );

  useFetchData(setUser, API_USER);

  return (
    <>
      <form
        id="payment-form"
        className="p-10 flex flex-col gap-5"
        onSubmit={(e) =>
          handleStripeCheckoutSubmit(
            e,
            stripe,
            elements,
            user,
            subscription,
            setMessage,
            setIsLoading,
            navigate
          )
        }
      >
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <div className="">
          <input
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
        {message && (
          <div
            className="text-lg text-graylight text-center"
            id="payment-message"
          >
            {message}
          </div>
        )}
      </form>
    </>
  );
}
