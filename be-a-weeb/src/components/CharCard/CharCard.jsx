import React, { Component } from "react";
import hiragana from "../../characters.json";
import Character from "../Character/Character";

export default class CharCard extends Component(props) {
  state = {
    display: false
  };

  displayCard = () => {
    this.setState({
      display: !this.state.display
    });
  };

  render(props) {
    let character = props.char;

    return (
      <div className="card">
        <div className="img-container">
          <div className="charImage">
            <button
              onClick={this.displayCard()}
              type="button"
              class="btn btn-sm"
            >
              <img
                alt="character"
                src={`/images/hiragana/${character}.png`}
              ></img>
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
                  <strong>Sounds Like:</strong>{" "}
                  {hiragana.vowels.character.sound}
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
  }
}

// return (
//   <div className="card">
//     <div className="img-container">
//       <img alt={props.name} src={props.image} />
//     </div>
//     <div className="content">
//       <ul>
//         <li>
//           <strong>Character:</strong> {props.name}
//         </li>
//         <li>
//           <strong>Sounds Like:</strong> {props.sound}
//         </li>
//         <button
//           onClick={props.onClick}
//           type="button"
//           class="btn btn-secondary"
//         >
//           Stroke Order
//         </button>
//       </ul>
//     </div>
//   </div>
// );
// }
