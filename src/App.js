import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import LandingPage from "./containers/LandingPage/LandingPage";
import AboutPage from "./containers/AboutPage/AboutPage";
import CarbonCalculator from "./containers/LandingPage/FeaturedWork/CarbonCalculator/CarbonCalculator";
import BurgerBuilder from "./containers/LandingPage/FeaturedWork/BurgerBuilder/BurgerBuilder";
import Movies from "./containers/LandingPage/FeaturedWork/Movies/Movies";
import Pacman from "./containers/LandingPage/FeaturedWork/Pacman/Pacman";
import HipsterCoffee from "./containers/LandingPage/FeaturedWork/HipsterCoffee/HipsterCoffee";
import ContactPage from './containers/ContactPage/ContactPage';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact component={LandingPage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/calculator' component={CarbonCalculator} />
        <Route path='/burger' component={BurgerBuilder} />
        <Route path='/movies' component={Movies} />
        <Route path='/pacman' component={Pacman} />
        <Route path='/coffee' component={HipsterCoffee} />
        <Route path='/contact' component={ContactPage} />
        <Redirect from='/' to='/' />
      </Switch>
    </div>
  );
}

export default App;
