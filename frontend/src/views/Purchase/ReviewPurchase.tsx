import WatchPurchaseCard from "@/components/Card/WatchPurchaseCard";
import { API_SUBSCRIPTION, API_WATCH } from "@/constants/Constants";
import useFetchData from "@/hooks/useFetchData";
import { handleChangeSubscriptionSelectOption } from "@/services/handler/handleChange";
import { RootState } from "@/store/store";
import { Subscription } from "@/types/subscriptionTypes";
import { Watch } from "@/types/watchTypes";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useSelector } from "react-redux";

const ReviewPurchase = () => {
  const [allSubscriptions, setAllSubscriptions] = useState<Subscription[]>([]);
  const [watchs, setWatchs] = useState<Watch[]>([]);
  const [watchSelected, setWatchSelected] = useState<Watch>();

  const subscription: Subscription = useSelector(
    (state: RootState) => state.subscription.value
  );

  let isLoading = useFetchData(
    setWatchs,
    `${API_WATCH}?subscription_id=${subscription.id}`
  );
  isLoading = useFetchData(setAllSubscriptions, API_SUBSCRIPTION);

  if (isLoading) return;

  const defaultIdSubscription = allSubscriptions.filter(
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
              className="rounded-lg border w-full border-gray appearance-none bg-gray h-full py-2 px-4 pr-10 focus:outline-none focus:border-gray cursor-pointer"
              onChange={(e) =>
                handleChangeSubscriptionSelectOption(
                  e,
                  allSubscriptions,
                  setWatchs
                )
              }
              defaultValue={defaultIdSubscription}
            >
              {allSubscriptions.map((sub, i) => (
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
            {watchs.map((watch, i) => (
              <WatchPurchaseCard
                watch={watch}
                watchSelected={watchSelected}
                key={i}
                onClick={() => setWatchSelected(watch)}
              />
            ))}
            <div className="bg-gray w-28 h-28 rounded-md"></div>
            <div className="bg-gray w-28 h-28 rounded-md"></div>
            <div className="bg-gray w-28 h-28 rounded-md"></div>
            <div className="bg-gray w-28 h-28 rounded-md"></div>
            <div className="bg-gray w-28 h-28 rounded-md"></div>
            <div className="bg-gray w-28 h-28 rounded-md"></div>
            <div className="bg-gray w-28 h-28 rounded-md"></div>
            <div className="bg-gray w-28 h-28 rounded-md"></div>
            <div className="bg-gray w-28 h-28 rounded-md"></div>
            <div className="bg-gray w-28 h-28 rounded-md"></div>
            <div className="bg-gray w-28 h-28 rounded-md"></div>
            <div className="bg-gray w-28 h-28 rounded-md"></div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="subscriptions" className="text-sm">
            Montre sélectionnée
          </label>
          <div className="flex flex-wrap gap-5 w-full">
            {watchSelected ? (
              <WatchPurchaseCard
                watch={watchSelected}
                watchSelected={watchSelected}
                onClick={() => setWatchSelected(watchSelected)}
              />
            ) : (
              <div className="bg-gray w-28 h-28 rounded-md"></div>
            )}
          </div>
        </div>
      </form>
    </section>
  );
};

export default ReviewPurchase;
