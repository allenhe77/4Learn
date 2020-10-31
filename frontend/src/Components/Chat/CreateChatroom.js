import React, { useState } from "react";

const CreateChatroom = () => {
  const [roomName, setRoomName] = useState("");
  const handleclick = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form method="POST" action="/createchatroom">
        <input
          value={roomName}
          name="roomname"
          onChange={(e) => setRoomName(e.target.value)}
        />
        <button type="submit">Create Chatroom</button>
      </form>
    </div>
  );
};

export default CreateChatroom;
