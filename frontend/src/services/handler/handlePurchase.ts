import {
  ERROR_SELECT_A_DATE,
  ERROR_SELECT_A_WATCH,
} from "@/constants/Constants";
import { nextPurchaseStep } from "@/utils/purchaseUtils";
import { Dispatch, SetStateAction } from "react";
import { purchaseStepsType } from "../../types/purchaseTypes";
import { User } from "@/types/userType";
import { Value } from "node_modules/react-date-picker/dist/esm/shared/types";

/**
 *
 * @param setMessages
 * @param setPurchaseSteps
 * @param purchaseSteps
 * @param watchIsSelected
 * @param rentalStartDate
 * @param user
 * @returns
 */
export const handleContinuePurchaseToNextStep = (
  setMessages: Dispatch<SetStateAction<string>>,
  setPurchaseSteps: Dispatch<SetStateAction<purchaseStepsType[]>>,
  purchaseSteps: purchaseStepsType[],
  watchIsSelected: boolean,
  rentalStartDate: Value,
  user: User
) => {
  if (!watchIsSelected) {
    setMessages(ERROR_SELECT_A_WATCH);
    return;
  }

  if (!rentalStartDate) {
    setMessages(ERROR_SELECT_A_DATE);
    return;
  }

  if (purchaseSteps[1].actif && !user) {
    return;
  }

  setMessages("");
  nextPurchaseStep(purchaseSteps, setPurchaseSteps);
};
