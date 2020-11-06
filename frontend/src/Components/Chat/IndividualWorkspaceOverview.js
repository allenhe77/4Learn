import React, { useState } from "react";
import IndividualWorkspace from "./IndividualWorkspace";

const IndividualWorkspaceOverview = (props) => {
  const [clicked, setClicked] = useState(false);
  const [viewOverview, setViewOverview] = useState(true);

  //contains the user workspace detail for rendering
  const [workspaceDetail, setWorkspaceDetail] = useState("");

  const handleClick = (detail) => [setWorkspaceDetail(detail)];

  return (
    <div>
      {viewOverview ? (
        props.allWorkspace.map((e) => (
          <button
            onClick={() => {
              setViewOverview(!viewOverview);
              handleClick(e.q1);
            }}
          >
            {e.user} 's Woskapce
          </button>
        ))
      ) : (
        <IndividualWorkspace detail={workspaceDetail} />
      )}
    </div>
  );
};

export default IndividualWorkspaceOverview;

// allWorkspace.map((e) => (
//   <IndividualWorkspaceOverview
//     key={e.user}
//     detail={e.q1}
//     user={e.user}
