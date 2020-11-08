import React, { useState, useEffect } from "react";
import AddQuestion from "./AddQuestion";
import IndividualWorkspaceOverview from "./IndividualWorkspaceOverview";
import QuestionButton from "./QuestionButton";
import UserEditWork from "./UserEditWork";
import UserWorkspaceButton from "./UserWorkspaceButton";
import "./Workspace.css";

const Workspace = (props) => {
  const [questions, setQuestions] = useState([]);
  const [initialRenderQuestion, setInitialRenderQuestion] = useState(true);
  const [viewOnQuestion, setViewOnQuestion] = useState([]);

  const [userWorkspace, setUserWorkspace] = useState("");

  const [currentQuestion, setCurrentQuestion] = useState("");
  const [getUser, setGetUser] = useState([]);

  const [userAddOwn, setUserAddOwn] = useState(false);

  //get questions from db, only run on first load
  useEffect(() => {
    let timer;
    let intervalTime = 3000;
    const getQuestionsList = async () => {
      try {
        const result = await fetch(`/getworkspacequestions/${props.roomId}`);
        const questionsList = await result.json();
        console.log(questionsList);
        // setQuestions((previousState) => [...previousState, questions]);
        setQuestions(questionsList);

        setInitialRenderQuestion(!initialRenderQuestion);
      } catch (error) {
        console.error(error);
      }
    };

    timer = setInterval(getQuestionsList, intervalTime);

    //setting getData to false, to stop fetching data from database

    return () => clearInterval(timer);
  }, []);

  const handleClick = (qNumber) => {
    setGetUser(Object.keys(questions[qNumber]));
    setCurrentQuestion(qNumber);
    setUserWorkspace("");
    console.log(questions);
  };

  /* submission of user own work */

  const handleClickAddOwn = async () => {
    console.log(currentQuestion);
    console.log(props.userName);
    const userName = props.userName;
    //check if user exist for current question
    const userNameArray = Object.keys(questions[currentQuestion]);
    const ifUserExist = userNameArray.find((element) => element === userName);

    //pass ifUserExist to textarea send button as props

    setUserAddOwn(true);

    // const result = await fetch(`/userownwork/${props.roomId}`,{method:"POST",
    //  headers:{"Content-Type":"application/json"},

    //  body:JSON.stringify(userName)

    // })
    // console.log(userName);
  };

  /* submission of user own work ENDS */

  const handleClickUserExit = () => {
    setUserAddOwn(false);
  };

  const handleClickUserSave = async (userWork) => {
    console.log(userWork);
    await fetch(
      `/usersavework/${props.roomId}/${currentQuestion}/${props.userName}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ userWork: userWork }),
      }
    );
  };

  const handleClickUserWorkspace = (user) => {
    console.log(user);
    setUserWorkspace(questions[currentQuestion][user]);
    console.log(questions[currentQuestion][user]);
    setGetUser([]);
  };

  return (
    <div className="container-workspace">
      <div>
        <AddQuestion roomId={props.roomId} />

        {initialRenderQuestion ? (
          <p>loading ...</p>
        ) : (
          <div className="container-workspace-question-button">
            <button>Back</button>

            {Object.keys(questions).map((e) => (
              <QuestionButton question={e} onClick={() => handleClick(e)} />
            ))}
          </div>
        )}
      </div>
      <hr />
      <div className="user-workspace-overview">
        {/* check is questionController array is empty */}

        {getUser.length === 0 ? (
          <div>
            <button onClick={handleClickAddOwn}> MY own work</button>
            {userAddOwn ? (
              <UserEditWork
                onClickExit={handleClickUserExit}
                onClickSave={handleClickUserSave}
              />
            ) : (
              <div></div>
            )}
          </div>
        ) : (
          <div className="container-user-workspace-button">
            <button onClick={handleClickAddOwn}> MY own work</button>
            {userAddOwn ? (
              <UserEditWork
                onClickExit={handleClickUserExit}
                onClickSave={handleClickUserSave}
              />
            ) : (
              <div></div>
            )}
            {getUser.map((e) => (
              <UserWorkspaceButton
                onClick={() => handleClickUserWorkspace(e)}
                user={e}
              />
            ))}
          </div>
        )}
      </div>

      <div className="user-individual-workspace">
        {/* display a user's work */}
        <h4>{userWorkspace}</h4>
      </div>
    </div>
  );
};

export default Workspace;

// when button is clicked, query the db on that question
