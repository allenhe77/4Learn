import React, { useEffect } from "react";
import io from "socket.io-client";

const Chatroom = () => {
  useEffect(() => {
    const socket = io();
    //clientmessage is the custom event
    //socket.emit("clientmessage", { message: "hello from client" });
    socket.on("server-message", (data) => {
      console.log(data.message);
    });
  }, []);
  return (
    <div>
      <h1>chat room</h1>
    </div>
  );
};

export default Chatroom;
