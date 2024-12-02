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
import { Value } from "node_modules/react-date-picker/dist/esm/shared/types";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import InputDateStart from "../DatePicker/InputDateStart";
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
  const [error, setError] = useState<string>("");
  const [watchs, setWatchs] = useState<Watch[]>([]);
  const [watchSelected, setWatchSelected] = useState<Watch>();
  const [newWatchStartDate, setNewWatchStartDate] = useState<Value>(null);
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
      setError,
      rental,
      rental.id,
      setRentals,
      setWatchSelected,
      setIsFullScreen,
      user.id,
      watchSelected!,
      newWatchStartDate
    );
    setIsWatchModalOpen(false);
  };

  const numbersOfWatchesRemaining =
    rental.subscription.numberMaxWatches - nbWatchesInRental;

  return (
    <div
      className={`transition-all duration-1000 ease 
                  ${
                    isFullScreen ? "fixed inset-0 z-50 p-8 overflow-y-auto" : ""
                  } 
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
      {isFullScreen && (
        <InputDateStart
          setStartDate={setNewWatchStartDate}
          startDate={newWatchStartDate}
          text={"Date de récupération de la nouvelle montre"}
          minDate={rental.watch[rental.watch.length - 1].pivotDateStart}
        />
      )}
      <div className="flex gap-10 items-end">
        {rental.watch.map((watch, i) => (
          <div key={i} className="relative flex flex-col">
            {watch.pivotDateStart && (
              <div className="text-graylight text-xs flex flex-col">
                <span>
                  {new Date(watch.pivotDateStart).toLocaleDateString("fr-FR")} -{" "}
                </span>
                <span>
                  {watch.pivotDateEnd
                    ? new Date(watch.pivotDateEnd).toLocaleDateString("fr-FR")
                    : "actif"}
                </span>
              </div>
            )}
            <WatchPurchaseCard key={i} watch={watch} />
          </div>
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
      {error && <span className="italic text-red-600">{error} !</span>}
      <div className="text-graylight">
        <p className="text-sm">
          {rental.numberWatchesRemaining === 0
            ? "Vous ne pouvez plus changer de montre"
            : `Vous pouvez encore changer de montre ${rental.numberWatchesRemaining} fois`}{" "}
          jusqu'au{" "}
          {addYear(new Date(rental.dateStart), 1).toLocaleDateString("fr-FR")},
        </p>
        <p>
          La durée minimum avant d'échanger votre montre est d'un mois de
          location.
        </p>
        <p className="text-xs">
          pour plus d'informations, voir les{" "}
          <span className="underline">conditions générales de location</span>
        </p>
      </div>
      {isFullScreen && (
        <>
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

          <button
            onClick={() => setIsFullScreen(false)}
            className="text-purplelight border rounded-lg p-2"
          >
            Annuler
          </button>

          <button
            onClick={() => setIsFullScreen(false)}
            className="text-purplelight text-5xl absolute right-10"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </>
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
