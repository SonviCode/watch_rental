import rolexLogo from "@/assets/logo-rolex.png";
import imgWatch from "@/assets/rolex.jpg";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const WatchCard = () => {
  return (
    <Link
      to="/watch/submariner-date"
      className="rounded-lg bg-blacklight relative cursor-pointer"
    >
      <div className="absolute top-3 right-3 w-10 h-8 rounded-full flex items-center justify-center">
        <img src={rolexLogo} alt="logo rolex" />
      </div>
      <img
        src={imgWatch}
        alt="rolex"
        className="rounded-t-lg max-h-[200px] w-full object-cover"
      />
      <div className="p-5">
        <p>SUBMARINER DATE</p>
        <p className="text-graylight text-sm">
          à partir de <span className="text-base">59,99€</span>
        </p>
        <p className="text-greenfluo">
          En stock <FontAwesomeIcon icon={faCheck} />
        </p>
      </div>
    </Link>
  );
};

export default WatchCard;
