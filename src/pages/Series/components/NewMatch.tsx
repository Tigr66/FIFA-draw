import { TeamRoulette } from "@/components/TeamRoulette";
import { Box, Button } from "@mui/material";
import type { RoulettePhase, TeamPair } from "@/types/roulette.types";
import type { RefObject } from "react";
import type { PlayerNames } from "@/types/game.types";

interface NewMatchProps {
    newMatchRef: RefObject<HTMLDivElement | null>;
    teamPair: TeamPair | null;
    hasResult: boolean;
    isRolling: boolean;
    phase: RoulettePhase;
    onSpin: () => void;
    buttonLabel: string;
    players: PlayerNames;
}

const NewMatch = ({
    newMatchRef,
    teamPair,
    hasResult,
    isRolling,
    phase,
    onSpin,
    buttonLabel,
    players,
}: NewMatchProps) => {
    return (
        <>
            <Box
                ref={newMatchRef}
                className="slide-up"
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "minmax(0, 1fr)",
                        md: "repeat(2, minmax(0, 1fr))",
                    },
                    gap: { xs: 2, sm: 2.5, md: 3 },
                    mb: { xs: 2.5, sm: 3 },
                    mx: "auto",
                }}
            >
                <TeamRoulette
                    playerName={players.playerOne}
                    team={teamPair?.first || null}
                    hasResult={hasResult}
                    isRolling={isRolling}
                    phase={phase}
                />

                <TeamRoulette
                    playerName={players.playerTwo}
                    team={teamPair?.second || null}
                    hasResult={hasResult}
                    isRolling={isRolling}
                    phase={phase}
                />
            </Box>

            {!hasResult && (
                <Box sx={{ maxWidth: 440, mx: "auto" }}>
                    <Button
                        onClick={onSpin}
                        variant="contained"
                        fullWidth
                        disabled={phase !== "empty"}
                        sx={{
                            minHeight: { xs: 52, sm: 56 },
                            fontSize: { xs: 15, sm: 16 },
                        }}
                    >
                        {buttonLabel}
                    </Button>
                </Box>
            )}
        </>
    );
};

export default NewMatch;
