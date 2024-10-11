import { useState } from "react";
import SubscripCard from "./Card/SubscripCard";
import { API_SUBSCRIPTION } from "@/constants/Constants";
import useFetchData from "@/hooks/useFetchData";
import { Subscription } from "@/types/subscriptionTypes";
import SubscripCategorySkeleton from "./SubscripCategorySkeleton";

const SubscripCategory = () => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

  const { isLoading } = useFetchData(setSubscriptions, API_SUBSCRIPTION);

  if (isLoading) return <SubscripCategorySkeleton />;

  return (
    <section className="flex flex-col md:flex-row gap-5 lg:gap-10 py-10 xl:p-10 ">
      {subscriptions.map((subscription: Subscription, index: React.Key) => (
        <SubscripCard subscription={subscription} key={index} />
      ))}
    </section>
  );
};

export default SubscripCategory;
