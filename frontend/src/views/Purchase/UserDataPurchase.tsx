import PurchaseAddress from "@/components/Purchase/PurchaseAddress";
import useUser from "@/hooks/useUser";
import { Navigate } from "react-router-dom";
import AuthPurchase from "./AuthPurchase";

const UserDataPurchase = () => {
  const { isLoading, user } = useUser();

  if (isLoading) return;
  if (!user) return <AuthPurchase />;
  if (!user?.emailIsVerified) return <Navigate to="/verif-email" />;

  return (
    <div className="p-10 flex gap-10 justify-between">
      <PurchaseAddress user={user} />
    </div>
  );
};

export default UserDataPurchase;
