import WatchRentalAccountCard from "@/components/Card/WatchRentalAccountCard";
import RentalTable from "@/components/Table/RentalTable";
import { API_RENTALS_BY_USER } from "@/constants/Constants";
import useFetchData from "@/hooks/useFetchData";
import { useUserOutletContext } from "@/router/ProtectedAuthRoute";
import { Rental } from "@/types/rentalTypes";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Rentals = () => {
  const [rentals, setRentals] = useState<Rental[]>([]);

  const { user } = useUserOutletContext();
  const { isLoading: rentalIsLoading } = useFetchData(
    setRentals,
    API_RENTALS_BY_USER + user?.id
  );

  if (rentalIsLoading || !user) return;

  const activeRental = rentals.filter(
    (rental) => rental.status.statusName === "ACTIF"
  );

  return (
    <div className="flex flex-1 w-full pl-10 flex-col gap-10 py-5">
      <h1
        data-testid="account-orders-title"
        className="uppercase font-bold text-xl "
      >
        <FontAwesomeIcon icon={faCalendar} className="mr-5" />
        Mes locations
      </h1>
      <div className="flex gap-5 flex-col">
        <h2 className="uppercase font-bold">Location active</h2>
        <div className="flex flex-col gap-10">
          {activeRental.length > 0 ? (
            activeRental.map((rental, i) => (
              <WatchRentalAccountCard
                key={i}
                rental={rental}
                setRentals={setRentals}
                user={user}
              />
            ))
          ) : (
            <p className="bg-blacklight rounded-lg p-5">Vous n'avez aucune location en cours</p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="uppercase font-bold">Historique des locations</h2>
        <div className="border rounded-lg">
          <RentalTable rentals={rentals} />
        </div>
      </div>
    </div>
  );
};

export default Rentals;
