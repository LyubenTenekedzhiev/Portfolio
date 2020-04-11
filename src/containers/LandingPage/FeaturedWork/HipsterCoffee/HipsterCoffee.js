import React from "react";
import { NavLink } from "react-router-dom";

import classes from "../FeaturedWork.module.css";
import introImage from "../../../../assets/hipster-intro.png";
import firstImg from "../../../../assets/hipster-mobile.png";
import secondImg from "../../../../assets/hipster-mobile-coffee.png";
import thirdImg from "../../../../assets/hipster-mobile-story.png";
import Navigation from "../../../../components/Navigation/Navigation";
import Footer from "../../../../components/Footer/Footer";
import ScrollToTopOnMount from "../../../../functions/ScrollToTopOnMount";

import Pacman from "../../../../assets/packman.png";
import CarbonCalculator from "../../../../assets/calculator-into.png";

function FooNetflixBar() {
  return (
    <div className={classes.FeaturedWork}>
      <ScrollToTopOnMount />
      <Navigation />
      <h2 className={classes.FeaturedWorkTitle}>Generic Hipster Coffee</h2>
      <h3 className={classes.FeaturedWorkSubTitle}>"Start with your portfolios during week 2" they said. "It will be fun" they said.</h3>
      <img className={classes.FeaturedWorkImage} src={introImage} alt={introImage} />
      <h3 className={classes.FeaturedWorkStack}>Tech stack: HTML, SCSS, Gulp</h3>
      <p className={classes.FeaturedWorkDescription}>
        Up to some extent it was enjoyable. But as mentioned, we were into week 2 at the time and as you can imagine that it quickly gets
        frustrating once you cannot find a way to implement your "cool" portfolio ideas. I would usually end up having weird heights,widths,
        margins and paddings, in order to position the elements according to my notions. Hence I didn't even try making it responsive or at
        least finishing the desktop version, because it would have been a nightmare. Lessons learned!
      </p>
       <div className={classes.FeaturedWorkScreenshots}>
        <img className={classes.FeaturedWorkScreenshot} src={firstImg} alt="Calculator's landing page" />
        <img className={classes.FeaturedWorkScreenshot} src={secondImg} alt="Calculator's search section" />
        <img className={classes.FeaturedWorkScreenshot} src={thirdImg} alt="Calculator's offset section" />
      </div>
      <div className={classes.FeaturedWorkNext}>
        <div className={classes.FeaturedWorkNextContainer}>
          <NavLink to='/pacman'>
            <figure className={classes.FeaturedWorkNextFigure}>
              <img className={classes.FeaturedWorkNextProject} src={Pacman} alt={Pacman} />
            </figure>
          </NavLink>
          <p className={classes.FeaturedWorkNavigation}>Previous project</p>
          <h3 className={classes.FeaturedWorkSubTitle}>Pacman</h3>
        </div>
        <div className={classes.FeaturedWorkNextContainer}>
          <NavLink to='/calculator'>
            <figure className={`${classes.FeaturedWorkNextFigure} ${classes.FeaturedWorkNextFigureCarbon}`}>
              <img className={`${classes.FeaturedWorkNextProject} ${classes.FeaturedWorkNextProjectCarbon}`} src={CarbonCalculator} alt={CarbonCalculator} />
            </figure>
          </NavLink>
          <p className={classes.FeaturedWorkNavigation}>Next project</p>
          <h3 className={classes.FeaturedWorkSubTitle}>Carbon Footprint Calculator</h3>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FooNetflixBar;
