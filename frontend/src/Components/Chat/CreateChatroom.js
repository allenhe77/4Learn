import React, { useState } from "react";
import "./CreateChatroom.css";

const CreateChatroom = () => {
  const [roomName, setRoomName] = useState("");
  const handleClick = () => {
    fetch("/createchatroom", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        roomName: roomName,
        createdBy: document.cookie
          .split("; ")
          .find((row) => row.startsWith("access-token"))
          .split("=")[1],
      }),
    }).then((response) => {
      if (response.redirected) {
        window.location.href = response.url;
      }
    });
  };
  return (
    <div className="create-chatroom">
      <input
        value={roomName}
        name="roomname"
        onChange={(e) => setRoomName(e.target.value)}
      />
      <button type="button" onClick={handleClick}>
        Create Chatroom
      </button>
    </div>
  );
};

export default CreateChatroom;
