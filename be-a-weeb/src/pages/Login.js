import React, { Component } from "react";
import { GoogleLogout } from "react-google-login";
import { GoogleLogin } from "react-google-login";

const responseGoogle = (response) => {
    console.log(response);
  }

class Login extends Component {
    state = {
        isLogin: true
    }

    logout = () => {
        this.setState({ isLogin: false})
    }
    

    render() {
        console.log(this.state.isLogin);
        return (
            <>
              <div className="container-fluid">
                <div className="row justify-content-center" style={{ marginTop: 100 }}>
                  <div className="col-4 text-center">
                    <h3 className="">Welcome to Hiragana Heroes</h3>
                    <p className="">Create an account to start learning today!</p>
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
