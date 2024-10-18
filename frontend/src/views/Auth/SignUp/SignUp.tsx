import SignUpForm from "@/components/Auth/SignUpForm";
import useUser from "@/hooks/useUser";
import { Link, Navigate } from "react-router-dom";

const SignUp = () => {
  const { isLoading, user } = useUser();

  if (isLoading) return;
  if (user) return <Navigate to="/account" />;

  return (
    <div className="py-5 md:px-10">
      <h1 className="pb-5">
        Profitez de nos services et accédez à l'horlogerie de luxe, créez un
        compte !
      </h1>
      <SignUpForm />
      <Link to="/login" className="flex mt-10">
        Déjà un compte ?{" "}
        <span className="underline cursor-pointer ml-2">Se connecter</span>
      </Link>
    </div>
  );
};

export default SignUp;
