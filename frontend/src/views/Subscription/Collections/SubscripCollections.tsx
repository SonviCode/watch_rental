import WatchCard from "@/components/Card/WatchCard";
import { API_SUBSCRIPTION, API_WATCH } from "@/constants/Constants";
import useFetchData from "@/hooks/useFetchData";
import {
  handleChangeSubscriptionOnClik
} from "@/services/handler/handleChange";
import { Subscription } from "@/types/subscriptionTypes";
import { Watch } from "@/types/watchTypes";
import { useState } from "react";

const SubscripCollections = () => {
  const [watchs, setWatchs] = useState<Watch[]>([]);
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [index, setIndex] = useState<number>(0);

  let isLoading: boolean;
  isLoading = useFetchData(setSubscriptions, API_SUBSCRIPTION);
  // isLoading = useFetchData(setWatchs,  `${API_WATCH}?subscription_id=${subscriptions[0].id}`);
  isLoading = useFetchData(setWatchs, API_WATCH);

  if (isLoading) return;

  return (
    <section className="py-10" id="collections">
      <h2 className="section-title mb-5">Nos collections</h2>
      <p className="text-graylight mb-10">
        Toutes nos montres selon l'abonnement choisi.
      </p>
      <div>
        <div className="flex flex-col md:flex-row w-full gap-3 md:gap-5 text-center justify-around mb-5">
          {subscriptions.map((sub, i) => (
            <span
              key={i}
              onClick={() => {
                setIndex(i), handleChangeSubscriptionOnClik(sub, setWatchs);
              }}
              className={`${
                index === i ? "bg-purple" : "bg-blacklight"
              } rounded-full p-2 md:w-1/3 cursor-pointer`}
            >
              {sub.title}
            </span>
          ))}
        </div>
        <div className="w-full rounded-xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-2 sm:gap-5">
          {watchs && watchs.length > 0 ? (
            watchs.map((watch, i) => <WatchCard watch={watch} key={i} />)
          ) : (
            <div>
              <p>Il n'y a aucune montre disponible avec ces filtres</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SubscripCollections;
