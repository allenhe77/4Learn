import React from "react";
import "./AskQuestion.css";

const AskQuestion = () => {
  return (
    <div className="ask-question-outer">
      <div className="ask-question">
        <h2>Ask A Question</h2>
        <form action="/adminquestion" method="POST">
          <input
            type="text"
            name="title"
            className="ask-question-title"
            placeholder="Your Question's Title"
          ></input>{" "}
          <br />
          {/* <input type="text" name="area" className="question-area"></input>{" "}
          <br /> */}
          <textarea
            placeholder="enter your question"
            name="detail"
            id="noise"
            className="question-detail"
          ></textarea>
          <div className="tags">
            <h4>Tags</h4>
            <div className="individual-tag">
              <label for="oalevel">O Level / Alevel</label>
              <input name="oalevel" type="text"></input>
            </div>

            <div className="individual-tag">
              <label for="subject">Subject</label>
              <input name="subject"></input>
            </div>

            <div className="individual-tag">
              <label for="year">Year</label>
              <input name="year"></input>
            </div>

            <div className="individual-tag">
              <label for="paperNumber">Paper Number</label>
              <input name="paperNumber"></input>
            </div>

            <div className="individual-tag">
              <label for="month">June / October</label>
              <input name="month"></input>
            </div>

            <div className="individual-tag">
              <label for="questionNumber">Question Number</label>
              <input name="questionNumber"></input> <br />
            </div>
          </div>
          <button type="submit" name="submit" className="submit-button">
            Submit Question
          </button>
        </form>
      </div>
    </div>
  );
};

export default AskQuestion;
