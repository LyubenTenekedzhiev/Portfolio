import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./PortfolioProject.module.css";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

function PortfolioProject({ image, title, description, url }) {
  return (
    <div className={classes.PortfolioProject}>
      <figure className={classes.PortfolioProjectFigure}>
        <img className={classes.PortfolioProjectImage} src={image} alt={title} />
      </figure>
      <NavLink to={{ pathname: "/" + url }} className={classes.PortfolioProjectDescription}>
        {" "}
        <h1 className={classes.PortfolioProjectDescriptionTitle}>{title}</h1>
        <h3 className={classes.PortfolioProjectDescriptionText}>
          {description}
          <ArrowRightAltIcon style={{ fontSize: "2rem", verticalAlign: "middle", transform: "translateX(6px)" }} />
        </h3>
      </NavLink>
    </div>
  );
}

export default PortfolioProject;
