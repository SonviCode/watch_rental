import { API_INVOICE, API_RENTAL, SERVER_URL } from "@/constants/Constants";
import useFetchData from "@/hooks/useFetchData";
import { Invoice } from "@/types/invoiceTypes";
import { Rental } from "@/types/rentalTypes";
import {
  faCircleCheck,
  faFilePdf,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const PaymentCompleted = () => {
  const [rental, setRental] = useState<Rental>();
  const [invoice, setInvoice] = useState<Invoice>();
  const location = useLocation();
  const navigate = useNavigate();

  const rental_id = location.state?.rental_id;
  const invoice_id = location.state?.invoice_id;

  const { isLoading: isRentalLoading } = useFetchData(
    setRental,
    API_RENTAL + "/" + rental_id
  );
  const { isLoading: isInvoiceLoading } = useFetchData(
    setInvoice,
    API_INVOICE + "/" + invoice_id
  );

  if (isRentalLoading || isInvoiceLoading) return;
  if (!rental) {
    navigate("/");
    return;
  }

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

      <div className="flex justify-between">
        <Link to="/" className="rounded-lg border border-purple px-4 py-2">
          Retour à l'accueil <FontAwesomeIcon icon={faHome} />
        </Link>
        <a
          href={SERVER_URL + invoice?.pdfUrl}
          target="_blank"
          download
          className="rounded-lg border border-purple px-4 py-2"
        >
          Télécharger la facture <FontAwesomeIcon icon={faFilePdf} />
        </a>
      </div>
    </div>
  );
};

export default PaymentCompleted;
