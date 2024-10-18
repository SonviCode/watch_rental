import { useUserOutletContext } from "@/router/ProtectedAuthRoute";
import {
  fetchLogout,
  fetchResendOtpEmail,
  fetchVerifyMail,
} from "@/services/api/auth";
import "@/style/custom/otpInputStyle.css";
import { useState } from "react";
import OtpInput from "react-otp-input";
import { Navigate, useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const [message, setMessage] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const { user } = useUserOutletContext();

  const navigate = useNavigate();

  // if (isLoading) return;
  if (user?.emailIsVerified) return <Navigate to="/account" />;

  return (
    <section className="flex flex-col justify-center items-center pt-10 gap-20">
      <div className="bg-blacklight p-10 rounded-md max-w-xl text-center flex flex-col gap-10 items-center">
        <h1>
          Veuillez saisir le code envoyé par e-mail à{" "}
          <span className="italic">{user?.email}</span> afin de vérifier votre
          compte
        </h1>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          // renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
          inputStyle="inputStyle"
        />
        <button
          onClick={() => fetchVerifyMail(otp, setMessage, navigate)}
          className="gradient-bg py-2 px-10 rounded-lg text-center "
        >
          Valider
        </button>
        {message && (
          <p className="text-red-600 underline cursor-pointer">{message}</p>
        )}
      </div>
      <div className="flex gap-10 items-center">
        <div className="text-sm italic flex flex-col items-center">
          <p>
            Si vous n'avez pas reçu le code, veuillez vérifier votre dossier de
            spam ou demander un nouveau code.
          </p>
          <span
            onClick={() => fetchLogout(navigate)}
            className="text-xs text-red-600 underline cursor-pointer"
          >
            Me déconnecter
          </span>
        </div>
        <button
          onClick={() => fetchResendOtpEmail(setMessage)}
          className="text-sm border text-white border-greenfluo py-1.5 px-2 rounded-lg text-center"
        >
          Renvoyer
        </button>
      </div>
    </section>
  );
};

export default VerifyEmail;
