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
  );
}

export default App;
