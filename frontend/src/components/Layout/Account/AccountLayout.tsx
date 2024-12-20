import { useUserOutletContext } from "@/router/ProtectedAuthRoute";
import { Outlet } from "react-router-dom";
import AsideAccount from "./AsideAccount";

const AccountLayout = () => {
  return (
    <div className="flex h-full">
      <AsideAccount />
      <Outlet context={useUserOutletContext()} />
    </div>
  );
};

export default AccountLayout;
