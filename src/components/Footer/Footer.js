import React, { useState } from "react";

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

  return (
    <div className={classes.Footer}>
      <h3>&#169; 2020 Lyub T.</h3>
      <div className={classes.FooterSocial}>
        <a href='https://linkedin.com/in/lyuben-tenekedzhiev' target='blank' style={{ color: "inherit" }}>
          <LinkedInIcon style={{ fontSize: "2rem", cursor: "pointer" }} />
        </a>
        <a href='https://github.com/LyubenTenekedzhiev' target='blank' style={{ color: "inherit" }}>
          <GitHubIcon style={{ fontSize: "2rem", cursor: "pointer" }} />
        </a>
        <FacebookIcon style={{ fontSize: "2rem", cursor: "pointer" }} onClick={handleClick} />
      </div>
      <CustomizedSnackbar opened={open} closed={handleClose} />
    </div>
  );
}

export default Footer;
