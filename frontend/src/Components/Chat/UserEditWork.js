import React, { useState } from "react";
import "./UserEditWork.css";

const UserEditWork = (props) => {
  const [userWork, setUserWork] = useState(
    props.questions[props.currentQuestion][props.userName]
  );
  console.log("hints");

  return (
    <div className="user-addwork-dialog">
      <dialog open>
        <textarea
          value={userWork}
          onChange={(e) => setUserWork(e.target.value)}
        ></textarea>
        <button onClick={props.onClickExit}>Exit</button>
        <button onClick={() => props.onClickSave(userWork)}>
          Save my work
        </button>
      </dialog>
    </div>
  );
};

export default UserEditWork;
