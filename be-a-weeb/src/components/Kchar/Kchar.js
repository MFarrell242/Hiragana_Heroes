import React from "react";
import CharContainer from "../CharContainer/CharContainer";
import Character from "../Character/Character";

import ka from "../../assets/characters/hiragana/ka.png";
import ki from "../../assets/characters/hiragana/ki.png";
import ku from "../../assets/characters/hiragana/ku.png";
import ke from "../../assets/characters/hiragana/ke.png";
import ko from "../../assets/characters/hiragana/ko.png";

function Kchar() {
  return (
    <div>
      <CharContainer>
        <h2>K/G</h2>
        <Character char={ka} />
        <Character char={ki} />
        <Character char={ku} />
        <Character char={ke} />
        <Character char={ko} />
      </CharContainer>
    </div>
  );
}

export default Kchar;
