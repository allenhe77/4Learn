import React, { useState, useEffect } from "react";
import Upload from "./Upload";
import DisplayLink from "./DisplayLink";

const ShareMain = () => {
  const [uploadYes, setUploadYes] = useState(false);
  const [link, setLinks] = useState([]);

  const handleClick = () => {
    setUploadYes(true);
  };

  const handleClickExit = () => {
    setUploadYes(false);
  };

  useEffect(() => {
    const getResource = async () => {
      const result = await fetch("/getresource");
      const links = await result.json();
      console.log(links[0]);
      setLinks(links);
    };

    getResource();
  }, []);
  return (
    <div>
      <h1>resourec main page</h1>
      <button onClick={handleClick}>Upload</button>
      {uploadYes ? <Upload exit={handleClickExit} /> : <div></div>}

      {link.length === 0 ? (
        <div>Loading ...</div>
      ) : (
        link.map((e) => (
          <DisplayLink
            link={e.link}
            linkName={e.linkName}
            userName={e.userName}
            key={e._id}
          />
        ))
      )}
    </div>
  );
};

export default ShareMain;
