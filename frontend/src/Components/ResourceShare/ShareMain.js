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
    <div className="outer">
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
            id={e._id}
            rating={e.rate}
          />
        ))
      )}
    </div>
  );
};

export default ShareMain;
