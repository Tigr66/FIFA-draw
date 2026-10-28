import { Stack, Typography } from "@mui/material";

interface PlayersLabelProps {
    playerOneName?: string;
    playerTwoName?: string;
}

const PlayersLabel = ({
    playerOneName = "Игрок 1",
    playerTwoName = "Игрок 2",
}: PlayersLabelProps) => {
    return (
        <Stack
            direction="row"
            sx={{
                justifyContent: "space-around",
                alignItems: "center",
                my: 1,
                mx: "auto",
                position: "sticky",
                top: 0,
                py: { xs: 1, sm: 2 },
                px: 2,
                bgcolor: "rgba(0, 0, 0, 0.8)",
                borderRadius: "16px 16px 0px 0px",
                color: "#fff",
                zIndex: 10,
            }}
        >
            <Typography variant="h5">{playerOneName}</Typography>
            <Typography variant="h5">vs</Typography>
            <Typography variant="h5">{playerTwoName}</Typography>
        </Stack>
    );
};

export default PlayersLabel;
