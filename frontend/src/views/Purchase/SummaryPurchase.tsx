import { RootState } from "@/store/store";
import { Subscription } from "@/types/subscriptionTypes";
import { formatEuros } from "@/utils/formatUtils";
import { useSelector } from "react-redux";

const SummaryPurchase = () => {
  const subscription: Subscription = useSelector(
    (state: RootState) => state.subscription.value
  );

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
      <hr className="my-10" />
      <div className="text-end flex flex-col">
        <span className="font-extrabold">{subscription.price}€/mois</span>
        <span className="gradient-text font-bold text-xl">Sans engagement</span>
        <span className="">Livraison gratuite à domicile</span>
      </div>
      <hr className="my-10" />
      <button className="mb-2 bg-greenfluo text-black font-bold border border-greenfluo w-full py-2 px-4 rounded-lg text-center">
        S'abonner
      </button>
      <p className="text-xs text-center">
        En effectuant une commande, vous acceptez les{" "}
        <span className="underline">conditions générales</span> et la{" "}
        <span className="underline">politique de confidentialité</span> de Tempo
      </p>
    </section>
  );
};

export default SummaryPurchase;
