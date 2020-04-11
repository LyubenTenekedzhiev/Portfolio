import React from "react";

import Navigation from "./../../components/Navigation/Navigation";
import Footer from "./../../components/Footer/Footer";
import PortfolioSection from "./../LandingPage/PortfolioSection/PortfolioSection";
import WelcomeSection from "./../LandingPage/WelcomeSection/WelcomeSection";

function LandingPage() {
  return (
    <div>
      <Navigation />
      <WelcomeSection />
      <PortfolioSection />
      <Footer />
    </div>
  );
}

export default LandingPage;
