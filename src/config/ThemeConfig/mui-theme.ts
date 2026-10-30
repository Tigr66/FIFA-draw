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
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    scrollbarWidth: "thin",
                    scrollbarColor: "#9db3a5 #f2f5ef",
                },

                "html::-webkit-scrollbar": {
                    width: 8,
                },

                "html::-webkit-scrollbar-track": {
                    background: "#f2f5ef",
                },

                "html::-webkit-scrollbar-thumb": {
                    backgroundColor: "#9db3a5",
                    borderRadius: 8,
                    border: "2px solid #f2f5ef",
                },

                "html::-webkit-scrollbar-thumb:hover": {
                    backgroundColor: "#174d38",
                },
            },
        },
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
