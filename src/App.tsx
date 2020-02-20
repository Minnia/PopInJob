import React from "react";
import Background from "../src/components/LandingPageBackground";
import NavBar from "../src/components/Navbar";
import WelcomeVideo from "../src/components/LandingPageVideo";

function App() {
  return (
    <Background>
      <NavBar />
      <WelcomeVideo />
    </Background>
  );
}

export default App;
