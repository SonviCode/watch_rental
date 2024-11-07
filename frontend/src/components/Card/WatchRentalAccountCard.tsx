import {
  fetchUnsubscribeRental,
  fetchUpdateWatchesOfRental,
} from "@/services/api/rental";
import { fetchGetWatchsBySubId } from "@/services/api/watch";
import { Rental } from "@/types/rentalTypes";
import { User } from "@/types/userType";
import { Watch } from "@/types/watchTypes";
import { addYear } from "@/utils/dateUtils";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ConfirmModal from "../Modal/ConfirmModal";
import WatchPurchaseCard from "./WatchPurchaseCard";

const WatchRentalAccountCard = ({
  rental,
  setRentals,
  user,
}: {
  rental: Rental;
  setRentals: Dispatch<SetStateAction<Rental[]>>;
  user: User;
}) => {
  const [watchs, setWatchs] = useState<Watch[]>([]);
  const [watchSelected, setWatchSelected] = useState<Watch>();
  const [nbWatchesInRental, setNbWatchesInRental] = useState<number>(
    rental.watch.length
  );
  const [isUnsubscribeModalOpen, setIsUnsubscribeModalOpen] = useState(false);
  const [isWatchModalOpen, setIsWatchModalOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    if (isFullScreen) {
      document.body.classList.add("overflow-hidden");
    } else {
      setWatchSelected(undefined);
      setNbWatchesInRental(rental.watch.length);
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isFullScreen, rental.watch.length]);

  const handleWatchSelected = (watch: Watch) => {
    setWatchSelected(watch);

    !watchSelected && setNbWatchesInRental(nbWatchesInRental + 1);
  };

  const confirmUnsubscribe = () => {
    fetchUnsubscribeRental(rental.id, setRentals, user.id);
    setIsUnsubscribeModalOpen(false);
  };

  const confirmChangedWatch = () => {
    fetchUpdateWatchesOfRental(
      rental,
      rental.id,
      setRentals,
      setWatchSelected,
      setIsFullScreen,
      user.id,
      watchSelected!
    );
    setIsWatchModalOpen(false);
  };

  const numbersOfWatchesRemaining =
    rental.subscription.numberMaxWatches - nbWatchesInRental;

  return (
    <div
      className={`transition-all duration-1000 ease 
                  ${isFullScreen ? "fixed inset-0 z-50 p-8" : ""} 
                  bg-blacklight rounded-lg p-5 flex flex-col gap-5 items-center`}
    >
      {isUnsubscribeModalOpen && (
        <ConfirmModal
          setIsUnsubscribeModalOpen={setIsUnsubscribeModalOpen}
          onClick={() => confirmUnsubscribe()}
          content={"Êtes-vous sûr de vouloir vous désabonner ?"}
        />
      )}
      {isWatchModalOpen && (
        <ConfirmModal
          setIsUnsubscribeModalOpen={setIsWatchModalOpen}
          onClick={() => confirmChangedWatch()}
          content={"Êtes-vous sûr de vouloir changer de montre ?"}
        />
      )}
      <div className="flex flex-col items-start gap-5 w-full">
        <h2>Numéro de location : {rental.rentalNumber}</h2>
        <p>
          Date de début de la location :{" "}
          {new Date(rental.dateStart).toLocaleDateString("fr-FR")}
        </p>
        <p>Abonnement : {rental.subscription.title}</p>
      </div>
      <div className="flex gap-10">
        {rental.watch.map((watch, i) => (
          <WatchPurchaseCard key={i} watch={watch} />
        ))}
        {watchSelected && (
          <WatchPurchaseCard
            watch={watchSelected}
            watchSelected={watchSelected}
          />
        )}
        {Array(numbersOfWatchesRemaining)
          .fill(numbersOfWatchesRemaining)
          .map((_, i) => (
            <div key={i} className="bg-gray w-28 h-28 rounded-md"></div>
          ))}
      </div>
      {rental.numberWatchesRemaining !== 0 &&
        (watchSelected ? (
          <button
            onClick={() => setIsWatchModalOpen(true)}
            className="text-greenfluo border border-white rounded-lg w-fit p-2"
          >
            Confirmer la nouvelle montre
          </button>
        ) : (
          <button
            onClick={() => {
              setIsFullScreen(true);
              !isFullScreen &&
                fetchGetWatchsBySubId(setWatchs, rental.subscription.id);
            }}
            className="text-greenfluo border border-white rounded-lg w-fit p-2"
          >
            Choisir une nouvelle montre
          </button>
        ))}
      {isFullScreen && (
        <div className="flex gap-10">
          {watchs.map((watch, i) => (
            <WatchPurchaseCard
              key={i}
              watch={watch}
              watchSelected={watchSelected}
              onClick={() => handleWatchSelected(watch)}
            />
          ))}
        </div>
      )}
      <div className="text-graylight">
        <p className="text-sm">
          {rental.numberWatchesRemaining === 0
            ? "Vous ne pouvez plus changer de montre"
            : `Vous pouvez encore changer de montre ${rental.numberWatchesRemaining} fois`}{" "}
          jusqu'au{" "}
          {addYear(new Date(rental.dateStart), 1).toLocaleDateString("fr-FR")},
        </p>
        <p className="text-xs">
          pour plus d'informations, voir les{" "}
          <span className="underline">conditions générales de location</span>
        </p>
      </div>
      {isFullScreen && (
        <button
          onClick={() => setIsFullScreen(false)}
          className="text-purplelight border rounded-lg p-2"
        >
          Annuler
        </button>
      )}
      {isFullScreen && (
        <button
          onClick={() => setIsFullScreen(false)}
          className="text-purplelight text-5xl absolute right-10 p-2"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      )}
      {!isFullScreen && (
        <div className="flex justify-end w-full">
          <button
            onClick={() => setIsUnsubscribeModalOpen(true)}
            className="text-purplelight"
          >
            Se désabonner
          </button>
        </div>
      )}
    </div>
  );
};

export default WatchRentalAccountCard;
