import React from "react";
import "./style.css";

function Character(props) {
  return (
    <div className="charImage">
      <button onClick={props.onClick} type="button" class="btn btn-sm">
        <img alt="character" src={`/images/hiragana/${props.char}.png`}></img>
      </button>
    </div>
  );
}

export default Character;
