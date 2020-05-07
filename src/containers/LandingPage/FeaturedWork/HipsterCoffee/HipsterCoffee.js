import React from "react";
import { NavLink } from "react-router-dom";

import classes from "../FeaturedWork.module.css";
import Navigation from "../../../../components/Navigation/Navigation";
import Footer from "../../../../components/Footer/Footer";
import ScrollToTopOnMount from "../../../../functions/ScrollToTopOnMount";

function FooNetflixBar() {
  return (
    <>
      <ScrollToTopOnMount />
      <Navigation />
      <div className={classes.FeaturedWork}>
        <h2 className={classes.FeaturedWorkTitle}>Generic Hipster Coffee</h2>
        <h3 className={classes.FeaturedWorkSubTitle}>A nice and simple website, suitable for every small business</h3>
        <img
          className={classes.FeaturedWorkImage}
          src='https://ik.imagekit.io/pyvwhvv76v/hipster-intro_dW-VEG6bb_B.png'
          alt='https://ik.imagekit.io/pyvwhvv76v/hipster-intro_dW-VEG6bb_B.png'
        />
        <h3 className={classes.FeaturedWorkStack}>
          Tech stack: <span style={{ paddingLeft: "10px" }}>HTML, SCSS, Gulp, Github</span>
        </h3>
        <p className={classes.FeaturedWorkDescription}>
          As our first hackathon, the Generic Hipster Coffee was a project that we breezed through, because of it's simplicity. No logic, no
          crazy functions, just plain HTML and SCSS. It was all fun and games for the most part - until we had to include Github to the
          picture. As you can imagine, we spent in total more time resolving merge conflicts, re-commiting out changes and figuring out what
          do to with all of the branches that we created. Feel free to laugh at our{" "}
          <a
            href='https://github.com/LyubenTenekedzhiev/hackathon01/commits/master'
            target='blank'
            style={{ textDecoration: "none", color: "blue" }}
          >
            commit history
          </a>
          . <br></br>Thankfully, many things changed ever since!
        </p>
        <div className={classes.FeaturedWorkScreenshots}>
          <img
            className={classes.FeaturedWorkScreenshot}
            src='https://ik.imagekit.io/pyvwhvv76v/hipster-mobile_AqIepl8rj.png'
            alt='https://ik.imagekit.io/pyvwhvv76v/hipster-mobile_AqIepl8rj.png'
          />
          <img
            className={classes.FeaturedWorkScreenshot}
            src='https://ik.imagekit.io/pyvwhvv76v/hipster-mobile-coffee_hKhAX85QL.png'
            alt='https://ik.imagekit.io/pyvwhvv76v/hipster-mobile-coffee_hKhAX85QL.png'
          />
          <img
            className={classes.FeaturedWorkScreenshot}
            src='https://ik.imagekit.io/pyvwhvv76v/hipster-mobile-story_NFZ8yWtVu.png'
            alt='https://ik.imagekit.io/pyvwhvv76v/hipster-mobile-story_NFZ8yWtVu.png'
          />
        </div>
        <div className={classes.FeaturedWorkNext}>
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
            <p className={classes.FeaturedWorkNavigation}>Previous project</p>
            <h3 className={classes.FeaturedWorkSubTitle}>Pacman</h3>
          </div>
          <div className={classes.FeaturedWorkNextContainer}>
            <NavLink to='/books'>
              <figure className={`${classes.FeaturedWorkNextFigure} ${classes.FeaturedWorkNextFigureCarbon}`}>
                <img
                  className={`${classes.FeaturedWorkNextProject} ${classes.FeaturedWorkNextProjectCarbon}`}
                  src='https://ik.imagekit.io/pyvwhvv76v/GraphQL-small_ZK3_Cs1WN.png'
                  alt='https://ik.imagekit.io/pyvwhvv76v/GraphQL-small_ZK3_Cs1WN.png'
                />
              </figure>
            </NavLink>
            <p className={classes.FeaturedWorkNavigation}>Next project</p>
            <h3 className={classes.FeaturedWorkSubTitle}>A simple bookstore</h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FooNetflixBar;
