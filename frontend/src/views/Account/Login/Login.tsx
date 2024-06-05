// import { InputsLogin } from "@/types/Inputs/InputsAccount";
import { fetchLogin } from "@/services/api/account";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
// import { SubmitHandler, useForm } from "react-hook-form";

const Login = ({
  setLogin,
}: {
  setLogin: Dispatch<SetStateAction<boolean>>;
}) => {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm<InputsLogin>();
  // const onSubmit: SubmitHandler<InputsLogin> = (data) => console.log(data);

  const [seePswd, setSeePswd] = useState(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const elements = e.currentTarget.elements as unknown as HTMLFormElement;
    const email: string = elements.email.value;
    const password: string = elements.password.value;

    // if (email.trim() == "" || password.trim() == "") {
    //   setMsg(INPUT_EMPTY);
    // }

    fetchLogin(email, password, setError);
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
        <p className="mt-10" onClick={() => setLogin(false)}>
          Pas encore de compte ?{" "}
          <span className="underline cursor-pointer ">S'inscrire</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
