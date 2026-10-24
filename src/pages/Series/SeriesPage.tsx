import { Header } from "@/components/Header";
import { PageWrapper } from "@/components/PageWrapper";
import { Box, Stack } from "@mui/material";
import {
    MatchResult,
    MatchScoreForm,
    NewMatch,
    SeriesActions,
} from "./components";
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
                        <NewMatch
                            hasResult={hasResult}
                            isRolling={isRolling}
                            onSpin={autoSpining}
                            phase={phase}
                            teamPair={teamPair}
                            newMatchRef={newMatchRef}
                            buttonLabel={buttonLabel}
                        />

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
