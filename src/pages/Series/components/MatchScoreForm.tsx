import { NumberSpinner } from "@/components/NumberSpinner";
import { Box, Button } from "@mui/material";
import type { RefObject } from "react";

type MatchScorePlayer = {
    name?: string;
    goals: number;
    setScore: (value: number) => void;
};

interface MatchScoreFormProps {
    playerOne: MatchScorePlayer;
    playerTwo: MatchScorePlayer;
    onSave: () => void;
    saveResultRef: RefObject<HTMLDivElement | null>;
}

const MatchScoreForm = ({
    playerOne,
    playerTwo,
    onSave,
    saveResultRef,
}: MatchScoreFormProps) => {
    return (
        <Box
            className="slide-up"
            ref={saveResultRef}
            sx={{
                display: "grid",
                gridTemplateColumns: {
                    xs: "1fr",
                    sm: "1fr 1fr",
                },
                gap: 2,
            }}
        >
            <NumberSpinner
                label={`Голы игрока ${playerOne.name}`}
                value={playerOne.goals}
                onValueChange={(value) => playerOne.setScore(value ?? 0)}
                min={0}
                max={100}
            />

            <NumberSpinner
                label={`Голы игрока ${playerTwo.name}`}
                value={playerTwo.goals}
                onValueChange={(value) => playerTwo.setScore(value ?? 0)}
                min={0}
                max={100}
            />

            <Box
                sx={{
                    maxWidth: 440,
                    mx: "auto",
                    gridColumn: {
                        xs: "auto",
                        sm: "1 / -1",
                    },
                    width: "100%",
                }}
            >
                <Button
                    onClick={onSave}
                    variant="contained"
                    fullWidth
                    sx={{
                        minHeight: { xs: 52, sm: 56 },
                        fontSize: { xs: 15, sm: 16 },
                    }}
                >
                    Сохранить результат
                </Button>
            </Box>
        </Box>
    );
};

export default MatchScoreForm;
