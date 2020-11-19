import React, { useState, useEffect } from "react";

const Upload = (props) => {
  const [link, setLink] = useState("");
  const [linkName, setLinkName] = useState("");

  const handleClickUpload = () => {
    fetch("/resourceupload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        link: link,
        linkName: linkName,
        userName: document.cookie
          .split("; ")
          .find((row) => row.startsWith("access-token"))
          .split("=")[1],
      }),
    });

    setLink("");
    setLinkName("");
  };

  return (
    <div>
      <dialog open>
        <label htmlFor="resourceName">Link Name</label>
        <input
          type="text"
          placeholder="Enter name to be displayed"
          name="resourceName"
          value={linkName}
          onChange={(e) => setLinkName(e.target.value)}
        ></input>
        <label htmlFor="resourceLink">Link</label>
        <input
          type="text"
          placeholder="enter or paste a URL"
          name="resourceLink"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        ></input>
        <button onClick={props.exit}>Exit</button>
        <button onClick={handleClickUpload}>Upload</button>
      </dialog>
    </div>
  );
};

export default Upload;
