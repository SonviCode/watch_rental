// import { InputsLogin } from "@/types/Inputs/InputsAccount";
import LoginForm from "@/components/Auth/LoginForm";
import { API_USER } from "@/constants/Constants";
import useFetchData from "@/hooks/useFetchData";
import { User } from "@/types/userType";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState<User>();

  const isLoading = useFetchData(setUser, API_USER);

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
