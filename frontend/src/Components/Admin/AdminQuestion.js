import React from "react";
import parse from "html-react-parser";
import "./AdminQuestion.css";

const AdminQuestion = (props) => {
  console.log(props.tags.oAlevel);
  const handleClickAccept = () => {
    fetch("/askquestion", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: props.id,
        title: props.title,
        area: props.area,
        detail: props.detail,
        oAlevel: props.tags.oAlevel,
        subject: props.tags.subject,
        year: props.tags.year,
        paperNumber: props.tags.paperNumber,
        month: props.tags.month,
        questionNumber: props.tags.questionNumber,
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
    <div className="container-admin-view-question">
      <h4>Title: {props.title}</h4>

      <p>{parse(props.detail)}</p>
      <p>{props.tags.subject}</p>
      <button onClick={handleClickAccept}>Accept</button>
      <button onClick={handleClickReject}>Reject</button>
    </div>
  );
};

export default AdminQuestion;
