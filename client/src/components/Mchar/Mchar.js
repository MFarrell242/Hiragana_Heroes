import React from "react";
import CharContainer from "../CharContainer/CharContainer";
import Character from "../Character/Character";

import ma from "../../assets/characters/hiragana/ma.png";
import mi from "../../assets/characters/hiragana/mi.png";
import mu from "../../assets/characters/hiragana/mu.png";
import me from "../../assets/characters/hiragana/me.png";
import mo from "../../assets/characters/hiragana/mo.png";

function Mchar() {
  return (
    <div>
      <CharContainer>
        <Character char={ma} />
        <Character char={mi} />
        <Character char={mu} />
        <Character char={me} />
        <Character char={mo} />
      </CharContainer>
    </div>
  );
}

export default Mchar;
