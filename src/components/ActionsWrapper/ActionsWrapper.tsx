import { Stack } from "@mui/material";
import type { ReactNode } from "react";

interface ActionsWrapperProps {
    children: ReactNode;
}

const ActionsWrapper = ({ children }: ActionsWrapperProps) => {
    return (
        <Stack
            className="slide-up"
            spacing={{ xs: 1.5, sm: 2 }}
            direction={{ xs: "column", sm: "row" }}
            sx={{
                justifyContent: "center",
                mt: { xs: 3, sm: 4 },
                width: "90%",
                maxWidth: 1440,
                mx: "auto",
            }}
        >
            {children}
        </Stack>
    );
};

export default ActionsWrapper;
