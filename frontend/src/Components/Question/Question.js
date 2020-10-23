import React from "react";
import parse from "html-react-parser";
const Question = (props) => {
  return (
    <div className="container-view-question">
      <h4>Title: {props.title}</h4>
      <h6>Area of Question:{props.area}</h6>

      <p>{parse(props.detail)}</p>
      <textarea placeholder="write your answer here"></textarea>
      <button>Submit Your Asnwer!</button>
    </div>
  );
};

export default Question;
