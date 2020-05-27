import React from "react";
import { NavLink } from "react-router-dom";

import classes from "../FeaturedWork.module.css";
import Navigation from "./../../../../components/Navigation/Navigation";
import Footer from "./../../../../components/Footer/Footer";
import ScrollToTopOnMount from "./../../../../functions/ScrollToTopOnMount";


function BurgerBuilder() {
  return (
    <>
      <ScrollToTopOnMount />
      <Navigation />
      <div className={classes.FeaturedWork}>
        <h2 className={classes.FeaturedWorkTitle}>Burger Builder</h2>
        <h3 className={classes.FeaturedWorkSubTitle}>From the ingredients through the authentication to the database</h3>
        <img
          className={classes.FeaturedWorkImage}
          src='https://ik.imagekit.io/pyvwhvv76v/burger-intro_LCnfyvhUx.webp'
          alt='https://ik.imagekit.io/pyvwhvv76v/burger-intro_LCnfyvhUx.webp'
        />
        <h3 className={classes.FeaturedWorkStack}>
          Tech stack: <span style={{ paddingLeft: "10px" }}>React, JavaScript, Redux, CSS, Firebase, Github</span>
        </h3>
        <p className={classes.FeaturedWorkDescription}>
          Without any idea related to social responsibility, the project is a simulation of making a burger, creating an account and saving
          the orders there (you don't have to pay the actual price, relax). Very straight forward. The Burger Builder is my very first React
          playground, where I could experiment, have my "aha" moments and start thinking in React.
        </p>
        <div className={classes.FeaturedWorkScreenshots}>
          <img
            className={classes.FeaturedWorkScreenshot}
            src='https://ik.imagekit.io/pyvwhvv76v/burger-mobile-modal_FW8uFDzMc.webp'
            alt='https://ik.imagekit.io/pyvwhvv76v/burger-mobile-modal_FW8uFDzMc.webp'
          />
          <img
            className={classes.FeaturedWorkScreenshot}
            src='https://ik.imagekit.io/pyvwhvv76v/burger-mobile-auth_Le6YjM4Cy.webp'
            alt='https://ik.imagekit.io/pyvwhvv76v/burger-mobile-auth_Le6YjM4Cy.webp'
          />
          <img
            className={classes.FeaturedWorkScreenshot}
            src='https://ik.imagekit.io/pyvwhvv76v/burger-mobile-orders_32DesZ1wdD-w.webp'
            alt='https://ik.imagekit.io/pyvwhvv76v/burger-mobile-orders_32DesZ1wdD-w.webp'
          />
        </div>
        <div className={classes.FeaturedWorkProcess}>
          <h3 className={classes.FeaturedWorkProcessTitle}>Process</h3>
          <p className={classes.FeaturedWorkProcessText}>
            The project was part of a Udemy course and it took me more than a month to finish, mainly because I was attending a bootcamp at
            the same time, but also due to the many new React concepts which I was exposed to. Since I was fascinated and even empowered by
            the presence of React in my tech stack, I devoted 2 hours every night after finishing my daily bootcamp studies to this new
            magical JavaScript library. This is how the Burger Builder came to life and got the React ball rolling for me. <br></br>Kudos to
            Max Schwarzmüller for making this course and to Dan Abramov & Ryan Florence for being a constant motivation.
          </p>
        </div>
        <div className={classes.FeaturedWorkNext}>
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
            <p className={classes.FeaturedWorkNavigation}>Previous project</p>
            <h3 className={classes.FeaturedWorkSubTitle}>NotesCatcher</h3>
          </div>
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
            <p className={classes.FeaturedWorkNavigation}>Next project</p>
            <h3 className={classes.FeaturedWorkSubTitle}>FooNetflixBar</h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BurgerBuilder;
