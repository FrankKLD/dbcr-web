import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "../views/HomePage";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin/" exact component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
