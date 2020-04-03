import React from "react";
import CharContainer from "../CharContainer/CharContainer";
import Character from "../Character/Character";

import a from "../../assets/characters/hiragana/a.png";
import i from "../../assets/characters/hiragana/i.png";
import u from "../../assets/characters/hiragana/u.png";
import e from "../../assets/characters/hiragana/e.png";
import o from "../../assets/characters/hiragana/o.png";

function Characters() {
  return (
    <div>
      <CharContainer>
        <Character char={a} />
        <Character char={i} />
        <Character char={u} />
        <Character char={e} />
        <Character char={o} />
      </CharContainer>
    </div>
  );
}

export default Characters;
