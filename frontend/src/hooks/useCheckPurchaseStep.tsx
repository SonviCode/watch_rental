import { purchaseStepsType } from "@/types/purchaseTypes";
import { Watch } from "@/types/watchTypes";
import { isObjectEmpty } from "@/utils/globalUtils";
import { goToSubscriptionStep, goToUserStep } from "@/utils/purchaseUtils";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

export default function useCheckPurchaseStep(
  watchSelected: Watch,
  purchaseSteps: purchaseStepsType[],
  setPurchaseSteps: Dispatch<SetStateAction<purchaseStepsType[]>>
) {
  const calledOnce = useRef(false);

  useEffect(() => {
    if (calledOnce.current) {
      return;
    }

    const checkSteps = async () => {
      // if a watch is already selected, go directly to user data step, else go to subscription step
      isObjectEmpty(watchSelected)
        ? goToUserStep(purchaseSteps, setPurchaseSteps)
        : goToSubscriptionStep(purchaseSteps, setPurchaseSteps);
    };

    checkSteps();

    calledOnce.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
