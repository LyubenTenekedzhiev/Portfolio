import React from "react";

import classes from "./PortfolioSection.module.css";
import CFCImage from "../../../assets/cfc.png";
import BurgerImage from "../../../assets/BurgerProject.PNG";
import MoviesImage from "../../../assets/movies.png";
import PacmanImage from "../../../assets/packman.png";
import HipsterCafe from "../../../assets/Hipster.png";
import PortfolioProject from "./../PortfolioProject/PortfolioProject";

function PortfolioSection() {
  const projects = [
    {
      image: CFCImage,
      title: "Carbon Footprint Calculator",
      url: "calculator",
      description: "Let's estimate the emitted CO2 amount from your flights",
    },
    {
      image: BurgerImage,
      title: "Burger Builder",
      url: "burger",
      description: "Psst... Hungry? Did you know about the new burger place around the corner?",
    },
    { image: MoviesImage, title: "FooNetflixBar", url: "movies", description: "The perfect copy of Netflix doesn't exi..." },
    {
      image: PacmanImage,
      title: "Pacman",
      url: "pacman",
      description: "Follow me and experience the most relaxed version of the famous Pacman game",
    },
    {
      image: HipsterCafe,
      title: "Generic Hipster Coffee",
      url: "coffee",
      description: "Are you a coffee lover? Look no further. Let's see what's on the menu!",
    },
  ];

  const featuredWork = projects.map((project, index) => {
    return <PortfolioProject key={index} image={project.image} title={project.title} description={project.description} url={project.url} />;
  });

  return (
    <div className={classes.PortfolioSection}>
      <h1 className={classes.PortfolioProjectWork} id='featuredWork'>
        Featured Work
      </h1>
      {featuredWork}
    </div>
  );
}

export default PortfolioSection;
