import { Box, Paper, TextField } from "@mui/material";

type PlayerFormData = {
    name: string;
    setName: (value: string) => void;
    isMissing: boolean;
};

interface PlayersFormProps {
    playerOne: PlayerFormData;
    playerTwo: PlayerFormData;
}

const PlayersForm = ({ playerOne, playerTwo }: PlayersFormProps) => {
    return (
        <Paper
            className="slide-down"
            component="section"
            sx={{
                p: { xs: 2, sm: 3 },
                mb: 3,
            }}
        >
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "minmax(0, 1fr)",
                        sm: "repeat(2, minmax(0, 1fr))",
                    },
                    gap: 2,
                }}
            >
                <TextField
                    label="Игрок 1"
                    value={playerOne.name}
                    onChange={(event) => playerOne.setName(event.target.value)}
                    error={playerOne.isMissing}
                    helperText={playerOne.isMissing ? "Введи имя игрока" : " "}
                    fullWidth
                    slotProps={{
                        htmlInput: { maxLength: 30 },
                    }}
                />

                <TextField
                    label="Игрок 2"
                    value={playerTwo.name}
                    onChange={(event) => playerTwo.setName(event.target.value)}
                    error={playerTwo.isMissing}
                    helperText={playerTwo.isMissing ? "Введи имя игрока" : " "}
                    fullWidth
                    slotProps={{
                        htmlInput: { maxLength: 30 },
                    }}
                />
            </Box>
        </Paper>
    );
};

export default PlayersForm;
