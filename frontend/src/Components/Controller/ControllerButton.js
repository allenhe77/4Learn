import React from "react";

import ControllerIconEmpty from "../../images/loginregister.png";
import ControllerIconFilled from "../../images/black-circle.png";
const ControllerButton = (props) => {
  return (
    <div>
      {props.register ? (
        <button
          type="button"
          className="button-controller"
          onClick={props.onClick}
        >
          {/* need to attirbute the author for this icon */}
          <img src={ControllerIconFilled} className="icon-controller"></img>
        </button>
      ) : (
        <button
          type="button"
          className="button-controller"
          onClick={props.onClick}
        >
          {/* need to attirbute the author for this icon */}
          <img src={ControllerIconEmpty} className="icon-controller"></img>
        </button>
      )}
    </div>
  );
};

export default ControllerButton;
