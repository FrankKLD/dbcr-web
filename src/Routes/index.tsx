import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AdminTemplate from "../views/AdminTemplate";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" exact component={AdminTemplate} />
        <Route path="/collaborator" exact component={AdminTemplate} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
