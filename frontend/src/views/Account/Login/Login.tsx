import { Dispatch, SetStateAction } from "react";

const Login = ({
  setLogin,
}: {
  setLogin: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="py-5 px-10">
      <h1 className="pb-5">
        Connectez-vous afin de profiter de toutes les fonctionnalités du site
      </h1>

      <form className=" flex flex-col gap-5">
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

        <button className="border p-2 rounded-md border-greenfluo hover:bg-greenfluo hover:text-black">
          Se connecter
        </button>
        <p onClick={() => setLogin(false)}>
          Pas encore de compte ?{" "}
          <span className="underline cursor-pointer">S'inscrire</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
