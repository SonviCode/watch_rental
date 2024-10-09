import { purchaseStepsType } from "@/types/purchaseTypes";
import { Subscription } from "@/types/subscriptionTypes";
import { Dispatch, SetStateAction } from "react";

const STEPS_NUMBER = 2;

/**
 *
 * @param purchaseSteps
 * @param setPurchaseSteps
 */
export const nextPurchaseStep = (
  purchaseSteps: purchaseStepsType[],
  setPurchaseSteps: Dispatch<SetStateAction<purchaseStepsType[]>>
) => {
  const newPurchaseSteps: purchaseStepsType[] = [...purchaseSteps];

  for (let i = STEPS_NUMBER; i > 0; i--) {
    if (!purchaseSteps[i].actif && newPurchaseSteps[i - 1].actif) {
      newPurchaseSteps[i].actif = true;
    }
  }

  setPurchaseSteps(newPurchaseSteps);
};

/**
 *
 * @param purchaseSteps
 * @param setPurchaseSteps
 */
export const prevPurchaseStep = (
  purchaseSteps: purchaseStepsType[],
  setPurchaseSteps: Dispatch<SetStateAction<purchaseStepsType[]>>
) => {
  const newPurchaseSteps: purchaseStepsType[] = [...purchaseSteps];

  for (let i = 0; i < STEPS_NUMBER; i++) {
    if (purchaseSteps[i].actif && purchaseSteps[i + 1].actif == false) {
      newPurchaseSteps[i].actif = false;
    } else if (i + 1 == STEPS_NUMBER) {
      newPurchaseSteps[i + 1].actif = false;
    }
  }

  setPurchaseSteps(newPurchaseSteps);
};

/**
 * if a watch is already selected, go directly to user data step
 *
 * @param purchaseSteps
 * @param setPurchaseSteps
 */
export const goToUserStepIfAlreadySelectedWatch = (
  purchaseSteps: purchaseStepsType[],
  setPurchaseSteps: Dispatch<SetStateAction<purchaseStepsType[]>>
) => {
  const newPurchaseSteps: purchaseStepsType[] = [...purchaseSteps];

  newPurchaseSteps[1].actif = true;

  setPurchaseSteps(newPurchaseSteps);
};

/**
 *
 * @param allSubscriptions
 * @param subscription
 * @returns
 */
export const defaultIdSubscription = (
  allSubscriptions: Subscription[],
  subscription: Subscription
) => {
  return allSubscriptions.filter((sub) => sub.id === subscription.id)[0].id;
};
