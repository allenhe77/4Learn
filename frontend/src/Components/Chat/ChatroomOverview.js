import React from "react";
import ChatroomList from "./ChatroomList";
import "./ChatroomOverview.css";
import CreateChatroom from "./CreateChatroom";

const ChatroomOverview = () => {
  return (
    <div>
      <div className="chatroom-overview-title">Welcome to Chatroom</div>

      <div className="chatroom-overview-body">
        <div className="chatroom-overview-left">
          <ChatroomList />
        </div>
        <div className="chatroom-overview-right">
          <CreateChatroom />
        </div>
      </div>
    </div>
  );
};

export default ChatroomOverview;
