import React from "react";

const ChatroomListButton = (props) => {
  const handleClick = () => {
    fetch(`/enterchatroom/${props.roomId}`, {
      method: "GET",
      redirect: "follow",
    }).then((response) => {
      if (response.redirected) {
        window.location.href = response.url;
      }
    });
  };
  return (
    <div>
      <button onClick={handleClick}>{props.chatroomname}</button> <br />
    </div>
  );
};

export default ChatroomListButton;
