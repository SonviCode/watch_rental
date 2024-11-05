import { fetchLogout } from "@/services/api/auth";
import {
  faCalendar,
  faEnvelopeOpen,
  faFileInvoice,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation, useNavigate } from "react-router-dom";

const AsideAccount = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="border rounded-lg h-full p-5 flex flex-col justify-between">
      <div className="mb-10">
        <h2 className="uppercase font-bold mb-3">Votre compte</h2>
        <Link
          to="/account"
          className={`${
            location.pathname === "/account" && "text-greenfluo"
          } flex text-sm items-center gap-5 mb-5`}
        >
          <FontAwesomeIcon icon={faUser} />
          Compte principal
        </Link>
        <Link
          to="/account/invoices"
          className={`${
            location.pathname === "/account/invoices" && "text-greenfluo"
          } flex text-sm items-center gap-5 mb-5`}
        >
          <FontAwesomeIcon icon={faFileInvoice} />
          Factures
        </Link>
        <Link
          to="/account/location"
          className={`${
            location.pathname === "/account/location" && "text-greenfluo"
          } flex text-sm items-center gap-5 mb-5`}
        >
          <FontAwesomeIcon icon={faCalendar} />
          Locations
        </Link>
        <Link
          to="/account/favoris"
          className={`${
            location.pathname === "/account/favoris" && "text-greenfluo"
          } flex text-sm items-center gap-5 mb-5`}
        >
          <FontAwesomeIcon icon={faHeart} />
          Mes favoris
        </Link>
        <Link
          to="/account/alerts"
          className={`${
            location.pathname === "/account/alerts" && "text-greenfluo"
          } flex text-sm items-center gap-5 mb-5`}
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
