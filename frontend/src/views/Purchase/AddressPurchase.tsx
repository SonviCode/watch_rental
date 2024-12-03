import PurchaseAddressCard from "@/components/Purchase/PurchaseAddressCard";
import useUser from "@/hooks/useUser";
import { faLocationDot, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigate } from "react-router-dom";
import AuthPurchase from "./AuthPurchase";

const AddressPurchase = () => {
  const { isLoading, user } = useUser();
  // const [selectedAddress, setSelectedAddress] = useState<Address>();

  if (isLoading) return;
  if (!user) return <AuthPurchase />;
  if (!user?.emailIsVerified) return <Navigate to="/verif-email" />;

  // useEffect(() => {
  //   setSelectedAddress(user!.address[0]);
  // }, [user]);

  return (
    <div className="p-10 ">
      <h2 className="uppercase font-bold mb-3">
        <FontAwesomeIcon icon={faLocationDot} /> Adresse de livraison
      </h2>
      <div className="flex-col sm:flex-row flex gap-10 justify-between">
        {user.address.map((address, i) => (
          <PurchaseAddressCard
            key={i}
            address={address}
            // selectedAddress={selectedAddress}
            // setSelectedAddress={setSelectedAddress}
          />
        ))}
        <div className="border p-5 text-center rounded-lg flex justify-center items-center gap-5 max-w-1/2 w-full">
          <span>
            <FontAwesomeIcon icon={faPlus} /> ajouter une nouvelle adresse
          </span>
        </div>
      </div>
    </div>
  );
};

export default AddressPurchase;
