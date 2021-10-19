import { FC } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Box } from "@mui/material";

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
    console.log(routeProps);
    return (
        <Box
            sx={{
                flexGrow: 0,
                flexBasis: '550px',
                width: '550px',
                alignItems: 'stretch',
                display: 'flex',
                borderLeft: 1,
                borderColor: 'grey.900',
                ml: 2
            }}
        >test</Box>
    )
}
export default SidebarPage