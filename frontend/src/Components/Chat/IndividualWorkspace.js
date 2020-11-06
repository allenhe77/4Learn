import React, { useState } from "react";
import "./IndividualWorkspace.css";

const IndividualWorkspace = (props) => {
  const [workspaceDetail, setWorkspaceDetail] = useState(props.detail);
  return (
    <div className="container-individual-workspace">
      <textarea
        value={workspaceDetail}
        onChange={(e) => setWorkspaceDetail(e.target.value)}
      ></textarea>
      <button type="button">Save</button>
    </div>
  );
};

export default IndividualWorkspace;
