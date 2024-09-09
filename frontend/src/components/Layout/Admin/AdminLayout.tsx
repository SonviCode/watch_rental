import { Outlet } from "react-router-dom";
import AsideAdmin from "./AsideAdmin";

const AdminLayout = () => {
  return (
    <>
      <main className="flex flex-grow">
        <AsideAdmin />
        <Outlet />
      </main>
    </>
  );
};

export default AdminLayout;
