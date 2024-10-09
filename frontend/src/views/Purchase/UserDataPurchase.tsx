import LoginForm from "@/components/Auth/LoginForm";
import SignUpForm from "@/components/Auth/SignUpForm";
import { API_USER } from "@/constants/Constants";
import useFetchData from "@/hooks/useFetchData";
import { User } from "@/types/userType";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const UserDataPurchase = () => {
  const [user, setUser] = useState<User>();
  const [signUp, setSignUp] = useState(true);

  const isLoading = useFetchData(setUser, API_USER);

  if (isLoading) return;

  if (!user)
    return (
      <div className="m-10 p-5 bg-black rounded-md">
        {signUp ? (
          <>
            <LoginForm />
            <div className="flex mt-10">
              Pas encore de compte ?{" "}
              <span
                onClick={() => setSignUp(false)}
                className="underline cursor-pointer ml-2"
              >
                S'inscrire
              </span>
            </div>
          </>
        ) : (
          <>
            <SignUpForm />
            <div className="flex mt-10">
              Déjà un compte ?{" "}
              <span
                onClick={() => setSignUp(true)}
                className="underline cursor-pointer ml-2"
              >
                Se connecter
              </span>
            </div>
          </>
        )}
      </div>
    );

  if (!user?.emailIsVerified) return <Navigate to="/verif-email" />;

  return <div className="p-10">user data</div>;
};

export default UserDataPurchase;
