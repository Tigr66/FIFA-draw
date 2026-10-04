import type { ReactNode } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import SportsSoccerRoundedIcon from "@mui/icons-material/SportsSoccerRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { appRoutes } from "@/routes/app-routes";

interface HeaderProps {
    action?: ReactNode;
    showBackButton?: boolean;
    backTo?: string;
    tagline?: string;
}

const Header = ({ action, showBackButton, backTo, tagline }: HeaderProps) => {
    return (
        <Box
            component="header"
            sx={{
                minHeight: 76,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #dce4da",
                mx: 4,
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
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: { xs: 0, lg: 3 },
                    }}
                >
                    {action}

                    {showBackButton && (
                        <Button
                            component={RouterLink}
                            to={backTo ? backTo : appRoutes.HOME_PAGE}
                            variant="outlined"
                            size="small"
                            startIcon={<ArrowBackRoundedIcon />}
                            sx={{
                                minHeight: 40,
                                px: { xs: 1, sm: 1.5 },
                                fontSize: { xs: 12, sm: 14 },
                                whiteSpace: "nowrap",
                            }}
                        >
                            На главную
                        </Button>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default Header;
