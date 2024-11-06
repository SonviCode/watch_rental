import PurchaseAddressCard from "@/components/Purchase/PurchaseAddressCard";
import { useUserOutletContext } from "@/router/ProtectedAuthRoute";
import { formatPhoneNumber } from "@/utils/formatUtils";
import {
  faLocationDot,
  faPlus,
  faRectangleList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigate } from "react-router-dom";

const Account = () => {
  // const [error, setError] = useState<string>("");
  const { user, isLoading } = useUserOutletContext();

  if (isLoading) return;

  if (!user?.emailIsVerified) return <Navigate to="/verif-email" />;
  // if (!user?.smsIsVerified) return <Navigate to="/verif-sms" />;

  return (
    <div className="flex flex-1 flex-col gap-10 py-5 pl-10 w-full">
      <h1 data-testid="account-title" className="uppercase font-bold text-xl ">
        <FontAwesomeIcon icon={faUser} className="mr-5" />
        Compte principal
      </h1>
      <div className="flex flex-col gap-5 justify-between w-full">
        <h2 className="uppercase font-bold">
          <FontAwesomeIcon icon={faRectangleList} /> Informations personnelles
        </h2>
        <div>
          <p>
            {user?.firstName} {user?.lastName}
          </p>
          <p>{user?.email}</p>
          <p> {formatPhoneNumber(user?.phoneNumber.toString(), false)}</p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="uppercase font-bold">
          <FontAwesomeIcon icon={faLocationDot} /> Adresse
        </h2>
        <div className="flex gap-10 justify-between">
          {user.address.map((address, i) => (
            <PurchaseAddressCard
              key={i}
              address={address}
              // selectedAddress={selectedAddress}
              // setSelectedAddress={setSelectedAddress}
            />
          ))}
          <div className="border p-5  rounded-lg flex justify-center items-center gap-5 max-w-1/2 w-full">
            <span>
              <FontAwesomeIcon icon={faPlus} /> ajouter une nouvelle adresse
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
