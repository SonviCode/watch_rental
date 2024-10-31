import { User } from "@/types/userType";
import { formatPhoneNumber } from "@/utils/formatUtils";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PurchaseAddress = ({ user }: { user: User }) => {
  return (
    <div className="border p-5 px-10 rounded-lg ">
      <h2 className="uppercase font-bold mb-3">
        <FontAwesomeIcon icon={faLocationDot} /> Adresse
      </h2>
      <div className="flex flex-col gap-1">
        <p>
          {user.firstName} {user.lastName}
        </p>
        <p>{user.address.mainAddress}</p>
        <p>
          {user.address.zipCode} {user.address.city}
        </p>
        <p>{user.address.country}</p>
        <p>{user.email}</p>
        {/* <p>{user?.birthday.getDate()}</p> */}
        <p> {formatPhoneNumber(user?.phoneNumber.toString(), false)}</p>
      </div>
    </div>
  );
};

export default PurchaseAddress;
