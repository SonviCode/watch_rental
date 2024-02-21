import { formatPhoneNumber } from "@/utils/accountUtils";
import { Dispatch, SetStateAction, useState } from "react";

const SignUp = ({
  setLogin,
}: {
  setLogin: Dispatch<SetStateAction<boolean>>;
}) => {
  const [phone, setPhone] = useState<string>("");

  return (
    <div className="py-5 px-10">
      <h1 className="pb-5">
        Profitez de nos services et accédez à l'horlogerie de luxe, créez un
        compte !
      </h1>

      <form className=" flex flex-col gap-5">
        <div className="flex gap-5 ">
          <input
            type="text"
            name="name"
            id="name"
            className="rounded-md bg-blacklight px-4 py-3 w-1/2"
            placeholder="Nom"
            required
          />
          <input
            type="text"
            name="firstname"
            id="firstname"
            className="rounded-md bg-blacklight px-4 py-3 w-1/2"
            placeholder="Prénom"
            required
          />
        </div>
        <input
          type="mail"
          name="mail"
          id="mail"
          className="rounded-md bg-blacklight px-4 py-3"
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          className="rounded-md bg-blacklight px-4 py-3"
          placeholder="Mot de passe"
          required
        />
        <input
          type="password"
          name="passwordConfirm"
          id="passwordConfirm"
          className="rounded-md bg-blacklight px-4 py-3"
          placeholder="Confirmer le mot de passe"
          required
        />
        <input
          className="rounded-md bg-blacklight px-4 py-3"
          placeholder="Numéro de téléphone"
          name="phone"
          id="phone"
          type="tel"
          value={formatPhoneNumber(phone)}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button className="border p-2 rounded-md border-greenfluo hover:bg-greenfluo hover:text-black">
          S'inscrire
        </button>
        <p onClick={() => setLogin(true)}>
          Déjà un compte ?{" "}
          <span className="underline cursor-pointer">Se connecter</span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
