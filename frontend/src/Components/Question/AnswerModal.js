import React from "react";
import { useState } from "react";
import "./AnswerModal.css";

const AnswerModal = (props) => {
  const [answer, setAnswer] = useState("");

  const handleClickAnswer = () => {
    fetch("/answerquestion", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: props.id,
        userName: document.cookie
          .split("; ")
          .find((row) => row.startsWith("access-token"))
          .split("=")[1],
        answer: answer,
      }),
    });

    alert("Answer Submitted");
    setTimeout(window.location.reload(true), 2500);
  };

  return (
    <div className="outer-answer">
      <dialog open>
        <p className="question-desc">Question Description</p>
        <div className="wrapper-questions">
          {props.tags == null ? (
            <div></div>
          ) : (
            Object.keys(props.tags).map((e) => (
              <h5>
                {console.log(props.tags[e])}
                {e + ":"} {props.tags[e]}
              </h5>
            ))
          )}
        </div>

        {props.answer == null ? (
          <div></div>
        ) : (
          Object.keys(props.answer).map((e) => (
            <div className="answer">
              {e + ":"} {props.answer[e]}
            </div>
          ))
        )}

        <textarea
          value={answer}
          placeholder="enter you answer here!"
          onChange={(e) => setAnswer(e.target.value)}
        ></textarea>
        <div className="buttons">
          <button onClick={props.exit}>Exit</button>
          <button onClick={handleClickAnswer}>Submit</button>
        </div>
      </dialog>
    </div>
  );
};

export default AnswerModal;
