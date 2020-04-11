import React from "react";
import { NavLink } from "react-router-dom";

import classes from "../FeaturedWork.module.css";
import firstImg from "../../../../assets/calc-mobile.png";
import secondImg from "../../../../assets/calc-mobile-search.png";
import thirdImg from "../../../../assets/calc-mobile-offset.png";
import introImage from "../../../../assets/calculator-into.png";
import Navigation from "./../../../../components/Navigation/Navigation";
import Footer from "./../../../../components/Footer/Footer";
import ScrollToTopOnMount from "./../../../../functions/ScrollToTopOnMount";

import Hipster from "../../../../assets/Hipster.png";
import BurgerBuilder from "../../../../assets/BurgerProject.PNG";

function CarbonCalculator() {
  return (
    <div className={classes.FeaturedWork}>
      <ScrollToTopOnMount />
      <Navigation />
      <h2 className={classes.FeaturedWorkTitle}>Carbon Footprint Calculator</h2>
      <h3 className={classes.FeaturedWorkSubTitle}>Creating the UX/UI of my bootcamp's final project</h3>
      <img className={classes.FeaturedWorkImage} src={introImage} alt={introImage} />
      <h3 className={classes.FeaturedWorkStack}>Tech stack: React, JavaScript, Redux, CSS/SCSS, Material UI, Bootstrap, Laravel</h3>
      <p className={classes.FeaturedWorkDescription}>
        Carbon Voyage was inspired by the need for individuals and businesses to be more aware of their ecological footprint in order to
        make more environmentally-conscious decisions. Our application calculates the distance between two airports and computes the
        flights’ carbon emissions, giving the user or organization the option of offsetting their footprint.
      </p>
      <div className={classes.FeaturedWorkScreenshots}>
        <img className={classes.FeaturedWorkScreenshot} src={firstImg} alt="Calculator's landing page" />
        <img className={classes.FeaturedWorkScreenshot} src={secondImg} alt="Calculator's search section" />
        <img className={classes.FeaturedWorkScreenshot} src={thirdImg} alt="Calculator's offset section" />
      </div>
      <div className={classes.FeaturedWorkProcess}>
        <h3 className={classes.FeaturedWorkProcessTitle}>Process</h3>
        <p className={classes.FeaturedWorkProcessText}>
          We used scrum as a method for working together remotely. A backlog was built since day one so the team members could easily set
          and divide the daily tasks. The morning stand ups and code reviews helped us staying on the same page and keeping track of other
          team members’ work. In total, we spent 2 weeks building the MVP and I am really happy with what we’ve accomplished. The next steps
          of building the Carbon Calculator are adding a similar functionality for other means of transport, and making the whole interface
          more user friendly.
        </p>
      </div>
      <div className={classes.FeaturedWorkNext}>
        <div className={classes.FeaturedWorkNextContainer}>
          <NavLink to='/coffee'>
            <figure className={classes.FeaturedWorkNextFigure}>
              <img className={classes.FeaturedWorkNextProject} src={Hipster} alt={Hipster} />
            </figure>
          </NavLink>
          <p className={classes.FeaturedWorkNavigation}>Previous project</p>
          <h3 className={classes.FeaturedWorkSubTitle}>Archived Personal Portfolio</h3>
        </div>
        <div className={classes.FeaturedWorkNextContainer}>
          <NavLink to='/burger'>
            <figure className={classes.FeaturedWorkNextFigure}>
              <img className={classes.FeaturedWorkNextProject} src={BurgerBuilder} alt={BurgerBuilder} />
            </figure>
          </NavLink>
          <p className={classes.FeaturedWorkNavigation}>Next project</p>
          <h3 className={classes.FeaturedWorkSubTitle}>Burger Builder</h3>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CarbonCalculator;
