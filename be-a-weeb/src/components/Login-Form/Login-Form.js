import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";
import axios from "axios";
import "./style.css";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      redirectTo: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit");

    axios
      .post("/user/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log("login response: ");
        console.log(response);
        if (response.status === 200) {
          // update App.js state
          this.props.updateUser({
            loggedIn: true,
            username: response.data.username
          });
          // update the state to redirect to home
          this.setState({
            redirectTo: "/"
          });
        }
      })
      .catch(error => {
        console.log("login error: ");
        console.log(error);
      });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div>
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6 text-center">
              <h4>Login</h4>
            </div>
            <div className="col-3"></div>
          </div>
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6 text-center">
              <form className="form-horizontal">
                <div className="form-group">
                  <div className="col-1 col-ml-auto">
                    <label className="form-label" htmlFor="username">
                      Username
                    </label>
                  </div>
                  <div className="col-3 col-mr-auto">
                    <input
                      className="form-input"
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Username"
                      value={this.state.username}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-1 col-ml-auto">
                    <label className="form-label" htmlFor="password">
                      Password:{" "}
                    </label>
                  </div>
                  <div className="col-3 col-mr-auto">
                    <input
                      className="form-input"
                      placeholder="Password"
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="form-group ">
                  <button
                    className="btn hero-btn"
                    onClick={this.handleSubmit}
                    type="submit"
                  >
                    Login
                  </button>
                </div>
                <div>
                  <p>
                    Don't have an account? Sign up{" "}
                    <Link className="active" to="/signup">
                      here!
                    </Link>
                  </p>
                </div>
              </form>
            </div>
            <div className="col-3"></div>
          </div>
        </div>
      );
    }
  }
}

export default LoginForm;
