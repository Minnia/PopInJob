import React from "react";
import LandingPage from "./screens/LandingScreen";
import AboutScreen from "../src/screens/AboutScreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import YouScreen from "../src/screens/YouScreen";
import SigninPage from "../src/screens/SignUpScreen";
import LoginScreen from "./screens/LoginScreen";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginScreen} />
        <Route path="/signup" component={SigninPage} />
        <Route path="/about" component={AboutScreen} />
        <Route path="/you" component={YouScreen} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
  );
};

export default App;
