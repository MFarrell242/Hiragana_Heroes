import React from "react";
import "./style.css";

function CharacterContainer(props) {
  return <div className="charGrid">{props.children}</div>;
}

export default CharacterContainer;
