import { Outlet } from "react-router-dom";
import HeaderPurchase from "./Header/HeaderPurchase";

const PurchaseLayout = () => {
  return (
    <>
      <HeaderPurchase />
      <main className="   flex-grow">
        <Outlet />
      </main>
    </>
  );
};

export default PurchaseLayout;
