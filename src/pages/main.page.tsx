import React, { FC } from "react";
import { Box } from "@mui/material";
import TopArtist from "../components/topArtist";

/**
 * Main Page
 * @returns {JSX.Element}
 * @constructor
 */
const MainPage: FC = (): JSX.Element => {
    return (
        <Box
            sx={{
                flex: '1 1 auto',
                flexDirection: 'row'
            }}
        >
            <TopArtist/>
        </Box>
    )
}

export default MainPage