import { Box, Button, Paper, Typography } from "@mui/material";
import type { ButtonProps } from "@mui/material";
import type { ReactNode } from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

interface GameCardProps {
    gameIcon: ReactNode;
    gameTitle: string;
    gameDescription: string;
    buttonText: string;
    iconBgColor?: string;
    buttonVariant?: ButtonProps["variant"];
    onStart: () => void;
}

const GameCard = ({
    gameIcon,
    gameTitle,
    gameDescription,
    buttonText,
    iconBgColor,
    buttonVariant,
    onStart,
}: GameCardProps) => {
    return (
        <Paper
            sx={{
                p: { xs: 2.25, sm: 3 },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    mb: 1.5,
                }}
            >
                <Box
                    sx={{
                        width: 40,
                        height: 40,
                        display: "grid",
                        placeItems: "center",
                        borderRadius: "9px",
                        bgcolor: iconBgColor || "#eaf2e6",
                    }}
                >
                    {gameIcon}
                </Box>
                <Typography
                    component="h3"
                    sx={{
                        fontSize: 19,
                        fontWeight: 800,
                        letterSpacing: 0,
                        color: "#203b2e",
                    }}
                >
                    {gameTitle}
                </Typography>
            </Box>
            <Typography
                sx={{
                    minHeight: { xs: 0, sm: 48 },
                    color: "#6b7b72",
                    fontSize: 14,
                    lineHeight: 1.6,
                    mb: 2.5,
                }}
            >
                {gameDescription}
            </Typography>

            <Button
                onClick={onStart}
                variant={buttonVariant ?? "contained"}
                endIcon={<ArrowForwardRoundedIcon />}
                fullWidth
            >
                {buttonText}
            </Button>
        </Paper>
    );
};

export default GameCard;
