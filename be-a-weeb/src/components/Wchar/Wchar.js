import React from "react";
import CharContainer from "../CharContainer/CharContainer";
import Character from "../Character/Character";

import wa from "../../assets/characters/hiragana/wa.png";
import blank from "../../assets/characters/Blank/blank.png";
import wo from "../../assets/characters/hiragana/wo.png";
import n from "../../assets/characters/hiragana/n.png";

function Nchar() {
  return (
    <div>
      <CharContainer>
        <h2>W/N</h2>
        <Character char={wa} />
        <Character char={blank} />
        <Character char={n} />
        <Character char={blank} />
        <Character char={wo} />
      </CharContainer>
    </div>
  );
}

export default Nchar;
