import React, { useState } from "react";

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
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button onClick={handleClick}>Add Question Host</button>
    </div>
  );
};

export default AddQuestion;
