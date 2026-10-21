import { Header } from "@/components/Header";
import { PageWrapper } from "@/components/PageWrapper";
import { Box, Button } from "@mui/material";
import { TeamRoulette } from "@/components/TeamRoulette";
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
    } = useSeries();

    return (
        <PageWrapper>
            <Header showBackButton />
            <Box component="main" sx={{ pt: 2 }}>
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
                    </>
                )}
            </Box>
        </PageWrapper>
    );
};

export default SeriesPage;
