import React from "react";

import classes from "./AboutPage.module.css";
import ProfileImage from "../../assets/lyuben-768x512.png";
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
          <img src={ProfileImage} alt={ProfileImage} className={classes.AboutPageProfileImage} />
        </div>
      </div>
      <div className={classes.AboutPageProfileDesc}>
        <h2 className={classes.AboutPageProfileText}>Profile</h2>
        <div>
          <p className={classes.AboutPageProfileDescription}>
            I am a web developer and creator of digital products. Currently based in the great city of Prague, Czech Republic.
          </p>
          <p className={classes.AboutPageProfileDescription}>
            My skills include 80% front-end development, 15% back-end development and 5% cooking. When it comes to design, I have a passion
            about minimalism (of course I do... it helps you code less), but regarding problem solving, I will probably come up with the
            most convoluted solutions (I'm in process of changing this! But hey, if it works, it ain't stupid!).
          </p>
          <p className={classes.AboutPageProfileDescription}>
            I'm always looking to work on fun projects. Feel free to reach out with work inquiries, side projects, or just to say hello!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
