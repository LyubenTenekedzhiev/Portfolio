import React from "react";

import classes from "./PortfolioSection.module.css";
import PortfolioProject from "./../PortfolioProject/PortfolioProject";

function PortfolioSection() {
  const projects = [
    {
      image: "https://ik.imagekit.io/pyvwhvv76v/cfc_lfKc5ZZz7.webp",
      title: "Carbon Footprint Calculator",
      url: "calculator",
      description: "Let's estimate the emitted CO2 amount from your flights",
    },
    {
      image: "https://ik.imagekit.io/pyvwhvv76v/BurgerProject_ASXPRr9vk.PNG",
      title: "Burger Builder",
      url: "burger",
      description: "Psst... Hungry? Did you know about the new burger place around the corner?",
    },
    {
      image: "https://ik.imagekit.io/pyvwhvv76v/movies_mgTdbMr2K2.png",
      title: "FooNetflixBar",
      url: "movies",
      description: "The perfect copy of Netflix doesn't exi...",
    },
    {
      image: "https://ik.imagekit.io/pyvwhvv76v/packman_23_WvqNzQ1K.png",
      title: "Pacman",
      url: "pacman",
      description: "Follow me and experience the most relaxed version of the famous Pacman game",
    },
    {
      image: "https://ik.imagekit.io/pyvwhvv76v/Hipster_Pl9p6PJ6B.webp",
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
