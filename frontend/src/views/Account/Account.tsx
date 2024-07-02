import { API_USER } from "@/constants/Constants";
import useFetchData from "@/hooks/useFetchData";
import {
  fetchLogout,
  fetchResendOtpEmail,
  fetchVerifyMail,
} from "@/services/api/auth";
import { User } from "@/types/userType";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const [error, setError] = useState<string>("");
  const [user, setUser] = useState<User | undefined>();
  const navigate = useNavigate();

  useFetchData(setUser, API_USER);

  const handleSubmitVerifyOTPMail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const elements = e.currentTarget.elements as unknown as HTMLFormElement;

    fetchVerifyMail(elements.code.value, setError);
  };

  return (
    <>
      <div className="flex gap-10">
        <div>
          <div className="bg-graylight rounded-md p-2 text-black font-bold flex justify-center items-center gap-5">
            <FontAwesomeIcon icon={faFileInvoice} />
            <h2>Factures</h2>
          </div>
        </div>

        <div>
          <h1 className="uppercase font-bold text-xl">Votre compte</h1>
          <p>
            {user?.firstName} {user?.lastName}
          </p>
        </div>
      </div>
      <div className="text-right border">
        <form onSubmit={(e) => handleSubmitVerifyOTPMail(e)}>
          <input type="text" name="code" className="bg-black" />
          <button className="border rounded-md p-2">OTP</button>
        </form>
      </div>
      <div className="text-right border">
        <button
          onClick={() => fetchResendOtpEmail(setError)}
          className="border rounded-md p-2"
        >
          Resend
        </button>
      </div>
      <div className="text-right">
        <button
          onClick={() => fetchLogout(navigate)}
          className="border rounded-md p-2"
        >
          Déconnexion
        </button>
      </div>
    </>
  );
};

export default Account;
