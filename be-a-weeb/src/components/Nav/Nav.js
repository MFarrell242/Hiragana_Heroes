import React from "react";
import "./style.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid head">
        <div className="container">
          <h1 className="display-4">Welcome to Hiragana Heroes</h1>
          <p className="lead">Learn Hiragana Like a Hero!</p>

          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Login/Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/learn">
                Learn
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/practice">
                Practice
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
