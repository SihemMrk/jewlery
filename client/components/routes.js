import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";

import Bijoux from "./bijoux";

import Sacs from "./sacs";

import Chale from "./chale";

import HomePage from "./HomePage";

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={HomePage} />
        <Route path="/bijoux" component={Bijoux} />
        <Route path="/sacs" component={Sacs} />
        <Route path="/chales" component={Chale} />
      </Switch>
    );
  }
}

export default Routes;
