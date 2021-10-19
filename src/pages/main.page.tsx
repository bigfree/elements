import React, { FC } from "react";
import { Box } from "@mui/material";
import TopArtist from "../components/topArtist";
import { Route } from "react-router-dom";
import SidebarPage from "./sidebar.page";
import { RouteComponentProps } from "react-router";

/**
 * Main Page
 * @returns {JSX.Element}
 * @constructor
 */
const MainPage: FC<RouteComponentProps> = ({ match }: RouteComponentProps): JSX.Element => {
    console.log(`/:type/:id`)
    return (
        <React.Fragment>
            <Box
                sx={{
                    position: 'relative',
                    flexGrow: 1,
                    overflow: 'auto',
                    minWidth: '1px',
                    flexDirection: 'row',
                }}
            >
                <TopArtist/>
            </Box>
            <Route
                path={`/:type/:id`}
                render={(routeProps) => <SidebarPage routeProps={routeProps}/>}
            />
        </React.Fragment>
    )
}

export default MainPage