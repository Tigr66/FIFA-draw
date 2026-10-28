import { Stack, Typography } from "@mui/material";
import { CardWrapper } from "@/components/CardWrapper";
import type { PlayerGoals, PlayerNames } from "@/types/game.types";

interface SeriesScoreCardProps {
    players: PlayerNames;
    goals: PlayerGoals;
}

const SeriesScoreCard = ({ players, goals }: SeriesScoreCardProps) => {
    return (
        <CardWrapper title="Общий счёт серии" sx={{ p: 2 }}>
            <Stack
                direction="row"
                spacing={2}
                sx={{
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography
                    variant="body1"
                    sx={{
                        flex: 1,
                        fontWeight: 600,
                        textAlign: "right",
                    }}
                >
                    {players.playerOne}
                </Typography>

                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 700,
                        whiteSpace: "nowrap",
                    }}
                >
                    {goals.playerOne} : {goals.playerTwo}
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        flex: 1,
                        fontWeight: 600,
                        textAlign: "left",
                    }}
                >
                    {players.playerTwo}
                </Typography>
            </Stack>
        </CardWrapper>
    );
};

export default SeriesScoreCard;
