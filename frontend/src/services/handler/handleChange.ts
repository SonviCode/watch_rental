import { setSubscription } from "@/store/slices/subscriptionSlice";
import { store } from "@/store/store";
import { fetchGetWatchsByFilter } from "../api/watch";
import { Subscription } from "@/types/subscriptionTypes";
import { Dispatch, SetStateAction } from "react";
import { deleteFormDataValue } from "@/utils/formDataUtils";
import { Watch } from "@/types/watchTypes";

/**
 *
 * @param e
 * @param allSubscriptions
 * @param setWatchs
 */
export const handleChangeSubscriptionSelectOption = (
  e: React.ChangeEvent<HTMLSelectElement>,
  allSubscriptions: Subscription[],
  setWatchs: Dispatch<SetStateAction<Watch[]>>
) => {
  const subToDispatch = allSubscriptions.filter(
    (subscription) => e.target.value === subscription.id.toString()
  );
  store.dispatch(setSubscription(subToDispatch[0]));

  const formData = new FormData();
  formData.append("subscription_id", e.target.value);
  fetchGetWatchsByFilter(setWatchs, formData);
};

/**
 * 
 * @param subscription 
 * @param setWatchs 
 */
export const handleChangeSubscrioptionOnClik = (
  subscription: Subscription,
  setWatchs: Dispatch<SetStateAction<Watch[]>>
) => {
  const formData = new FormData();
  formData.append("subscription_id", subscription.id.toString());
  fetchGetWatchsByFilter(setWatchs, formData);
};

/**
 *
 * @param e
 * @param checkedItems
 * @param setCheckedItems
 * @param setWatchs
 */
export const handleWatchsFilter = (
  e: React.FormEvent<HTMLFormElement>,
  checkedItems: FormData,
  setCheckedItems: Dispatch<SetStateAction<FormData>>,
  setWatchs: Dispatch<SetStateAction<Watch[]>>
) => {
  const { name, id, checked } = e.target as HTMLInputElement;

  if (checked) {
    checkedItems.append(name, id);
    fetchGetWatchsByFilter(setWatchs, checkedItems);
  } else {
    fetchGetWatchsByFilter(
      setWatchs,
      deleteFormDataValue(setCheckedItems, checkedItems, name, id)
    );
  }
};
