import type { MatchPlayer } from "@/types/series.types";
import { getTeamById } from "@/utils/get-team-by-id.util";
import { Box, Paper, Typography } from "@mui/material";

interface MatchResultProps {
    playerOne: MatchPlayer;
    playerTwo: MatchPlayer;
}

const MatchResult = ({ playerOne, playerTwo }: MatchResultProps) => {
    const teamOne = getTeamById(playerOne.teamId);
    const teamTwo = getTeamById(playerTwo.teamId);

    if (!teamOne || !teamTwo) {
        return null;
    }

    return (
        <Paper
            sx={{
                p: { xs: 2.25, sm: 3 },
            }}
        >
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto 1fr",
                    alignItems: "center",
                    gap: { xs: 1.5, sm: 3 },
                }}
            >
                {[teamOne, teamTwo].map((team) => (
                    <Box
                        key={team.id}
                        sx={{
                            minWidth: 0,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 1,
                        }}
                    >
                        <Box
                            component="img"
                            src={team.logo}
                            alt={team.name}
                            sx={{
                                width: { xs: 56, sm: 80 },
                                height: { xs: 56, sm: 80 },
                                objectFit: "contain",
                            }}
                        />

                        <Typography
                            sx={{
                                textAlign: "center",
                                color: "#173629",
                                fontSize: { xs: 13, sm: 16 },
                                fontWeight: 800,
                                overflowWrap: "anywhere",
                            }}
                        >
                            {team.name}
                        </Typography>
                    </Box>
                ))}

                <Typography
                    sx={{
                        gridColumn: 2,
                        gridRow: 1,
                        color: "#203b2e",
                        fontSize: { xs: 24, sm: 32 },
                        fontWeight: 900,
                        whiteSpace: "nowrap",
                        fontVariantNumeric: "tabular-nums",
                    }}
                >
                    {playerOne.score} : {playerTwo.score}
                </Typography>
            </Box>
        </Paper>
    );
};

export default MatchResult;
