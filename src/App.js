import React, { Fragment } from "react";

import { Route, Switch } from "react-router-dom";

// Global Style
import GlobalStyle from "./components/GlobalStyle";

// Import Pages
import AboutUs from "./pages/AboutUs";

// Import components
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work">
          <OurWork />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default App;
