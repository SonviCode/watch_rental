import { API_SUBSCRIPTION } from "@/constants/Constants";
import useFetchData from "@/hooks/useFetchData";
import { setSubscription } from "@/store/slices/subscriptionSlice";
import { RootState } from "@/store/store";
import { Subscription } from "@/types/subscriptionTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const ReviewPurchase = () => {
  const [AllSubscriptions, setAllSubscriptions] = useState<Subscription[]>([]);

  const dispatch = useDispatch();

  const subscription: Subscription = useSelector(
    (state: RootState) => state.subscription.value
  );

  const isLoading = useFetchData(setAllSubscriptions, API_SUBSCRIPTION);

  if (isLoading) return;
  // if (subscription.id!) return;

  const handletest = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const subToDispatch = AllSubscriptions.filter(
      (subscription) => e.target.value === subscription.id.toString()
    );

    dispatch(setSubscription(subToDispatch[0]));
  };

  const defaultValue = AllSubscriptions.filter(
    (sub) => sub.id === subscription.id
  )[0].id;

  return (
    <section className="grow p-10">
      <form className="grow flex flex-col gap-5">
        <div className="flex flex-col gap-2 max-w-sm">
          <label htmlFor="subscriptions" className="text-sm">
            Abonnement sélectionné
          </label>
          <div className="relative">
            <select
              id="subscriptions"
              // className="bg-gray text-sm rounded-lg block w-full p-2.5 pl-5"
              className="rounded-lg border w-full border-gray appearance-none bg-gray h-full py-2 px-4 pr-10 focus:outline-none focus:border-gray cursor-pointer"
              onChange={(e) => handletest(e)}
              defaultValue={defaultValue}
            >
              {AllSubscriptions.map((sub, i) => (
                <option key={i} value={sub.id}>
                  {sub.title}
                </option>
              ))}
            </select>
            <FontAwesomeIcon
              icon={faChevronDown}
              className=" text-white absolute pointer-events-none right-4 top-1/2 -translate-y-1/2"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="subscriptions" className="text-sm">
            Montres disponibles
          </label>
          <div className="flex flex-wrap gap-5 w-full">
            <div className="bg-gray w-20 h-20 rounded-md"></div>
            <div className="bg-gray w-20 h-20 rounded-md"></div>
            <div className="bg-gray w-20 h-20 rounded-md"></div>
            <div className="bg-gray w-20 h-20 rounded-md"></div>
            <div className="bg-gray w-20 h-20 rounded-md"></div>
            <div className="bg-gray w-20 h-20 rounded-md"></div>
            <div className="bg-gray w-20 h-20 rounded-md"></div>
            <div className="bg-gray w-20 h-20 rounded-md"></div>
            <div className="bg-gray w-20 h-20 rounded-md"></div>
            <div className="bg-gray w-20 h-20 rounded-md"></div>
            <div className="bg-gray w-20 h-20 rounded-md"></div>
            <div className="bg-gray w-20 h-20 rounded-md"></div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="subscriptions" className="text-sm">
            Montre sélectionnée
          </label>
          <div className="flex flex-wrap gap-5 w-full">
            <div className="bg-gray w-20 h-20 rounded-md"></div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ReviewPurchase;
