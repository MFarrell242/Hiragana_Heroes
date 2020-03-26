import React from "react";
import CharContainer from "../CharContainer/CharContainer";
import Vowel from "../Vowel/Vowel";

function VowelName() {
  return (
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
  );
}

export default VowelName;
