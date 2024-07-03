import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import NavBar from "./NavBar/NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <main className="pt-20 px-5 md:px-10 flex-grow">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
