import { API_USER } from "@/constants/Constants";
import useFetchData from "@/hooks/useFetchData";
import { fetchLogout } from "@/services/api/auth";
import { User } from "@/types/userType";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import AsideAccount from "./AsideAccount";

const Account = () => {
  // const [error, setError] = useState<string>("");
  const [user, setUser] = useState<User | undefined>();

  const isLoading = useFetchData(setUser, API_USER);

  if (isLoading) return;

  if (!user?.emailIsVerified) return <Navigate to="/verif-email" />;
  // if (!user?.smsIsVerified) return <Navigate to="/verif-sms" />;

  return (
    <div className="flex h-full">
      <AsideAccount />
      <div className="flex gap-10">
        <div>
          <h1 data-testid="account-title" className="uppercase font-bold text-xl">Votre compte</h1>
          <p>
            {user?.firstName} {user?.lastName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Account;
