import React, { useState } from "react";
import parse from "html-react-parser";

const Question = (props) => {
  const [answer, setAnswer] = useState("");

  const handleClick = () => {
    console.log("Adasd");
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
    </div>
  );
};

export default Question;
