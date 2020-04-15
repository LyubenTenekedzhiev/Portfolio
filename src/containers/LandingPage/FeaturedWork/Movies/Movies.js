import React from "react";
import { NavLink } from "react-router-dom";

import classes from "../FeaturedWork.module.css";

import Navigation from "./../../../../components/Navigation/Navigation";
import Footer from "./../../../../components/Footer/Footer";
import ScrollToTopOnMount from "./../../../../functions/ScrollToTopOnMount";

function FooNetflixBar() {
  return (
    <>
      <ScrollToTopOnMount />
      <Navigation />
      <div className={classes.FeaturedWork}>
        <h2 className={classes.FeaturedWorkTitle}>FooNetflixBar</h2>
        <h3 className={classes.FeaturedWorkSubTitle}>A project with many unknowns and limited time to finish</h3>
        <img
          className={classes.FeaturedWorkImage}
          src='https://ik.imagekit.io/pyvwhvv76v/movies-intro_OwRHUzc7ap.png'
          alt='https://ik.imagekit.io/pyvwhvv76v/movies-intro_OwRHUzc7ap.png'
        />
        <h3 className={classes.FeaturedWorkStack}>
          Tech stack: <span style={{ paddingLeft: "10px" }}>React, JavaScript, CSS, themoviedb's API, HLS, Shaka player, Github</span>
        </h3>
        <p className={classes.FeaturedWorkDescription}>
          FooNetflixBar started as a small 3-days project and even though the functionality is quite limited for now, it has taught me more
          than I expected - the most important of which is: "Once you find yourself surrounded by unknowns and problems, start breaking them
          into smaller chunks. Every tiny part has a simpler solution and gradually helps you with tackling the greater issue."
        </p>
        <div className={classes.FeaturedWorkScreenshots}>
          <img
            className={classes.FeaturedWorkScreenshot}
            src='https://ik.imagekit.io/pyvwhvv76v/movies-mobile_x8gqu-3hz.png'
            alt='https://ik.imagekit.io/pyvwhvv76v/movies-mobile_x8gqu-3hz.png'
          />
          <img
            className={classes.FeaturedWorkScreenshot}
            src='https://ik.imagekit.io/pyvwhvv76v/movies-mobile-search_cHTlAqoin.png'
            alt='https://ik.imagekit.io/pyvwhvv76v/movies-mobile-search_cHTlAqoin.png'
          />
          <img
            className={classes.FeaturedWorkScreenshot}
            src='https://ik.imagekit.io/pyvwhvv76v/movies-mobile-details_YoZZpD-VeyA.png'
            alt='https://ik.imagekit.io/pyvwhvv76v/movies-mobile-details_YoZZpD-VeyA.png'
          />
        </div>
        <div className={classes.FeaturedWorkNext}>
          <div className={classes.FeaturedWorkNextContainer}>
            <NavLink to='/burger'>
              <figure className={classes.FeaturedWorkNextFigure}>
                <img
                  className={classes.FeaturedWorkNextProject}
                  src='https://ik.imagekit.io/pyvwhvv76v/BurgerProject_ASXPRr9vk.PNG'
                  alt='https://ik.imagekit.io/pyvwhvv76v/BurgerProject_ASXPRr9vk.PNG'
                />
              </figure>
            </NavLink>
            <p className={classes.FeaturedWorkNavigation}>Previous project</p>
            <h3 className={classes.FeaturedWorkSubTitle}>Burger Builder</h3>
          </div>
          <div className={classes.FeaturedWorkNextContainer}>
            <NavLink to='/pacman'>
              <figure className={classes.FeaturedWorkNextFigure}>
                <img
                  className={classes.FeaturedWorkNextProject}
                  src='https://ik.imagekit.io/pyvwhvv76v/packman_23_WvqNzQ1K.png'
                  alt='https://ik.imagekit.io/pyvwhvv76v/packman_23_WvqNzQ1K.png'
                />
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
