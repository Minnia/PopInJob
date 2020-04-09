import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingScreen from "./screens/LandingScreen";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LandingScreen} />
      </Switch>
    </Router>
  );
};

export default App;
