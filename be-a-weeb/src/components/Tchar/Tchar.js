import React from "react";
import CharContainer from "../CharContainer/CharContainer";
import Character from "../Character/Character";

import ta from "../../assets/characters/hiragana/ta.png";
import chi from "../../assets/characters/hiragana/chi.png";
import tsu from "../../assets/characters/hiragana/tsu.png";
import te from "../../assets/characters/hiragana/te.png";
import to from "../../assets/characters/hiragana/to.png";

function Tchar() {
  return (
    <div>
      <CharContainer>
        <Character char={ta} />
        <Character char={chi} />
        <Character char={tsu} />
        <Character char={te} />
        <Character char={to} />
      </CharContainer>
    </div>
  );
}

export default Tchar;
