import React, { Fragment } from "react";

// Routing
import { Route, Switch, useLocation } from "react-router-dom";

// Animation
import { AnimatePresence } from "framer-motion";

// Global Style
import GlobalStyle from "./components/GlobalStyle";

// Import Pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";

// Import components
import Nav from "./components/Nav";

const App = () => {
  const location = useLocation();

  return (
    <Fragment>
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        {/* location & key used in Switch are only for framer motion specific. They want these for page transition */}
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </Fragment>
  );
};

export default App;
