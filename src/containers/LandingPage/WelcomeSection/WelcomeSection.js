import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./WelcomeSection.module.css";
import Button from "../../../components/UI/Button/Button";
import landingPageImg from "../../../assets/landingPage.webp";

function WelcomeSection() {
  return (
    <div className={classes.WelcomeSection}>
      <div className={classes.WelcomeSectionDescription}>
        <h2 className={classes.WelcomeSectionText}>Front-end developer.</h2>
        <h2 className={classes.WelcomeSectionText}>Currently working on a Carbon Footprint Calculator.</h2>
        <NavLink to='/contact' style={{ textDecoration: "none", color: "inherit" }}>
          <Button>Contact me</Button>
        </NavLink>
      </div>
      <div className={classes.WelcomeSectionImageContainer}>
        <img src={landingPageImg} alt={landingPageImg} className={classes.WelcomeSectionImage} />
      </div>
    </div>
  );
}

export default WelcomeSection;
