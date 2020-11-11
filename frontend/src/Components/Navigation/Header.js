import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="container-topnav">
      <nav>
        <ul className="top-nav">
          {/* Link component has a anchor tag */}

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

          <Link to="/chatroomoverview">
            <li>Chatroom</li>
          </Link>
          <Link to="/admin">
            <li>Admin Page</li>
          </Link>
          <Link to="/resource">
            <li>Resource Sharing</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
