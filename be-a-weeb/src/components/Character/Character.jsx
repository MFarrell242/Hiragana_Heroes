import React, { useState } from "react";
import "./style.css";

function Character(props) {
  let image = props.char;

  const [url, setUrl] = useState({
    src: `/images/hiragana/${image}.png`
  });

  function handleImgChange() {
    if (image === "blank") {
      return url.src;
    } else if (url.src === `/images/hiragana/${image}.png`) {
      setUrl({ ...url, src: `/images/hiragana/${image}-so.PNG` });
    } else {
      setUrl({ src: `/images/hiragana/${image}.png` });
    }
  }

  return (
    <div className="card">
      <div className="img-container">
        <div className="charImage">
          <button
            onClick={() => handleImgChange()}
            type="button"
            class="btn btn-sm"
          >
            <img alt="character" src={url.src}></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Character;

// {
//   /* <div className="charImage">
//       <button onClick={props.onClick} type="button" class="btn btn-sm">
//         <img alt="character" src={`/images/hiragana/${character}.png`}></img>
//       </button>
//     </div> */
// }
