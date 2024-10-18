import useUser from "@/hooks/useUser";
import { formatPhoneNumber } from "@/utils/formatUtils";
import {
  faLocationDot,
  faRectangleList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigate } from "react-router-dom";
import AuthPurchase from "./AuthPurchase";

const UserDataPurchase = () => {
  const { isLoading, user } = useUser();

  if (isLoading) return;
  if (!user) return <AuthPurchase />;
  if (!user?.emailIsVerified) return <Navigate to="/verif-email" />;

  return (
    <div className="p-10 flex gap-10 justify-between">
      <div>
        <h2 className="uppercase font-bold mb-3">
          <FontAwesomeIcon icon={faRectangleList} /> Informations personnelles
        </h2>
        <p>
          {user?.firstName} {user?.lastName}
        </p>
        <p>{user?.email}</p>
        {/* <p>{user?.birthday.getDate()}</p> */}
        <p className="mb-5">
          {" "}
          {formatPhoneNumber(user?.phoneNumber.toString(), false)}
        </p>

        <h2 className="uppercase font-bold mb-3">
          <FontAwesomeIcon icon={faLocationDot} /> Adresse
        </h2>
        <p>{user?.location.address}</p>
        <p>
          {user?.location.postal_code} - {user?.location.city}
        </p>
      </div>
    </div>
  );
};

export default UserDataPurchase;
