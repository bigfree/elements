import { FC, useEffect } from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import { loginProcess } from "../services/auth";
import { useHistory } from "react-router";

/**
 * SignIn Page
 * @returns {JSX.Element}
 * @constructor
 */
const SignInPage: FC = (): JSX.Element => {
    const history = useHistory();

    let isLogged = loginProcess(window.location.hash);

    useEffect(() => {
        history.push('/');
        // Todo: fetch in background without reload
        window.location.reload();
    }, [isLogged, history]);

    return (
        <Backdrop
            sx={{
                color: '#fff',
                zIndex: (theme) => theme.zIndex.drawer + 1
            }}
            open={true}
        >
            <CircularProgress color="inherit"/>
        </Backdrop>
    )
}
export default SignInPage