import { Typography } from "@mui/material";

const AuthorBadge = () => {
    const telegramLink = "https://t.me/tigrgareev";

    return (
        <Typography
            component="p"
            variant="caption"
            sx={{
                position: "absolute",
                bottom: 12,
                left: "50%",
                transform: "translateX(-50%)",
                color: "text.secondary",
                whiteSpace: "nowrap",
            }}
        >
            Made by{" "}
            <Typography
                component="a"
                href={telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                variant="inherit"
                sx={{
                    color: "primary.main",
                    textDecoration: "none",
                    fontWeight: 600,
                    transition: "color 0.2s ease",
                    "&:hover": {
                        textDecoration: "underline",
                    },
                }}
            >
                @tigrgareev
            </Typography>
        </Typography>
    );
};

export default AuthorBadge;
