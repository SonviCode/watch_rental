import { purchaseStepsType } from "@/types/purchaseTypes";
import { Watch } from "@/types/watchTypes";
import { isObjectEmpty } from "@/utils/globalUtils";
import { goToSubscriptionStep, goToUserStep } from "@/utils/purchaseUtils";
import { Value } from "node_modules/react-date-picker/dist/esm/shared/types";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

export default function useCheckPurchaseStep(
  watchSelected: Watch,
  rentalStartDate: Value,
  purchaseSteps: purchaseStepsType[],
  setPurchaseSteps: Dispatch<SetStateAction<purchaseStepsType[]>>
) {
  const calledOnce = useRef(false);

  useEffect(() => {
    if (calledOnce.current) {
      return;
    }

    const checkSteps = async () => {
      // if a watch and a date is already selected, go directly to user data step, else go to subscription step
      isObjectEmpty(watchSelected) || rentalStartDate === null
        ? goToSubscriptionStep(purchaseSteps, setPurchaseSteps)
        : goToUserStep(purchaseSteps, setPurchaseSteps);
    };

    checkSteps();

    calledOnce.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
