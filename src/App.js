import React from "react";
import "./static/scss/app.scss";
import "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Header from "./components/presentation/header";
import GettingStarted from "./components/presentation/gettingStarted";
import Contacts from "./components/presentation/contact";
import Education from "./components/presentation/education";
import Skills from "./components/presentation/skills";
import Projects from "./components/presentation/projects";
import Additional from "./components/presentation/additional";
import Finalize from "./components/presentation/finalizePage";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <PrivateRoute path="/additional" component={Additional}></PrivateRoute>
        <PrivateRoute path="/projects" component={Projects}></PrivateRoute>
        <PrivateRoute path="/skills" component={Skills}></PrivateRoute>
        <PrivateRoute path="/education" component={Education}></PrivateRoute>
        <PrivateRoute path="/contact" component={Contacts}></PrivateRoute>
        <PrivateRoute
          path="/"
          component={GettingStarted}
        ></PrivateRoute>
        <PrivateRoute
          path="/resume-templates"
          component={GettingStarted}
        ></PrivateRoute>
        <PrivateRoute path="/finalize" component={Finalize}></PrivateRoute>
      </Switch>
    </div>
  );
}
export default App;
