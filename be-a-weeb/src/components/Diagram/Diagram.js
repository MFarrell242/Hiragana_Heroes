import React from "react";
import CharWrapper from "../CharWrapper/CharWrapper";
import VowelName from "../VowelName/VowelName";
import Vowels from "../Vowels/Vowels";
import Kchar from "../Kchar/Kchar";
import Schar from "../Schar/Schar";
import Tchar from "../Tchar/Tchar";
import Nchar from "../Nchar/Nchar";
import Hchar from "../Hchar/Hchar";
import Mchar from "../Mchar/Mchar";
import Ychar from "../Ychar/Ychar";
import Rchar from "../Rchar/Rchar";
import Wchar from "../Wchar/Wchar";

function Diagram() {
  return (
    <div>
      <CharWrapper>
        <Wchar />
        <Rchar />
        <Ychar />
        <Mchar />
        <Hchar />
        <Nchar />
        <Tchar />
        <Schar />
        <Kchar />
        <Vowels />
        <VowelName />
      </CharWrapper>
    </div>
  );
}

export default Diagram;
