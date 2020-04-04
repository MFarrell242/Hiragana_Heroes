import React from "react";
import CharContainer from "../CharContainer/CharContainer";
import Character from "../Character/Character";

import ha from "../../assets/characters/hiragana/ha.png";
import hi from "../../assets/characters/hiragana/hi.png";
import fu from "../../assets/characters/hiragana/fu.png";
import he from "../../assets/characters/hiragana/he.png";
import ho from "../../assets/characters/hiragana/ho.png";

function Hchar() {
  return (
    <div>
      <CharContainer>
        <Character char={ha} />
        <Character char={hi} />
        <Character char={fu} />
        <Character char={he} />
        <Character char={ho} />
      </CharContainer>
    </div>
  );
}

export default Hchar;
