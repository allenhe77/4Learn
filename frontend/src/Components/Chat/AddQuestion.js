import React, { useState } from "react";
import "./AddQuestion.css";

const AddQuestion = (props) => {
  const [question, setQuestion] = useState("");

  const handleClick = () => {
    fetch(`/hostaddquestion/${props.roomId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        questionNumber: question,
      }),
    });
  };

  return (
    <div>
      <input
        type="text"
        name="question"
        className="input-add-question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button onClick={handleClick} className="add-question-button">
        Add Question{" "}
      </button>
    </div>
  );
};

export default AddQuestion;
