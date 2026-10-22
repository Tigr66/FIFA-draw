import { Header } from "@/components/Header";
import { PageWrapper } from "@/components/PageWrapper";
import { Box, Button } from "@mui/material";
import { TeamRoulette } from "@/components/TeamRoulette";
import useSeries from "./hooks/useSeries";
import { NumberSpinner } from "@/components/NumberSpinner";
import { MatchResult } from "./components";

const SeriesPage = () => {
    const {
        series,
        buttonLabel,
        hasResult,
        isRolling,
        autoSpining,
        teamPair,
        showNewMatch,
        phase,
        playerOneGoals,
        playerTwoGoals,
        setPlayerOneGoals,
        setPlayerTwoGoals,
        saveResult,
    } = useSeries();

    return (
        <PageWrapper>
            <Header showBackButton />
            <Box component="main" sx={{ pt: 2 }}>
                {series?.matches.map((match) => (
                    <MatchResult
                        playerOne={match.playerOne}
                        playerTwo={match.playerTwo}
                    />
                ))}
                
                {showNewMatch && (
                    <>
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: {
                                    xs: "minmax(0, 1fr)",
                                    md: "repeat(2, minmax(0, 1fr))",
                                },
                                gap: { xs: 2, sm: 2.5, md: 3 },
                                mb: { xs: 2.5, sm: 3 },
                            }}
                        >
                            <TeamRoulette
                                team={teamPair?.first || null}
                                hasResult={hasResult}
                                isRolling={isRolling}
                                phase={phase}
                            />

                            <TeamRoulette
                                team={teamPair?.second || null}
                                hasResult={hasResult}
                                isRolling={isRolling}
                                phase={phase}
                            />
                        </Box>

                        {!hasResult && (
                            <Box sx={{ maxWidth: 440, mx: "auto" }}>
                                <Button
                                    onClick={autoSpining}
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

                        {hasResult && (
                            <Box
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
                                    label={`Голы игрока ${series?.playerOne}`}
                                    value={playerOneGoals}
                                    onValueChange={(value) =>
                                        setPlayerOneGoals(value ?? 0)
                                    }
                                    min={0}
                                    max={100}
                                />

                                <NumberSpinner
                                    label={`Голы игрока ${series?.playerTwo}`}
                                    value={playerTwoGoals}
                                    onValueChange={(value) =>
                                        setPlayerTwoGoals(value ?? 0)
                                    }
                                    min={0}
                                    max={100}
                                />

                                <Box sx={{ maxWidth: 440, mx: "auto" }}>
                                    <Button
                                        onClick={saveResult}
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
                        )}
                    </>
                )}
            </Box>
        </PageWrapper>
    );
};

export default SeriesPage;
