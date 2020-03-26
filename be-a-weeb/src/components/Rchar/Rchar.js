import React from "react";
import CharContainer from "../CharContainer/CharContainer";
import Character from "../Character/Character";

import ra from "../../assets/characters/hiragana/ra.png";
import ri from "../../assets/characters/hiragana/ri.png";
import ru from "../../assets/characters/hiragana/ru.png";
import re from "../../assets/characters/hiragana/re.png";
import ro from "../../assets/characters/hiragana/ro.png";

function Rchar() {
  return (
    <div>
      <CharContainer>
        <h2>R</h2>
        <Character char={ra} />
        <Character char={ri} />
        <Character char={ru} />
        <Character char={re} />
        <Character char={ro} />
      </CharContainer>
    </div>
  );
}

export default Rchar;
