import React from "react";
import "./ChatroomListButton.css";

const ChatroomListButton = (props) => {
  const handleClick = () => {
    const userName = document.cookie
      .split("; ")
      .find((row) => row.startsWith("access-token"))
      .split("=")[1];

    fetch(`/enterchatroom/${props.roomId}/${userName}`, {
      method: "GET",
      redirect: "follow",
    }).then((response) => {
      if (response.redirected) {
        window.location.href = response.url;
      }
    });
  };
  return (
    <div className="chatroom-list-button">
      <button onClick={handleClick}>{props.chatroomname}</button> <br />
    </div>
  );
};

export default ChatroomListButton;
