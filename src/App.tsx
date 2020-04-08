import React from "react";
import LandingPage from "./screens/LandingScreen";
import AboutScreen from "../src/screens/AboutScreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        {/* <Route path="/contact" component={ContactScreen} />
        <Route path="/about" component={AboutScreen} />
        <Route path="/you" component={YouScreen} />
        <Route path="/" component={LandingPage} /> */}
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
  );
};

export default App;
