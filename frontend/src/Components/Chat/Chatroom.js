import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import "./Chatroom.css";
import QuestionButton from "./QuestionButton";
import Workspace from "./Workspace";

const Chatroom = (props) => {
  const [message, setMessage] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [userName, setUserName] = useState("");
  // const [socket, setSocket] = useState(0);
  const socket = useRef(0);

  //only run oncejjjjjjjjj

  useEffect(() => {
    //config the socket with re connect

    socket.current = io({
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      randomizationFactor: 0.5,
    });

    socket.current.on("server-message", (data) => {
      setMessage((message) => [...message, data]);
    });
    socket.current.on("broadcast", (data) => {
      setMessage((message) => [...message, data]);
    });
    setUserName(
      document.cookie
        .split("; ")
        .find((row) => row.startsWith("access-token"))
        .split("=")[1]
    );
  }, []);

  const handleClick = () => {
    console.log(userName);
    socket.current.emit("chat-message", {
      message: messageInput,
      from: userName,
    });

    setMessageInput("");
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
    <div className="container-workspace-chatroom">
      <Workspace
        roomId={props.match.params.roomId}
        userName={props.match.params.userName}
      />

      <div className="container-chatroom">
        <div className="container-chat">
          {message.map((e) => (
            <p>
              {e.message} ---: {e.from}{" "}
            </p>
          ))}
        </div>

        <div className="container-chat-enter">
          <textarea
            name="chatmsg"
            onChange={(e) => setMessageInput(e.target.value)}
            value={messageInput}
          ></textarea>

          <button onClick={handleClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chatroom;
