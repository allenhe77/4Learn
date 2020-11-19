import React from "react";
import "./Room.css";
const Room = (props) => {
  return (
    <div className="outer">
      <p className="room-title">Chatroom 101 in session!</p>

      <div className="container-message">
        <p className="my-message">
          Messageasdadasdfrgrgtgtgdfgdg asd asdasd asdasdas dasdads asdasd rgr
          grgrgrg rgrg
        </p>{" "}
        {props.message.map((e) => (
          <div>
            <p className="user">User:</p>
            <p className="my-message">
              {e.message} {e.from}{" "}
            </p>
          </div>
        ))}
        <br />
        <div className="other-user">
          <p className="other-message">
            Other user's messagasd asda sdasd asdad sad asdasd sadasd asdasd
            asdasd asd ada sda sd as d asde
          </p>
          <p>Other User</p>
        </div>
      </div>

      <div className="enter-message">
        <textarea></textarea>
        <button className="btn-send">Send</button>
      </div>
    </div>
  );
};

export default Room;
