import React from "react";
import "./UserWorkspaceButton.css";
const UserWorkspaceButton = (props) => {
  return (
    <div className="user-workspace-button">
      <button onClick={props.onClick}>{props.user}</button>
    </div>
  );
};

export default UserWorkspaceButton;
