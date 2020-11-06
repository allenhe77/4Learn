import React, { useState } from "react";
import "./UserEditWork.css";

const UserEditWork = (props) => {
  const [userWork, setUserWork] = useState("");
  return (
    <div>
      <dialog open>
        <textarea
          value={userWork}
          onChange={(e) => setUserWork(e.target.value)}
        ></textarea>
        <button onClick={props.onClickExit}>Exit without saving</button>
        <button onClick={() => props.onClickSave(userWork)}>
          Save my work
        </button>
      </dialog>
    </div>
  );
};

export default UserEditWork;
