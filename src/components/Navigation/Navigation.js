import React, { useEffect, useState, useCallback } from "react";
import { NavLink } from "react-router-dom";

import classes from "./Navigation.module.css";
import SideDrawer from "../UI/SideDrawer/SideDrawer";

function Navigation() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const scrollToPortfolio = () => {
    document.getElementById("featuredWork").scrollIntoView({ behavior: "smooth", inline: "nearest" });
  };

  const updateWindowDimensions = useCallback(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateWindowDimensions);
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, [updateWindowDimensions]);
  
  return (
    <div className={classes.Navigation}>
      {window.location.href === "http://localhost:3000/calculator" ? (
        <>
          <NavLink className={classes.NavigationLink} to='/'>
            Home
          </NavLink>
          <NavLink className={classes.NavigationLink} to='/burger'>
            Burger Builder
          </NavLink>
        </>
      ) : window.location.href === "http://localhost:3000/burger" ? (
        <>
          <NavLink className={classes.NavigationLink} to='/'>
            Home
          </NavLink>
          <NavLink className={classes.NavigationLink} to='/movies'>
            FooNetflixBar
          </NavLink>
        </>
      ) : window.location.href === "http://localhost:3000/movies" ? (
        <>
          <NavLink className={classes.NavigationLink} to='/'>
            Home
          </NavLink>
          <NavLink className={classes.NavigationLink} to='/pacman'>
            Pacman
          </NavLink>
        </>
      ) : window.location.href === "http://localhost:3000/pacman" ? (
        <>
          <NavLink className={classes.NavigationLink} to='/'>
            Home
          </NavLink>
          <NavLink className={classes.NavigationLink} to='/coffee'>
            Generic Hipster Coffee
          </NavLink>
        </>
      ) : window.location.href === "http://localhost:3000/coffee" ? (
        <>
          <NavLink className={classes.NavigationLink} to='/'>
            Home
          </NavLink>
          <NavLink className={classes.NavigationLink} to='/calculator'>
            Carbon Footprint Calculator
          </NavLink>
        </>
      ) : window.location.href === "http://localhost:3000/about" ? (
        <>
          <NavLink className={classes.NavigationLink} to='/'>
            Home
          </NavLink>
          <NavLink className={classes.NavigationLink} to='/calculator'>
            Contact
          </NavLink>
        </>
      ) : screenWidth <= 485 ? (
        <div className={classes.Navigation}>
          <NavLink className={classes.NavigationLink} to='/'>
            Lyuben Tenekedzhiev
          </NavLink>
          <SideDrawer scrollToPortfolio={scrollToPortfolio} />
        </div>
      ) : (
        <>
          <NavLink className={classes.NavigationLink} to='/'>
            Lyuben Tenekedzhiev
          </NavLink>
          <div className={classes.NavigationLinks}>
            <p className={classes.NavigationLink} onClick={scrollToPortfolio}>
              Portfolio
            </p>
            <NavLink className={classes.NavigationLink} to='/about'>
              About
            </NavLink>
            <NavLink className={classes.NavigationLink} to='/home'>
              Contact
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
}

export default Navigation;
