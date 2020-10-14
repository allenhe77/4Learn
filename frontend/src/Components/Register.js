import React from "react";

const Register = () => {
  return (
    <div className="register">
      <form action="/register" method="POST">
        <label for="userName">User Name</label>
        <input type="text" name="userName" value=""></input>
        <br />
        <label for="email">Email</label>
        <input type="email" name="email" value="eg@example.com"></input>
        <br />
        <label for="pasword">Password</label>
        <input type="password" name="password"></input> <br />
        <button type="submit" name="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default Register;
