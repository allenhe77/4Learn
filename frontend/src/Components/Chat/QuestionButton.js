import React from "react";

const QuestionButton = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>{props.question}</button> <br />
    </div>
  );
};

export default QuestionButton;
