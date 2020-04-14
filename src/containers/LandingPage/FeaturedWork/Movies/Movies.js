import React from "react";
import { NavLink } from "react-router-dom";

import classes from "../FeaturedWork.module.css";
import firstImg from "../../../../assets/movies-mobile.png";
import secondImg from "../../../../assets/movies-mobile-search.png";
import thirdImg from "../../../../assets/movies-mobile-details.png";
import introImage from "../../../../assets/movies-intro.png";
import Navigation from "./../../../../components/Navigation/Navigation";
import Footer from "./../../../../components/Footer/Footer";
import ScrollToTopOnMount from "./../../../../functions/ScrollToTopOnMount";

import Burger from "../../../../assets/BurgerProject.PNG";
import Pacman from "../../../../assets/packman.png";

function FooNetflixBar() {
  return (
    <>
      <ScrollToTopOnMount />
      <Navigation />
      <div className={classes.FeaturedWork}>
        <h2 className={classes.FeaturedWorkTitle}>FooNetflixBar</h2>
        <h3 className={classes.FeaturedWorkSubTitle}>A project with many unknowns and limited time to finish</h3>
        <img className={classes.FeaturedWorkImage} src={introImage} alt={introImage} />
        <h3 className={classes.FeaturedWorkStack}>
          Tech stack: <span style={{ paddingLeft: "10px" }}>React, JavaScript, CSS, themoviedb's API, HLS, Shaka player, Github</span>
        </h3>
        <p className={classes.FeaturedWorkDescription}>
          FooNetflixBar started as a small 3-days project and even though the functionality is quite limited for now, it has taught me more
          than I expected - the most important of which is: "Once you find yourself surrounded by unknowns and problems, start breaking them
          into smaller chunks. Every tiny part has a simpler solution and gradually helps you with tackling the greater issue."
        </p>
        <div className={classes.FeaturedWorkScreenshots}>
          <img className={classes.FeaturedWorkScreenshot} src={firstImg} alt="Calculator's landing page" />
          <img className={classes.FeaturedWorkScreenshot} src={secondImg} alt="Calculator's search section" />
          <img className={classes.FeaturedWorkScreenshot} src={thirdImg} alt="Calculator's offset section" />
        </div>
        {/* <div className={classes.FeaturedWorkProcess}>
        <h3 className={classes.FeaturedWorkProcessTitle}>Process</h3>
        <p className={classes.FeaturedWorkProcessText}></p>
      </div> */}
        <div className={classes.FeaturedWorkNext}>
          <div className={classes.FeaturedWorkNextContainer}>
            <NavLink to='/burger'>
              <figure className={classes.FeaturedWorkNextFigure}>
                <img className={classes.FeaturedWorkNextProject} src={Burger} alt={Burger} />
              </figure>
            </NavLink>
            <p className={classes.FeaturedWorkNavigation}>Previous project</p>
            <h3 className={classes.FeaturedWorkSubTitle}>Burger Builder</h3>
          </div>
          <div className={classes.FeaturedWorkNextContainer}>
            <NavLink to='/pacman'>
              <figure className={classes.FeaturedWorkNextFigure}>
                <img className={classes.FeaturedWorkNextProject} src={Pacman} alt={Pacman} />
              </figure>
            </NavLink>
            <p className={classes.FeaturedWorkNavigation}>Next project</p>
            <h3 className={classes.FeaturedWorkSubTitle}>Pacman</h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FooNetflixBar;
