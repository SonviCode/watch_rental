import { fetchUnsubscribeRental } from "@/services/api/rental";
import { fetchGetWatchsBySubId } from "@/services/api/watch";
import { Rental } from "@/types/rentalTypes";
import { User } from "@/types/userType";
import { Watch } from "@/types/watchTypes";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import WatchPurchaseCard from "./WatchPurchaseCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const confirmUnsubscribe = (rentalId: string) => {
    fetchUnsubscribeRental(rentalId, setRentals, user.id);
    setIsModalOpen(false);
  };

  const handleWatchSelected = (watch: Watch) => {
    setWatchSelected(watch);

    !watchSelected && setNbWatchesInRental(nbWatchesInRental + 1);
  };

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
  }, [isFullScreen]);

  const numbersOfWatchesRemaining = 4 - nbWatchesInRental;

  return (
    <div
      className={`transition-all duration-1000 ease 
                  ${isFullScreen ? "fixed inset-0 z-50 p-8" : ""} 
                  bg-blacklight rounded-lg p-5 flex flex-col gap-5 items-center`}
    >
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-blacklight rounded-lg p-10 shadow-lg text-center flex flex-col gap-10">
            {/* <h3>Confirm Deletion</h3> */}
            <p>Êtes-vous sûr de vouloir vous désabonner ?</p>
            <div className="flex justify-between">
              <button
                className="border rounded-lg p-2"
                onClick={() => confirmUnsubscribe(rental.id)}
              >
                Oui, sûr
              </button>
              <button
                className="border rounded-lg p-2"
                onClick={() => setIsModalOpen(false)}
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col items-start gap-5 w-full">
        <h2>Numéro de location : {rental.id}</h2>
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
      {watchSelected ? (
        <button className="text-greenfluo border border-white rounded-lg w-fit p-2">
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
      )}
      {isFullScreen &&
        watchs.map((watch, i) => (
          <WatchPurchaseCard
            key={i}
            watch={watch}
            watchSelected={watchSelected}
            onClick={() => handleWatchSelected(watch)}
          />
        ))}
      <div className="text-graylight">
        <p className="text-sm">
          Vous pouvez encore changer de montre 3 fois jusqu'au{" "}
          {new Date(rental.dateStart).toLocaleDateString("fr-FR")},
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
            onClick={() => setIsModalOpen(true)}
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
