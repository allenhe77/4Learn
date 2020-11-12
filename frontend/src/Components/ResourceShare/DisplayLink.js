import React from "react";
import upDownVote from "./upDownvote.png";
import "./DisplayLink.css";
const DisplayLink = (props) => {
  const handleClickUpVote = () => {
    fetch("/resourcerate", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rate: "upvote",
        userName: document.cookie
          .split("; ")
          .find((row) => row.startsWith("access-token"))
          .split("=")[1],
        id: props.id,
      }),
    });
  };

  const handleClickDownVote = () => {
    fetch("/resourcerate", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rate: "downvote",
        userName: document.cookie
          .split("; ")
          .find((row) => row.startsWith("access-token"))
          .split("=")[1],
        id: props.id,
      }),
    });
  };

  return (
    <div className="container-display-link">
      <img
        onClick={handleClickUpVote}
        src={upDownVote}
        alt="iconForUpvoteDownvote"
        className="icon-upvote"
      ></img>

      <img
        onClick={handleClickDownVote}
        src={upDownVote}
        alt="iconForUpvoteDownvote"
        className="icon-downvote"
      ></img>
      <p>{props.link}</p>
      <p>{props.linkName}</p>
      <p>{props.userName}</p>
      <p>{props.rating}</p>
      <hr />
    </div>
  );
};

export default DisplayLink;
