import React from "react";
import "./style.css";

function CharWrapper(props) {
  return <div className="wrapper d-flex p-2">{props.children}</div>;
}

export default CharWrapper;
