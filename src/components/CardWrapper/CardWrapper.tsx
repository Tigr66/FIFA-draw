import { Paper, Typography } from "@mui/material";
import type { ReactNode } from "react";
import type { SxProps, Theme } from "@mui/material/styles";

interface CardWrapperProps {
    children: ReactNode;
    title?: string;
    sx?: SxProps<Theme>;
}

const CardWrapper = ({ children, title, sx }: CardWrapperProps) => {
    return (
        <Paper sx={sx}>
            {title && (
                <Typography
                    variant="body1"
                    sx={{
                        pb: 1,
                        mb: 2,
                        borderBottom: 1,
                        borderColor: "divider",
                    }}
                >
                    {title}
                </Typography>
            )}

            {children}
        </Paper>
    );
};

export default CardWrapper;
