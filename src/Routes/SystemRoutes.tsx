import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "../views/HomePage";
import NewTagPage from "../views/NewTagPage";
import SearchPage from "../views/SearchPage";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/new-tag" component={NewTagPage} />
    </Switch>
  );
};

export default Routes;
