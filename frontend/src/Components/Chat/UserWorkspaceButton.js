import React from "react";

const UserWorkspaceButton = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>{props.user}</button>
    </div>
  );
};

export default UserWorkspaceButton;
