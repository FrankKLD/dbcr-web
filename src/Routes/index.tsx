import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AdminTemplate from "../templates/AdminTemplate";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={AdminTemplate} />
        <Route path="/collaborator" component={AdminTemplate} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
