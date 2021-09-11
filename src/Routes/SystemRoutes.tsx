import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "../views/HomePage";
import SearchPage from "../views/SearchPage";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/search" component={SearchPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
