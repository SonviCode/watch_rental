import WatchPurchaseCard from "@/components/Card/WatchPurchaseCard";
import {
  API_SUBSCRIPTION,
  API_WATCH
} from "@/constants/Constants";
import useFetchData from "@/hooks/useFetchData";
import { fetchGetWatchsByFilter } from "@/services/api/watch";
import { setSubscription } from "@/store/slices/subscriptionSlice";
import { RootState } from "@/store/store";
import { Subscription } from "@/types/subscriptionTypes";
import { Watch } from "@/types/watchTypes";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ReviewPurchase = () => {
  const [AllSubscriptions, setAllSubscriptions] = useState<Subscription[]>([]);
  const [watchs, setWatchs] = useState<Watch[]>([]);
  const [watchSelected, setWatchSelected] = useState<Watch>();

  const subscription: Subscription = useSelector(
    (state: RootState) => state.subscription.value
  );

  let isLoading = useFetchData(
    setWatchs,
    API_WATCH
  );
  isLoading = useFetchData(setAllSubscriptions, API_SUBSCRIPTION);

  const dispatch = useDispatch();

  if (isLoading) return;
  // if (subscription.id!) return;

  const handletest = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const subToDispatch = AllSubscriptions.filter(
      (subscription) => e.target.value === subscription.id.toString()
    );

    console.log();
    

    const formData = new FormData
    formData.append("subscription_id", e.target.value)

    dispatch(setSubscription(subToDispatch[0]));
   
    
    fetchGetWatchsByFilter(setWatchs, formData);
  };

  // const handleGetWatchsFilter = () => {};

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
