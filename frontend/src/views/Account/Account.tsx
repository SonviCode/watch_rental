import { useUserOutletContext } from "@/router/ProtectedAuthRoute";
import { formatPhoneNumber } from "@/utils/formatUtils";
import {
  faLocationDot,
  faRectangleList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigate } from "react-router-dom";

const Account = () => {
  // const [error, setError] = useState<string>("");
  const { user } = useUserOutletContext();

  // if (isLoading) return;

  if (!user?.emailIsVerified) return <Navigate to="/verif-email" />;
  // if (!user?.smsIsVerified) return <Navigate to="/verif-sms" />;

  return (
    <div className="flex flex-1 flex-col gap-10 p-5">
      <h1 data-testid="account-title" className="uppercase font-bold text-xl ">
        <FontAwesomeIcon icon={faUser} className="mr-5" />
        Compte principal
      </h1>
      <div className="flex gap-10 justify-between">
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
    </div>
  );
};

export default Account;
