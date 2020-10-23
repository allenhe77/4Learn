import React from "react";

const AskQuestion = () => {
  return (
    <div>
      <form action="/askquestion" method="POST">
        <label for="title">Question Title</label>
        <input type="text" name="title"></input>
        <label for="area">Question Area</label>
        <input type="text" name="area"></input> <br />
        <textarea
          placeholder="enter your question"
          name="detail"
          id="noise"
          className="widgEditor"
        ></textarea>
        <button type="submit" name="submit">
          Submit Question
        </button>
      </form>
    </div>
  );
};

export default AskQuestion;
