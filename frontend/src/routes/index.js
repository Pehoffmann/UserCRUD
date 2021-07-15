import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import ListUsers from "../pages/ListUsers";
import Registro from "../pages/Register";
import User from "../pages/User";
import Update from "../pages/Update";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/users/edit/:id" component={Update} />
        <Route path="/users/add" component={Registro} />
        <Route path="/users/:id" component={User} />
        <Route path="/users" component={ListUsers} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;
