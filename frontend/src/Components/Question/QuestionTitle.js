import React, { useState } from "react";
import AnswerModal from "./AnswerModal";
import "./QuestionTitle.css";

const QuestionTitle = (props) => {
  const [modal, setModal] = useState(false);

  const handleClickModal = () => {
    setModal(true);
  };

  const handleClickExit = () => {
    setModal(false);
  };
  return (
    <div className="question-title">
      <h3 onClick={handleClickModal}>{props.title}</h3>
      <p>{props.detail}</p>

      {modal ? (
        <AnswerModal
          exit={handleClickExit}
          answer={props.answer}
          tags={props.tags}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default QuestionTitle;
