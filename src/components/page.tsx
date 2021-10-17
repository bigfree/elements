import React, { FC } from "react";
import Header from "./header";
import { Box } from "@mui/material";
import MainPage from "../pages/main.page";
import { Route, Router, Switch } from "react-router-dom";
import { RouteProps } from "react-router";
import { createBrowserHistory } from 'history';
import SignInPage from "../pages/signin.page";

const history = createBrowserHistory();

const routes: RouteProps[] = [
    {
        path: '/',
        component: MainPage,
        exact: true
    },
    {
        path: '/signin',
        component: SignInPage,
    }
];

/**
 * Page component
 * @returns {JSX.Element}
 * @constructor
 */
const Page: FC = (): JSX.Element => {
    return (
        <React.Fragment>
            <Header/>
            <Box sx={{
                display: 'flex',
                flex: '1 1 100%',
                flexWrap: 'nowrap',
                width: '100vw',
            }}>
                <Router history={history}>
                    <Switch>
                        {routes.map((route: RouteProps, i: number) => (
                            <Route
                                key={i}
                                component={route.component}
                                path={route.path}
                                exact={route.exact}
                            />
                        ))}
                    </Switch>
                </Router>
            </Box>
        </React.Fragment>
    )
}
export default Page