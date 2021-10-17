import { createTheme, darkScrollbar } from "@mui/material";
import { blue, yellow } from "@mui/material/colors";

/**
 * Create theme palette
 * @type {Theme}
 */
let theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: blue["A400"]
        },
        secondary: {
            main: yellow["A700"]
        }
    },
});

/**
 * Edit components global theme
 * @type {Theme}
 */
theme = createTheme(theme, {
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: theme.palette.mode === 'dark' ? darkScrollbar() : null,
            },
        },
    },
});
export default theme