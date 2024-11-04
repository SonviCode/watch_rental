import { API_RENTAL } from "@/constants/Constants";
import useFetchData from "@/hooks/useFetchData";
import { Rental } from "@/types/rentalTypes";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentCompleted = () => {
  const [rental, setRental] = useState<Rental>();
  const location = useLocation();
  const navigate = useNavigate();

  const rental_id = location.state?.rental_id;
  const { isLoading } = useFetchData(setRental, API_RENTAL + "/" + rental_id);

  if (isLoading) return;
  if (!rental) return navigate("/");

  return (
    <div className="p-5 flex flex-col gap-5">
      <div className="text-center text-xl">
        <FontAwesomeIcon icon={faCircleCheck} className="text-4xl" />
        <h1>Paiement réussi !</h1>
      </div>
      <div className="border rounded-lg">
        <table className="w-full text-sm text-left text-gray-900">
          <tbody>
            <tr className="even:bg-blacklight  border-b">
              <td className="px-6 py-4 font-medium">Utilisateur</td>
              <td className="px-6 py-4 text-right">
                {rental?.user.firstName} {rental?.user.lastName}
              </td>
            </tr>
            <tr className="even:bg-blacklight  border-b">
              <td className="px-6 py-4 font-medium">Adresse de livraison</td>
              <td className="px-6 py-4 text-right">
                {rental?.user.address[0].mainAddress}{" "}
                {rental?.user.address[0].zipCode} {rental?.user.address[0].city}{" "}
                {rental?.user.address[0].country}
              </td>
            </tr>
            <tr className="even:bg-blacklight  border-b">
              <td className="px-6 py-4 font-medium">Abonnement</td>
              <td className="px-6 py-4 text-right">
                {rental?.subscription.title}
              </td>
            </tr>
            <tr className="even:bg-blacklight  border-b">
              <td className="px-6 py-4 font-medium">Prix</td>
              <td className="px-6 py-4 text-right">
                {rental?.subscription.price}€ / mois
              </td>
            </tr>
            <tr className="even:bg-blacklight  border-b">
              <td className="px-6 py-4 font-medium">Montre séléctionée</td>
              <td className="px-6 py-4 text-right">{rental?.watch[0].name}</td>
            </tr>
            <tr className="even:bg-blacklight rounded-lg">
              <td className="px-6 py-4 font-medium rounded-lg">
                Date de démarrage de la location
              </td>
              <td className="px-6 py-4 rounded-lg text-right">
                {new Date(rental?.dateStart).toLocaleDateString("fr-FR")}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentCompleted;
