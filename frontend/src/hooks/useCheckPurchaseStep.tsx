import { purchaseStepsType } from "@/types/purchaseTypes";
import { Watch } from "@/types/watchTypes";
import { goToUserStepIfAlreadySelectedWatch } from "@/utils/purchaseUtils";
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
      // if a watch is already selected, go directly to user data step
      if (Object.keys(watchSelected).length !== 0) {
        goToUserStepIfAlreadySelectedWatch(purchaseSteps, setPurchaseSteps);
      }
    };

    checkSteps();

    calledOnce.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
