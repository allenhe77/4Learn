import React, { useState } from "react";
import parse from "html-react-parser";
import AnswerModal from "./AnswerModal";

const Question = (props) => {
  const [answer, setAnswer] = useState("");
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    fetch("/answerquestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        answer: answer,
        userName: document.cookie
          .split("; ")
          .find((row) => row.startsWith("access-token"))
          .split("=")[1],
        id: props.id,
      }),
    });
  };
  const handleClickModal = () => {
    setModal(true);
  };

  const handleClickExit = () => {
    setModal(false);
  };

  return (
    <div className="container-view-question">
      <h4>Title: {props.title}</h4>
      <h6>Area of Question:{props.area}</h6>

      <p>{parse(props.detail)}</p>
      <textarea
        placeholder="write your answer here"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      ></textarea>
      <button onClick={handleClick}>Submit Your Asnwer!</button>

      <hr />
      {props.answer !== undefined ? (
        Object.keys(props.answer).map((e) => (
          <p>
            {e}: {props.answer[e]}
          </p>
        ))
      ) : (
        <div></div>
      )}
      <button onClick={handleClickModal}>Click me to see modal!</button>
      {modal ? <AnswerModal onExit={handleClickExit} /> : <div></div>}
    </div>
  );
};

export default Question;
