import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const HeaderPurchase = () => {
  return (
    <header className="w-full py-5 px-10 flex justify-center">
      <h1 className="gradient-text w-fit text-5xl">Tempo</h1>
      <Link
        to="/"
        className="absolute left-5 flex items-center italic text-sm gap-2"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
        Retour à l'accueil
      </Link>
    </header>
  );
};

export default HeaderPurchase;
