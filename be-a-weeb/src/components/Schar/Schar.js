import React from "react";
import CharContainer from "../CharContainer/CharContainer";
import Character from "../Character/Character";

import sa from "../../assets/characters/hiragana/sa.png";
import shi from "../../assets/characters/hiragana/shi.png";
import su from "../../assets/characters/hiragana/su.png";
import se from "../../assets/characters/hiragana/se.png";
import so from "../../assets/characters/hiragana/so.png";

function Schar() {
  return (
    <div>
      <CharContainer>
        <h2>S/Z/J</h2>
        <Character char={sa} />
        <Character char={shi} />
        <Character char={su} />
        <Character char={se} />
        <Character char={so} />
      </CharContainer>
    </div>
  );
}

export default Schar;
