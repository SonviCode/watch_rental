import { NavLink } from "react-router-dom";
import logo from "@/assets/icon.png";
import { BRAND_NAME } from "@/constants/Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import useIsMobile from "@/hooks/useIsMobile";

const NavBar = () => {
  const isMobile = useIsMobile();

  return (
    <div className="fixed w-full flex justify-between px-10 py-5 backdrop-blur-3xl z-10">
      <NavLink to="/" className="flex items-center">
        <img src={logo} alt="logo" className="w-10" />
        <p>{BRAND_NAME}</p>
      </NavLink>

      <nav className="flex-center gap-10 uppercase text-sm">
        {isMobile ? (
          <FontAwesomeIcon className="text-xl" icon={faBars} />
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
              to="/account"
              className="hover:underline underline-offset-4"
            >
              Mon compte
            </NavLink>
          </>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
