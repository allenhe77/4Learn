import React, { useState, useEffect } from "react";
import AdminQuestion from "./AdminQuestion";

const Admin = () => {
  const [result, setResult] = useState([]);

  // const [title, setTitle] = useState([]);
  // const [area, setArea] = useState([]);
  // const [detail, setDetail] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      async function fetchData() {
        const databaseResult = await fetch("/adminviewquestion");
        const resultObj = await databaseResult.json();
        console.log(resultObj);
        const tempResult = [];

        // push title into result state

        await resultObj.forEach((element) => {
          tempResult.push(element);
          console.log(tempResult);
        });
        // setTitle(tempTitle);
        // setArea(tempArea);
        // setDetail(tempDetail);
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
      {loading ? (
        <h4>Loading ...</h4>
      ) : (
        result.map((element) => (
          <AdminQuestion
            title={element.title}
            area={element.area}
            detail={element.detail}
            id={element._id}
            tags={element.tags}
          />
        ))
      )}
    </div>
  );
};

export default Admin;
