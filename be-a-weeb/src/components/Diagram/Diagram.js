import React from "react";
import CharWrapper from "../CharWrapper/CharWrapper";
import CharContainer from "../CharContainer/CharContainer";
import Character from "../Character/Character";
import Vowel from "../Vowel/Vowel";

function Diagram() {
  return (
    <div>
      <CharWrapper>
        <div>
          <CharContainer>
            <h2>W/N</h2>
            <Character char={"wa"} />
            <Character char={"blank"} />
            <Character char={"n"} />
            <Character char={"blank"} />
            <Character char={"wo"} />
          </CharContainer>
        </div>
        <div>
          <CharContainer>
            <h2>R</h2>
            <Character char={"ra"} />
            <Character char={"ri"} />
            <Character char={"ru"} />
            <Character char={"re"} />
            <Character char={"ro"} />
          </CharContainer>
        </div>
        <div>
          <CharContainer>
            <h2>Y</h2>
            <Character char={"ya"} />
            <Character char={"blank"} />
            <Character char={"yu"} />
            <Character char={"blank"} />
            <Character char={"yo"} />
          </CharContainer>
        </div>
        <div>
          <CharContainer>
            <h2>M</h2>
            <Character char={"ma"} />
            <Character char={"mi"} />
            <Character char={"mu"} />
            <Character char={"me"} />
            <Character char={"mo"} />
          </CharContainer>
        </div>
        <div>
          <CharContainer>
            <h2>H/P/B</h2>
            <Character char={"ha"} />
            <Character char={"hi"} />
            <Character char={"fu"} />
            <Character char={"he"} />
            <Character char={"ho"} />
          </CharContainer>
        </div>
        <div>
          <CharContainer>
            <h2>N</h2>
            <Character char={"na"} />
            <Character char={"ni"} />
            <Character char={"nu"} />
            <Character char={"ne"} />
            <Character char={"no"} />
          </CharContainer>
        </div>
        <div>
          <CharContainer>
            <h2>T/D</h2>
            <Character char={"ta"} />
            <Character char={"chi"} />
            <Character char={"tsu"} />
            <Character char={"te"} />
            <Character char={"to"} />
          </CharContainer>
        </div>
        <div>
          <CharContainer>
            <h2>S/Z/J</h2>
            <Character char={"sa"} />
            <Character char={"shi"} />
            <Character char={"su"} />
            <Character char={"se"} />
            <Character char={"so"} />
          </CharContainer>
        </div>
        <div>
          <CharContainer>
            <h2>K/G</h2>
            <Character char={"ka"} />
            <Character char={"ki"} />
            <Character char={"ku"} />
            <Character char={"ke"} />
            <Character char={"ko"} />
          </CharContainer>
        </div>
        <div>
          <CharContainer>
            <h2>-</h2>
            <Character char={"a"} />
            <Character char={"i"} />
            <Character char={"u"} />
            <Character char={"e"} />
            <Character char={"o"} />
          </CharContainer>
        </div>
        <div>
          <CharContainer>
            <h2>Vowels</h2>
            <Vowel vowel="A" />
            <Vowel vowel="I" />
            <Vowel vowel="U" />
            <Vowel vowel="E" />
            <Vowel vowel="O" />
          </CharContainer>
        </div>
      </CharWrapper>
    </div>
  );
}

export default Diagram;
