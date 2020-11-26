import React from "react";
import "./AnswerModal.css";

const AnswerModal = (props) => {
  return (
    <div className="outer-answer">
      <dialog open>
        <p className="question-desc">Question Description</p>
        <div className="wrapper-questions">
          {Object.keys(props.tags).map((e) => (
            <h5>
              {e + ":"} . {props.tags[e]}
            </h5>
          ))}
        </div>

        {Object.keys(props.answer).map((e) => (
          <div className="answer">
            {e + ":"} {props.answer[e]}
          </div>
        ))}

        <textarea value="enter you answer here!"></textarea>
        <div className="buttons">
          <button onClick={props.exit}>Exit</button>
          <button>Submit</button>
        </div>
      </dialog>
    </div>
  );
};

export default AnswerModal;
