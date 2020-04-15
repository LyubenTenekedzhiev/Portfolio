import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import LandingPage from "./containers/LandingPage/LandingPage";
import Spinner from "./components/UI/Spinner/Spinner";

const AboutPage = React.lazy(() => import("./containers/AboutPage/AboutPage"));
const CarbonCalculator = React.lazy(() => import("./containers/LandingPage/FeaturedWork/CarbonCalculator/CarbonCalculator"));
const BurgerBuilder = React.lazy(() => import("./containers/LandingPage/FeaturedWork/BurgerBuilder/BurgerBuilder"));
const Movies = React.lazy(() => import("./containers/LandingPage/FeaturedWork/Movies/Movies"));
const Pacman = React.lazy(() => import("./containers/LandingPage/FeaturedWork/Pacman/Pacman"));
const HipsterCoffee = React.lazy(() => import("./containers/LandingPage/FeaturedWork/HipsterCoffee/HipsterCoffee"));
const ContactPage = React.lazy(() => import("./containers/ContactPage/ContactPage"));

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact component={LandingPage} />
        <Route
          path='/about'
          render={() => (
            <Suspense
              fallback={
                <div style={{ textAlign: "center" }}>
                  <Spinner />
                </div>
              }
            >
              <AboutPage />
            </Suspense>
          )}
        />
        <Route
          path='/calculator'
          render={() => (
            <Suspense
              fallback={
                <div style={{ textAlign: "center" }}>
                  <Spinner />
                </div>
              }
            >
              <CarbonCalculator />
            </Suspense>
          )}
        />
        <Route
          path='/burger'
          render={() => (
            <Suspense
              fallback={
                <div style={{ textAlign: "center" }}>
                  <Spinner />
                </div>
              }
            >
              <BurgerBuilder />
            </Suspense>
          )}
        />
        <Route
          path='/movies'
          render={() => (
            <Suspense
              fallback={
                <div style={{ textAlign: "center" }}>
                  <Spinner />
                </div>
              }
            >
              <Movies />
            </Suspense>
          )}
        />
        <Route
          path='/pacman'
          render={() => (
            <Suspense
              fallback={
                <div style={{ textAlign: "center" }}>
                  <Spinner />
                </div>
              }
            >
              <Pacman />
            </Suspense>
          )}
        />
        <Route
          path='/coffee'
          render={() => (
            <Suspense
              fallback={
                <div style={{ textAlign: "center" }}>
                  <Spinner />
                </div>
              }
            >
              <HipsterCoffee />
            </Suspense>
          )}
        />
        <Route
          path='/contact'
          render={() => (
            <Suspense
              fallback={
                <div style={{ textAlign: "center" }}>
                  <Spinner />
                </div>
              }
            >
              <ContactPage />
            </Suspense>
          )}
        />
        <Redirect from='/' to='/' />
      </Switch>
    </div>
  );
}

export default App;
