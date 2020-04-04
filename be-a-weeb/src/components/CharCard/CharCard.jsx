import React from "react";
import hiragana from "../../characters.json";
import Character from "../Character/Character";

export default CharCard = props => {
  let image = props.char;

  return (
    <div className="card">
      <div className="img-container">
        <div className="charImage">
          <button onClick={this.displayCard()} type="button" class="btn btn-sm">
            <img alt="character" src={`/images/hiragana/${image}.png`}></img>
          </button>
        </div>
      </div>
      <div>
        {this.state.display && (
          <div className="content">
            <ul>
              <li>
                <strong>Character:</strong> {hiragana.vowels.character.name}
              </li>
              <li>
                <strong>Sounds Like:</strong> {hiragana.vowels.character.sound}
              </li>
              <button type="button" class="btn btn-secondary">
                Stroke Order
              </button>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
