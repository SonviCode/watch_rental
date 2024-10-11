import { handleLoginSubmit } from "@/services/handler/handleSubmit";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const LoginForm = () => {
  const [seePswd, setSeePswd] = useState(false);
  const [error, setError] = useState<string>("");

  return (
    <form
      onSubmit={(e) => handleLoginSubmit(e, setError)}
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
        data-testid="login-btn"
        className={`${
          error
            ? "border-red-600 hover:bg-red-600"
            : "border-greenfluo hover:bg-greenfluo"
        } border p-2 rounded-md hover:text-black`}
      >
        Se connecter
      </button>
      {error && <p className="text-red-600 italic">{error}</p>}
    </form>
  );
};

export default LoginForm;
