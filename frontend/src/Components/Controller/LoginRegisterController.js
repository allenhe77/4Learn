import React, { useState } from "react";
import Login from "../HomeBody/Login";
import Register from "../HomeBody/Register";
import ControllerButton from "./ControllerButton";
import "./LoginRegisterController.css";

const LoginRegisterController = () => {
  const [registerButton, setRegisterButton] = useState(true);

  const handleConButtonClick = () => {
    const temp = registerButton;
    setRegisterButton(!temp);
  };

  return (
    <div className="log-register-controller">
      {registerButton ? (
        <Register className="container-register" />
      ) : (
        <Login className="container-login" />
      )}

      <div className="container-switch-button">
        <ControllerButton
          onClick={handleConButtonClick}
          register={registerButton}
        />
        <ControllerButton
          onClick={handleConButtonClick}
          register={!registerButton}
        />
      </div>
    </div>
  );
};

export default LoginRegisterController;
