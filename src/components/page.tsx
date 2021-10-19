import React, { FC } from "react";
import Header from "./header";
import { Box } from "@mui/material";
import MainPage from "../pages/main.page";
import { Route, Switch, useLocation } from "react-router-dom";
import { RouteProps } from "react-router";
import SignInPage from "../pages/signin.page";

const routes: RouteProps[] = [
    {
        path: '/signin',
        component: SignInPage,
        exact: true
    },
    {
        path: '/',
        component: MainPage,
        exact: false,
    },
];

/**
 * Page component
 * @returns {JSX.Element}
 * @constructor
 */
const Page: FC = (): JSX.Element => {
    const location = useLocation();
    return (
        <React.Fragment>
            <Header/>
            <Box sx={{
                display: 'flex',
                flexGrow: 1,
                flexDirection: 'row',
                flexWrap: 'nowrap',
                alignItems: 'stretch',
                width: '100vw',
                minHeight: '1px'
            }}>
                <Switch location={location}>
                    {routes.map((route: RouteProps, i: number) => (
                        <Route
                            key={i}
                            component={route.component}
                            path={route.path}
                            exact={route.exact}
                        />
                    ))}
                </Switch>
            </Box>
        </React.Fragment>
    )
}
export default Page