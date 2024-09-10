// import { InputsLogin } from "@/types/Inputs/InputsAccount";
import { fetchLogin } from "@/services/api/auth";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [seePswd, setSeePswd] = useState(false);
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const elements = e.currentTarget.elements as unknown as HTMLFormElement;
    const email: string = elements.email.value;
    const password: string = elements.password.value;

    // if (email.trim() == "" || password.trim() == "") {
    //   setMsg(INPUT_EMPTY);
    // }

    fetchLogin(email, password, setError, navigate);
  };

  return (
    <div className="py-5 px-10">
      <h1 className="pb-5">
        Connectez-vous afin de profiter de toutes les fonctionnalités du site
      </h1>

      <form
        onSubmit={(e) => handleSubmit(e)}
        onChange={() => setError("")}
        className=" flex flex-col gap-5"
      >
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

        <button
          className={`${
            error
              ? "border-red-600 hover:bg-red-600"
              : "border-greenfluo hover:bg-greenfluo"
          } border p-2 rounded-md hover:text-black`}
        >
          Se connecter
        </button>
        {error && <p className="text-red-600 italic">{error}</p>}
        <Link to="/signup" className="mt-10">
          Pas encore de compte ?{" "}
          <span className="underline cursor-pointer ">S'inscrire</span>
        </Link>
      </form>
    </div>
  );
};

export default Login;
