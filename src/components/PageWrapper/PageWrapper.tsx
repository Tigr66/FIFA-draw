import type { ReactNode } from "react";
import { Box } from "@mui/material";

interface PageWrapperProps {
    children: ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
    return (
        <Box
            sx={{
                minHeight: "100svh",
                bgcolor: "background.default",
                color: "text.primary",
                position: "relative",
            }}
        >
            {children}
        </Box>
    );
};

export default PageWrapper;
