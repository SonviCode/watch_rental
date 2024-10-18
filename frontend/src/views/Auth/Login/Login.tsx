// import { InputsLogin } from "@/types/Inputs/InputsAccount";
import LoginForm from "@/components/Auth/LoginForm";
import useUser from "@/hooks/useUser";
import { Link, Navigate } from "react-router-dom";

const Login = () => {
  const { isLoading, user } = useUser();

  if (isLoading) return;

  if (user) return <Navigate to="/account" />;

  return (
    <div className="py-5 px-10">
      <h1 className="pb-5">
        Connectez-vous afin de profiter de toutes les fonctionnalités du site
      </h1>
      <LoginForm />
      <Link to="/signup" className="flex mt-10">
        Pas encore de compte ?{" "}
        <span className="underline cursor-pointer ml-2">S'inscrire</span>
      </Link>
    </div>
  );
};

export default Login;
