import React from "react";
import "./QuestionButton.css";
const QuestionButton = (props) => {
  return (
    <div className="question-button">
      <button onClick={props.onClick}>{props.question}</button> <br />
    </div>
  );
};

export default QuestionButton;
