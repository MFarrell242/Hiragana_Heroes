import React from "react";
import Learn from "./pages/Learn";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Practice from "./pages/Practice";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/learn">
            <Learn />;
          </Route>
          <Route exact path={["/", "/login"]}>
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/practice">
            <Practice />;
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
