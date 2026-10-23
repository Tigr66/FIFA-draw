import { Header } from "@/components/Header";
import { PageWrapper } from "@/components/PageWrapper";
import { Box, Button } from "@mui/material";
import { TeamRoulette } from "@/components/TeamRoulette";
import { NumberSpinner } from "@/components/NumberSpinner";
import { MatchResult } from "./components";
import useSeries from "./hooks/useSeries";
import { Add, Flag } from "@mui/icons-material";

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
            <Box
                component="main"
                className="slide-up"
                sx={{
                    pt: { xs: 2, sm: 3, md: 4 },
                    px: { xs: 2, sm: 3, md: 4, lg: 5 },
                    pb: { xs: 3, sm: 4, md: 5 },
                }}
            >
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
                {!showNewMatch && (
                    <Box
                        className="slide-up"
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            gap: { xs: 1.5, sm: 2 },
                            mt: { xs: 3, sm: 4 },
                            flexWrap: "wrap",
                        }}
                    >
                        <Button
                            variant="outlined"
                            startIcon={<Add />}
                            sx={{
                                minHeight: { xs: 44, sm: 48 },
                                px: { xs: 2, sm: 3 },
                                borderRadius: 2,
                            }}
                        >
                            Новый матч
                        </Button>

                        <Button
                            variant="contained"
                            startIcon={<Flag />}
                            sx={{
                                minHeight: { xs: 44, sm: 48 },
                                px: { xs: 2, sm: 3 },
                                borderRadius: 2,
                            }}
                        >
                            Завершить серию
                        </Button>
                    </Box>
                )}
            </Box>
        </PageWrapper>
    );
};

export default SeriesPage;
