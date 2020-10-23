import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./Components/Home";
import Register from "./Components/Auth/AuthRegister";
import Login from "./Components/Auth/AuthLogin";
import AskQuestion from "./Components/Question/AskQuestion";
import ViewQuestion from "./Components/Question/ViewQuestion";
import Chatroom from "./Components/Chat/Chatroom";
import Header from "./Components/Navigation/Header";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <div className="container">
      <Header />

      <Switch>
        <Route path exact="/">
          <Home />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
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
