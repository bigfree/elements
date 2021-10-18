import React, { FC } from "react";
import { useQuery } from "react-query";
import { fetchMe } from "../client/me";
import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material";
import User from "./user";

/**
 * Header component
 * @returns {JSX.Element}
 * @constructor
 */
const Header: FC = (): JSX.Element => {
    const { data, status } = useQuery('me', fetchMe);

    return (
        <Box sx={{ width: '100vw' }}>
            <AppBar position={'relative'}>
                <Toolbar>
                    <Avatar alt="Spotify" src="/spotify-logo.png"/>
                    <Typography
                        variant={'h6'}
                        component={'div'}
                        sx={{ flexGrow: 1, ml: 2 }}
                    >
                        Spotify finder
                    </Typography>
                    <User data={data} status={status}/>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;