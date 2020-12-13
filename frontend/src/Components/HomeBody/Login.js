import React, { useState } from "react";
import "./Login.css"

const Login = () => {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passInput, setPassInput] = useState("");
  return (
    <div className="container-login">
      <h3>Login Page</h3>
      <br />
      <form action="/login" method="POST">
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
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
