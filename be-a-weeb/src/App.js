import React from "react";
import CharWrapper from "./components/CharWrapper/CharWrapper";
import Vowels from "./components/Vowels/Vowels";
import Kchar from "./components/Kchar/Kchar";
import Schar from "./components/Schar/Schar";
import Tchar from "./components/Tchar/Tchar";
import Nchar from "./components/Nchar/Nchar";
import Hchar from "./components/Hchar/Hchar";
import Mchar from "./components/Mchar/Mchar";
import Ychar from "./components/Ychar/Ychar";
import Rchar from "./components/Rchar/Rchar";
import Wchar from "./components/Wchar/Wchar";

function App() {
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
      </CharWrapper>
    </div>
  );
}

export default App;
