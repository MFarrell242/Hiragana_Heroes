import React from "react";
import "./style.css";

function CharCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Character:</strong> {props.name}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CharCard;
