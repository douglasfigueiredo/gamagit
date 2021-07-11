import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Repositories from "./pages/Repositories";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/repositories" component={Repositories} />
      </Switch>
    </BrowserRouter>
  );
}
