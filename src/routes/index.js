import React from "react";

import { Switch, Route } from "react-router-dom";

import Browse from "../pages/browse";
import Movie from "../pages/movie";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Browse} />
        <Route path="/movie" component={Movie} />
        <Route
            path="/linkedin"
            component={() => {
                window.location = "https://www.linkedin.com/in/g-mantiqueira";
                return null;
            }}
        />
        />
    </Switch>
);

export default Routes;
