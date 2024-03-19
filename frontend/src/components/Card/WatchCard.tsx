import rolexLogo from "@/assets/logo-rolex.png";
import imgWatch from "@/assets/rolex.jpg";
import { faCheck, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartBorder } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState } from "react";

const WatchCard = () => {
  const [isFav, setIsFav] = useState<boolean>(false);

  // const isFav =

  return (
    <Link
      to="/watch/submariner-date"
      className="rounded-lg bg-blacklight relative cursor-pointer"
    >
      <div
        className="absolute top-3 left-3 rounded-full flex items-center justify-center z-10 p-2 bg-graylight"
        onClick={(e) => {
          e.preventDefault(), setIsFav(!isFav);
        }}
      >
        <FontAwesomeIcon
          className="text-purple w-5 h-5"
          icon={isFav ? faHeart : faHeartBorder}
        />
      </div>
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
