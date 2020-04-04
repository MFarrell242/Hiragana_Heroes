import React from "react";
import CharContainer from "../CharContainer/CharContainer";
import Character from "../Character/Character";

import na from "../../assets/characters/hiragana/na.png";
import ni from "../../assets/characters/hiragana/ni.png";
import nu from "../../assets/characters/hiragana/nu.png";
import ne from "../../assets/characters/hiragana/ne.png";
import no from "../../assets/characters/hiragana/no.png";

function Nchar() {
  return (
    <div>
      <CharContainer>
        <Character char={na} />
        <Character char={ni} />
        <Character char={nu} />
        <Character char={ne} />
        <Character char={no} />
      </CharContainer>
    </div>
  );
}

export default Nchar;
