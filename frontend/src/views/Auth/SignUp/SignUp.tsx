import SignUpForm from "@/components/Auth/SignUpForm";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="py-5 md:px-10">
      <h1 className="pb-5">
        Profitez de nos services et accédez à l'horlogerie de luxe, créez un
        compte !
      </h1>
      <SignUpForm />
      <Link to="/login" className="flex mt-10">
        Déjà un compte ?{" "}
        <span className="underline cursor-pointer">Se connecter</span>
      </Link>
    </div>
  );
};

export default SignUp;
