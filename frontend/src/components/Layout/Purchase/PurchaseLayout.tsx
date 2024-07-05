import { Outlet } from "react-router-dom";
import HeaderPurchase from "./Header/HeaderPurchase";

const PurchaseLayout = () => {
  return (
    <>
      <HeaderPurchase />
      <main className="pt-20 px-5 md:px-10 flex-grow">
        <Outlet />
      </main>
    </>
  );
};

export default PurchaseLayout;
