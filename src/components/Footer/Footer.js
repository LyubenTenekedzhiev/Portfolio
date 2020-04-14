import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import classes from "./Footer.module.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import CustomizedSnackbar from "./../UI/Snackbar/Snackbar";

function Footer() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const scrollToPortfolio = () => {
    document.getElementById("featuredWork").scrollIntoView({ behavior: "smooth", inline: "nearest" });
  };

  const scrollToTop = () => {
    document.getElementById("home").scrollIntoView({ behavior: "smooth", inline: "nearest" });
  };

  return (
    <div className={classes.Footer}>
      <h2 className={classes.FooterTitle}>Let me build the website you need!</h2>
      <div className={classes.FooterNav}>
        {window.location.href !== "http://localhost:3000/" ? (
          <>
            <NavLink to='/' className={classes.FooterNavLink}>
              Home
            </NavLink>
            <NavLink to='/' className={classes.FooterNavLink}>
              Portfolio
            </NavLink>
          </>
        ) : (
          <>
            {" "}
            <p className={classes.FooterNavLink} onClick={scrollToTop}>
              Home
            </p>
            <p className={classes.FooterNavLink} onClick={scrollToPortfolio}>
              Portfolio
            </p>
          </>
        )}
        <NavLink to='/about' className={classes.FooterNavLink}>
          About
        </NavLink>
        <NavLink to='/contact' className={classes.FooterNavLink}>
          Contact
        </NavLink>
      </div>
      <div className={classes.FooterIcons}>
        <h3 style={{ fontSize: "inherit" }}>&#169; 2020 Lyub T.</h3>
        <div className={classes.FooterSocial}>
          <a href='https://linkedin.com/in/lyuben-tenekedzhiev' target='blank' style={{ color: "inherit" }}>
            <LinkedInIcon style={{ fontSize: "inherit", cursor: "pointer" }} />
          </a>
          <a href='https://github.com/LyubenTenekedzhiev' target='blank' style={{ color: "inherit" }}>
            <GitHubIcon style={{ fontSize: "inherit", cursor: "pointer" }} />
          </a>
          <FacebookIcon style={{ fontSize: "inherit", cursor: "pointer" }} onClick={handleClick} />
        </div>
        <CustomizedSnackbar opened={open} closed={handleClose} />
      </div>
    </div>
  );
}

export default Footer;
