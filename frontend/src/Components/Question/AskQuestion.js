import React from "react";
import "./AskQuestion.css";

const AskQuestion = () => {
  return (
    <div className="ask-question">
      <form action="/adminquestion" method="POST">
        <input
          type="text"
          name="title"
          className="question-title"
          placeholder="Your Question's Title"
        ></input>{" "}
        <br />
        <label for="area">Question Area</label>
        <input type="text" name="area"></input> <br />
        <textarea
          placeholder="enter your question"
          name="detail"
          id="noise"
          className="question-detail"
        ></textarea>
        <div className="tags">
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
        </div>
        <button type="submit" name="submit">
          Submit Question
        </button>
      </form>
    </div>
  );
};

export default AskQuestion;
