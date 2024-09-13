import { fetchLogout } from "@/services/api/auth";
import {
  faCalendar,
  faEnvelopeOpen,
  faFileInvoice,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";

const AsideAccount = () => {
  const navigate = useNavigate();

  return (
    <aside className="border rounded-lg h-full p-5">
      <div className="mb-10">
        <h2 className="uppercase font-bold mb-3">Votre compte</h2>
        <Link to="/account" className="flex text-sm items-center gap-5 mb-5">
          <FontAwesomeIcon icon={faUser} />
          Compte principal
        </Link>
        <Link
          to="/account/invoices"
          className="flex text-sm items-center gap-5 mb-5"
        >
          <FontAwesomeIcon icon={faFileInvoice} />
          Factures
        </Link>
        <Link
          to="/account/orders"
          className="flex text-sm items-center gap-5 mb-5"
        >
          <FontAwesomeIcon icon={faCalendar} />
          Commandes
        </Link>
        <Link
          to="/account/favoris"
          className="flex text-sm items-center gap-5 mb-5"
        >
          <FontAwesomeIcon icon={faHeart} />
          Mes favoris
        </Link>
        <Link
          to="/account/alerts"
          className="flex text-sm items-center gap-5 mb-5"
        >
          <FontAwesomeIcon icon={faEnvelopeOpen} />
          Mes alertes
        </Link>
      </div>

      <button
        onClick={() => fetchLogout(navigate)}
        className="underline text-sm p-2"
      >
        Me déconnecter
      </button>
    </aside>
  );
};

export default AsideAccount;
