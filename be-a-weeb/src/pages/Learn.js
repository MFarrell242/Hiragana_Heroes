import React, { useState } from "react";
import "./main.css";
//import { Link, Route } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Diagram from "../components/Diagram/Diagram";
import CharCard from "../components/CharCard/CharCard";

function Learn() {
  const [setCard] = useState(false);

  const displayCard = e => {
    e.preventDefault();
    setCard
  };

  return (
    <div>
      <Nav />
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Understanding Hiragana</h1>
          <p class="lead">
            Let's learn everything about the basics of hiragana!
          </p>
          <p>Even more stuff about it</p>
        </div>
      </div>
      <Diagram />
      <CharCard onClick={ displayCard()} />
    </div>
  );
}

export default Learn;
