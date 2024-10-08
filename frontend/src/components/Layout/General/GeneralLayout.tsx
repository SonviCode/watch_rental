import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./Footer/Footer";
import NavBar from "./NavBar/NavBar";

const GeneralLayout = () => {
  return (
    <>
      <NavBar />
      <main className="pt-20 px-5 md:px-10 flex-grow">
        <Outlet />
        <ScrollRestoration />
      </main>
      <Footer />
    </>
  );
};

export default GeneralLayout;
