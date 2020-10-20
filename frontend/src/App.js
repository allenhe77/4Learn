import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import "./App.css";
import Home from "./Components/Home";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import AskQuestion from "./Components/Question/AskQuestion";
import ViewQuestion from "./Components/Question/ViewQuestion";
import Chatroom from "./Components/Chat/Chatroom";
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
            <Link to="/login">
              <li>Login</li>
            </Link>

            <Link to="chatroom">
              <li>Chatroom</li>
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

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/askquestion">
          <AskQuestion />
        </Route>

        <Route path="/answerquestion">
          <ViewQuestion />
        </Route>

        <Route path="/chatroom">
          <Chatroom />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
