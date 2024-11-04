import { dateTimeFormatOptions } from "@/constants/Constants";
import useUser from "@/hooks/useUser";
import { handleContinuePurchaseToNextStep } from "@/services/handler/handlePurchase";
import { RootState } from "@/store/store";
import { purchaseStepsType } from "@/types/purchaseTypes";
import { Subscription } from "@/types/subscriptionTypes";
import { Watch } from "@/types/watchTypes";
import { formatEuros } from "@/utils/formatUtils";
import { isObjectEmpty } from "@/utils/globalUtils";
import { Value } from "node_modules/react-date-picker/dist/esm/shared/types";
import { Dispatch, SetStateAction, useState } from "react";
import { useSelector } from "react-redux";

const SummaryPurchase = ({
  setPurchaseSteps,
  purchaseSteps,
  rentalStartDate,
}: {
  setPurchaseSteps: Dispatch<SetStateAction<purchaseStepsType[]>>;
  purchaseSteps: purchaseStepsType[];
  rentalStartDate: Value;
}) => {
  const [messages, setMessages] = useState<string>("");
  const { isLoading, user } = useUser();
  const subscription: Subscription = useSelector(
    (state: RootState) => state.subscription.value
  );
  const watchSelected: Watch = useSelector(
    (state: RootState) => state.purchaseSelectedWatch.value
  );

  if (isLoading) return;

  const isWatchSelected = !isObjectEmpty(watchSelected);

  return (
    <section className="p-10 lg:min-w-[300px] lg:w-1/3 w-full bg-black mt-2">
      <h2 className="italic text-sm mb-5">Sommaire de commande</h2>
      <div className="flex flex-col gap-2">
        <h3 className="gradient-text font-bold text-2xl">
          Tempo {subscription.title}
        </h3>
        <p className="text-xs">{subscription.switchText}</p>
        <div>
          <p className="text-sm">
            Montres jusqu'à{" "}
            <span className="text-sm">
              {formatEuros(subscription.watchMaxPrice)} €
            </span>
          </p>
        </div>
      </div>
      <hr className="my-5" />
      <div className="text-end flex flex-col">
        <span className="font-extrabold">{subscription.price}€/mois</span>
        <span className="gradient-text font-bold text-xl">Sans engagement</span>
        <span className="">Livraison gratuite à domicile</span>
      </div>
      <hr className="my-5" />
      <div className="flex flex-col">
        <span className="text-sm">Date de début de la location : </span>
        <span className="font-bold">
          {rentalStartDate &&
            rentalStartDate.toLocaleString("fr-FR", dateTimeFormatOptions)}
        </span>
      </div>
      <hr className="my-5" />
      <div className="flex flex-col gap-2">
        <h3 className="gradient-text font-bold text-xl">
          Montre sélectionée :
        </h3>
        {isWatchSelected && (
          <p>
            {watchSelected.brand.brandName} - {watchSelected.name}
          </p>
        )}
        {messages && (
          <p className="text-sm italic text-center text-pretty text-red-600">
            {messages}
          </p>
        )}
      </div>
      <hr className="my-5" />
      {!purchaseSteps[2].actif && (
        <button
          onClick={() =>
            handleContinuePurchaseToNextStep(
              setMessages,
              setPurchaseSteps,
              purchaseSteps,
              isWatchSelected,
              rentalStartDate,
              user!
            )
          }
          className="mb-2 bg-greenfluo text-black font-bold w-full py-2 px-4 rounded-lg text-center"
        >
          Continuer
        </button>
      )}
      <p className="text-xs text-center">
        En effectuant une commande, vous acceptez les{" "}
        <span className="underline">conditions générales</span> et la{" "}
        <span className="underline">politique de confidentialité</span> de Tempo
      </p>
    </section>
  );
};

export default SummaryPurchase;
