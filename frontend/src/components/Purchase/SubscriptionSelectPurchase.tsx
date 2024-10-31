import { handleChangeSubscriptionSelectOption } from "@/services/handler/handleChange";
import { removePurchaseSelectedWatch } from "@/store/slices/purchaseSelectedWatchSlice";
import { Subscription } from "@/types/subscriptionTypes";
import { Watch } from "@/types/watchTypes";
import { defaultIdSubscription } from "@/utils/purchaseUtils";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";

const SubscriptionSelectPurchase = ({
  setWatchs,
  allSubscriptions,
  subscription,
}: {
  setWatchs: Dispatch<SetStateAction<Watch[]>>;
  allSubscriptions: Subscription[];
  subscription: Subscription;
}) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-2 max-w-sm w-full">
      <label htmlFor="subscriptions" className="text-sm">
        Abonnement sélectionné
      </label>
      <div className="relative">
        <select
          id="subscriptions"
          className="rounded-lg border w-full border-gray appearance-none bg-gray h-full py-2 px-4 pr-10 focus:outline-none focus:border-gray cursor-pointer"
          onChange={(e) => {
            handleChangeSubscriptionSelectOption(
              e,
              allSubscriptions,
              setWatchs
            ),
              dispatch(removePurchaseSelectedWatch());
          }}
          defaultValue={defaultIdSubscription(allSubscriptions, subscription)}
        >
          {allSubscriptions.map((sub, i) => (
            <option key={i} value={sub.id}>
              {sub.title}
            </option>
          ))}
        </select>
        <FontAwesomeIcon
          icon={faChevronDown}
          className=" text-white absolute pointer-events-none right-4 top-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
};

export default SubscriptionSelectPurchase;
