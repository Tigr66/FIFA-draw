import { Header } from "@/components/Header";
import { PageWrapper } from "@/components/PageWrapper";
import { Box, Button, Stack } from "@mui/material";
import { TeamRoulette } from "@/components/TeamRoulette";
import { MatchResult, MatchScoreForm, SeriesActions } from "./components";
import { Add, Flag } from "@mui/icons-material";
import useSeries from "./hooks/useSeries";

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
        addNewMatch,
        newMatchRef,
        saveResultRef,
    } = useSeries();

    return (
        <PageWrapper>
            <Header showBackButton />
            <Box
                component="main"
                sx={{
                    pt: { xs: 2, sm: 3, md: 4 },
                    px: { xs: 2, sm: 3, md: 4, lg: 5 },
                    pb: { xs: 3, sm: 4, md: 5 },
                }}
            >
                <Stack
                    spacing={2}
                    sx={{
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {series?.matches.map((match, index) => (
                        <MatchResult
                            key={`${index}-${match.playerOne.teamId}-${match.playerTwo.teamId}`}
                            playerOne={match.playerOne}
                            playerTwo={match.playerTwo}
                        />
                    ))}
                </Stack>

                {showNewMatch && (
                    <Box sx={{ width: "80%", mt: 2, mx: "auto" }}>
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
                            <MatchScoreForm
                                playerOne={{
                                    name: series?.playerOne,
                                    goals: playerOneGoals,
                                    setScore: setPlayerOneGoals,
                                }}
                                playerTwo={{
                                    name: series?.playerTwo,
                                    goals: playerTwoGoals,
                                    setScore: setPlayerTwoGoals,
                                }}
                                saveResultRef={saveResultRef}
                                onSave={saveResult}
                            />
                        )}
                    </Box>
                )}

                {!showNewMatch && (
                    <SeriesActions
                        onAddMatch={addNewMatch}
                        onFinishSeries={() => {}}
                    />
                )}
            </Box>
        </PageWrapper>
    );
};

export default SeriesPage;
