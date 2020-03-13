import React from "react";
import LandingPage from "./components/LandingPage/screens";
import AboutScreen from "./components/AboutPage/screens";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import YouScreen from "./components/YouPage/screens";
import SigninPage from "./components/SignupPage/screens";


const App: React.FC = () => {
  return (
    <Router>
      <Switch>

      <Route path="/screens" component={SigninPage}/>

        <Route path="/about" component={AboutScreen} />
        <Route path="/you" component={YouScreen} />
        <Route path="/" component={LandingPage} />      
      </Switch>
    </Router>
  );
};

export default App;
