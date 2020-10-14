import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import "./App.css";
import Home from "./Components/Home";
import Register from "./Components/Register";

function App() {
  return (
    <div>
      <div className="container-topnav">
        <nav>
          <ul className="top-nav">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/dashboard">
              <li>Dashboard</li>
            </Link>
            <Link to="/askquestion">
              <li>Ask Question</li>
            </Link>

            <Link to="/answerquestion">
              <li>Answer Question</li>
            </Link>
            <Link to="/register">
              <li>Register</li>
            </Link>
            <Link to="/Login">
              <li>Login</li>
            </Link>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path exact="/">
          <Home />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
