import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import Message from "./Message";
import Peer from "peerjs";

const Chatroom = () => {
  const [message, setMessage] = useState([]);

  // const [socket, setSocket] = useState(0);
  const socket = useRef(0);
  const peer = useRef(0);
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

    peer.current = new Peer(undefined, {
      path: "/peerjs",
      host: "/",
      port: "5000",
    });

    peer.current.on("open", (id) => {
      socket.current.emit("join-chat", id);
    });

    socket.current.on("server-message", (data) => {
      setMessage((message) => [...message, data]);
    });
    socket.current.on("broadcast", (data) => {
      setMessage((message) => [...message, data]);
    });
  }, []);

  const handleClick = () => {
    socket.current.emit("clientmessage", {
      message: "message from client",
      from: document.cookie
        .split("; ")
        .find((row) => row.startsWith("access-token"))
        .split("=")[1],
    });
  };

  useEffect(() => {
    //it sets up teh audio stream to connect to other user
    const addAudioStream = (audio, stream) => {
      audio.srcObject = stream;
      audio.addEventListener("loadedmetadata", () => {
        audio.play();
      });
    };

    const connectToNewUser = (userId, stream) => {
      // the stream between clients is constant
      const call = peer.current.call(userId, stream);

      let audio = document.createElement("audio");
      call.on("stream", (userAudioStream) => {
        addAudioStream(audio, userAudioStream);
      });
    };

    const sendStream = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: false,
        audio: true,
      });
      const myAudio = document.createElement("audio");

      let myAudioStream = stream;

      addAudioStream(myAudio, myAudioStream);

      socket.current.on("user-joined", (userId, myAudioStream) => {
        console.log("new user!");
        console.log(stream);
        connectToNewUser(userId, stream);
      });
    };

    sendStream();
  }, []);

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
          <p>
            {e.message} ---: {e.from}{" "}
          </p>
        ))}
      </div>
      <div className="container-chat-enter">
        <button onClick={handleClick}>Send</button>
      </div>
    </div>
  );
};

export default Chatroom;
