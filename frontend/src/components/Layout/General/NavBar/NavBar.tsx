import { NavLink } from "react-router-dom";
import logo from "@/assets/icon.png";
import { BRAND_NAME } from "@/constants/Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import useIsMobile from "@/hooks/useIsMobile";
import { useState } from "react";

const NavBar = () => {
  const isMobile = useIsMobile();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <div className="fixed w-full flex justify-between px-10 py-5 backdrop-blur-3xl z-50">
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="logo" className="w-10" />
          <p>{BRAND_NAME}</p>
        </NavLink>

        <nav className="flex-center gap-10 uppercase text-sm">
          {isMobile ? (
            <FontAwesomeIcon
              className="text-xl cursor-pointer"
              icon={faBars}
              onClick={toggleModal}
            />
          ) : (
            <>
              <NavLink
                to="/subscription"
                className="hover:underline underline-offset-4"
              >
                Nos abonnements
              </NavLink>
              <NavLink
                to="/watchs"
                className="hover:underline underline-offset-4"
              >
                Nos montres
              </NavLink>
              <NavLink
                to="/contact"
                className="hover:underline underline-offset-4"
              >
                Contact
              </NavLink>
              <NavLink
                to="/login"
                className="hover:underline underline-offset-4"
              >
                Mon compte
              </NavLink>
            </>
          )}
        </nav>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-blacklight w-3/4 max-w-md rounded-lg p-5 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <NavLink
                to="/"
                className="font-bold text-lg"
                onClick={toggleModal}
              >
                <p>Accueil</p>
              </NavLink>
              <FontAwesomeIcon
                icon={faTimes}
                className="text-xl cursor-pointer"
                onClick={toggleModal}
              />
            </div>
            <nav className="flex flex-col gap-4 uppercase text-sm">
              <NavLink
                to="/subscription"
                className="hover:underline"
                onClick={toggleModal}
              >
                Nos abonnements
              </NavLink>
              <NavLink
                to="/watchs"
                className="hover:underline"
                onClick={toggleModal}
              >
                Nos montres
              </NavLink>
              <NavLink
                to="/contact"
                className="hover:underline"
                onClick={toggleModal}
              >
                Contact
              </NavLink>
              <NavLink
                to="/login"
                className="hover:underline"
                onClick={toggleModal}
              >
                Mon compte
              </NavLink>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
