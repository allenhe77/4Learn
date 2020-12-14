import React, { useState } from "react";
import "./Register.css";

import md5 from "md5";

const Register = () => {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passInput, setPassInput] = useState("");
  return (
    <div className="container-register">
      <h3>Register Page</h3> <br />
      <form action="/register" method="POST">
        <label for="userName">User Name</label>
        <input
          type="text"
          name="name"
          placeholder="John Doe"
          onChange={(e) => {
            setNameInput(e.target.value);
          }}
          value={nameInput}
          className={nameInput.length > 6 ? "correct-input" : "incorrect-input"}
        ></input>
        <br />
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="123@example.com"
          onChange={(e) => {
            setEmailInput(e.target.value);
          }}
          value={emailInput}
          className={
            emailInput.length > 6 ? "correct-input" : "incorrect-input"
          }
        ></input>
        <br />
        <label for="pasword">Password</label>{" "}
        <input
          type="password"
          name="password"
          onChange={(e) => {
            setPassInput(e.target.value);
          }}
          value={passInput}
          className={passInput.length > 6 ? "correct-input" : "incorrect-input"}
        ></input>{" "}
        <br />
        <button type="submit" name="submit">
          {" "}
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
