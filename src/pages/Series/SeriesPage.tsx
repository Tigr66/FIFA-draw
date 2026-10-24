import { Header } from "@/components/Header";
import { PageWrapper } from "@/components/PageWrapper";
import { Box, IconButton, Stack, Tooltip } from "@mui/material";
import {
    MatchResult,
    MatchScoreForm,
    NewMatch,
    PlayersLabel,
    SeriesActions,
} from "./components";
import CloseIcon from "@mui/icons-material/Close";
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
        showCloseMatch,
        phase,
        playerOneGoals,
        playerTwoGoals,
        setPlayerOneGoals,
        setPlayerTwoGoals,
        saveResult,
        addNewMatch,
        closeNewMatch,
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
                <PlayersLabel
                    playerOneName={series?.playerOne}
                    playerTwoName={series?.playerTwo}
                />
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
                    <Box
                        sx={{
                            width: "90%",
                            mt: 2,
                            mx: "auto",
                            pt: 5,
                            px: {
                                xs: 0,
                                sm: 4,
                            },
                            position: "relative",
                        }}
                    >
                        {showCloseMatch && (
                            <Tooltip
                                placement="top"
                                title="Отменить новый матч"
                            >
                                <IconButton
                                    aria-label="Отменить новый матч"
                                    onClick={closeNewMatch}
                                    sx={{
                                        position: "absolute",
                                        top: 0,
                                        right: 0,
                                    }}
                                >
                                    <CloseIcon />
                                </IconButton>
                            </Tooltip>
                        )}

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
