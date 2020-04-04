import React, { useState } from "react";
import CharWrapper from "../CharWrapper/CharWrapper";
import CharContainer from "../CharContainer/CharContainer";
import Character from "../Character/Character";
import hiragana from "../../characters.json";
import Vowel from "../Vowel/Vowel";
import ModalCard from "../Modal/Modal";

function Diagram() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  console.log("SELECTED CHARACTER!", selectedCharacter);

  const vowel = ["A", "I", "U", "E", "O"];

  return (
    <div>
      <CharWrapper>
        {Object.keys(hiragana).map(key => {
          const column = hiragana[key];
          return (
            <div>
              <h2>{key.toUpperCase()}</h2>
              {column.map(character => {
                return (
                  <div>
                    <CharContainer>
                      <Character
                        setSelectedCharacter={setSelectedCharacter}
                        char={character.name}
                        sound={character.sound}
                        character={character}
                      />
                    </CharContainer>
                  </div>
                );
              })}
            </div>
          );
        })}
        <CharContainer>
          <h2>Vowels</h2>
          {vowel.map(v => {
            return <Vowel vowel={v} />;
          })}
        </CharContainer>
      </CharWrapper>
      <div>
        {selectedCharacter && (
          <ModalCard
            setSelectedCharacter={setSelectedCharacter}
            selectedCharacter={selectedCharacter}
          />
        )}
      </div>
    </div>
  );
}

export default Diagram;
