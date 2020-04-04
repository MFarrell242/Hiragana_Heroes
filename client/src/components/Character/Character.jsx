import React from "react";
import "./style.css";

function Character(props) {
  return (
    <div className="charImage">
      <img alt="character" src={props.char}></img>
    </div>
  );
}

export default Character;
