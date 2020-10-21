import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import Message from "./Message";

const Chatroom = () => {
  const [message, setMessage] = useState([]);
  const [click, setClicked] = useState(true);
  // const [socket, setSocket] = useState(0);
  const socket = useRef(0);
  //only run once

  useEffect(() => {
    socket.current = io();

    socket.current.on("server-message", (data) => {
      setMessage((message) => [...message, data]);
    });
  }, []);

  const handleClick = () => {
    socket.current.emit("clientmessage", { message: "message from client" });
  };

  useEffect(() => {
    // const socket = io();
    let iniRender = true;
    if (iniRender) {
      iniRender = false;
    } else {
    }
  }, []);

  return (
    <div>
      <div className="container-chat">
        {message.map((e) => (
          <p>{e.message} </p>
        ))}
      </div>
      <div className="container-chat-enter">
        <button onClick={handleClick}>Send</button>
      </div>
    </div>
  );
};

export default Chatroom;
