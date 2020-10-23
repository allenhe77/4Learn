import React, { useState } from "react";
import Login from "../HomeBody/Login";
import Register from "../HomeBody/Register";
import ControllerButton from "./ControllerButton";

const LoginRegisterController = () => {
  const [registerButton, setRegisterButton] = useState(true);

  const handleConButtonClick = () => {
    const temp = registerButton;
    setRegisterButton(!temp);
  };

  return (
    <div className="log-register-controller">
      {registerButton ? <Register /> : <Login />}

      <ControllerButton
        onClick={handleConButtonClick}
        register={registerButton}
      />
      <ControllerButton
        onClick={handleConButtonClick}
        register={!registerButton}
      />
    </div>
  );
};

export default LoginRegisterController;
