import React from "react";

import { Switch, Route } from "react-router-dom";

import Browse from "../pages/browse";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Browse} />
        
        
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
