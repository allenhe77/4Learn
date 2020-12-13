import React, { useState, useEffect } from "react";
import Question from "./Question";
import QuestionTitle from "./QuestionTitle";
import "./ViewQuestion.css";

const ViewQuestion = (props) => {
  const [result, setResult] = useState([]);

  // const [title, setTitle] = useState([]);
  // const [area, setArea] = useState([]);
  // const [detail, setDetail] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      async function fetchData() {
        const databaseResult = await fetch("/answerquestion");
        const resultObj = await databaseResult.json();
        const tempResult = [];

        // push title into result state

        await resultObj.forEach((element) => {
          tempResult.push(element);
        });

        setResult(tempResult);
        setLoading(false);
      }
      fetchData();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="container-question">
      <h4>Pick A Question To Answer</h4> <hr />
      {loading ? (
        <h4>Loading ...</h4>
      ) : (
        result.map((element) => (
          // <Question
          //   title={element.title}
          //   area={element.area}
          //   detail={element.detail}
          //   id={element._id}
          //   answer={element.answer}
          //   key={element._id}
          // />
          <QuestionTitle
            title={element.title}
            detail={element.detail}
            id={element._id}
            answer={element.answer}
            id={element._id}
            key={element._id}
            tags={element.tags}
          />
        ))
      )}
    </div>
  );
};

export default ViewQuestion;
