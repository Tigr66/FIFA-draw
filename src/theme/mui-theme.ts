import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#174d38",
            dark: "#103d2c",
        },
        background: {
            default: "#f2f5ef",
            paper: "#fff",
        },
        text: {
            primary: "#172a22",
        },
    },
    components: {
        MuiPaper: {
            defaultProps: {
                elevation: 0,
            },
            styleOverrides: {
                root: {
                    border: "1px solid #dce5db",
                    borderRadius: 10,
                    backgroundColor: "#fff",
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    minHeight: 48,
                    borderRadius: 7,
                    fontWeight: 750,
                    textTransform: "none",
                    fontSize: 15,
                },
                contained: {
                    boxShadow: "none",
                    "&:hover": {
                        backgroundColor: "#103d2c",
                        boxShadow: "none",
                    },
                },
                outlined: {
                    borderColor: "#bfd0c3",
                    color: "#214b37",
                    "&:hover": {
                        borderColor: "#174d38",
                        backgroundColor: "#f6f8f3",
                    },
                },
            },
        },
    },
});
