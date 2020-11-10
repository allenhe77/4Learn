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
        <h4>Tags</h4>
        <label for="oalevel">O Level / Alevel</label>
        <input name="oalevel" type="text"></input>
        <label for="subject">Subject</label>
        <input name="subject"></input>
        <label for="year">Year</label>
        <input name="year"></input>
        <label for="paperNumber">Paper Number</label>
        <input name="paperNumber"></input>
        <label for="month">June / October</label>
        <input name="month"></input>
        <label for="questionNumber">Question Number</label>
        <input name="questionNumber"></input> <br />
        <button type="submit" name="submit">
          Submit Question
        </button>
      </form>
    </div>
  );
};

export default AskQuestion;
