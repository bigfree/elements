import { FC } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Box } from "@mui/material";
import Artist from "../components/artist";

type TRouteParams = {
    type: string;
    id: string;
}

type TProps = {
    routeProps: RouteComponentProps<TRouteParams>;
}

/**
 * Sidebar page
 * @param {RouteComponentProps<TRouteParams>} routeProps
 * @returns {JSX.Element}
 * @constructor
 */
const SidebarPage: FC<TProps> = ({ routeProps }: TProps): JSX.Element => {
    return (
        <Box
            sx={{
                flexGrow: 0,
                flexBasis: 820,
                alignItems: 'stretch',
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'nowrap',
                borderLeft: 1,
                borderColor: 'grey.900',
                ml: 2,
            }}
        >
            <Artist routeProps={routeProps}/>
        </Box>
    )
}
export default SidebarPage