import {
    faHome,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const AsideAdmin = () => {
  return (
    <aside className="bg-blacklight h-full w-[280px] p-5">
      <Link to="/" className="flex  italic text-sm gap-2 mb-5">
        <FontAwesomeIcon icon={faHome} />
        Retour à l'accueil
      </Link>

      <h1 className="gradient-text text-center text-xl mb-10">Tempo - Admin</h1>
      <div>
        <h2 className="text-gray mb-3">Données</h2>
        <Link to="/" className="flex text-sm items-center gap-5 mb-5">
          <FontAwesomeIcon icon={faUser} />
          Utilisateurs
        </Link>
      </div>
    </aside>
  );
};

export default AsideAdmin;
