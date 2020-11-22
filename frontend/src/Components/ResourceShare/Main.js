import React, { useState, useEffect } from "react";
import "./Main.css";
import Link from "./Link";
import Upload from "./Upload";

const Main = () => {
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
    <div class="outer-link">
      <button className="button-upload" onClick={handleClick}>
        Upload
      </button>
      {uploadYes ? <Upload exit={handleClickExit} /> : <div></div>}

      <div class="container-link">
        {link.length === 0 ? (
          <div>Loading ...</div>
        ) : (
          link.map((e) => (
            <Link
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
    </div>
  );
};

export default Main;
