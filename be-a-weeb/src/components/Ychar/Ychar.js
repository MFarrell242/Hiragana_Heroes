import React from "react";
import CharContainer from "../CharContainer/CharContainer";
import Character from "../Character/Character";

import ya from "../../assets/characters/hiragana/ya.png";
import yu from "../../assets/characters/hiragana/yu.png";
import yo from "../../assets/characters/hiragana/yo.png";
import blank from "../../assets/characters/Blank/blank.png";

function Ychar() {
  return (
    <div>
      <CharContainer>
        <Character char={ya} />
        <Character char={blank} />
        <Character char={yu} />
        <Character char={blank} />
        <Character char={yo} />
      </CharContainer>
    </div>
  );
}

export default Ychar;
