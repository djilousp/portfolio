import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import AboutUs from "./pages/AboutUs";
import Navigation from "./components/Navigation";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navigation />
      <AboutUs />
    </div>
  );
}

export default App;
