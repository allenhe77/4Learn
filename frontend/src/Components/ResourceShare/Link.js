import React from "react";
import "./Link.css";
import upDownVote from "./upDownvote.png";

const Link = (props) => {
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
    <div class="inner">
      <p className="rating">{props.rating}</p>
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

      <div class="desc">
        <p>
          <a href={props.link}>{props.linkName}</a>
        </p>
      </div>
      <p class="user">Submitted by {props.userName}</p>
    </div>
  );
};

export default Link;
