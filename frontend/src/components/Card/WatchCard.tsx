import rolexLogo from "@/assets/logo-rolex.png";
import imgWatch from "@/assets/rolex.jpg";
import { faHeart as faHeartBorder } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

const WatchCard = () => {
  const [isFav, setIsFav] = useState<boolean>(false);

  // const isFav =

  return (
    <Link
      to="/watch/submariner-date"
      className="bg-blacklight relative cursor-pointer rounded-lg"
    >
      <div
        className="absolute left-3 top-3 z-10 flex items-center justify-center rounded-full p-1.5"
        onClick={(e) => {
          e.preventDefault(), setIsFav(!isFav);
        }}
      >
        <FontAwesomeIcon
          className="text-purple size-5"
          icon={isFav ? faHeart : faHeartBorder}
        />
      </div>
      <div className="absolute right-3 top-3 flex h-8 w-10 items-center justify-center rounded-full">
        <img src={rolexLogo} alt="logo rolex" />
      </div>
      <img
        src={imgWatch}
        alt="rolex"
        className="max-h-[190px] w-full rounded-t-lg object-cover"
      />
      <div className="p-5">
        <p>SUBMARINER DATE</p>
        <p className="text-graylight text-xs mt-1">
          <span className="italic text-sm">Essentiel</span> - dès 145€/mois
        </p>
        <p className="underline underline-offset-2 w-fit rounded-lg text-sm mb-2">Abonnement</p>
        <button className="m-auto w-full text-center gradient-btn rounded-lg px-2 py-1.5">
          S'abonner
        </button>
        {/* <p className="text-graylight text-sm">
          à partir de <span className="text-base">59,99€</span>
        </p>
        <p className="text-greenfluo">
          En stock <FontAwesomeIcon icon={faCheck} />
        </p> */}
      </div>
    </Link>
  );
};

export default WatchCard;
