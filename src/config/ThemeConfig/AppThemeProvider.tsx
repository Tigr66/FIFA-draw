import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./mui-theme";
import type { ReactNode } from "react";

interface AppThemeProviderProps {
    children: ReactNode;
}

const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

export default AppThemeProvider;
