import WatchPurchaseCard from "@/components/Card/WatchPurchaseCard";
import InputDateStart from "@/components/DatePicker/InputDateStart";
import SubscriptionSelectPurchase from "@/components/Purchase/SubscriptionSelectPurchase";
import { API_SUBSCRIPTION, API_WATCH } from "@/constants/Constants";
import useFetchData from "@/hooks/useFetchData";
import { setPurchaseSelectedWatch } from "@/store/slices/purchaseSelectedWatchSlice";
import { RootState } from "@/store/store";
import { Subscription } from "@/types/subscriptionTypes";
import { Watch } from "@/types/watchTypes";
import { isObjectEmpty } from "@/utils/globalUtils";
import { Value } from "node_modules/react-date-picker/dist/esm/shared/types";
import { Dispatch, SetStateAction, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ReviewPurchase = ({
  setRentalStartDate,
  rentalStartDate,
}: {
  setRentalStartDate: Dispatch<SetStateAction<Value>>;
  rentalStartDate: Value;
}) => {
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
    `${API_WATCH}?subscription_id=${subscription.id}&isAvailable=true`
  );
  const { isLoading: subIsLoading } = useFetchData(
    setAllSubscriptions,
    API_SUBSCRIPTION
  );

  if (subIsLoading || watchIsLoading) return;

  const isWatchSelected = !isObjectEmpty(watchSelected);

  return (
    <section className="grow p-5 md:p-10">
      <form className="grow flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 justify-between">
          <SubscriptionSelectPurchase
            setWatchs={setWatchs}
            allSubscriptions={allSubscriptions}
            subscription={subscription}
          />
          <InputDateStart
            setStartDate={setRentalStartDate}
            startDate={rentalStartDate}
            text={"Date de démarrage de la location"}
          />
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
            {isWatchSelected ? (
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
