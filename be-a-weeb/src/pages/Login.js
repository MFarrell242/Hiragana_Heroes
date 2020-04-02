import React, { Component } from "react";
import Nav from "../components/Nav/Nav";
import { GoogleLogout } from "react-google-login";
import { GoogleLogin } from "react-google-login";

const responseGoogle = (response) => {
    console.log(response);
  }

class Login extends Component {
    state = {
        isLogout: false
    }

    logout = () => {
        this.setState({ isLogout: true})
    }
    

    render() {
        console.log(this.state.isLogout);
        return (
            <>
            <Nav />
              <div className="container-fluid">
                <div className="row justify-content-center" style={{ marginTop: 100 }}>
                  <div className="col-4 text-center">
                    
                    <h5 className="">Create an account to start learning today!</h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4 text-center"></div>
                  <div className="col-4 text-center">
                    {/* <div
                      className="g-signin2"
                      style={{ width: 100, margin: "auto" }}
                      data-onsuccess="onSignIn"
                    ></div> */}
                    <div>
                      <GoogleLogin
                        clientId="517700874246-m90up0h8vl88da79nmh3bjo5602msrq3.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={"single_host_origin"}
                      />
                    </div>
                    <div>
                      {/* <a href="#" onclick="signOut();">
                        Sign out
                      </a> */}
                      <GoogleLogout
                        clientId="517700874246-m90up0h8vl88da79nmh3bjo5602msrq3.apps.googleusercontent.com"
                        buttonText="Logout"
                        onLogoutSuccess={this.logout}
                      ></GoogleLogout>
                    </div>
                  </div>
                  <div className="col-4 text-center"></div>
                </div>
              </div>
            </>
          );
    }
  
}

export default Login;