import React from "react";

function BlockButton(props) {
  return (
    <a href={props.to} className="btn btn-block primary-btn" target={"_blank"}>
      {props.text}
    </a>
  );
}

export default BlockButton;
