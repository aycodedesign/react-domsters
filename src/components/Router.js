import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import NotFound from './NotFound' 

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            {/* the 'exact' above makes sure that any URL not with a forward slash will nav to NotFound page */}
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;

//Router gives us different files to load
