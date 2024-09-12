import { fetchLogout } from "@/services/api/auth";
import {
    faClock,
    faFileInvoice,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";

const AsideAccount = () => {
  const navigate = useNavigate();

  return (
    <aside className="bg-blacklight h-full p-5">
      <div>
        <h2 className="text-gray mb-3">Données</h2>
        <Link to="/account" className="flex text-sm items-center gap-5 mb-5">
          <FontAwesomeIcon icon={faUser} />
          Compte principal
        </Link>
        <Link
          to="/admin/subscriptions"
          className="flex text-sm items-center gap-5 mb-5"
        >
          <FontAwesomeIcon icon={faFileInvoice} />
          Factures
        </Link>
        <Link
          to="/admin/watches"
          className="flex text-sm items-center gap-5 mb-5"
        >
          <FontAwesomeIcon icon={faClock} />
          Montres
        </Link>
      </div>
      <div className="text-sm">
        <button
          onClick={() => fetchLogout(navigate)}
          className="border rounded-md p-2"
        >
          Me déconnecter
        </button>
      </div>
    </aside>
  );
};

export default AsideAccount;
