import {
  faCalendar,
  faClock,
  faFileInvoice,
  faHome,
  faLayerGroup,
  faSignal,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const AsideAdmin = () => {
  return (
    <aside className="bg-blacklight h-full p-5">
      <Link to="/" className="flex  italic text-sm gap-2 mb-5">
        <FontAwesomeIcon icon={faHome} />
        Accueil
      </Link>

      <h1 className="gradient-text uppercase text-bold text-xl mb-10">
        Tempo Admin
      </h1>
      <div>
        <h2 className="text-gray mb-3">Données</h2>
        <Link
          to="/admin/users"
          className="flex text-sm items-center gap-5 mb-5"
        >
          <FontAwesomeIcon icon={faUser} />
          Utilisateurs
        </Link>
        <Link
          to="/admin/subscriptions"
          className="flex text-sm items-center gap-5 mb-5"
        >
          <FontAwesomeIcon icon={faLayerGroup} />
          Abonnements
        </Link>
        <Link
          to="/admin/watches"
          className="flex text-sm items-center gap-5 mb-5"
        >
          <FontAwesomeIcon icon={faClock} />
          Montres
        </Link>
        <Link
          to="/admin/status"
          className="flex text-sm items-center gap-5 mb-5"
        >
          <FontAwesomeIcon icon={faSignal} />
          Status
        </Link>
        <Link
          to="/admin/factures"
          className="flex text-sm items-center gap-5 mb-5"
        >
          <FontAwesomeIcon icon={faFileInvoice} />
          Factures
        </Link>
        <Link
          to="/admin/locations"
          className="flex text-sm items-center gap-5 mb-5"
        >
          <FontAwesomeIcon icon={faCalendar} />
          Locations
        </Link>
      </div>
    </aside>
  );
};

export default AsideAdmin;
