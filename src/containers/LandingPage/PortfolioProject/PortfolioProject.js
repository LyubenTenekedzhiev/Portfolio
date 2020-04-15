import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import classes from "./PortfolioProject.module.css";
import Button from "../../../components/UI/Button/Button";

function PortfolioProject({ image, title, description, url }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className={classes.PortfolioProject} data-aos='fade-up' data-aos-anchor-placement='center-bottom'>
      <figure className={classes.PortfolioProjectFigure}>
        <img className={classes.PortfolioProjectImage} src={image} alt={title} />
      </figure>{" "}
      <div className={classes.PortfolioProjectDescription}>
        <h1 className={classes.PortfolioProjectDescriptionTitle}>{title}</h1>
        <h3 className={classes.PortfolioProjectDescriptionText}>
          {description}
        </h3>
        <NavLink to={{ pathname: "/" + url }} style={{ textDecoration: "none" }}>
          <Button>See more</Button>
        </NavLink>
      </div>
    </div>
  );
}

export default PortfolioProject;
