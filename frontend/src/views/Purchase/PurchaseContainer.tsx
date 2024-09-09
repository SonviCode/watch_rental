import { RootState } from "@/store/store";
import { Subscription } from "@/types/subscriptionTypes";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ReviewPurchase from "./ReviewPurchase";
import SummaryPurchase from "./SummaryPurchase";

const Purchase = () => {
  const subscription: Subscription = useSelector(
    (state: RootState) => state.subscription.value
  );

  if (!subscription.id) return <Navigate to="/subscription" />
  
  return (
    <>
      <div className="flex h-full max-w-full bg-blacklight">
        <ReviewPurchase />
        <SummaryPurchase />
      </div>
    </>
  );
};

export default Purchase;
