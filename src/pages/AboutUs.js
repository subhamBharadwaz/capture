import React, { Fragment } from "react";

// Page components
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";

const AboutUs = () => {
  return (
    <Fragment>
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </Fragment>
  );
};

export default AboutUs;
