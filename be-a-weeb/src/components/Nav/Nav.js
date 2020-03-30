import React from "react";
import "./style.css";
//import { Link, Route } from "react-router-dom";

function Nav() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid head">
        <div className="container">
          <h1 className="display-4">Welcome to Hiragana Heroes</h1>
          <p className="lead">Learn Hiragana Like a Hero!</p>

          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Login/Signup
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Learn
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Practice
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
