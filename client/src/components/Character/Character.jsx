import React, { useState } from "react";
import "./style.css";

function Character(props) {
  const handleData = () => {
    if (props.character.name !== "blank") {
      props.setSelectedCharacter(props.character);
    }
  };

  return (
    <div className="card">
      <div className="img-container">
        <div className="charImage">
          <button onClick={handleData} type="button" class="btn btn-sm">
            <img
              alt="character"
              src={`/images/hiragana/${props.character.name}.png`}
            ></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Character;
