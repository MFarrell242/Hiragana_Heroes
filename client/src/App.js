import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./App.css";
import Navbar from "./components/Navbar";
import Shell from "./components/Shell";
import Foot from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Shell />
        <Foot />
      </div>
    </Router>
  )

  }
export default App;
