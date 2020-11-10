import React from "react";
import parse from "html-react-parser";
const AdminQuestion = (props) => {
  const handleClickAccept = () => {
    fetch("/askquestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: props.title,
        area: props.area,
        detail: props.detail,
      }),
    });
  };

  const handleClickReject = () => {
    fetch("/admindeletequestion", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: props.id,
      }),
    });
  };

  return (
    <div className="container-view-question">
      <h4>Title: {props.title}</h4>

      <p>{parse(props.detail)}</p>
      <button onClick={handleClickAccept}>Accept</button>
      <button onClick={handleClickReject}>Reject</button>
    </div>
  );
};

export default AdminQuestion;
