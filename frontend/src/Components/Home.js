import React from "react";

import Left from "./HomeBody/Left";

import LoginRegisterController from "./Controller/LoginRegisterController";

const Home = () => {
  return (
    <div className="container-home">
      <Left />
      <LoginRegisterController />
    </div>
  );
};

export default Home;
