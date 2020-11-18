import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';

import Login from './pages/login';
import Home from './pages/home';


const PrivateRoute = ({ component: Component, ...rest }) => {
    const { loggedIn } = useSelector((state) => state.auth);

    return (
        <Route {...rest} render={(props) => loggedIn ?
            <Component {...props} /> :
            <Redirect push to="/" />} />
    );
}

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <Login />} />
            <PrivateRoute path="/app" component={() => <Home />} />
        </Switch>
    </BrowserRouter>
);

export default Routes;