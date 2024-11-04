import { defaultPurchaseSteps } from "@/constants/Constants";
import useCheckPurchaseStep from "@/hooks/useCheckPurchaseStep";
import usePersistedState from "@/hooks/usePersistedState";
import { RootState } from "@/store/store";
import { purchaseStepsType } from "@/types/purchaseTypes";
import { Subscription } from "@/types/subscriptionTypes";
import { Watch } from "@/types/watchTypes";
import { Value } from "node_modules/react-date-picker/dist/esm/shared/types";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import AddressPurchase from "./AddressPurchase";
import ReviewPurchase from "./ReviewPurchase";
import StepsPurchase from "./StepsPurchase";
import StripePayment from "./stripe/StripePayment";
import SummaryPurchase from "./SummaryPurchase";

const ContainerPurchase = () => {
  const [purchaseSteps, setPurchaseSteps] =
    useState<purchaseStepsType[]>(defaultPurchaseSteps);
  const [rentalStartDate, setRentalStartDate] = usePersistedState<Value>(
    null,
    "rentalStartDate"
  );

  const subscription: Subscription = useSelector(
    (state: RootState) => state.subscription.value
  );
  const watchSelected: Watch = useSelector(
    (state: RootState) => state.purchaseSelectedWatch.value
  );

  useCheckPurchaseStep(
    watchSelected,
    rentalStartDate,
    purchaseSteps,
    setPurchaseSteps
  );

  if (!subscription.id) return <Navigate to="/subscription" />;

  const getActiveStep = () => {
    if (purchaseSteps[2].actif)
      return <StripePayment rentalStartDate={rentalStartDate} />;
    if (purchaseSteps[1].actif) return <AddressPurchase />;
    return (
      <ReviewPurchase
        rentalStartDate={rentalStartDate}
        setRentalStartDate={setRentalStartDate}
      />
    );
  };

  const activeStep = getActiveStep();

  return (
    <>
      <div className="flex h-full max-w-full bg-blacklight">
        <div className="flex-grow">
          <StepsPurchase
            purchaseSteps={purchaseSteps}
            setPurchaseSteps={setPurchaseSteps}
          />
          {activeStep}
        </div>
        <SummaryPurchase
          setPurchaseSteps={setPurchaseSteps}
          purchaseSteps={purchaseSteps}
          rentalStartDate={rentalStartDate}
        />
      </div>
    </>
  );
};

export default ContainerPurchase;
