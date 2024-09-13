import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Favoris = () => {
  return (
    <div className="flex flex-col gap-10 p-5">
      <h1
        data-testid="account-favoris-title"
        className="uppercase font-bold text-xl mb-5"
      >
        <FontAwesomeIcon icon={faHeart} className="mr-5"/>
        Mes favoris
      </h1>
      // TODO !
    </div>
  );
};

export default Favoris;
