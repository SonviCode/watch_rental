import { useState } from "react";
import SignUp from "./SignUp/SignUp";
import Login from "./Login/Login";

const Account = () => {
  const [login, setLogin] = useState<boolean>(true);

  return (
    <div className="flex h-[600px]">
      <div className="bg-account w-1/2 bg-cover bg-center"></div>
      <div className="w-1/2">
        {login ? <Login setLogin={setLogin} /> : <SignUp setLogin={setLogin} />}
      </div>
    </div>
  );
};

export default Account;
