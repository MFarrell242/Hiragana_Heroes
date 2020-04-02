import React, { Component } from "react";
import Nav from "../components/Nav/Nav";
import SignupForm from "../components/Signup-Form/Signup-Form";

class Signup extends Component {
  
      render() {
          
          return (
              <>
              <Nav />
                <SignupForm />
              </>
            );
      }
    
  }
  
  export default Signup;