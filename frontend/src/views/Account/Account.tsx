import { useState } from "react";
import SignUp from "./SignUp/SignUp";
import Login from "./Login/Login";

const Account = () => {
  const [login, setLogin] = useState<boolean>(true);

  return (
    // <div className="flex h-[600px]">
    <div>

      {/* <div className="bg-account w-1/3 bg-cover bg-center"></div>
      <div className="w-2/3"> */}
        {login ? <Login setLogin={setLogin} /> : <SignUp setLogin={setLogin} />}
      {/* </div> */}
    </div>
    // </div>
  );
};

export default Account;
