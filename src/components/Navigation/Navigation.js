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
    <div className={classes.Navigation} id='home'>
      {screenWidth <= 485 ? (
        <div className={classes.Navigation}>
          <NavLink className={classes.NavigationLink} to='/'>
            Lyuben Tenekedzhiev
          </NavLink>
          <SideDrawer />
        </div>
      ) : (
        <>
          <NavLink className={classes.NavigationLink} to='/'>
            Lyuben Tenekedzhiev
          </NavLink>
          <div className={classes.NavigationLinks}>
            {window.location.href === "https://lyubentenekedzhiev.web.app/contact" ||
            window.location.href === "https://lyubentenekedzhiev.web.app/about" ? (
              <NavLink to='/' className={classes.NavigationLink}>
                Portfolio
              </NavLink>
            ) : (
              <p className={classes.NavigationLink} onClick={scrollToPortfolio}>
                Portfolio
              </p>
            )}
            <NavLink className={classes.NavigationLink} to='/about'>
              About
            </NavLink>
            <NavLink className={classes.NavigationLink} to='/contact'>
              Contact
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
}

export default Navigation;
