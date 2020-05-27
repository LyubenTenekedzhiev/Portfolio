import React from "react";
import { NavLink } from "react-router-dom";

import classes from "../FeaturedWork.module.css";
import Navigation from "./../../../../components/Navigation/Navigation";
import Footer from "./../../../../components/Footer/Footer";
import ScrollToTopOnMount from "./../../../../functions/ScrollToTopOnMount";

function NotesCatcher() {
  return (
    <>
      <ScrollToTopOnMount />
      <Navigation />
      <div className={classes.FeaturedWork}>
        <h2 className={classes.FeaturedWorkTitle}>NotesCatcher</h2>
        <h3 className={classes.FeaturedWorkSubTitle}>A fast and easy to use to-do/productivity app</h3>
        <img
          className={classes.FeaturedWorkImage}
          src='https://ik.imagekit.io/pyvwhvv76v/profileNotes_Azuw76HHs.png'
          alt='https://ik.imagekit.io/pyvwhvv76v/profileNotes_Azuw76HHs.png'
        />
        <h3 className={classes.FeaturedWorkStack}>
          Tech stack: <span style={{ paddingLeft: "10px" }}>React, JavaScript, GraphQL, Node.js, Express, CSS, MongoDB, Github</span>
        </h3>
        <p className={classes.FeaturedWorkDescription} style={{ textAlign: "center" }}>
          (Still in{" "}
          <a href='https://notescatcher.netlify.app/' target='blank'>
            development process
          </a>
          )
        </p>
        {/* <div className={classes.FeaturedWorkProcess}>
          <h3 className={classes.FeaturedWorkProcessTitle}>Process</h3>
          <p className={classes.FeaturedWorkProcessText}>
            The project was part of a Udemy course and it took me more than a month to finish, mainly because I was attending a bootcamp at
            the same time, but also due to the many new React concepts which I was exposed to. Since I was fascinated and even empowered by
            the presence of React in my tech stack, I devoted 2 hours every night after finishing my daily bootcamp studies to this new
            magical JavaScript library. This is how the Burger Builder came to life and got the React ball rolling for me. <br></br>Kudos to
            Max Schwarzmüller for making this course and to Dan Abramov & Ryan Florence for being a constant motivation.
          </p>
        </div> */}
        <div className={classes.FeaturedWorkNext}>
          <div className={classes.FeaturedWorkNextContainer}>
            <NavLink to='/calculator'>
              <figure className={classes.FeaturedWorkNextFigure}>
                <img
                  className={classes.FeaturedWorkNextProject}
                  src='https://ik.imagekit.io/pyvwhvv76v/cfc_lfKc5ZZz7.webp'
                  alt='https://ik.imagekit.io/pyvwhvv76v/cfc_lfKc5ZZz7.webp'
                />
              </figure>
            </NavLink>
            <p className={classes.FeaturedWorkNavigation}>Previous project</p>
            <h3 className={classes.FeaturedWorkSubTitle}>Carbon Footprint Calculator</h3>
          </div>
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
            <p className={classes.FeaturedWorkNavigation}>Next project</p>
            <h3 className={classes.FeaturedWorkSubTitle}>BurgerBuilder</h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NotesCatcher;
