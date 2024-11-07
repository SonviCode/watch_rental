import { Address } from "@/types/userType";
// import { formatPhoneNumber } from "@/utils/formatUtils";
import { faCircleCheck, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PurchaseAddressCard = ({
  address,
  selectedAddress,
}: {
  address: Address;
  selectedAddress?: Address | undefined;
}) => {
  const isSelected = selectedAddress === address;

  return (
    <div
      className={`${
        isSelected && "border-purple"
      } border p-5 rounded-lg flex justify-between gap-5 max-w-1/2 w-full`}
    >
      <div className="flex gap-8">
        <FontAwesomeIcon icon={faCircleCheck} className="pt-1" />
        <div className="flex flex-col gap-1">
          <p>Tom Sonvico</p>
          {/* <p>
          {address.firstName} {address.lastName}
          </p> */}
          <p>{address.mainAddress}</p>
          <p>
            {address.zipCode} {address.city}
          </p>
          <p>{address.country}</p>
          <p>07 82 93 45 30</p>
          {/* <p> {formatPhoneNumber(address.phoneNumber.toString(), false)}</p> */}
        </div>
      </div>
      <div>
        <FontAwesomeIcon icon={faPen} />
      </div>
    </div>
  );
};

export default PurchaseAddressCard;
