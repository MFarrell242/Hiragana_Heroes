import React from "react";
import "./main.css";
//import { Link, Route } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Diagram from "../components/Diagram/Diagram";

function Learn() {
  return (
    <div>
      <Nav />
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Understanding Hiragana</h1>
          <p class="lead">
            Let's learn everything about the basics of hiragana!
          </p>
          <p>
            Hiragana is a syllabary writing system created by the Japanese
            consisting of 46 characters that all represent a consonant/vowel
            pair of sounds (with the exception of one, but more on that later).
            This clever writing system is displayed as a chart that intuitively
            establishes the set of columns and rows of consonant/vowel pairs to
            be easily learned by anyone!
          </p>
          <p>
            To get started it's important to understand that the Japanese read
            and write from the right to left, completely backwords from the
            English writing system.
          </p>
        </div>
      </div>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Beginning Hiragana</h1>
          <p class="lead">Start from the right!</p>
          <p>
            Starting from the top right of the diagram and moving down each
            column we can see that each column follows a clear patern of vowels,
            "A", "I", "U", "E", and "O". All that is required is adding the
            consonant with the vowel and that's as simple as hiragana gets!
            There are a few exceptions though!
          </p>
          <p>
            Click on the characters to learn their names and how they're
            pronounced. Some of them can be tricky!
          </p>
        </div>
      </div>
      <Diagram />
    </div>
  );
}

export default Learn;
