import WatchPurchaseCard from "@/components/Card/WatchPurchaseCard";
import { API_SUBSCRIPTION, API_WATCH } from "@/constants/Constants";
import useFetchData from "@/hooks/useFetchData";
import { handleChangeSubscriptionSelectOption } from "@/services/handler/handleChange";
import {
  removePurchaseSelectedWatch,
  setPurchaseSelectedWatch,
} from "@/store/slices/purchaseSelectedWatchSlice";
import { RootState } from "@/store/store";
import { Subscription } from "@/types/subscriptionTypes";
import { Watch } from "@/types/watchTypes";
import { defaultIdSubscription } from "@/utils/purchaseUtils";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ReviewPurchase = () => {
  const [allSubscriptions, setAllSubscriptions] = useState<Subscription[]>([]);
  const [watchs, setWatchs] = useState<Watch[]>([]);

  const subscription: Subscription = useSelector(
    (state: RootState) => state.subscription.value
  );
  const watchSelected: Watch = useSelector(
    (state: RootState) => state.purchaseSelectedWatch.value
  );
  const dispatch = useDispatch();

  const { isLoading: watchIsLoading } = useFetchData(
    setWatchs,
    `${API_WATCH}?subscription_id=${subscription.id}`
  );
  const { isLoading: subIsLoading } = useFetchData(
    setAllSubscriptions,
    API_SUBSCRIPTION
  );

  if (subIsLoading || watchIsLoading) return;

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
              onChange={(e) => {
                handleChangeSubscriptionSelectOption(
                  e,
                  allSubscriptions,
                  setWatchs
                ),
                  dispatch(removePurchaseSelectedWatch());
              }}
              defaultValue={defaultIdSubscription(
                allSubscriptions,
                subscription
              )}
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
                key={i}
                watch={watch}
                watchSelected={watchSelected}
                onClick={() => dispatch(setPurchaseSelectedWatch(watch))}
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
            {Object.keys(watchSelected).length !== 0 ? (
              <WatchPurchaseCard
                watch={watchSelected}
                watchSelected={watchSelected}
                onClick={() =>
                  dispatch(setPurchaseSelectedWatch(watchSelected))
                }
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
