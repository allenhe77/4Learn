import React, { useState, useEffect } from "react";

const ViewQuestion = () => {
  const [result, setResult] = useState([]);

  const [title, setTitle] = useState([]);
  const [area, setArea] = useState([]);
  const [detail, setDetail] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const databaseResult = await fetch("/answerquestion");
      const resultObj = await databaseResult.json();
      const tempArray = [];
      const tempTitle = [];
      const tempArea = [];
      const tempDetail = [];
      // push title into result state

      await resultObj.forEach((element) => {
        tempTitle.push(element.title);
        tempArea.push(element.area);
        tempDetail.push(element.detail);
      });
      setTitle(tempTitle);
      setArea(tempArea);
      setDetail(tempDetail);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>
        {area.map((element) => (
          <h1>{element}</h1>
        ))}
      </h1>
    </div>
  );
};

export default ViewQuestion;
