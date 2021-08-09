import React from "react";
// Global Style
import GlobalStyle from "./components/GlobalStyle";

// Import Pages
import AboutUs from "./pages/AboutUs";

// Import components
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
};

export default App;
