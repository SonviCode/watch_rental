import useCheckPurchaseStep from "@/hooks/useCheckPurchaseStep";
import { RootState } from "@/store/store";
import { purchaseStepsType } from "@/types/purchaseTypes";
import { Subscription } from "@/types/subscriptionTypes";
import { Watch } from "@/types/watchTypes";
import {
  faClock,
  faCreditCard,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ReviewPurchase from "./ReviewPurchase";
import StepsPurchase from "./StepsPurchase";
import SummaryPurchase from "./SummaryPurchase";
import UserDataPurchase from "./UserDataPurchase";

const defaultPurchaseSteps = [
  { title: "subscription", icon: faClock, step: 1, actif: true },
  { title: "userData", icon: faUser, step: 2, actif: false },
  { title: "payment", icon: faCreditCard, step: 3, actif: false },
];

const Purchase = () => {
  const [purchaseSteps, setPurchaseSteps] =
    useState<purchaseStepsType[]>(defaultPurchaseSteps);

  const subscription: Subscription = useSelector(
    (state: RootState) => state.subscription.value
  );
  const watchSelected: Watch = useSelector(
    (state: RootState) => state.purchaseSelectedWatch.value
  );

  useCheckPurchaseStep(watchSelected, purchaseSteps, setPurchaseSteps);

  if (!subscription.id) return <Navigate to="/subscription" />;

  return (
    <>
      <div className="flex h-full max-w-full bg-blacklight">
        <div className="flex-grow">
          <StepsPurchase
            purchaseSteps={purchaseSteps}
            setPurchaseSteps={setPurchaseSteps}
          />
          {purchaseSteps[1].actif ? <UserDataPurchase /> : <ReviewPurchase />}
        </div>
        <SummaryPurchase
          setPurchaseSteps={setPurchaseSteps}
          purchaseSteps={purchaseSteps}
        />
      </div>
    </>
  );
};

export default Purchase;
