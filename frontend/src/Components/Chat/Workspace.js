import React, { useState, useEffect } from "react";
import IndividualWorkspaceOverview from "./IndividualWorkspaceOverview";

const Workspace = () => {
  const [button, setButton] = useState(0);
  const [requested, setRequested] = useState(false);
  const [allWorkspace, setAllWorkspace] = useState([]);

  const handleClick = () => {
    setButton(button + 1);
    setRequested(!requested);
  };

  const handleClickBack = () => {
    setRequested(!requested);
  };

  useEffect(() => {
    if (button > 0) {
      const queryWorkspace = async () => {
        const result = await fetch("/queryworkspace");
        const workspace = await result.json();

        console.log(workspace);
        const temp = [];
        await workspace.forEach((element) => {
          temp.push(element);
        });
        setAllWorkspace(temp);
      };

      queryWorkspace();
    }
  }, [button]);

  return (
    <div className="container-workspace">
      <h4>workspace</h4>

      {console.log(allWorkspace)}
      {requested ? (
        <div>
          <button onClick={handleClickBack}>Back To Questions</button>
          <button>Create my own workspace</button>
          <IndividualWorkspaceOverview allWorkspace={allWorkspace} />
        </div>
      ) : (
        <div>
          <button type="button" onClick={handleClick}>
            Q1
          </button>
          <button>Q2</button>
          <button>Q3</button>
          <button>Q4</button>
          <button>Q5</button>
        </div>
      )}
    </div>
  );
};

export default Workspace;

// when button is clicked, query the db on that question
