import React from "react";
import "./style.css";

function CharWrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default CharWrapper;
