import React from "react";
import { useState } from "react";
import "./AdminLogin.css";

const AdminLogin = () => {
  const [adminPass, setAdminPass] = useState("");

  const handleClick = () => {
    fetch("/adminlogins", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password: adminPass,
      }),
    }).then((response) => {
      if (response.redirected) {
        window.location.href = response.url;
      } else {
        response.text().then((res) => alert(res));
      }
    });
  };

  return (
    <div className="container-admin-login">
      <label for="text">User Name</label>
      <input type="text" name="adminname"></input> <br /> <br />
      <label for="adminpass">Password</label>
      <input
        type="password"
        name="adminpass"
        value={adminPass}
        onChange={(e) => setAdminPass(e.target.value)}
      ></input>{" "}
      <br />
      <button type="submit" onClick={handleClick}>
        Login
      </button>
    </div>
  );
};

export default AdminLogin;
