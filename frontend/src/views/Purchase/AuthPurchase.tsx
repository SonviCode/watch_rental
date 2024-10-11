import LoginForm from "@/components/Auth/LoginForm";
import SignUpForm from "@/components/Auth/SignUpForm";
import { useState } from "react";

const AuthPurchase = () => {
  const [signUp, setSignUp] = useState(true);

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
};

export default AuthPurchase;
