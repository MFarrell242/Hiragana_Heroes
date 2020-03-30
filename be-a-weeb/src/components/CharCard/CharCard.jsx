import React from "react";

function CharCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt="stuff" src="" />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Character:</strong> {}
          </li>
          <li>
            <strong>Sounds Like:</strong> Sound
          </li>
          <button
            onClick={props.onClick}
            type="button"
            class="btn btn-secondary"
          >
            Stroke Order
          </button>
        </ul>
      </div>
    </div>
  );
}

export default CharCard;

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
