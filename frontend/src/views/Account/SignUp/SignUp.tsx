import { DIFFERENT_PASSWORD } from "@/constants/Constants";
import { fetchSignUp } from "@/services/api/account";
import { formatPhoneNumber } from "@/utils/accountUtils";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const SignUp = ({
  setLogin,
}: {
  setLogin: Dispatch<SetStateAction<boolean>>;
}) => {
  const [phone, setPhone] = useState<string>("");
  const [seePswd, setSeePswd] = useState(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const elements = e.currentTarget.elements as unknown as HTMLFormElement;
    const password = elements.password.value;
    const password_confirm = elements.password_confirm.value;

    if (password !== password_confirm) {
      setError(DIFFERENT_PASSWORD);
      return;
    }

    formData.set("phone_number", phone.trim());

    fetchSignUp(formData, setError);
  };
  // const onSubmit: SubmitHandler<InputsSignUp> = (data) => fetchSignUp(data, setError);

  return (
    <div className="py-5 md:px-10">
      <h1 className="pb-5">
        Profitez de nos services et accédez à l'horlogerie de luxe, créez un
        compte !
      </h1>

      <form
        onSubmit={(e) => handleSubmit(e)}
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
            <label className="label-auth" htmlFor="last_name">
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
            <label className="label-auth" htmlFor="first_name">
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
          <label className="label-auth" htmlFor="email">
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
          <label className="label-auth" htmlFor="password">
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
          <label className="label-auth" htmlFor="password_confirm">
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
            name="birth"
            id="birth"
            className="rounded-md bg-blacklight px-4 py-3 peer w-full"
            placeholder=""
            required
          />
          <label className="label-auth" htmlFor="brith">
            Date de naissance
          </label>
        </div>
        <div className="flex gap-5 ">
          <div className="w-1/2 relative">
            <input
              type="text"
              id="address"
              name="address"
              className="rounded-md bg-blacklight px-4 py-3 peer w-full"
              placeholder=""
              required
            />
            <label className="label-auth" htmlFor="address">
              Adresse
            </label>
          </div>
          <div className="w-1/2 relative">
            <input
              type="text"
              name="additional_address"
              id="additional_address"
              className="rounded-md bg-blacklight px-4 py-3 peer w-full"
              placeholder=""
            />
            <label className="label-auth" htmlFor="additional_address">
              Complément d'adresse <span className="text-xs text-gray">( optionnel )</span>
            </label>
          </div>
        </div>
        <div className="flex gap-5 ">
          <div className="w-1/2 relative">
            <input
              type="text"
              id="city"
              name="city"
              className="rounded-md bg-blacklight px-4 py-3 peer w-full"
              placeholder=""
              required
            />
            <label className="label-auth" htmlFor="city">
              Ville
            </label>
          </div>
          <div className="w-1/2 relative">
            <input
              type="text"
              name="postcode"
              id="postcode"
              className="rounded-md bg-blacklight px-4 py-3 peer w-full"
              placeholder=""
              required
            />
            <label className="label-auth" htmlFor="postcode">
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
          <label className="label-auth" htmlFor="phone_number">
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
        <p className="mt-10" onClick={() => setLogin(true)}>
          Déjà un compte ?{" "}
          <span className="underline cursor-pointer">Se connecter</span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
