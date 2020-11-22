import React from "react";
import "./AnswerModal.css";

const AnswerModal = (props) => {
  return (
    <div className="outer-answer">
      <dialog open>
        <p>Question Description</p>

        {Object.keys(props.tags).map((e) => (
          <h4>
            {e + ":"} . {props.tags[e]}
          </h4>
        ))}

        {Object.keys(props.answer).map((e) => (
          <div className="answer">
            {e + ":"} {props.answer[e]}
          </div>
        ))}

        <textarea value="enter you answer here!"></textarea>
        <div className="buttons">
          <button onClick={props.exit}>Exit</button>
          <button>Save</button>
        </div>
      </dialog>
    </div>
  );
};

export default AnswerModal;
