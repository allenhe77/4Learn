import React, { useState, useEffect } from "react";
import Question from "./Question";

const ViewQuestion = (props) => {
  const [result, setResult] = useState([]);

  // const [title, setTitle] = useState([]);
  // const [area, setArea] = useState([]);
  // const [detail, setDetail] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const databaseResult = await fetch("/answerquestion");
      const resultObj = await databaseResult.json();
      const tempResult = [];
      // const tempTitle = [];
      // const tempArea = [];
      // const tempDetail = [];

      // push title into result state

      await resultObj.forEach((element) => {
        // tempTitle.push(element.title);
        // tempArea.push(element.area);
        // tempDetail.push(element.detail);
        tempResult.push(element);
      });
      // setTitle(tempTitle);
      // setArea(tempArea);
      // setDetail(tempDetail);
      setResult(tempResult);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className="container-question">
      {loading ? (
        <h4>Loading ...</h4>
      ) : (
        result.map((element) => (
          <Question
            title={element.title}
            area={element.area}
            detail={element.detail}
          />
        ))
      )}
    </div>
  );
};

export default ViewQuestion;
