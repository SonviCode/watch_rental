import { API_USER } from "@/constants/Constants";
import useFetchData from "@/hooks/useFetchData";
import "@/style/custom/otpInputStyle.css";
import { User } from "@/types/userType";
import { formatPhoneNumber } from "@/utils/formatUtils";
import { useState } from "react";
import OtpInput from "react-otp-input";
import { Navigate, useNavigate } from "react-router-dom";
import { fetchResendOtpSms, fetchVerifySms } from '../../../services/api/auth';

const VerifyPhoneNumber = () => {
  const [message, setMessage] = useState<string>("");
  const [user, setUser] = useState<User | undefined>();
  const [otp, setOtp] = useState<string>("");
  const navigate = useNavigate();

  const isLoading = useFetchData(setUser, API_USER);

  if (isLoading) return;

  if (user?.smsIsVerified) return <Navigate to="/account" />;

  return (
    <section className="flex flex-col justify-center items-center pt-10 gap-20">
      <div className="bg-blacklight p-10 rounded-md max-w-xl text-center flex flex-col gap-10 items-center">
        <h1>
          Veuillez saisir le code envoyé par sms au{" "}
          <span className="italic">
            {formatPhoneNumber(`${user?.phoneNumber}`)}
          </span>{" "}
          afin de vérifier votre compte
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
          onClick={() => fetchVerifySms(otp, setMessage, navigate)}
          className="gradient-btn py-2 px-10 rounded-lg text-center "
        >
          Valider
        </button>
      </div>
      {message && <p>{message}</p>}
      <div className="flex gap-10 items-center">
        <p className="text-sm italic">
          Aucun code reçu ? Veuillez réessayer ou contacter le support.
        </p>
        <button
          onClick={() => fetchResendOtpSms(setMessage)}
          className="text-sm border text-white border-greenfluo py-1.5 px-2 rounded-lg text-center"
        >
          Renvoyer
        </button>
      </div>
    </section>
  );
};

export default VerifyPhoneNumber;
