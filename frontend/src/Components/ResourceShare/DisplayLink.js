import React from "react";
import upDownVote from "./upDownvote.png";
import "./DisplayLink.css";
const DisplayLink = (props) => {
  return (
    <div className="container-display-link">
      <img
        src={upDownVote}
        alt="iconForUpvoteDownvote"
        className="icon-upvote"
      ></img>

      <img
        src={upDownVote}
        alt="iconForUpvoteDownvote"
        className="icon-downvote"
      ></img>
      <p>{props.link}</p>
      <p>{props.linkName}</p>
      <p>{props.userName}</p>
      <hr />
    </div>
  );
};

export default DisplayLink;
