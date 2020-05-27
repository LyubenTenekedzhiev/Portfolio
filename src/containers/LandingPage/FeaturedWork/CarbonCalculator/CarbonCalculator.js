import React from "react";
import { NavLink } from "react-router-dom";

import classes from "../FeaturedWork.module.css";
// import firstImg from "../../../../assets/calc-mobile.webp";
// import secondImg from "../../../../assets/calc-mobile-search.webp";
// import thirdImg from "../../../../assets/calc-mobile-offset.webp";
// import introImage from "../../../../assets/calculator-into.webp";
import Navigation from "./../../../../components/Navigation/Navigation";
import Footer from "./../../../../components/Footer/Footer";
import ScrollToTopOnMount from "./../../../../functions/ScrollToTopOnMount";

// import Hipster from "../../../../assets/Hipster.webp";
// import BurgerBuilder from "../../../../assets/BurgerProject.PNG";

function CarbonCalculator() {
  return (
    <>
      <ScrollToTopOnMount />
      <Navigation />
      <div className={classes.FeaturedWork}>
        <h2 className={classes.FeaturedWorkTitle}>Carbon Footprint Calculator</h2>
        <h3 className={classes.FeaturedWorkSubTitle}>Creating the UX/UI of my bootcamp's final project</h3>
        <img
          className={classes.FeaturedWorkImage}
          src='https://ik.imagekit.io/pyvwhvv76v/calculator-into_aqHU7hSCD.webp'
          alt='https://ik.imagekit.io/pyvwhvv76v/calculator-into_aqHU7hSCD.webp'
        />
        <h3 className={classes.FeaturedWorkStack}>
          Tech stack:{" "}
          <span style={{ paddingLeft: "10px" }}>React, JavaScript, Redux, CSS/SCSS, Material UI, Bootstrap, Laravel, MySQL, Github</span>
        </h3>
        <p className={classes.FeaturedWorkDescription}>
          Carbon Voyage was inspired by the need for individuals and businesses to be more aware of their ecological footprint in order to
          make more environmentally-conscious decisions. Our application calculates the distance between two airports and computes the
          flights’ carbon emissions, giving the user or organization the option of offsetting their footprint.
        </p>
        <div className={classes.FeaturedWorkScreenshots}>
          <img
            className={classes.FeaturedWorkScreenshot}
            src='https://ik.imagekit.io/pyvwhvv76v/calc-mobile_bmy1VGKg2.webp'
            alt="Calculator's landing page"
          />
          <img
            className={classes.FeaturedWorkScreenshot}
            src='https://ik.imagekit.io/pyvwhvv76v/calc-mobile-search_B6ZfobPpIHY.webp'
            alt="Calculator's search section"
          />
          <img
            className={classes.FeaturedWorkScreenshot}
            src='https://ik.imagekit.io/pyvwhvv76v/calc-mobile-offset_SyzcvQXkrl.webp'
            alt="Calculator's offset section"
          />
        </div>
        <div className={classes.FeaturedWorkProcess}>
          <h3 className={classes.FeaturedWorkProcessTitle}>Process</h3>
          <p className={classes.FeaturedWorkProcessText}>
            We used scrum as a method for working together remotely. A backlog was built since day one so the team members could easily set
            and divide the daily tasks. The morning stand ups and code reviews helped us staying on the same page and keeping track of other
            team members’ work. In total, we spent 2 weeks building the MVP and I am really happy with what we’ve accomplished. The next
            steps of building the Carbon Calculator are adding a similar functionality for other means of transport, and making the whole
            interface more user friendly.
          </p>
        </div>
        <div className={classes.FeaturedWorkNext}>
          <div className={classes.FeaturedWorkNextContainer}>
            <NavLink to='/books'>
              <figure className={classes.FeaturedWorkNextFigure}>
                <img
                  className={classes.FeaturedWorkNextProject}
                  src='https://ik.imagekit.io/pyvwhvv76v/GraphQL-small_ZK3_Cs1WN.png'
                  alt='https://ik.imagekit.io/pyvwhvv76v/GraphQL-small_ZK3_Cs1WN.png'
                />
              </figure>
            </NavLink>
            <p className={classes.FeaturedWorkNavigation}>Previous project</p>
            <h3 className={classes.FeaturedWorkSubTitle}>A simple bookstore</h3>
          </div>
          <div className={classes.FeaturedWorkNextContainer}>
            <NavLink to='/notes'>
              <figure className={classes.FeaturedWorkNextFigure}>
                <img
                  className={classes.FeaturedWorkNextProject}
                  src='https://ik.imagekit.io/pyvwhvv76v/profileNotes_Azuw76HHs.png'
                  alt='https://ik.imagekit.io/pyvwhvv76v/profileNotes_Azuw76HHs.png'
                />
              </figure>
            </NavLink>
            <p className={classes.FeaturedWorkNavigation}>Next project</p>
            <h3 className={classes.FeaturedWorkSubTitle}>NotesCatcher</h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CarbonCalculator;
