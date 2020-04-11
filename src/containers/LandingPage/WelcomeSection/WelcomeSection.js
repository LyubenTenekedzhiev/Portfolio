import React from "react";

import classes from "./WelcomeSection.module.css";
import Button from "../../../components/UI/Button/Button";

function WelcomeSection() {
  return (
    <div className={classes.WelcomeSection}>
      <div className={classes.WelcomeSectionDescription}>
        <h2 className={classes.WelcomeSectionText}>Front-end developer.</h2>
        <h2 className={classes.WelcomeSectionText}>Currently working on a Carbon Footprint Calculator.</h2>
        <Button />
      </div>
      <div className={classes.WelcomeSectionImageContainer}>
        <div className={classes.WelcomeSectionImage}></div>
      </div>
    </div>
  );
}

export default WelcomeSection;
