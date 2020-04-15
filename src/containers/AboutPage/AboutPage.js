import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./AboutPage.module.css";
import Navigation from "./../../components/Navigation/Navigation";
import Footer from "./../../components/Footer/Footer";

function AboutPage() {
  return (
    <div className={classes.AboutPage}>
      <Navigation />
      <div className={classes.AboutPageProfile}>
        <div className={classes.AboutPageProfileInfo}>
          <h1 className={classes.AboutPageProfileText}>Front-end developer.</h1>
          <h1 className={classes.AboutPageProfileText}>Former professional athlete.</h1>
          <h1 className={classes.AboutPageProfileText}>Gamer.</h1>
        </div>
        <div className={classes.AboutPageProfileImageContainer}>
          <img
            src='https://ik.imagekit.io/pyvwhvv76v/lyuben-768x512_t_M3rysyGPm.png'
            alt='https://ik.imagekit.io/pyvwhvv76v/lyuben-768x512_t_M3rysyGPm.png'
            className={classes.AboutPageProfileImage}
          />
        </div>
      </div>
      <div className={classes.AboutPageProfileDesc}>
        <h2 className={classes.AboutPageProfileText}>Technology stack</h2>
        <div className={classes.AboutPageProfileSkills}>
          <ul className={classes.AboutPageProfileDescription}>
            <li>React</li>
            <li>ES6</li>
            <li>Laravel (limited)</li>
            <li>Redux</li>
            <li>HTML5 / CSS3</li>
            <li>Sass</li>
            <li>Material UI / Bootstrap</li>
            <li>REST APIs</li>
            <li>MySQL (limited) / Firebase</li>
            <li>Version Control ( GIT )</li>
            <li>npm / yarn</li>
            <li>Gulp</li>
            <li>Responsive Layout and Design</li>
            <li>Agile Methodology</li>
            <li>BEM Methodology (naming convention)</li>
          </ul>
        </div>
      </div>
      <div className={classes.AboutPageProfileDesc}>
        <h2 className={classes.AboutPageProfileText}>Profile</h2>
        <img
          src='https://ik.imagekit.io/pyvwhvv76v/profilePic_FPx_h9PQ0.jpg'
          alt='https://ik.imagekit.io/pyvwhvv76v/profilePic_FPx_h9PQ0.jpg'
          className={classes.AboutPageProfileImg}
        />
        <div>
          <p className={classes.AboutPageProfileDescription}>
            I am a web developer and creator of digital products. Currently based in the great city of Prague, Czech Republic.
          </p>
          <p className={classes.AboutPageProfileDescription}>
            My skills include 80% front-end development, 15% back-end development and 5% cooking. When it comes to design, I have a passion
            about minimalism, but regarding problem solving, I will probably come up with the most convoluted solutions - but hey, if it
            works, it ain't stupid!
          </p>
          <p className={classes.AboutPageProfileDescription}>
            I'm always looking to work on fun projects. Feel free to reach out with work inquiries, side projects, or just to{" "}
            <NavLink to='/contact' style={{ textDecoration: "none", color: "blue" }}>
              say hello
            </NavLink>
            !
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
