import React from "react";

function Login() {
  return (
      <>
    <div className="container-fluid my-auto">
        <div className="row justify-content-center">
        <div className="col-4">
          <h3 className="text-center">Welcome to Hiragana Heroes</h3>
          <p className="text-center">Create an account to start learning today!</p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-4 d-flex justify-content-center">
          
            <div className="g-signin2" data-onsuccess="onSignIn"></div>
            {/* <a href="#" onclick="signOut();">Sign out</a> */}
          
        </div>
      </div>
      <div class="row h-100">
   <div class="col-sm-12 my-auto">
     <div class="card card-block w-25 mx-auto">Card</div>
   </div>
</div>
    </div>
    
  
  </>
  );
}

export default Login;
