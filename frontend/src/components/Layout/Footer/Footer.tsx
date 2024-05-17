import { BRAND_NAME } from "@/constants/Constants";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="w-full p-10 pt-40">
      <p className="text-center uppercase tracking-wide">
        <span className="text-greenfluo ">{BRAND_NAME}</span>, la location de
        montres
      </p>
      <div className="flex flex-col justify-between gap-10 pt-20 sm:flex-row">
        <div>
          <h4 className="underline">Nos réseaux sociaux :</h4>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-3">
              {" "}
              <FontAwesomeIcon icon={faFacebook} />
              Facebook
            </li>
            <li className="flex items-center gap-3">
              <FontAwesomeIcon icon={faInstagram} />
              Instagram
            </li>
            <li className="flex items-center gap-3">
              <FontAwesomeIcon icon={faTwitter} />
              Twitter
            </li>
          </ul>
        </div>
        {/* <ul className="flex flex-col gap-2"></ul> */}
        <div>
          <h4>Informations générales :</h4>
          <ul className="flex flex-col gap-2">
            <li>Tempo SA</li>
            <li>Strasbourg, France</li>
            <li>info@tempo-montres.com</li>
            <li>FAQ</li>
          </ul>
        </div>
        <ul className="flex flex-col gap-2">
          <li>Politique de confidentialité</li>
          <li>Gestion des cookies</li>
          <li>Mentions légales</li>
          <li>CGV</li>
        </ul>
      </div>
      <p className="text-gray text-balance pt-10 text-center text-xs">
        Copyright © {new Date().getFullYear()} Tempo. Tous droits réservés.
        N'importe quelle reproduction, modification, distribution ou utilisation
        non autorisée de ce contenu est strictement interdit.
      </p>
    </footer>
  );
};

export default Footer;
