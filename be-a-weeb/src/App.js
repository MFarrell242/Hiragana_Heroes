import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./App.css";
import Navbar from "./components/Navbar";
import Splash from "./components/pages/Splash";
import Classroom from "./components/pages/Classroom";
import Exam from './components/pages/Exam';
import Foot from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Splash} />
        <Route exact path="/Hira101" component={Classroom} />
        <Route exact path="/HiraQuiz" component={Exam} />
        <Foot />
      </div>
    </Router>
  )
//find a better place for this

// import CharWrapper from "./components/CharWrapper/CharWrapper";
// import Vowels from "./components/Vowels/Vowels";
// import Kchar from "./components/Kchar/Kchar";
// import Schar from "./components/Schar/Schar";
// import Tchar from "./components/Tchar/Tchar";
// import Nchar from "./components/Nchar/Nchar";
// import Hchar from "./components/Hchar/Hchar";
// import Mchar from "./components/Mchar/Mchar";
// import Ychar from "./components/Ychar/Ychar";
// import Rchar from "./components/Rchar/Rchar";
// import Wchar from "./components/Wchar/Wchar";

// function App() {
//   return (
//     <div>
//       <CharWrapper>
//         <Wchar />
//         <Rchar />
//         <Ychar />
//         <Mchar />
//         <Hchar />
//         <Nchar />
//         <Tchar />
//         <Schar />
//         <Kchar />
//         <Vowels />
//       </CharWrapper>
//     </div>
//   );
// }
  }
export default App;
