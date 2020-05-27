import React from "react";
import { NavLink } from "react-router-dom";

import classes from "../FeaturedWork.module.css";
import Navigation from "./../../../../components/Navigation/Navigation";
import Footer from "./../../../../components/Footer/Footer";
import ScrollToTopOnMount from "./../../../../functions/ScrollToTopOnMount";

function Pacman() {
  return (
    <>
      <ScrollToTopOnMount />
      <Navigation />
      <div className={classes.FeaturedWork}>
        <h2 className={classes.FeaturedWorkTitle}>Pacman</h2>
        <h3 className={classes.FeaturedWorkSubTitle}>From "How the heck are we going to build this" to "We made it!"</h3>
        <img
          className={classes.FeaturedWorkImage}
          src='https://ik.imagekit.io/pyvwhvv76v/pacman-intro_uY0TT5Qr6.png'
          alt='https://ik.imagekit.io/pyvwhvv76v/pacman-intro_uY0TT5Qr6.png'
        />
        <h3 className={classes.FeaturedWorkStack}>
          Tech stack: <span style={{ paddingLeft: "10px" }}>JavaScript, SCSS, Gulp, Github</span>
        </h3>
        <p className={classes.FeaturedWorkDescription}>
          Prior the bootcamp I had 4 months of JavaScript experience. It was rather intensive (5-6 hours a day) and I made my way from the
          the basics to the more advanced topics. A good amount of time was spent with solving logical/mathematical problems, BUT I was
          always scared from developing a game. Turns out it's achievable!
        </p>
        <div className={classes.FeaturedWorkProcess}>
          <h3 className={classes.FeaturedWorkProcessTitle}>Process</h3>
          <p className={classes.FeaturedWorkProcessText}>
            It was our fourth week into the bootcamp. After spending 12 days in the waters of JavaScript, it was time for our second
            hackathon. A game! Should I start panicking? Well, let's give it a try first and if we don't build a solid ground to stand on,
            we can ask for help or... panic. Once we read the instructions, implemented the game's stage and added pacman's head, things
            started clicking for us! There was neither kinetic nor potential energy, responsible for pacman's movement. Only logic! 8
            hours later, we had our pacboy flying through the stage, eating apples and bumping into walls. Definitely my favourite
            hackathon!
          </p>
        </div>
        <div className={classes.FeaturedWorkNext}>
          <div className={classes.FeaturedWorkNextContainer}>
            <NavLink to='/movies'>
              <figure className={classes.FeaturedWorkNextFigure}>
                <img
                  className={classes.FeaturedWorkNextProject}
                  src='https://ik.imagekit.io/pyvwhvv76v/movies_mgTdbMr2K2.png'
                  alt='https://ik.imagekit.io/pyvwhvv76v/movies_mgTdbMr2K2.png'
                />
              </figure>
            </NavLink>
            <p className={classes.FeaturedWorkNavigation}>Previous project</p>
            <h3 className={classes.FeaturedWorkSubTitle}>FooNetflixBar</h3>
          </div>
          <div className={classes.FeaturedWorkNextContainer}>
            <NavLink to='/coffee'>
              <figure className={classes.FeaturedWorkNextFigure}>
                <img
                  className={classes.FeaturedWorkNextProject}
                  src='https://ik.imagekit.io/pyvwhvv76v/Hipster_Pl9p6PJ6B.webp'
                  alt='https://ik.imagekit.io/pyvwhvv76v/Hipster_Pl9p6PJ6B.webp'
                />
              </figure>
            </NavLink>
            <p className={classes.FeaturedWorkNavigation}>Next project</p>
            <h3 className={classes.FeaturedWorkSubTitle}>Generic Hipster Coffee</h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Pacman;
