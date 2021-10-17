import React, { FC } from 'react';
import './App.css';
import { Box, CssBaseline } from "@mui/material";
import Page from "./components/page";

/**
 * App component
 * @returns {JSX.Element}
 * @constructor
 */
const App: FC = (): JSX.Element => {
    // const { isLoading, data } = useQuery('search', fetchSearch)
    //
    // if (isLoading) {
    //     return <div>Loading..</div>
    // }

    return (
        <React.Fragment>
            <Box sx={{
                display: 'flex',
                flexFlow: 'column',
                flexWrap: 'nowrap',
                height: '100vh',
                width: '100vw'
            }}>
                <CssBaseline/>
                <Page/>
            </Box>
            {/*<h1>Ahoy Adam!</h1>*/}
            {/*{data?.artists?.items.map(((value: SpotifyApi.ArtistObjectFull, index: number) => {*/}
            {/*    return <div key={index}>{value.name}</div>*/}
            {/*}))}*/}
        </React.Fragment>
    );
}

export default App;
