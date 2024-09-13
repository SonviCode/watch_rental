import { Outlet } from "react-router-dom";
import AsideAccount from "./AsideAccount";

const AccountLayout = () => {
  return (
    <div className="flex h-full">
      <AsideAccount />
      <Outlet />
    </div>
  );
};

export default AccountLayout;
