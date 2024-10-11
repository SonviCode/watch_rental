import { SERVER_URL } from "@/constants/Constants";
import { setSubscription } from "@/store/slices/subscriptionSlice";
import { Watch } from "@/types/watchTypes";
import { faHeart as faHeartBorder } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const WatchCard = ({ watch }: { watch: Watch }) => {
  const [isFav, setIsFav] = useState<boolean>(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const isFav =
  return (
    <div
      onClick={() => navigate(`/watch/${watch.name}`, { state: { watch } })}
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
        <img
          src={SERVER_URL + watch.brand.logoImgUrl}
          alt={`logo ${watch.name}`}
        />
      </div>
      <img
        src={SERVER_URL + watch.images[0].imageUrl}
        alt={watch.name}
        className="max-h-[190px] w-full rounded-t-lg object-cover"
      />
      <div className="p-5 ">
        <p>{watch.name}</p>
        <p className="text-graylight text-xs mt-1 mb-2">
          <span className="italic text-sm">{watch.subscription.title}</span> -
          dès {watch.subscription.price}€/mois
        </p>

        <Link
          to="/purchase"
          onClick={() => dispatch(setSubscription(watch.subscription))}
          className="z-10 m-auto w-full flex justify-center gradient-bg rounded-lg px-2 py-1.5"
        >
          S'abonner
        </Link>
      </div>
    </div>
  );
};

export default WatchCard;
