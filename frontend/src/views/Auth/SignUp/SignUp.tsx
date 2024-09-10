import { handleSignUpSubmit } from "@/services/handler/handleSubmit";
import { formatPhoneNumber } from "@/utils/formatUtils";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [phone, setPhone] = useState<string>("");
  const [seePswd, setSeePswd] = useState(false);
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  return (
    <div className="py-5 md:px-10">
      <h1 className="pb-5">
        Profitez de nos services et accédez à l'horlogerie de luxe, créez un
        compte !
      </h1>

      <form
        onSubmit={(e) => handleSignUpSubmit(e, setError, phone, navigate)}
        onChange={() => setError("")}
        className=" flex flex-col gap-5"
      >
        <div className="flex gap-5 ">
          <div className="w-1/2 relative">
            <input
              type="text"
              id="last_name"
              className="rounded-md bg-blacklight px-4 py-3 peer w-full"
              placeholder=""
              name="last_name"
              required
            />
            <label className="label-form" htmlFor="last_name">
              Nom
            </label>
          </div>
          <div className="w-1/2 relative">
            <input
              type="text"
              name="first_name"
              id="first_name"
              className="rounded-md bg-blacklight px-4 py-3 peer w-full"
              placeholder=""
              required
            />
            <label className="label-form" htmlFor="first_name">
              Prénom
            </label>
          </div>
        </div>
        <div className="relative">
          <input
            type="mail"
            name="email"
            id="email"
            className="rounded-md bg-blacklight px-4 py-3 peer w-full"
            placeholder=""
            required
          />
          <label className="label-form" htmlFor="email">
            Email
          </label>
        </div>
        <div className="relative">
          <input
            type={seePswd ? "text" : "password"}
            name="password"
            id="password"
            className="rounded-md bg-blacklight px-4 py-3 peer w-full"
            placeholder=""
            required
          />
          <label className="label-form" htmlFor="password">
            Mot de passe
          </label>
          <FontAwesomeIcon
            className="absolute text-graylight  right-2 top-1/2 -translate-y-1/2"
            icon={seePswd ? faEyeSlash : faEye}
            onClick={() => setSeePswd(!seePswd)}
          />
        </div>
        <div className="relative">
          <input
            type={seePswd ? "text" : "password"}
            id="password_confirm"
            className="rounded-md bg-blacklight px-4 py-3 peer w-full"
            placeholder=""
            required
          />
          <label className="label-form" htmlFor="password_confirm">
            Confirmer le mot de passe
          </label>
          <FontAwesomeIcon
            className="absolute text-graylight  right-2 top-1/2 -translate-y-1/2"
            icon={seePswd ? faEyeSlash : faEye}
            onClick={() => setSeePswd(!seePswd)}
          />
        </div>
        <div className="relative">
          <input
            type="date"
            name="birth_date"
            id="birth_date"
            className="rounded-md bg-blacklight px-4 py-3 peer w-full"
            placeholder=""
            required
          />
          <label className="label-form" htmlFor="brith_date">
            Date de naissance
          </label>
        </div>
        <div className="flex gap-5 ">
          <div className="w-1/2 relative">
            <input
              type="text"
              id="address"
              className="rounded-md bg-blacklight px-4 py-3 peer w-full"
              placeholder=""
              required
            />
            <label className="label-form" htmlFor="address">
              Adresse
            </label>
          </div>
          <div className="w-1/2 relative">
            <input
              type="text"
              id="additional_address"
              className="rounded-md bg-blacklight px-4 py-3 peer w-full"
              placeholder=""
            />
            <label className="label-form" htmlFor="additional_address">
              Complément d'adresse{" "}
              <span className="text-xs text-gray">( optionnel )</span>
            </label>
          </div>
        </div>
        <div className="flex gap-5 ">
          <div className="w-1/2 relative">
            <input
              type="text"
              id="city"
              className="rounded-md bg-blacklight px-4 py-3 peer w-full"
              placeholder=""
              required
            />
            <label className="label-form" htmlFor="city">
              Ville
            </label>
          </div>
          <div className="w-1/2 relative">
            <input
              type="text"
              id="postal_code"
              className="rounded-md bg-blacklight px-4 py-3 peer w-full"
              placeholder=""
              required
            />
            <label className="label-form" htmlFor="postal_code">
              Code postal
            </label>
          </div>
        </div>
        <div className="relative">
          <input
            className="rounded-md bg-blacklight px-4 py-3 peer w-full"
            placeholder=""
            id="phone_number"
            type="tel"
            value={formatPhoneNumber(phone)}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <label className="label-form" htmlFor="phone_number">
            Numéro de téléphone
          </label>
        </div>
        {/* <ReCAPTCHA sitekey={"6LeOB-QpAAAAAE78b0lDes68CY21Apv66yQI_CZv"} /> */}
        <ReCAPTCHA
          sitekey={import.meta.env.VITE_CAPTCHA_SITE_KEY!}
          // className="g-recaptcha"
          // style={{transform:"scale(0.85)", transformOrigin:"0 0"}}
          theme={"dark"}
        />
        <button
          className={`${
            error
              ? "border-red-600 hover:bg-red-600"
              : "border-greenfluo hover:bg-greenfluo"
          } border p-2 rounded-md hover:text-black`}
        >
          S'inscrire
        </button>
        {error && <p className="text-red-600 italic">{error}</p>}
        <Link to="/login" className="mt-10">
          Déjà un compte ?{" "}
          <span className="underline cursor-pointer">Se connecter</span>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
