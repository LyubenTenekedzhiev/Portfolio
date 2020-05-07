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
        <h2 className={classes.FeaturedWorkTitle}>A simple bookstore</h2>
        <h3 className={classes.FeaturedWorkSubTitle}>
          REST architecture used to be the bastion of web API development. Is GraphQL taking over?
        </h3>
        <img
          className={classes.FeaturedWorkImage}
          src='https://ik.imagekit.io/pyvwhvv76v/graphiql_rOgmnpd_0yN.webp'
          alt='https://ik.imagekit.io/pyvwhvv76v/graphiql_rOgmnpd_0yN.webp'
        />
        <h3 className={classes.FeaturedWorkStack}>
          Tech stack: <span style={{ paddingLeft: "10px" }}>GraphQL, JavaScript, Express, Node, MongoDB, React, CSS</span>
        </h3>
        <p className={classes.FeaturedWorkDescription}>
          Have a look at the picture above and let me ask you a question: When was the last time you wanted data from multiple tables in
          your database and hence how many requests did you have to make? Using APIs to communicate with servers is a day-to-day work of
          almost every developer. However, there are some limitations of the conventional REST architecture and we might want to consider
          using some helping tools to overcome them.
        </p>
        <div className={classes.FeaturedWorkProcess}>
          <h3 className={classes.FeaturedWorkProcessTitle}>Things GraphQL does better than REST</h3>
          <p className={classes.FeaturedWorkProcessText}>
            GraphQL declares everything as a graph. You say what you want, and then you will get that. This is one of the biggest benefits -
            the simple fact that GraphQL has fewer and more efficient roundtrips than REST does. Moreover, GraphQL has a sophisticated
            typing system, allowing for more specific and powerful queries, so that you don't end up with different type settings for mobile
            or desktop versions of your app.<br></br>
            Having these advantages into consideration, I decided to pick up this technology building a simple bookstore. Although, the
            functionality of the app is quite limited (adding books to the list and finding details about them and their authors), I had
            in-depth look at GraphQL's implementation and connection with both back- and front-end.
          </p>
        </div>
        <img
          className={classes.FeaturedWorkImage}
          src='https://ik.imagekit.io/pyvwhvv76v/addbooks_6wJI1kxgU.webp'
          alt='https://ik.imagekit.io/pyvwhvv76v/addbooks_6wJI1kxgU.webp'
        />
        <div className={classes.FeaturedWorkNext}>
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
            <p className={classes.FeaturedWorkNavigation}>Previous project</p>
            <h3 className={classes.FeaturedWorkSubTitle}>Generic Hipster Coffee</h3>
          </div>
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
            <p className={classes.FeaturedWorkNavigation}>Next project</p>
            <h3 className={classes.FeaturedWorkSubTitle}>Carbon Footprint Calculator</h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FooNetflixBar;
