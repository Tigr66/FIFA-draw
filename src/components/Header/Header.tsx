import type { ReactNode } from "react";
import SportsSoccerRoundedIcon from "@mui/icons-material/SportsSoccerRounded";
import { Box, Typography } from "@mui/material";

interface HeaderProps {
    action: ReactNode;
    tagline?: string;
}

const Header = ({ action, tagline }: HeaderProps) => {
    return (
        <Box
            component="header"
            sx={{
                minHeight: 76,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #dce4da",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.25,
                }}
            >
                <Box
                    sx={{
                        width: 36,
                        height: 36,
                        display: "grid",
                        placeItems: "center",
                        bgcolor: "primary.main",
                        color: "#d9f06b",
                        borderRadius: "10px",
                    }}
                >
                    <SportsSoccerRoundedIcon fontSize="small" />
                </Box>
                <Typography
                    sx={{
                        fontWeight: 800,
                        fontSize: 16,
                        letterSpacing: 0,
                    }}
                >
                    FIFA{" "}
                    <Box
                        component="span"
                        sx={{ color: "#648071", fontWeight: 500 }}
                    >
                        DRAW
                    </Box>
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: { xs: 0, lg: 3 },
                }}
            >
                {tagline && (
                    <Typography
                        sx={{
                            display: { xs: "none", lg: "block" },
                            color: "#64766c",
                            fontSize: 13,
                            fontWeight: 600,
                        }}
                    >
                        {tagline}
                    </Typography>
                )}
                {action}
            </Box>
        </Box>
    );
};

export default Header;
