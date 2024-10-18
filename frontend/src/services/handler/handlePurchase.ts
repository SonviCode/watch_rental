import { ERROR_SELECT_A_WATCH } from "@/constants/Constants";
import { nextPurchaseStep } from "@/utils/purchaseUtils";
import { Dispatch, SetStateAction } from "react";
import { purchaseStepsType } from "../../types/purchaseTypes";
import { User } from "@/types/userType";

/**
 *
 * @param setMessages
 * @param setPurchaseSteps
 * @param purchaseSteps
 * @param watchIsSelected
 * @param user
 * @returns
 */
export const handleContinuePurchaseToNextStep = (
  setMessages: Dispatch<SetStateAction<string>>,
  setPurchaseSteps: Dispatch<SetStateAction<purchaseStepsType[]>>,
  purchaseSteps: purchaseStepsType[],
  watchIsSelected: boolean,
  user: User
) => {
  if (!watchIsSelected) {
    setMessages(ERROR_SELECT_A_WATCH);
    return;
  }

  if (purchaseSteps[1].actif && !user) {
    return;
  }

  setMessages("");
  nextPurchaseStep(purchaseSteps, setPurchaseSteps);
};
